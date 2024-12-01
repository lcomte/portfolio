import {model, Schema} from "mongoose";

const newsletterSchema = new Schema({
    email: { type: String, required: true },
});


export const Newsletter = model('Newsletter', newsletterSchema);