import React from 'react';
import { Factory, Cloud, LineChart, Bell, Cpu, Building2, Activity, 
         WrenchIcon, Signal, Zap, Truck, ClipboardCheck, Bot } from 'lucide-react';
import AnimateOnView from './AnimateOnView';

interface ApplicationSectionProps {
  title: string;
  items: string[];
  icon: React.ElementType;
}

const ApplicationSection: React.FC<ApplicationSectionProps> = ({ title, items, icon: Icon }) => (
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

const IndustryApplications: React.FC = () => {
  const applications = [
    {
      title: "Manufacturing Efficiency",
      icon: Factory,
      items: [
        "Optimize Operational Performance: Improve Overall Equipment Effectiveness (OEE) by monitoring downtime, performance, and quality metrics in real-time.",
        "Bottleneck Identification: Pinpoint areas of inefficiency on production lines to maximize machine utilization, streamline workflows, and minimize idle time.",
        "Data-Driven Insights: Leverage AI-powered analytics to continuously enhance manufacturing processes, ensuring sustained improvements in production efficiency."
      ]
    },
    {
      title: "Cloud-Connected Insights",
      icon: Cloud,
      items: [
        "Centralized Data Aggregation: Utilize a multi-tenant cloud platform that integrates data from various sources across your operations, enabling a unified view of performance metrics.",
        "Global Remote Monitoring: Enable remote access and real-time analytics, allowing operators to monitor operations, receive insights, and make informed decisions from any location worldwide."
      ]
    },
    {
      title: "Data-Driven Decision Making",
      icon: LineChart,
      items: [
        "Predictive Analytics: Harness the power of IoT-enabled data processing to predict equipment failures, identify inefficiencies, and optimize production schedules.",
        "Condition Monitoring: Continuously track machine health with predictive insights, allowing your team to take preemptive actions before issues escalate, thus improving asset longevity."
      ]
    },
    {
      title: "Real-Time Monitoring and Alerts",
      icon: Bell,
      items: [
        "Live Operational Dashboards: Visualize uptime, downtime, and other critical metrics with real-time dashboards, providing immediate insights into production processes.",
        "Instant Alerts: Receive automated notifications for machine stoppages, quality issues, or maintenance needs, ensuring timely interventions and minimizing production delays."
      ]
    },
    {
      title: "Edge Computing Integration",
      icon: Cpu,
      items: [
        "Real-Time Edge Data Processing: Connect legacy equipment to the IoT ecosystem and perform edge computing to reduce latency and ensure system reliability, enabling quicker decision-making.",
        "Cybersecurity Assurance: Integrate robust cybersecurity protocols to protect all connected devices and systems from external threats while ensuring seamless connectivity across diverse environments."
      ]
    },
    {
      title: "Custom Solutions for Multiple Industries",
      icon: Building2,
      items: [
        "Tailored for Specific Needs: From manufacturing and food processing to textiles and automotive, we offer customized IIoT solutions designed to address the unique challenges faced by each industry.",
        "Industry-Specific Optimization: Whether you're streamlining production lines or improving supply chain operations, our IIoT platform adapts to deliver the highest impact in any sector."
      ]
    }
  ];

  const useCases = [
    {
      title: "Predictive Maintenance",
      icon: WrenchIcon,
      description: "Anticipate equipment failures before they occur with real-time diagnostics and AI-powered predictions to reduce downtime and maintenance costs."
    },
    {
      title: "Real-Time Asset Monitoring",
      icon: Signal,
      description: "Monitor the health and status of machines, sensors, and connected devices in real-time to ensure seamless operations and early issue detection."
    },
    {
      title: "Smart Manufacturing",
      icon: Factory,
      description: "Optimize production lines with automated processes and real-time monitoring, driving efficiency and minimizing human errors."
    },
    {
      title: "Energy Management",
      icon: Zap,
      description: "Track and optimize energy usage with IoT-powered systems that reduce waste and improve sustainability in industrial operations."
    },
    {
      title: "Supply Chain Optimization",
      icon: Truck,
      description: "Connect the supply chain from warehouse to delivery, using real-time data and AI insights to streamline logistics and improve delivery timelines."
    },
    {
      title: "Quality Control and Analytics",
      icon: ClipboardCheck,
      description: "Utilize sensors and AI to monitor production quality and gather actionable insights, ensuring product consistency and regulatory compliance."
    },
    {
      title: "Automation and Robotics",
      icon: Bot,
      description: "Integrate robotics and automated systems with IoT devices to enhance precision, productivity, and safety on the factory floor."
    }
  ];

  const UseCaseCard: React.FC<{ title: string; description: string; icon: React.ElementType }> = ({ title, description, icon: Icon }) => (
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

  return (
    <section id="applications" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <AnimateOnView>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-rose-700 to-purple-900 bg-clip-text text-transparent">
                Industry Applications: Revolutionizing Operations with IIoT
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              At Fyrixo, we provide cutting-edge IIoT(Industrial IoT) solutions tailored to drive operational efficiency, reduce downtime, and optimize performance across various industries. 
              Our platform integrates AI, machine learning, and real-time analytics to transform how businesses manage their processes.
            </p>
          </div>
        </AnimateOnView>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr mb-20">
          {applications.map((app, index) => (
            <AnimateOnView key={index} delay={index * 0.1}>
              <ApplicationSection {...app} />
            </AnimateOnView>
          ))}
        </div>

        <AnimateOnView>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-rose-700 to-purple-900 bg-clip-text text-transparent">
                Use Cases
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Discover how our IIoT solutions transform industrial operations across various scenarios, delivering tangible benefits and measurable improvements.
            </p>
          </div>
        </AnimateOnView>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
          {useCases.map((useCase, index) => (
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
