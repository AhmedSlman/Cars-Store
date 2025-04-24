import React from 'react';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import ContactForm from './ContactForm';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Have questions about a specific vehicle or interested in scheduling a test drive?
            Our team is here to help you find your perfect luxury vehicle.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div className="bg-slate-50 dark:bg-slate-900 rounded-xl shadow-md p-6 mb-8 h-64 md:h-96">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52861.676570422634!2d-118.43186909021426!3d34.08346325991708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1698962278121!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '0.5rem' }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Showroom Location"
              ></iframe>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 dark:bg-slate-900 rounded-xl shadow-md p-6 hover:shadow-lg transition flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg text-blue-600 dark:text-blue-400 mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Our Location</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    123 Luxury Lane<br />
                    Beverly Hills, CA 90210
                  </p>
                </div>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-900 rounded-xl shadow-md p-6 hover:shadow-lg transition flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg text-blue-600 dark:text-blue-400 mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Call Us</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    (123) 456-7890<br />
                    Mon-Sat: 9AM - 7PM
                  </p>
                </div>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-900 rounded-xl shadow-md p-6 hover:shadow-lg transition flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg text-blue-600 dark:text-blue-400 mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Email Us</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    info@luxurydrive.com<br />
                    sales@luxurydrive.com
                  </p>
                </div>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-900 rounded-xl shadow-md p-6 hover:shadow-lg transition flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg text-blue-600 dark:text-blue-400 mr-4">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">WhatsApp</h3>
                  <a 
                    href="https://wa.me/11234567890" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline transition"
                  >
                    Message us on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-slate-50 dark:bg-slate-900 rounded-xl shadow-md p-6 md:p-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send Us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;