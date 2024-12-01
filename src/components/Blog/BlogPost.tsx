import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Clock, Calendar } from 'lucide-react';
import { getBlogPost } from '../../services/api';
import { BlogPostFull } from '../../types/blog';

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPostFull | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;
      try {
        const data = await getBlogPost(id);
        setPost(data);
      } catch (err) {
        setError('Failed to load blog post');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="text-center text-red-600 py-8">
        <p>{error || 'Post not found'}</p>
      </div>
    );
  }

  const technologies = post.technology.split(',').map(tech => tech.trim());

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex flex-wrap gap-2 mb-6">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        {post.title}
      </h1>
      
      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-8">
        <span className="flex items-center">
          <Calendar className="h-4 w-4 mr-1.5" />
          {new Date(post.date_published).toLocaleDateString()}
        </span>
        <span className="flex items-center">
          <Clock className="h-4 w-4 mr-1.5" />
          {post.time_to_read}
        </span>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-500 mb-8">
          {post.introduction}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </article>
  );
}