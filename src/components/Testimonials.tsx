import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import template from '../templates/AppTemplate.json';
import { getIconByName } from '../templates/templateUtils';

const TestimonialCard = ({ name, role, company, content }: { 
  name?: string;
  role?: string;
  company?: string;
  content: string;
}) => {
  const Star = getIconByName(template.testimonials.card.icons.star);
  const Quote = getIconByName(template.testimonials.card.icons.quote);

  if (!Star || !Quote) return null;

  return (
    <AnimateOnScroll className="relative">
      <div className="relative bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 h-full group hover:scale-[1.02] transition-all">
        {/* Decorative Elements */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-rose-500/10 to-purple-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-rose-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <div className="relative space-y-6">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-rose-700 text-rose-700" />
            ))}
          </div>

          <Quote className="w-10 h-10 text-purple-900/20" />
          
          <p className="text-gray-600 leading-relaxed italic">
            "{content}"
          </p>
          
          {/* {(name || role || company) && (
            <div className="pt-4 border-t border-gray-100">
              {name && <p className="font-semibold text-gray-800">{name}</p>}
              {role && <p className="text-sm text-gray-600">{role}</p>}
              {company && (
                <p className="text-sm font-medium bg-gradient-to-r from-rose-700 to-purple-900 bg-clip-text text-transparent">
                  {company}
                </p>
              )}
            </div>
          )} */}
        </div>
      </div>
    </AnimateOnScroll>
  );
};

const Testimonials = () => {
  return (
    <section className="relative py-20 overflow-hidden" id="testimonials">
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
              {template.testimonials.header.title}
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            {template.testimonials.header.description}
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {template.testimonials.items.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
