import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../../types/project';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden h-full group hover:shadow-xl transition-shadow duration-300">
      {/* Clickable card content */}
      <a 
        href={project.demo} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex-1 cursor-pointer"
      >
        {project.image && (
          <div className="flex-shrink-0">
            <img 
              className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300" 
              src={project.image} 
              alt={project.title} 
            />
          </div>
        )}
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
              {project.title}
            </h3>
            <p className="mt-3 text-base text-gray-500">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </a>
      
      {/* Action buttons - separate from clickable area */}
      {(project.github || project.demo) && (
        <div className="bg-white px-6 pb-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {project.github && (
              <a
                href={project.github}
                className="text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-full hover:bg-gray-100"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={20} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                className="text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-full hover:bg-gray-100"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
          <span className="text-xs text-gray-400 italic">Click anywhere to visit</span>
        </div>
      )}
    </div>
  );
}