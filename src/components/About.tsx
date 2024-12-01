import {Code, Server, Users, Cloud} from 'lucide-react';

const skills = [
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Building robust server-side applications and APIs.',
    tech: ['Node.js', 'NestJS', 'Express', 'PostgreSQL', 'MongoDB', 'Django']
  },
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'Expert in React, TypeScript, and modern CSS frameworks like Tailwind.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js']
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
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mt-10 lg:mt-0">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Me
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              I'm a passionate Full Stack Developer with over 4 years of experience in Software engineering.
              I specialize in creating scalable, user-friendly solutions that solve real-world problems.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              When I'm not coding, you can find me around the world, learning new skills or
              writing technical blog posts. I believe in continuous learning and staying up-to-date with the latest
              technologies.
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