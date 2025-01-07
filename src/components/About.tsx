import {Code, Server, Palette, Users, MapPin, GitGraphIcon, Bot, Cloud} from 'lucide-react';

const skills = [
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'Expert in React, TypeScript, and modern CSS frameworks like Tailwind.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js']
  },
  {
    icon: GitGraphIcon,
    title: 'Data Science',
    description: 'Building  dashboard for data analysis',
    tech: ['Python', 'Panda', 'PowerBI', 'Tableau']
  },
  {
    icon: Bot,
    title: 'Robotic engineer',
    description: 'Can help you with building GUI robot solution',
    tech: ["Python", "Unity", "C#", "C++"]
  },
  {
    icon: Cloud,
    title: 'Cloud',
    description: 'Building strong cloud architecture',
    tech: ['AWS', 'GCP', 'Azure', 'Ansible', 'Docker']
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Experience in leading and working with development teams.',
    tech: ['Git', 'Agile', 'Scrum', 'Code Review']
  }
];

export default function About() {
  const locations = [
    'Singapore',
    'Shanghai',
    'Hong Kong',
    'Shenzhen',
    'Tokyo',
    'Bangkok'
  ];

  return (
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Me
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              I'm a passionate Full Stack Developer with over 4 years of experience in software engineering.
              My expertise spans backend development, cloud architecture, and creating scalable, user-friendly
              applications that address real-world challenges.
              I've worked on projects involving cutting-edge technologies like AWS, Node, and C#, delivering robust
              solutions for diverse domains, including Medtech, robotics, e-com, and automation.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              Currently, I'm looking for opportunities in one of the following locations:
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {locations.map((location, index) => (
                  <li
                      key={index}
                      className="flex items-center space-x-2 bg-gray-50 rounded-lg p-3 shadow-sm hover:bg-blue-50 transition-colors duration-200"
                  >
                    <MapPin className="h-5 w-5 text-blue-500" />
                    <span className="text-gray-700">{location}</span>
                  </li>
              ))}
            </ul>
            <p className="mt-6 text-lg text-gray-500">
              Outside of work, I'm a curious solo traveler (16 countries, and more to add to the list) and lifelong learner, always eager to explore new places and
              cultures.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              I'm also deeply interested in emerging technologies.
              Whether designing cloud-first applications or brainstorming bold new ideas, I thrive on collaboration,
              creativity, and the pursuit of excellence.
            </p>
          </div>

          <div className="mt-20">
            <h3 className="text-2xl font-bold text-gray-900 text-center">
              Skills & Expertise
            </h3>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                    <div key={index} className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                      <div className="relative bg-white p-6 rounded-lg">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mb-4">
                          <Icon size={24} />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900">{skill.title}</h4>
                        <p className="mt-2 text-gray-500">{skill.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {skill.tech.map((tech, techIndex) => (
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
                );
              })}
            </div>
          </div>
        </div>
      </section>
  );
}