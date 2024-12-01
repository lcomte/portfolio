import {
  GraduationCap,
  MapPin,
  ExternalLink,
  Cross,
  AtomIcon,
  ComputerIcon,
    BookmarkIcon
} from 'lucide-react';

const timelineData = [
  {
    year: 'Future',
    title: "Software engineer / Backend developer / Cloud Engineer",
    company: "Searching ...",
    location: "Singapore, Hong Kong, China Mainland, Japan, Thailand, Remote",
    description: "I'm actually looking for a new opportunities in one of the following location, if your looking for a motivated engineer ready to discover new culture feel free to contact me",
    icon: BookmarkIcon
  },
  {
    year: '2022 - Present',
    title: 'Software engineer',
    company: 'CERN',
    website: 'https://home.cern',
    location: 'Geneva, Switzerland',
    description: 'Support the robotics teams of CERN, by creating elaborated systems',
    icon: AtomIcon
  },
  {
    year: '2017 - 2022',
    title: 'Master degrees in IT',
    company: 'Epitech International',
    website: 'https://www.epitech.eu/',
    location: 'Paris, France',
    description: 'Finish my master degrees with succeed',
    icon: GraduationCap
  },
  {
    year: '2021 - 2022',
    title: 'Backend developer',
    company: 'Bimedoc',
    website: 'https://www.bimedoc.com',
    location: 'Lyon, France',
    description: 'Develop the backend of the main product, and implement some safety features',
    icon: Cross
  },
  {
    year: '2021',
    title: 'Software developer',
    company: 'CERN',
    website: 'https://home.cern',
    location: 'Geneva, Switzerland',
    description: 'Support the robotics team by building GUI to control the robots',
    icon: AtomIcon
  },
  {
    year: '2017-2021',
    title: 'Bachelor Degrees',
    company: 'Epitech International',
    website: 'https://www.epitech.eu',
    location: "Lyon, France",
    description: 'Acquire my bachelor degrees',
    icon: GraduationCap
  },
  {
    year: '2020',
    title: "Full Stack developer",
    company: "Welco",
    website: "https://welco.io",
    location: "Remote",
    description: "Support by developing E-Commerce platform and mobile application",
    icon: ComputerIcon
  },
  {
    year:"2018",
    title: "QA Tester",
    company: "Agixis",
    website: "https://www.agixis.com/",
    location: "Lyon, France",
    description: "Help the software teams by building coverage for the features of the platform",
    icon: Cross
  }
];

export default function Timeline() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Professional Journey
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            My career path and achievements
          </p>
        </div>

        <div className="mt-12 relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200"></div>

          <div className="space-y-8">
            {timelineData.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="relative">
                  {/* Line connector on mobile */}
                  <div className="md:hidden absolute left-6 transform -translate-x-1/2 w-0.5 h-full bg-gray-200"></div>
                  
                  <div className={`flex items-center md:justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Content */}
                    <div className="md:w-5/12">
                      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <span className="text-sm font-semibold text-blue-600">{item.year}</span>
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
                        <p className="mt-2 text-gray-500">{item.description}</p>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="flex-shrink-0 relative z-10">
                      <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 shadow-md">
                        <Icon size={24} />
                      </div>
                    </div>

                    {/* Empty space for alignment */}
                    <div className="hidden md:block md:w-5/12"></div>
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