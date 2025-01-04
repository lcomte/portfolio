import {model, Schema} from "mongoose";

const projectSchema = new Schema({
    title: { type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required: false},
    tech: {type: [String], required: true},
    github: {type: String, required: false},
    demo: {type: String, required: true},
    display: {type: Boolean, required: true}
});

export const Project = model('Project', projectSchema);