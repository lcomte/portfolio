import { connect, set } from 'mongoose';
require('dotenv').config();

const MONGO_DB_URI: string = process.env.MONGO_DB_URI || '';

// connection to db
export const connectToDB = async () => {
    try {
        if (!MONGO_DB_URI) {
            throw new Error('MONGO_DB_URI environment variable is not set');
        }
        
        set('strictQuery', false);
        const db = await connect(MONGO_DB_URI);
        console.log('MongoDB connected to', db.connection.name);
        return db;
    } catch (error) {
        console.error('Database connection error:', error);
        throw error;
    }
};