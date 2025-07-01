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
    'about.description.2': 'I\'ve worked on projects involving cutting-edge technologies like NodeJS, ReactJS, NextJS, NestJS, C#, AWS, .Net delivering robust solutions for diverse domains, including Medtech, robotics, e-commerce, and automation.',
    'about.description.3': 'I specialize in AI-powered solutions, having developed',
    'about.description.4': ', an innovative AI platform that revolutionizes how hotels and restaurants handle customer communications and requests through intelligent automation.',
    'about.description.5': 'My services include AI Marketing Agents that can transform your business operations by automating customer interactions, lead generation, and marketing campaigns. These intelligent agents work 24/7 to enhance customer engagement and drive business growth.',
    'about.description.6': 'Whether you need custom web applications, AI integration, cloud solutions, or complete digital transformation, I deliver scalable solutions that drive real business value and competitive advantage.',
    'about.skills.title': 'Skills & Expertise',
    
    // Skills
    'skills.backend.title': 'Backend Development',
    'skills.backend.description': 'Expert in backend development, I create scalable applications with robust architecture',
    'skills.frontend.title': 'Frontend Development',
    'skills.frontend.description': 'Expert in frontend development, designing user-friendly and responsive applications',
    'skills.cloud.title': 'Cloud Solutions',
    'skills.cloud.description': 'Building strong cloud architecture for scalable applications and reliable deployment',
    'skills.ai.title': 'AI & Automation',
    'skills.ai.description': 'Building AI-powered solutions like Callavox and AI Marketing Agents that automate business processes and enhance customer experiences.',
    'skills.data.title': 'Data Science',
    'skills.data.description': 'Building intelligent dashboards and analytics platforms for data-driven decision making',
    'skills.team.title': 'Team Collaboration',
    'skills.team.description': 'Experience in leading and working with development teams using modern methodologies.',
    
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
    'services.subtitle': 'Comprehensive development services tailored to your business needs',
    'services.featured.title': 'Featured AI Solution',
    'services.featured.description': 'transforms hospitality operations with AI-powered customer communication automation, helping hotels and restaurants streamline their guest services and improve customer satisfaction.',
    'services.featured.tagline': '- Experience the future of hospitality automation.',
    'services.ai.name': 'AI Solutions & Marketing Agents',
    'services.ai.description': 'Deploy intelligent AI agents that revolutionize your marketing and customer service operations.',
    'services.backend.name': 'Backend Development',
    'services.backend.description': 'Develop robust and scalable server-side solutions with modern technologies.',
    'services.fullstack.name': 'Full Stack Development',
    'services.fullstack.description': 'Build modern, responsive websites and applications using the latest technologies.',
    'services.consulting.name': 'AI Consulting & Integration',
    'services.consulting.description': 'Expert guidance on implementing AI solutions and digital transformation strategies.',
    'services.software.name': 'Software Engineering',
    'services.software.description': 'Develop modern software solutions for complex business requirements',
    'services.data.name': 'Data Science & Analytics',
    'services.data.description': 'Building intelligent data solutions and business intelligence platforms for actionable insights',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Ready to transform your business with AI? Let\'s discuss your project.',
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
    'newsletter.description': 'Get the latest updates on AI solutions and development insights!',
    'newsletter.email.placeholder': 'Enter your email',
    'newsletter.subscribe': 'Subscribe',
    'newsletter.subscribed': 'Subscribed!',
    'newsletter.success': 'Successfully subscribed!',
    'newsletter.error': 'Failed to subscribe. Please try again.',
    
    // Footer
    'footer.description': 'Full Stack Developer specializing in AI solutions and business automation.',
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
    'about.description.3': 'Je me spécialise dans les solutions alimentées par l\'IA, ayant développé',
    'about.description.4': ', une plateforme IA innovante qui révolutionne la façon dont les hôtels et restaurants gèrent les communications et demandes clients grâce à l\'automatisation intelligente.',
    'about.description.5': 'Mes services incluent des Agents Marketing IA qui peuvent transformer vos opérations commerciales en automatisant les interactions clients, la génération de leads et les campagnes marketing. Ces agents intelligents travaillent 24h/24 pour améliorer l\'engagement client et stimuler la croissance.',
    'about.description.6': 'Que vous ayez besoin d\'applications web personnalisées, d\'intégration IA, de solutions cloud ou de transformation digitale complète, je livre des solutions évolutives qui apportent une réelle valeur commerciale et un avantage concurrentiel.',
    'about.skills.title': 'Compétences & Expertise',
    
    // Skills
    'skills.backend.title': 'Développement Backend',
    'skills.backend.description': 'Expert en développement backend, je crée des applications évolutives avec une architecture robuste',
    'skills.frontend.title': 'Développement Frontend',
    'skills.frontend.description': 'Expert en développement frontend, concevant des applications conviviales et responsives',
    'skills.cloud.title': 'Solutions Cloud',
    'skills.cloud.description': 'Construction d\'architecture cloud solide pour applications évolutives et déploiement fiable',
    'skills.ai.title': 'IA & Automatisation',
    'skills.ai.description': 'Construction de solutions alimentées par l\'IA comme Callavox et des Agents Marketing IA qui automatisent les processus métier et améliorent l\'expérience client.',
    'skills.data.title': 'Science des Données',
    'skills.data.description': 'Construction de tableaux de bord intelligents et plateformes d\'analyse pour la prise de décision basée sur les données',
    'skills.team.title': 'Collaboration d\'Équipe',
    'skills.team.description': 'Expérience dans la direction et le travail avec des équipes de développement utilisant des méthodologies modernes.',
    
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
    'services.subtitle': 'Services de développement complets adaptés aux besoins de votre entreprise',
    'services.featured.title': 'Solution IA en Vedette',
    'services.featured.description': 'transforme les opérations hôtelières avec l\'automatisation de communication client alimentée par l\'IA, aidant les hôtels et restaurants à rationaliser leurs services clients et améliorer la satisfaction client.',
    'services.featured.tagline': '- Découvrez l\'avenir de l\'automatisation hôtelière.',
    'services.ai.name': 'Solutions IA & Agents Marketing',
    'services.ai.description': 'Déployez des agents IA intelligents qui révolutionnent vos opérations marketing et service client.',
    'services.backend.name': 'Développement Backend',
    'services.backend.description': 'Développer des solutions côté serveur robustes et évolutives avec des technologies modernes.',
    'services.fullstack.name': 'Développement Full Stack',
    'services.fullstack.description': 'Construire des sites web et applications modernes et réactifs en utilisant les dernières technologies.',
    'services.consulting.name': 'Conseil IA & Intégration',
    'services.consulting.description': 'Guidance experte sur l\'implémentation de solutions IA et stratégies de transformation digitale.',
    'services.software.name': 'Ingénierie Logicielle',
    'services.software.description': 'Développer des solutions logicielles modernes pour des exigences commerciales complexes',
    'services.data.name': 'Science des Données & Analytique',
    'services.data.description': 'Construction de solutions de données intelligentes et plateformes de business intelligence pour des insights actionnables',
    
    // Contact
    'contact.title': 'Prendre Contact',
    'contact.subtitle': 'Prêt à transformer votre entreprise avec l\'IA ? Discutons de votre projet.',
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
    'newsletter.description': 'Recevez les dernières mises à jour sur les solutions IA et insights de développement !',
    'newsletter.email.placeholder': 'Entrez votre email',
    'newsletter.subscribe': 'S\'abonner',
    'newsletter.subscribed': 'Abonné !',
    'newsletter.success': 'Abonnement réussi !',
    'newsletter.error': 'Échec de l\'abonnement. Veuillez réessayer.',
    
    // Footer
    'footer.description': 'Développeur Full Stack spécialisé en solutions IA et automatisation d\'entreprise.',
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