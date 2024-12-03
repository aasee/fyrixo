import React, { useState } from 'react';
import { Send, Mail, User, MessageSquare } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';
import { useToast } from '../contexts/ToastContext';
import LoadingSpinner from './LoadingSpinner';

const Contact = () => {
  const { showToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form
      setFormState({ name: '', email: '', message: '' });
      showToast('Message sent successfully!', 'success');
    } catch (error) {
      showToast('Failed to send message. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="relative py-20 overflow-hidden" id="contact">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-purple-50 opacity-50" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-700/20 to-purple-900/20" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-900/20 to-rose-700/20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-rose-700 to-purple-900 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Ready to transform your business? Let's discuss how we can help.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll 
          animation="fadeInUp" 
          delay={0.2}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 relative">
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-rose-500/10 to-purple-500/10 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-rose-500/10 rounded-full blur-xl" />

            <form onSubmit={handleSubmit} className="relative space-y-6">
              <AnimateOnScroll delay={0.3} className="relative">
                <div className={`relative transition-all duration-300 ${focusedField === 'name' ? 'scale-[1.02]' : ''}`}>
                  <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'name' ? 'text-rose-700' : 'text-gray-400'}`} />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formState.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-12 py-4 bg-white/50 backdrop-blur rounded-xl border-2 border-gray-100 focus:border-rose-700/50 outline-none transition-all"
                    required
                  />
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.4} className="relative">
                <div className={`relative transition-all duration-300 ${focusedField === 'email' ? 'scale-[1.02]' : ''}`}>
                  <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'email' ? 'text-rose-700' : 'text-gray-400'}`} />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formState.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-12 py-4 bg-white/50 backdrop-blur rounded-xl border-2 border-gray-100 focus:border-rose-700/50 outline-none transition-all"
                    required
                  />
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.5} className="relative">
                <div className={`relative transition-all duration-300 ${focusedField === 'message' ? 'scale-[1.02]' : ''}`}>
                  <MessageSquare className={`absolute left-4 top-6 w-5 h-5 transition-colors ${focusedField === 'message' ? 'text-rose-700' : 'text-gray-400'}`} />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formState.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-12 py-4 bg-white/50 backdrop-blur rounded-xl border-2 border-gray-100 focus:border-rose-700/50 outline-none transition-all min-h-[150px] resize-none"
                    required
                  />
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.6}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-rose-700 to-purple-900 text-white rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <LoadingSpinner size="sm" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </AnimateOnScroll>
            </form>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Contact;