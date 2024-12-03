import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Facebook, Instagram, Github } from 'lucide-react';

const XIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className}
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const SocialMediaBar = () => {
  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com', color: 'hover:bg-[#0077b5]' },
    { name: 'X', icon: XIcon, url: 'https://x.com', color: 'hover:bg-black' },
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com', color: 'hover:bg-[#4267B2]' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com', color: 'hover:bg-[#E1306C]' },
    { name: 'GitHub', icon: Github, url: 'https://github.com', color: 'hover:bg-[#333333]' }
  ];

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-2 p-2">
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-2 rounded-l-lg backdrop-blur-sm bg-white/80 shadow-lg 
            hover:pr-24 hover:text-white transition-all duration-300 group relative ${social.color}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ x: -5 }}
        >
          <social.icon className="w-5 h-5" />
          <span className="absolute right-12 top-1/2 -translate-y-1/2 text-sm font-medium 
            text-gray-800 group-hover:text-white opacity-0 group-hover:opacity-100 whitespace-nowrap 
            transition-all duration-300 group-hover:right-6">
            {social.name}
          </span>
        </motion.a>
      ))}
    </div>
  );
};

export default SocialMediaBar;
