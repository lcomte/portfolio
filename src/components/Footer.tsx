import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Lucas Comte</h3>
            <p className="text-gray-300">
              {t('footer.description')}
            </p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">{t('footer.projects.title')}</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://callavox.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('footer.projects.callavox')}
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
                  {t('footer.projects.all')}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">{t('footer.connect.title')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:lucas.comte63700@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  {t('footer.connect.email')}
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/lucas-comte-2011a1161/" className="text-gray-300 hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/lcomte" className="text-gray-300 hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Lucas Comte. {t('footer.rights')}</p>
          <p className="mt-2 text-sm text-gray-400">
            {t('footer.powered')}{' '}
            <a 
              href="https://callavox.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Callavox
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}