import { Factory, Cloud, LineChart, Bell, Cpu, Building2, 
         WrenchIcon, Signal, Zap, Truck, ClipboardCheck, Bot,
         Brain, Database, Network, Lock, BarChart } from 'lucide-react';

export const heroContent = {
  company: {
    name: "Fyrixo",
    tagline: "Smart and Seamless"
  },
  mainHeading: {
    highlight: "Revolutionize Industrial Operations",
    subtext: "with Intelligent IoT and AI Solutions"
  },
  description: "Leverage our state-of-the-art IoT platform to unify your industrial data streams into a single, real-time dashboard. Empower your decision-making with predictive insights and automation powered by advanced AI and Machine Learning, tailored for industrial efficiency.",
  buttons: {
    primary: {
      text: "Learn More",
      href: "#features"
    },
    secondary: {
      text: "Get in Touch",
      href: "#contact"
    }
  },
  trustIndicators: [
    {
      text: "Enterprise Ready",
      color: "bg-green-500"
    },
    {
      text: "24/7 Support",
      color: "bg-blue-500"
    },
    {
      text: "99.9% Uptime",
      color: "bg-purple-500"
    }
  ]
};

export const industryApplicationsContent = {
  header: {
    title: "Industry Applications: Revolutionizing Operations with IIoT",
    description: "At Fyrixo, we provide cutting-edge IIoT(Industrial IoT) solutions tailored to drive operational efficiency, reduce downtime, and optimize performance across various industries. Our platform integrates AI, machine learning, and real-time analytics to transform how businesses manage their processes."
  },
  applications: [
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
  ],
  useCases: {
    header: {
      title: "Use Cases",
      description: "Discover how our IIoT solutions transform industrial operations across various scenarios, delivering tangible benefits and measurable improvements."
    },
    items: [
      {
        title: "Predictive Maintenance",
        icon: WrenchIcon,
        description: "Anticipate equipment failures before they occur with real-time diagnostics and AI-powered predictions to reduce downtime and maintenance costs."
      },
      {
        title: "Real-Time Asset Monitoring",
        icon: Signal,
        description: "Monitor the health and status of machines, sensors, and connected devices in real-time to ensure seamless operations."
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
    ]
  }
};

export const featuresContent = {
  header: {
    title: "Powerful Features",
    description: "Comprehensive suite of intelligent solutions designed to transform your business"
  },
  features: [
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
  ]
};
