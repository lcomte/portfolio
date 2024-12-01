import axios from 'axios';
import { BlogPost, BlogPostFull } from '../types/blog';
import { NewsletterSubscription, SubscriptionResponse } from '../types/newsletter';
import { Project } from '../types/project';
const API_URL = 'https://api.example.com'; // Replace with your actual API URL

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  const response = await axios.get(`${API_URL}/posts`);
  return response.data;
};

export const getBlogPost = async (id: string): Promise<BlogPostFull> => {
  const response = await axios.get(`${API_URL}/posts/${id}`);
  return response.data;
};

export const subscribeToNewsletter = async (email: string): Promise<SubscriptionResponse> => {
  const response = await axios.post(`${API_URL}/newsletter/subscribe`, { email });
  return response.data;
};

export const getProjects = async (): Promise<Project[]> => {
  const response = await axios.get(`${API_URL}/projects`);
  return response.data;
};