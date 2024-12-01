import { useState } from 'react';
import { Mail, Loader2, X, Check } from 'lucide-react';
import { subscribeToNewsletter } from '../../services/api';

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const response = await subscribeToNewsletter(email);
      setStatus('success');
      setMessage(response.message || 'Successfully subscribed!');
      setEmail('');
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    } catch (error) {
      setStatus('error');
      setMessage('Failed to subscribe. Please try again.');
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 right-4 z-50 w-80 bg-white rounded-lg shadow-xl p-4 border border-gray-200">
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
      >
        <X size={16} />
      </button>
      
      <div className="flex items-center mb-3">
        <div className="bg-blue-100 rounded-full p-2 mr-3">
          <Mail className="h-5 w-5 text-blue-600" />
        </div>
        <h3 className="font-semibold text-gray-900">Subscribe to Newsletter</h3>
      </div>
      
      <p className="text-sm text-gray-600 mb-4">
        Get the latest updates and articles directly in your inbox!
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            disabled={status === 'loading' || status === 'success'}
            required
          />
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
          className={`w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
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
          {status === 'success' ? 'Subscribed!' : 'Subscribe'}
        </button>
      </form>
    </div>
  );
}