import React, { useState } from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { useToast } from '../contexts/ToastContext';
import LoadingSpinner from './LoadingSpinner';
import template from '../templates/AppTemplate.json';
import { getIconByName } from '../templates/templateUtils';

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
      const response = await fetch(template.contact.api.formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        setFormState({ name: '', email: '', message: '' });
        showToast(template.contact.toast.success, 'success');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      showToast(template.contact.toast.error, 'error');
      console.error('Form error:', error);
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

  const renderField = (fieldName: 'name' | 'email' | 'message') => {
    const field = template.contact.form.fields[fieldName];
    const Icon = getIconByName(field.iconName);
    const isTextArea = fieldName === 'message';
    const InputComponent = isTextArea ? 'textarea' : 'input';

    if (!Icon) return null;

    return (
      <AnimateOnScroll delay={0.3 + (['name', 'email', 'message'].indexOf(fieldName) * 0.1)} className="relative">
        <div className={`relative transition-all duration-300 ${focusedField === fieldName ? 'scale-[1.02]' : ''}`}>
          <Icon className={`absolute left-4 ${isTextArea ? 'top-6' : 'top-1/2 -translate-y-1/2'} w-5 h-5 transition-colors ${focusedField === fieldName ? 'text-rose-700' : 'text-gray-400'}`} />
          <InputComponent
            type={fieldName === 'email' ? 'email' : 'text'}
            name={fieldName}
            placeholder={field.placeholder}
            value={formState[fieldName]}
            onChange={handleInputChange}
            onFocus={() => setFocusedField(fieldName)}
            onBlur={() => setFocusedField(null)}
            className={`w-full px-12 py-4 bg-white/50 backdrop-blur rounded-xl border-2 border-gray-100 focus:border-rose-700/50 outline-none transition-all ${isTextArea ? 'min-h-[150px] resize-none' : ''}`}
            required
          />
        </div>
      </AnimateOnScroll>
    );
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
              {template.contact.header.title}
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            {template.contact.header.description}
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
              {renderField('name')}
              {renderField('email')}
              {renderField('message')}

              <AnimateOnScroll delay={0.6}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-rose-700 to-purple-900 text-white rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <LoadingSpinner size="sm" />
                      <span>{template.contact.form.submitButton.loadingText}</span>
                    </>
                  ) : (
                    <>
                      {(() => {
                        const Icon = getIconByName(template.contact.form.submitButton.iconName);
                        return Icon ? <Icon className="w-5 h-5" /> : null;
                      })()}
                      <span>{template.contact.form.submitButton.text}</span>
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