import {
  GraduationCap,
  MapPin,
  ExternalLink,
  Cross,
  AtomIcon,
  ComputerIcon,
    BookmarkIcon
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Timeline() {
  const { t } = useLanguage();

  const timelineData = [
    {
      year: 'Future',
      title: "Full Stack engineer / Backend developer / Software engineer / Cloud Engineer",
      company: "Searching ...",
      location: "Singapore, Shanghai, Guangzhou, Shenzhen, Hong Kong, Japan, Thailand, Remote",
      description: "I'm actually looking for a new opportunities in one of the following location, if your looking for a motivated engineer ready to discover new culture feel free to contact me",
      icon: BookmarkIcon
    },
    {
      year: '2022 - Present',
      title: 'Software engineer',
      company: 'CERN',
      website: 'https://home.cern',
      location: 'Geneva, Switzerland',
      description: 'I contributed to enhancing robotic control systems by implementing key features in the Robotic GUI, including a Radio Protection Survey mission and control of the robots. I optimized data transmission efficiency by 60% with a Python multiprocess application and developed a user-friendly web interface integrated with configuration databases for seamless robotic operations.\n' +
          'Collaborating with my team, I ensured 24/7 operation of a robotic system for CERN\'s Science Gateway. I also deployed web applications on OpenStack and led a Unity project team, managing the development lifecycle and ensuring timely delivery. Leveraging advanced web technologies, I built systems enabling efficient robotic control, with regular code reviews to maintain high-quality standards.',
      icon: AtomIcon
    },
    {
      year: '2017 - 2022',
      title: 'Master degrees in IT',
      company: 'Epitech International',
      website: 'https://www.epitech.eu/',
      location: 'Paris, France',
      description: 'During my Master\'s at Epitech, I chose modules on Blockchain, AI, and storytelling to expand my technical and creative skill set.\n' +
          'For my end-of-study project, I developed an AI-powered SaaS application that manages the entire lifecycle of meetings from scheduling and summarizing to ensuring follow-ups and creating Jira tickets. The platform integrates with enterprise solutions to enhance team productivity and streamline workflows.',
      icon: GraduationCap
    },
    {
      year: '2021 - 2022',
      title: 'Backend developer',
      company: 'Bimedoc',
      website: 'https://www.bimedoc.com',
      location: 'Lyon, France',
      description: 'Experienced in implementing CRUD operations in backend systems and modifying database models to meet evolving requirements. Proficient in real-time database value updates through migration scripts and ensuring high-quality code through regular reviews. Additionally, I leverage integration pipelines to streamline deployments in production environments, delivering robust and maintainable solutions.',
      icon: Cross
    },
    {
      year: '2021',
      title: 'Software developer',
      company: 'CERN',
      website: 'https://home.cern',
      location: 'Geneva, Switzerland',
      description: 'Skilled in feature development and integration within CERN\'s robotic framework using C++, enhancing system functionality and performance. Proficient in implementing point cloud reconstruction algorithms to improve 3D data representation accuracy and efficiency.\n' +
          'I contributed to optimizing Unity GUIs with C#, improving user experience for robotic control. Additionally, I created and maintained installation scripts for seamless deployment of robotic frameworks, managed dependencies, and enhanced integration pipelines for reliability. Notably, I reduced bandwidth usage by 20% and developed monitoring tools to ensure compliance with the stringent network standards of the Large Hadron Collider (LHC).\n',
      icon: AtomIcon
    },
    {
      year: '2017-2021',
      title: 'Bachelor Degrees',
      company: 'Epitech International',
      website: 'https://www.epitech.eu',
      location: "Lyon, France",
      description: 'The Epitech journey starts with La Piscine, an intensive bootcamp focused on problem-solving and foundational programming. Students begin with low-level C programming to understand how computers work, then progress to object-oriented programming, socket programming, and building a Skype-like app. The final stages focus on modern web development, where students create projects like a Zapier-like app, integrating APIs and automating workflows. The program emphasizes innovation, collaboration, and practical software engineering skills.',
      icon: GraduationCap
    },
    {
      year: '2020',
      title: "Full Stack developer",
      company: "Welco",
      website: "https://welco.io",
      location: "Remote",
      description: "Developed innovative geolocation features to enhance delivery efficiency by enabling users to retrieve parcels from nearby locations. Built a dynamic e-commerce platform using React, Node.js, and GraphQL, providing a seamless shopping experience with optimized backend processes.\n" +
          "Integrated a real-time WebSocket chat feature into the mobile application, boosting user engagement, while continuously enhancing mobile functionality to improve the overall user experience. Additionally, I upgraded the backoffice system with a CSS tools interpreter for streamlined design workflows and optimized database performance through structured migration techniques.\n",
      icon: ComputerIcon
    },
    {
      year:"2018",
      title: "QA Tester",
      company: "Agixis",
      website: "https://www.agixis.com/",
      location: "Lyon, France",
      description: "Extensively tested a Medtech application to ensure a robust, bug-free production environment, identifying and reporting over 150 issues to enhance software stability. Designed and implemented comprehensive test suites to prevent regressions and maintain seamless functionality across updates.\n" +
          "\n" +
          "Additionally, I performed penetration testing to evaluate and strengthen application security, ensuring compliance with industry standards and safeguarding sensitive user data.",
      icon: Cross
    }
  ];

  return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t('timeline.title')}
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              {t('timeline.subtitle')}
            </p>
          </div>

          <div className="mt-12">
            <div className="max-w-3xl mx-auto">
              {timelineData.map((item, index) => {
                const Icon = item.icon;
                const isLast = index === timelineData.length - 1;
                return (
                    <div key={index} className="relative pl-8 sm:pl-32 py-6 group">
                      {/* Enhanced Timeline line with gradient and better styling */}
                      {!isLast && (
                        <div className="absolute top-0 left-8 sm:left-16 h-full w-0.5 bg-gradient-to-b from-blue-300 via-blue-400 to-blue-300 group-hover:from-blue-500 group-hover:via-blue-600 group-hover:to-blue-500 transition-all duration-300 opacity-60 group-hover:opacity-100">
                          {/* Decorative dots along the line */}
                          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full opacity-40"></div>
                          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full opacity-40"></div>
                          <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full opacity-40"></div>
                        </div>
                      )}

                      {/* Enhanced Timeline icon with better shadow and border */}
                      <div className="absolute left-0 sm:left-12 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600 shadow-lg border-4 border-white group-hover:border-blue-50 group-hover:shadow-xl group-hover:scale-105 transition-all duration-300 z-10">
                        <Icon size={24} />
                      </div>

                      {/* Content with enhanced styling */}
                      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                        {/* Subtle background decoration */}
                        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-400 to-blue-600 opacity-20"></div>
                        
                        <div className="relative z-10">
                          <span className="ml-3 text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{item.year}</span>
                          <h3 className="mt-2 text-xl font-bold text-gray-900">{item.title}</h3>
                          <div className="mt-1 flex items-center gap-2">
                            <p className="text-base font-medium text-gray-600">{item.company}</p>
                            {item.website && (
                                <a
                                    href={item.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 transition-colors"
                                    aria-label={`Visit ${item.company} website`}
                                >
                                  <ExternalLink size={16} />
                                </a>
                            )}
                          </div>
                          {item.location && (
                              <p className="mt-1 text-sm text-gray-500 flex items-center">
                                <MapPin size={14} className="mr-1" />
                                {item.location}
                              </p>
                          )}
                          <p className="mt-2 text-gray-500 leading-relaxed">{item.description}</p>
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