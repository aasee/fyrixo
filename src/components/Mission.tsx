import React from 'react';
import AnimateOnView from './AnimateOnView';
import { Circle } from 'lucide-react';
import template from '../templates/AppTemplate.json';
import { getIconByName } from '../templates/templateUtils';

const iconMap = {
  // Add your icon names here
};

type IconName = 
  | "Brain" 
  | "Network" 
  | "Database" 
  | "Lock" 
  | "BarChart" 
  | "Zap" 
  | "Factory" 
  | "Cloud" 
  | "LineChart" 
  | "Bell" 
  | "Cpu" 
  | "Building2" 
  | "WrenchIcon" 
  | "Signal" 
  | "Truck" 
  | "ClipboardCheck" 
  | "MapPin"; 

interface MissionCardProps {
  iconName: IconName;
  title: string;
  description: string;
}

const MissionCard = ({ iconName, title, description }: MissionCardProps) => {
  const Icon = getIconByName(iconName);
  return Icon ? (
    <AnimateOnView className="relative">
      <div className="relative bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 h-full group hover:scale-[1.02] transition-all">
        {/* Decorative Elements */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-rose-500/10 to-purple-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-rose-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <div className="relative space-y-4">
          <div className="w-14 h-14 bg-gradient-to-br from-rose-700/10 to-purple-900/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
            <Icon className="w-7 h-7 text-rose-700 group-hover:text-purple-900 transition-colors" />
          </div>
          
          <h3 className="text-2xl font-bold bg-gradient-to-r from-rose-700 to-purple-900 bg-clip-text text-transparent">
            {title}
          </h3>
          
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </AnimateOnView>
  ) : null;
};

const TimelineItem = ({ year, description }: { year: string, description: string }) => (
  <AnimateOnView className="relative flex-1">
    <div className="relative pt-6">
      {/* Dot on the line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[11px] w-6 h-6 bg-gradient-to-br from-rose-700 to-purple-900 rounded-full flex items-center justify-center">
        <Circle className="w-3 h-3 text-white" />
      </div>
      
      {/* Content */}
      <div className="text-center">
        <h4 className="text-xl font-bold text-purple-900 mb-2">
          {year}
        </h4>
        <p className="text-gray-600 leading-relaxed text-sm">
          {description}
        </p>
      </div>
    </div>
  </AnimateOnView>
);

const Mission = () => {
  return (
    <section className="relative py-20 overflow-hidden" id="mission">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-purple-50 opacity-50" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-700/20 to-purple-900/20" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-900/20 to-rose-700/20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnView className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-rose-700 to-purple-900 bg-clip-text text-transparent">
              {template.mission.header.title}
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            {template.mission.header.description}
          </p>
        </AnimateOnView>

        {/* Timeline */}
        <div className="mb-20 relative">
          {/* Horizontal Line */}
          <div className="absolute left-0 right-0 top-0 h-0.5 bg-gradient-to-r from-rose-700/20 via-purple-900/20 to-rose-700/20" />
          
          <div className="flex gap-8">
            {template.mission.timeline.map((item, index) => (
              <TimelineItem
                key={index}
                year={item.year}
                description={item.description}
              />
            ))}
          </div>
        </div>

        {/* Mission Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {template.mission.cards.map((card: MissionCardProps, index) => (
            <MissionCard
              key={index}
              iconName={card.iconName}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;