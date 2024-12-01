import {model, Schema} from "mongoose";

const contactSchema = new Schema({
    name: {type: String},
    email: { type: String, required: true },
    message: { type: String}
});


export const Contact = model('Contact', contactSchema)