import axios from 'axios';
import { BlogPost, BlogPostFull } from '../types/blog';
import { NewsletterSubscription, SubscriptionResponse } from '../types/newsletter';
import { Project } from '../types/project';
import { ContactFormData, ContactResponse } from '../types/contact';
import { supabase } from '../lib/supabase';

// Using a local fallback while developing
const API_URL = import.meta.env.PROD 
  ? 'https://api.lucascomte.com' 
  : 'http://localhost:3000';

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
};

export const getBlogPost = async (id: string): Promise<BlogPostFull> => {
  try {
    const response = await axios.get(`${API_URL}/posts/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching blog post with id ${id}:`, error);
    throw error;
  }
};

export const getProjects = async (): Promise<Project[]> => {
  try {
    const response = await axios.get(`${API_URL}/project/display`);
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    // If the API fails, return at least the Callavox project to show something
    return [{
      id: 'callavox-ai',
      title: 'Callavox AI',
      description: 'An AI solution for hotels and restaurants to efficiently handle client requests from booking to special accommodations. Streamlines communication and improves customer service through intelligent automation.',
      image: 'https://images.pexels.com/photos/6476587/pexels-photo-6476587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tech: ['AI', 'Machine Learning', 'Node.js', 'React', 'AWS'],
      github: '',
      demo: 'https://callavox.com'
    }];
  }
};

// Newsletter subscription using Supabase Edge Function
export const subscribeToNewsletter = async (email: string): Promise<SubscriptionResponse> => {
  try {
    const { data, error } = await supabase.functions.invoke('newsletter-subscribe', {
      body: { email }
    });

    if (error) {
      console.error('Newsletter subscription error:', error);
      throw new Error(error.message || 'Failed to subscribe');
    }

    return { success: true, message: data.message };
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    throw error;
  }
};

// Contact form submission using Supabase Edge Function
export const submitContactForm = async (data: ContactFormData): Promise<ContactResponse> => {
  try {
    const { data: responseData, error } = await supabase.functions.invoke('contact-submit', {
      body: data
    });

    if (error) {
      console.error('Contact form submission error:', error);
      throw new Error(error.message || 'Failed to submit contact form');
    }

    return { success: true, message: responseData.message };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};