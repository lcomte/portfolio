import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation files
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': 'Hi, I\'m Lucas Comte',
    'hero.title': 'Full Stack Developer',
    'hero.description': 'Building beautiful web experiences with modern technologies. Passionate about creating intuitive interfaces and scalable AI solutions like',
    'hero.cta.contact': 'Get in touch',
    'hero.cta.projects': 'View Projects',
    
    // About Section
    'about.title': 'About Me',
    'about.description.1': 'I\'m a passionate Full Stack Developer with over 4 years of experience in software engineering. My expertise spans Full-Stack development, cloud architecture, and creating scalable, user-friendly applications that address real-world challenges.',
    'about.description.2': 'I\'ve worked on projects involving cutting-edge technologies like NodeJS, ReactJS, NextJS, NestJS, C#, AWS, .Net delivering robust solutions for diverse domains, including Medtech, robotics, e-com, and automation.',
    'about.description.3': 'Recently, I\'ve been focused on AI-powered solutions, developing',
    'about.description.4': ', an innovative AI platform that revolutionizes how hotels and restaurants handle customer communications and requests.',
    'about.description.5': 'Currently, I\'m looking for opportunities in one of the following locations:',
    'about.description.6': 'Outside of work, I\'m a curious solo traveler (16 countries, and more to add to the list) and lifelong learner, always eager to explore new places and cultures.',
    'about.description.7': 'I\'m also deeply interested in emerging technologies. Whether designing cloud-first applications or brainstorming bold new ideas, I thrive on collaboration, creativity, and the pursuit of excellence.',
    'about.skills.title': 'Skills & Expertise',
    
    // Skills
    'skills.backend.title': 'Backend Development',
    'skills.backend.description': 'Expert in backend development, I like to create scalable application',
    'skills.frontend.title': 'Frontend Development',
    'skills.frontend.description': 'Expert in frontend development, and design user friendly application',
    'skills.cloud.title': 'Cloud',
    'skills.cloud.description': 'Building strong cloud architecture for scalable application, and deploying the frontend',
    'skills.ai.title': 'AI & Automation',
    'skills.ai.description': 'Building AI-powered solutions like Callavox, which helps hotels and restaurants efficiently handle client requests through intelligent automation.',
    'skills.data.title': 'Data Science',
    'skills.data.description': 'Building dashboard for data analysis',
    'skills.team.title': 'Team Collaboration',
    'skills.team.description': 'Experience in leading and working with development teams.',
    
    // Timeline
    'timeline.title': 'Professional Journey',
    'timeline.subtitle': 'My career path and achievements',
    
    // Projects
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'Here are some of my recent works',
    'projects.loading.error': 'Failed to load projects from the server. Showing local projects only.',
    'projects.visit.hint': 'Click anywhere to visit',
    
    // Services
    'services.title': 'Services & Solutions',
    'services.subtitle': 'Comprehensive development services tailored to your needs',
    'services.featured.title': 'Featured AI Solution',
    'services.featured.description': 'transforms hospitality operations with AI-powered customer communication automation, helping hotels and restaurants streamline their guest services and improve customer satisfaction.',
    'services.backend.name': 'Backend Development',
    'services.backend.description': 'Develop robust and scalable server-side solutions.',
    'services.fullstack.name': 'Full Stack Development',
    'services.fullstack.description': 'Build modern, responsive websites using the latest technologies.',
    'services.consulting.name': 'AI Solutions & Consulting',
    'services.consulting.description': 'Expert advice on technology solutions and AI-powered applications like Callavox for hospitality automation.',
    'services.software.name': 'Software Engineering',
    'services.software.description': 'Develop modern software solutions',
    'services.data.name': 'Data Science',
    'services.data.description': 'Building intelligent data solutions and business intelligence platforms',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Have a project in mind? Let\'s talk about it.',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.sent': 'Message Sent!',
    'contact.form.error': 'Failed to send message. Please try again.',
    'contact.form.success': 'Message sent successfully!',
    'contact.info.email': 'Email',
    'contact.info.location': 'Location',
    'contact.info.wechat': 'WeChat',
    
    // Newsletter
    'newsletter.title': 'Subscribe to Newsletter',
    'newsletter.description': 'Get the latest updates and articles directly in your inbox!',
    'newsletter.email.placeholder': 'Enter your email',
    'newsletter.subscribe': 'Subscribe',
    'newsletter.subscribed': 'Subscribed!',
    'newsletter.success': 'Successfully subscribed!',
    'newsletter.error': 'Failed to subscribe. Please try again.',
    
    // Footer
    'footer.description': 'Full Stack Developer passionate about creating innovative solutions.',
    'footer.projects.title': 'Featured Projects',
    'footer.projects.callavox': 'Callavox - AI for Hospitality',
    'footer.projects.all': 'View All Projects',
    'footer.connect.title': 'Connect',
    'footer.connect.email': 'Email',
    'footer.rights': 'All rights reserved.',
    'footer.powered': 'Powered by innovative AI solutions like',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.projects': 'Projets',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': 'Salut, je suis Lucas Comte',
    'hero.title': 'Développeur Full Stack',
    'hero.description': 'Création d\'expériences web magnifiques avec des technologies modernes. Passionné par la création d\'interfaces intuitives et de solutions IA évolutives comme',
    'hero.cta.contact': 'Me contacter',
    'hero.cta.projects': 'Voir les Projets',
    
    // About Section
    'about.title': 'À Propos de Moi',
    'about.description.1': 'Je suis un développeur Full Stack passionné avec plus de 4 ans d\'expérience en ingénierie logicielle. Mon expertise couvre le développement Full-Stack, l\'architecture cloud, et la création d\'applications évolutives et conviviales qui répondent aux défis du monde réel.',
    'about.description.2': 'J\'ai travaillé sur des projets impliquant des technologies de pointe comme NodeJS, ReactJS, NextJS, NestJS, C#, AWS, .Net livrant des solutions robustes pour divers domaines, notamment Medtech, robotique, e-commerce et automatisation.',
    'about.description.3': 'Récemment, je me suis concentré sur les solutions alimentées par l\'IA, développant',
    'about.description.4': ', une plateforme IA innovante qui révolutionne la façon dont les hôtels et restaurants gèrent les communications et demandes clients.',
    'about.description.5': 'Actuellement, je recherche des opportunités dans l\'une des locations suivantes :',
    'about.description.6': 'En dehors du travail, je suis un voyageur solo curieux (16 pays, et plus à ajouter à la liste) et un apprenant permanent, toujours désireux d\'explorer de nouveaux lieux et cultures.',
    'about.description.7': 'Je suis également profondément intéressé par les technologies émergentes. Que ce soit concevoir des applications cloud-first ou brainstormer de nouvelles idées audacieuses, je m\'épanouis dans la collaboration, la créativité et la quête d\'excellence.',
    'about.skills.title': 'Compétences & Expertise',
    
    // Skills
    'skills.backend.title': 'Développement Backend',
    'skills.backend.description': 'Expert en développement backend, j\'aime créer des applications évolutives',
    'skills.frontend.title': 'Développement Frontend',
    'skills.frontend.description': 'Expert en développement frontend, et conception d\'applications conviviales',
    'skills.cloud.title': 'Cloud',
    'skills.cloud.description': 'Construction d\'architecture cloud solide pour applications évolutives, et déploiement du frontend',
    'skills.ai.title': 'IA & Automatisation',
    'skills.ai.description': 'Construction de solutions alimentées par l\'IA comme Callavox, qui aide les hôtels et restaurants à gérer efficacement les demandes clients grâce à l\'automatisation intelligente.',
    'skills.data.title': 'Science des Données',
    'skills.data.description': 'Construction de tableaux de bord pour l\'analyse de données',
    'skills.team.title': 'Collaboration d\'Équipe',
    'skills.team.description': 'Expérience dans la direction et le travail avec des équipes de développement.',
    
    // Timeline
    'timeline.title': 'Parcours Professionnel',
    'timeline.subtitle': 'Mon parcours de carrière et mes réalisations',
    
    // Projects
    'projects.title': 'Projets en Vedette',
    'projects.subtitle': 'Voici quelques-uns de mes travaux récents',
    'projects.loading.error': 'Échec du chargement des projets depuis le serveur. Affichage des projets locaux uniquement.',
    'projects.visit.hint': 'Cliquez n\'importe où pour visiter',
    
    // Services
    'services.title': 'Services & Solutions',
    'services.subtitle': 'Services de développement complets adaptés à vos besoins',
    'services.featured.title': 'Solution IA en Vedette',
    'services.featured.description': 'transforme les opérations hôtelières avec l\'automatisation de communication client alimentée par l\'IA, aidant les hôtels et restaurants à rationaliser leurs services clients et améliorer la satisfaction client.',
    'services.backend.name': 'Développement Backend',
    'services.backend.description': 'Développer des solutions côté serveur robustes et évolutives.',
    'services.fullstack.name': 'Développement Full Stack',
    'services.fullstack.description': 'Construire des sites web modernes et réactifs en utilisant les dernières technologies.',
    'services.consulting.name': 'Solutions IA & Conseil',
    'services.consulting.description': 'Conseils d\'expert sur les solutions technologiques et applications alimentées par l\'IA comme Callavox pour l\'automatisation hôtelière.',
    'services.software.name': 'Ingénierie Logicielle',
    'services.software.description': 'Développer des solutions logicielles modernes',
    'services.data.name': 'Science des Données',
    'services.data.description': 'Construction de solutions de données intelligentes et plateformes de business intelligence',
    
    // Contact
    'contact.title': 'Prendre Contact',
    'contact.subtitle': 'Vous avez un projet en tête ? Parlons-en.',
    'contact.form.name': 'Nom',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.send': 'Envoyer le Message',
    'contact.form.sending': 'Envoi...',
    'contact.form.sent': 'Message Envoyé !',
    'contact.form.error': 'Échec de l\'envoi du message. Veuillez réessayer.',
    'contact.form.success': 'Message envoyé avec succès !',
    'contact.info.email': 'Email',
    'contact.info.location': 'Localisation',
    'contact.info.wechat': 'WeChat',
    
    // Newsletter
    'newsletter.title': 'S\'abonner à la Newsletter',
    'newsletter.description': 'Recevez les dernières mises à jour et articles directement dans votre boîte mail !',
    'newsletter.email.placeholder': 'Entrez votre email',
    'newsletter.subscribe': 'S\'abonner',
    'newsletter.subscribed': 'Abonné !',
    'newsletter.success': 'Abonnement réussi !',
    'newsletter.error': 'Échec de l\'abonnement. Veuillez réessayer.',
    
    // Footer
    'footer.description': 'Développeur Full Stack passionné par la création de solutions innovantes.',
    'footer.projects.title': 'Projets en Vedette',
    'footer.projects.callavox': 'Callavox - IA pour l\'Hôtellerie',
    'footer.projects.all': 'Voir Tous les Projets',
    'footer.connect.title': 'Se Connecter',
    'footer.connect.email': 'Email',
    'footer.rights': 'Tous droits réservés.',
    'footer.powered': 'Alimenté par des solutions IA innovantes comme',
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('portfolio-language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'fr')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('portfolio-language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}