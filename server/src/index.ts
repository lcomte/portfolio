// src/index.ts
import express, { Express, Request, Response } from "express";
import cors from "cors"
import dotenv from "dotenv";
import { connectToDB } from "./config/mongoose";
import {Newsletter} from "./model/newsletter";
import {Contact} from "./model/contact";
import {sendEmail} from "./emailService/src/emailService";
import * as fs from "node:fs";
import {Project} from "./model/project"; // Import the mongoose configuration file



dotenv.config();

const app: Express = express();
app.use(express.json());

// Allow multiple origins for development and production
const allowedOrigins = [
    'https://lucascomte.com',
    'http://localhost:5173',
    'https://localhost:5173'
];

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        
        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', "PUT", "DELETE"],        // Allowed HTTP methods
    allowedHeaders: ['Content-Type'] // Allowed headers
}));


const port = process.env.PORT || 3000;
connectToDB()

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});


app.post('/newsletter/subscribe', async (req: Request, res: Response): Promise<any> => {
    const { email } = req.body;

    // Validate email
    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }

    try {
        // Create a new newsletter entry
        const newEntry = new Newsletter({ email });
        await newEntry.save();
        const unsubscribe: string = req.protocol + "://" + req.get("host") + "/unsubscribe/" + newEntry.id;
        const emailVariables = {
            unsubscribe_url: unsubscribe
        }
        const newsletterTemplate = fs.readFileSync('./src/emailService/template/newsletter-subscription.html', 'utf-8');
        await sendEmail({"to": email, "subject": "Thank you for subscribing to my newsletter", "template": newsletterTemplate, variables: emailVariables});
        // Respond with success
        res.status(201).json({ message: 'Email saved successfully' });
    } catch (error: any) {
        console.error('Error saving email:', error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/unsubscribe/:id', async (req:Request, res: Response): Promise<any> => {
    const { id } = req.params;

    try {
        // Find and delete the subscriber by ID
        const subscriber = await Newsletter.findByIdAndDelete(id);

        if (!subscriber) {
            return res.status(404).json({ message: 'Subscriber not found.' });
        }

        res.status(200).json({ message: 'You have successfully unsubscribed.' });
    } catch (error) {
        console.error('Error unsubscribing:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.get('/project', async  (req: Request, res: Response): Promise<any> => {
    res.send(await Project.find())
});

app.get('/project/display', async  (req: Request, res: Response): Promise<any> => {
    res.send(await Project.find({display: true}))
});


app.post('/project', async (req: Request, res: Response): Promise<any> => {
    const {title, description, image, tech, github, demo, display} = req.body;

    if (!title && !description && !tech && !demo && !display){
        return res.status(400).json({ message: 'More data are required' });
    }

    try {
        const newEntry = new Project({title, description, image, tech, github, demo, display});
        await newEntry.save();
        res.status(201).json({ message: "Project correctly saved"});

    }catch (error: any) {
        console.error('Error saving message:', error.message);
        res.status(500).json({ message: 'Internal server error' });
    }

});

app.post('/contact', async (req: Request, res: Response): Promise<any> =>{
    const {name, email, message} = req.body;

    try{
        if (!email) {
            return res.status(400).json({ message: 'Email is required' });
        }

        if (!name) {
            return res.status(400).json({ message: 'Name is required' });
        }

        const newEntry = new Contact({name, email, message});
        await newEntry.save();
        const emailVariables = {
            email,
            name,
            message
        }
        const newsletterTemplate = fs.readFileSync('./src/emailService/template/contact.html', 'utf-8');
        await sendEmail({"to": email, "subject": "New message", "template": newsletterTemplate, "variables": emailVariables});
        // Respond with success
        res.status(201).json({message: "Thank you for your message I will come back quickly to you"})
    } catch (error: any) {
        console.error('Error saving message:', error.message);
        res.status(500).json({ message: 'Internal server error' });
    }

})

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});