import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {isSubmitted ? (
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 flex items-center text-green-800 dark:text-green-400 mb-6">
          <Check className="w-5 h-5 mr-2 flex-shrink-0" />
          <p>Thank you for your message! We'll get back to you shortly.</p>
        </div>
      ) : null}
      
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="block w-full rounded-md border-slate-300 dark:border-slate-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 dark:text-white sm:text-sm p-2.5"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="block w-full rounded-md border-slate-300 dark:border-slate-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 dark:text-white sm:text-sm p-2.5"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="block w-full rounded-md border-slate-300 dark:border-slate-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 dark:text-white sm:text-sm p-2.5"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Subject *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="block w-full rounded-md border-slate-300 dark:border-slate-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 dark:text-white sm:text-sm p-2.5"
          >
            <option value="">Select a subject</option>
            <option value="Vehicle Inquiry">Vehicle Inquiry</option>
            <option value="Test Drive Request">Test Drive Request</option>
            <option value="Financing Options">Financing Options</option>
            <option value="Service Request">Service Request</option>
            <option value="Other">Other</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            className="block w-full rounded-md border-slate-300 dark:border-slate-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 dark:text-white sm:text-sm p-2.5"
          ></textarea>
        </div>
        
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isLoading}
            className={`inline-flex items-center px-6 py-3 ${
              isLoading 
                ? 'bg-blue-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700'
            } text-white font-medium rounded-lg transition shadow-md hover:shadow-lg`}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;