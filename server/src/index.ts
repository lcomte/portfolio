// src/index.ts
import express, { Express, Request, Response } from "express";
import cors from "cors"
import dotenv from "dotenv";
import { connectToDB } from "./config/mongoose";
import {Newsletter} from "./model/newsletter";
import {Contact} from "./model/contact";
import {sendEmail} from "./emailService/src/emailService";
import * as fs from "node:fs"; // Import the mongoose configuration file



dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(cors({
    origin: 'https://lucascomte.com', // Replace with your frontend's origin
    methods: ['GET', 'POST'],        // Allowed HTTP methods
    allowedHeaders: ['Content-Type'] // Allowed headers
}));
const port = process.env.PORT || 3000;
connectToDB()

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});


/*app.post('/newsletter', async (req: Request, res: Response): Promise<any> => {
    const { email } = req.body;

    // Validate email
    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }

    try {
        // Create a new newsletter entry
        const newEntry = new Newsletter({ email });
        await newEntry.save();

        const newsletterTemplate = fs.readFileSync('./emailService/template/newsletter-subscription.html', 'utf-8');
        await sendEmail({"to": email, "subject": "Thank you for subscribing to my newsletter", "template": newsletterTemplate});
        // Respond with success
        res.status(201).json({ message: 'Email saved successfully' });
    } catch (error: any) {
        console.error('Error saving email:', error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
});
*/
app.post('/contact', async (req: Request, res: Response): Promise<any> =>{
    const {name, email, message} = req.body;

    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }

    if (!name) {
        return res.status(400).json({ message: 'Name is required' });
    }

    try{
        const newEntry = new Contact({name, email, message});
        await newEntry.save();
        const emailVariables = {
            email,
            name,
            message
        }
        const newsletterTemplate = fs.readFileSync('/Users/lucascomte/project/portfolio/server/src/emailService/template/contact.html', 'utf-8');
        await sendEmail({"to": email, "subject": "New message", "template": newsletterTemplate, "variables": emailVariables});
        // Respond with success
        res.status(201).json({ message: 'Email saved successfully' });
        res.status(201).json({message: "Thank you for your message I will come back quickly to you"})
    } catch (error: any) {
        console.error('Error saving message:', error.message);
        res.status(500).json({ message: 'Internal server error' });
    }

})

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
