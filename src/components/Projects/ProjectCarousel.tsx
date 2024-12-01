import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../../types/project';
import ProjectCard from './ProjectCard';
import { useState } from 'react';

interface ProjectCarouselProps {
  projects: Project[];
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + projectsPerPage >= projects.length ? 0 : prevIndex + projectsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - projectsPerPage < 0 
        ? Math.max(0, projects.length - projectsPerPage) 
        : prevIndex - projectsPerPage
    );
  };

  const currentProjects = projects.slice(currentIndex, currentIndex + projectsPerPage);

  return (
    <div className="relative">
      <div className="grid gap-8 lg:grid-cols-3 lg:gap-x-8">
        {currentProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {projects.length > projectsPerPage && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Previous projects"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Next projects"
          >
            <ChevronRight size={24} />
          </button>

          <div className="mt-8 flex justify-center space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * projectsPerPage)}
                className={`h-2 w-2 rounded-full transition-all ${
                  Math.floor(currentIndex / projectsPerPage) === index
                    ? 'bg-blue-600 w-4'
                    : 'bg-gray-300'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}