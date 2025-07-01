import { useLanguage } from '../contexts/LanguageContext';
import ContactForm from './Contact/ContactForm';
import ContactInfo from './Contact/ContactInfo';

export default function Contact() {
  const { t } = useLanguage();

  return (
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t('contact.title')}
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
  );
}