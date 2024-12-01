import {model, Schema} from "mongoose";

const contactSchema = new Schema({
    name: {type: String, required: true},
    email: { type: String, required: true },
    message: { type: String, required: true}
});


export const Contact = model('Contact', contactSchema)