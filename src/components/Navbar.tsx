import { Menu, X, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-xl">
            Lucas Comte
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#home" className="hover:text-blue-600 transition-colors">{t('nav.home')}</a>
              <a href="#about" className="hover:text-blue-600 transition-colors">{t('nav.about')}</a>
              <a href="#projects" className="hover:text-blue-600 transition-colors">{t('nav.projects')}</a>
              <a href="#services" className="hover:text-blue-600 transition-colors">{t('nav.services')}</a>
              <a href="#contact" className="hover:text-blue-600 transition-colors">{t('nav.contact')}</a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <a href="https://x.com/ElComte_" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Twitter size={20}/>
            </a>
            <a href="https://github.com/lcomte" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/lucas-comte-2011a1161/" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:lucas.comte63700@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <a href="#home" className="block px-3 py-2 rounded-md hover:bg-blue-50">{t('nav.home')}</a>
            <a href="#about" className="block px-3 py-2 rounded-md hover:bg-blue-50">{t('nav.about')}</a>
            <a href="#projects" className="block px-3 py-2 rounded-md hover:bg-blue-50">{t('nav.projects')}</a>
            <a href="#services" className="block px-3 py-2 rounded-md hover:bg-blue-50">{t('nav.services')}</a>
            <a href="#contact" className="block px-3 py-2 rounded-md hover:bg-blue-50">{t('nav.contact')}</a>
            <div className="px-3 py-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}