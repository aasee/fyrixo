import React from 'react';
import template from '../templates/AppTemplate.json';
import { getIconByName } from '../templates/templateUtils';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-rose-500/5 to-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-rose-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img 
                src={import.meta.env.BASE_URL + template.footer.company.logo.src} 
                alt={template.footer.company.logo.alt} 
                className="h-8 w-auto" 
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-transparent">
                {template.footer.company.name}
              </span>
            </div>
            <p className="text-gray-400">
              {template.footer.company.description}
            </p>
            <div className="flex space-x-4">
              {Object.entries(template.footer.company.social).map(([platform, { url, iconName }]) => {
                const Icon = getIconByName(iconName);
                return (
                  <a 
                    key={platform}
                    href={url} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{template.footer.quickLinks.title}</h3>
            <ul className="space-y-4">
              {template.footer.quickLinks.links.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{template.footer.solutions.title}</h3>
            <ul className="space-y-4">
              {template.footer.solutions.links.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{template.footer.contact.title}</h3>
            <ul className="space-y-4">
              {template.footer.contact.info.map((item, index) => {
                const Icon = getIconByName(item.iconName);
                return (
                  <li key={index} className="flex items-center space-x-3 text-gray-400">
                    <Icon className="w-5 h-5" />
                    <span>{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <img 
                src={import.meta.env.BASE_URL + template.footer.company.logo.src} 
                alt={template.footer.company.logo.alt} 
                className="h-16 w-auto" 
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-rose-700 to-purple-900 bg-clip-text text-transparent">
                  {template.footer.company.name}
                </span>
                <span className="text-sm text-gray-600">{template.footer.company.tagline}</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} {template.footer.company.name}. {template.footer.bottomBar.copyright}
            </p>
            <div className="flex space-x-6 text-sm">
              {template.footer.bottomBar.links.map((link, index) => (
                <a 
                  key={index}
                  href={link.url} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
