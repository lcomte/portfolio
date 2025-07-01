import { useState, useEffect } from 'react';
import { getProjects } from '../services/api';
import { Project } from '../types/project';
import { useLanguage } from '../contexts/LanguageContext';
import ProjectCarousel from './Projects/ProjectCarousel';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        
        // Check if the Callavox project is already included from the API response
        const hasCallavoxProject = data.some(project => 
          project.title === 'Callavox AI' || project.demo === 'https://callavox.com'
        );
        
        if (!hasCallavoxProject) {
          // Add the Callavox project to the fetched projects
          const callavoxProject: Project = {
            id: 'callavox-ai',
            title: 'Callavox AI',
            description: 'An AI solution for hotels and restaurants to efficiently handle client requests from booking to special accommodations. Streamlines communication and improves customer service through intelligent automation.',
            image: 'https://images.pexels.com/photos/6476587/pexels-photo-6476587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            tech: ['AI', 'Machine Learning', 'Node.js', 'React', 'AWS'],
            github: '',
            demo: 'https://callavox.com'
          };
          
          // Add the Callavox project to the beginning of the array to feature it prominently
          setProjects([callavoxProject, ...data]);
        } else {
          setProjects(data);
        }
      } catch (err) {
        console.error('Project loading error:', err);
        setError(t('projects.loading.error'));
        
        // Fallback to just showing the Callavox project if the API fails
        const callavoxProject: Project = {
          id: 'callavox-ai',
          title: 'Callavox AI',
          description: 'An AI solution for hotels and restaurants to efficiently handle client requests from booking to special accommodations. Streamlines communication and improves customer service through intelligent automation.',
          image: 'https://images.pexels.com/photos/6476587/pexels-photo-6476587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          tech: ['AI', 'Machine Learning', 'Node.js', 'React', 'AWS'],
          github: '',
          demo: 'https://callavox.com'
        };
        
        setProjects([callavoxProject]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [t]);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('projects.title')}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="mt-12">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : error ? (
            <div>
              <p className="text-center text-amber-600 py-4 mb-6 bg-amber-50 rounded-lg">
                {error}
              </p>
              <ProjectCarousel projects={projects} />
            </div>
          ) : (
            <ProjectCarousel projects={projects} />
          )}
        </div>
      </div>
    </section>
  );
}