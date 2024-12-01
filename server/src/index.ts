// src/index.ts
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { connectToDB } from "./config/mongoose";
import mongoose from "mongoose";
import {Newsletter} from "./model/newsletter";
import {Contact} from "./model/contact"; // Import the mongoose configuration file

dotenv.config();

const app: Express = express();
app.use(express.json());
const port = process.env.PORT || 3000;
connectToDB()

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});


app.post('/newsletter', async (req: Request, res: Response): Promise<any> => {
    const { email } = req.body;

    // Validate email
    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }

    try {
        // Create a new newsletter entry
        const newEntry = new Newsletter({ email });
        await newEntry.save();

        // Respond with success
        res.status(201).json({ message: 'Email saved successfully' });
    } catch (error: any) {
        console.error('Error saving email:', error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
});

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
        res.status(201).json({message: "Thank you for your message I will come back quickly to you"})
    } catch (error: any) {
        console.error('Error saving message:', error.message);
        res.status(500).json({ message: 'Internal server error' });
    }

})

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});