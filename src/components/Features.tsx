import React from 'react';
import AnimateOnView from './AnimateOnView';
import { Brain, Database, Network, Lock, BarChart, Zap } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
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
);

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Harness AI-driven analytics to decode complex industrial data in real-time, enabling predictive maintenance, anomaly detection, and operational excellence."
    },
    {
      icon: Network,
      title: "IoT Integration",
      description: "Enable seamless IoT device integration for real-time monitoring, intelligent automation, and centralized operational visibility across diverse production environments."
    },
    {
      icon: Database,
      title: "Data Processing",
      description: "Accelerate decision-making with a robust data pipeline that processes vast datasets swiftly, ensuring precise and actionable insights."
    },
    {
      icon: Lock,
      title: "Security First",
      description: "Ensure industrial-grade security with advanced encryption protocols and proactive threat detection, safeguarding your data at every step."
    },
    {
      icon: BarChart,
      title: "Business Intelligence",
      description: "Convert operational data into actionable intelligence using sophisticated visualization tools tailored for enhanced strategic planning."
    },
    {
      icon: Zap,
      title: "Real-time Operations",
      description: "Manage industrial workflows in real-time with instant notifications, automated system responses, and actionable insights."
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden" id="features">
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
              Powerful Features
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive suite of intelligent solutions designed to transform your business
          </p>
        </AnimateOnView>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;