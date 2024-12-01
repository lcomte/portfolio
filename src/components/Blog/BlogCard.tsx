import { Clock, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../../types/blog';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const technologies = post.technology.split(',').map(tech => tech.trim());

  return (
    <article className="flex flex-col rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
              >
                {tech}
              </span>
            ))}
          </div>
          <Link to={`/blog/${post.id}`} className="block mt-2">
            <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600">
              {post.title}
            </h3>
            <p className="mt-3 text-base text-gray-500">
              {post.introduction}
            </p>
          </Link>
        </div>
        <div className="mt-6 flex items-center text-sm text-gray-500 space-x-4">
          <span className="flex items-center">
            <Calendar className="h-4 w-4 mr-1.5" />
            {new Date(post.date_published).toLocaleDateString()}
          </span>
          <span className="flex items-center">
            <Clock className="h-4 w-4 mr-1.5" />
            {post.time_to_read}
          </span>
        </div>
      </div>
    </article>
  );
}