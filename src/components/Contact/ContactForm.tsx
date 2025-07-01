import { useState } from 'react';
import { Loader2, Check } from 'lucide-react';
import { ContactFormData } from '../../types/contact';
import { submitContactForm } from '../../services/api';
import { useLanguage } from '../../contexts/LanguageContext';

export default function ContactForm() {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');
    const { t } = useLanguage();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await submitContactForm(formData);
            setStatus('success');
            setMessage(response.message || t('contact.form.success'));
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setStatus('error');
            setMessage(t('contact.form.error'));
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8">
            <div className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        {t('contact.form.name')}
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        disabled={status === 'loading' || status === 'success'}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        {t('contact.form.email')}
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        disabled={status === 'loading' || status === 'success'}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        {t('contact.form.message')}
                    </label>
                    <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        disabled={status === 'loading' || status === 'success'}
                        required
                    ></textarea>
                </div>

                {message && (
                    <p className={`text-sm ${
                        status === 'success' ? 'text-green-600' : 'text-red-600'
                    }`}>
                        {message}
                    </p>
                )}

                <button
                    type="submit"
                    disabled={status === 'loading' || status === 'success'}
                    className={`w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                        status === 'success'
                            ? 'bg-green-600 hover:bg-green-700'
                            : 'bg-blue-600 hover:bg-blue-700'
                    } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50`}
                >
                    {status === 'loading' && (
                        <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
                    )}
                    {status === 'success' && (
                        <Check className="-ml-1 mr-2 h-4 w-4" />
                    )}
                    {status === 'success' ? t('contact.form.sent') : t('contact.form.send')}
                </button>
            </div>
        </form>
    );
}