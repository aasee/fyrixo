import React from 'react';
import { Activity } from 'lucide-react';
import AnimateOnView from './AnimateOnView';
import templateData from '../templates/AppTemplate.json';
import { IndustryApplicationsContent, getIconByName } from '../templates/templateUtils';

interface ApplicationSectionProps {
  title: string;
  items: string[];
  iconName: string;
}

const ApplicationSection: React.FC<ApplicationSectionProps> = ({ title, items, iconName }) => {
  const Icon = getIconByName(iconName);
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <div className="flex items-start gap-4 h-full">
        <div className="p-3 bg-gradient-to-br from-rose-100 to-purple-100 rounded-lg shrink-0">
          <Icon className="w-6 h-6 text-rose-700" />
        </div>
        <div className="flex flex-col h-full">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h3>
          <ul className="space-y-4 flex-grow">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <Activity className="w-4 h-4 text-purple-600 mt-1.5 shrink-0" />
                <span className="text-gray-600" dangerouslySetInnerHTML={{
                  __html: item.includes(':') 
                    ? item.replace(/^([^:]+):/, '<strong>$1:</strong>')
                    : item
                }} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const UseCaseCard: React.FC<{ title: string; description: string; iconName: string }> = ({ title, description, iconName }) => {
  const Icon = getIconByName(iconName);
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2.5 bg-gradient-to-br from-rose-100 to-purple-100 rounded-lg">
          <Icon className="w-5 h-5 text-rose-700" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 flex-grow">{description}</p>
    </div>
  );
};

const IndustryApplications: React.FC = () => {
  const content = templateData.industryApplications as IndustryApplicationsContent;

  return (
    <section id="applications" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <AnimateOnView>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-rose-700 to-purple-900 bg-clip-text text-transparent">
                {content.header.title}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {content.header.description}
            </p>
          </div>
        </AnimateOnView>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr mb-20">
          {content.applications.map((app, index) => (
            <AnimateOnView key={index} delay={index * 0.1}>
              <ApplicationSection {...app} />
            </AnimateOnView>
          ))}
        </div>

        <AnimateOnView>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-rose-700 to-purple-900 bg-clip-text text-transparent">
                {content.useCases.header.title}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {content.useCases.header.description}
            </p>
          </div>
        </AnimateOnView>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
          {content.useCases.items.map((useCase, index) => (
            <AnimateOnView key={index} delay={index * 0.1}>
              <UseCaseCard {...useCase} />
            </AnimateOnView>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute -z-10 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-rose-300 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default IndustryApplications;
