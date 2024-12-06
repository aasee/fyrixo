import React from 'react';
import AnimateOnView from './AnimateOnView';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-purple-50 opacity-50" />
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-[10%] w-72 h-72 bg-gradient-to-br from-rose-500/10 to-purple-500/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 left-[10%] w-96 h-96 bg-gradient-to-br from-purple-500/10 to-rose-500/10 rounded-full blur-3xl animate-float-medium" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-10 text-center lg:text-left">
            {/* Company Name and Tagline */}
            <AnimateOnView className="inline-block">
              <div className="inline-flex items-center px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
                <span className="text-2xl font-bold bg-gradient-to-r from-rose-700 to-purple-900 bg-clip-text text-transparent">
                  Fyrixo
                </span>
                <ChevronRight className="w-5 h-5 mx-2 text-gray-400" />
                <span className="text-gray-600">Smart and Seamless</span>
              </div>
            </AnimateOnView>

            {/* Main Heading */}
            <AnimateOnView delay={0.1} className="space-y-6">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-rose-700 to-purple-900 bg-clip-text text-transparent">
                  Transform Your Business
                </span>
                <br />
                <span className="text-gray-800">
                  with AI & IoT Solutions
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Unlock the power of intelligent automation and data-driven insights with our cutting-edge platform. Experience seamless integration of AI and IoT technologies.
              </p>
            </AnimateOnView>

            {/* CTA Buttons */}
            <AnimateOnView delay={0.2} className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#features"
                className="group px-8 py-4 bg-gradient-to-r from-rose-700 to-purple-900 text-white rounded-xl hover:opacity-90 transition-all flex items-center gap-2 relative overflow-hidden shadow-lg hover:shadow-xl"
              >
                <span className="relative z-10">Learn More</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-rose-700 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              
              <a
                href="#contact"
                className="group px-8 py-4 bg-white/70 backdrop-blur text-gray-800 rounded-xl border-2 border-gray-100 hover:border-rose-700/50 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </AnimateOnView>

            {/* Trust Indicators */}
            <AnimateOnView delay={0.3} className="pt-8">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-gray-600">Enterprise Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                  <span className="text-gray-600">24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-purple-500" />
                  <span className="text-gray-600">99.9% Uptime</span>
                </div>
              </div>
            </AnimateOnView>
          </div>

          {/* Illustration */}
          <AnimateOnView delay={0.2} className="relative lg:block">
            <div className="relative w-full max-w-2xl mx-auto h-[500px] flex items-center justify-center">
              {/* Central Circle with Pulse Effect */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse" />
                <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-rose-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <svg className="w-12 h-12 text-rose-500/70" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                          d="M2.05 11h19.9 M2.05 13h19.9" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                          d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                  </svg>
                </div>
              </div>

              {/* Floating Tech Elements */}
              <div className="absolute inset-0">
                {/* AI/ML */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 p-3">
                  <div className="bg-gradient-to-br from-rose-500/5 to-purple-500/5 backdrop-blur-sm rounded-lg p-4 border border-white/5 transform hover:scale-105 transition-transform duration-300">
                    <svg className="w-6 h-6 text-rose-500/70" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>

                {/* Cloud */}
                <div className="absolute top-1/4 right-10 p-3">
                  <div className="bg-gradient-to-br from-purple-500/5 to-rose-500/5 backdrop-blur-sm rounded-lg p-4 border border-white/5 transform hover:scale-105 transition-transform duration-300">
                    <svg className="w-6 h-6 text-purple-500/70" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                </div>

                {/* Data */}
                <div className="absolute bottom-1/4 right-10 p-3">
                  <div className="bg-gradient-to-br from-rose-500/5 to-purple-500/5 backdrop-blur-sm rounded-lg p-4 border border-white/5 transform hover:scale-105 transition-transform duration-300">
                    <svg className="w-6 h-6 text-rose-500/70" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  </div>
                </div>

                {/* Analytics */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 p-3">
                  <div className="bg-gradient-to-br from-purple-500/5 to-rose-500/5 backdrop-blur-sm rounded-lg p-4 border border-white/5 transform hover:scale-105 transition-transform duration-300">
                    <svg className="w-6 h-6 text-purple-500/70" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                            d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>

                {/* IoT */}
                <div className="absolute bottom-1/4 left-10 p-3">
                  <div className="bg-gradient-to-br from-rose-500/5 to-purple-500/5 backdrop-blur-sm rounded-lg p-4 border border-white/5 transform hover:scale-105 transition-transform duration-300">
                    <svg className="w-6 h-6 text-rose-500/70" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                </div>

                {/* Security */}
                <div className="absolute top-1/4 left-10 p-3">
                  <div className="bg-gradient-to-br from-purple-500/5 to-rose-500/5 backdrop-blur-sm rounded-lg p-4 border border-white/5 transform hover:scale-105 transition-transform duration-300">
                    <svg className="w-6 h-6 text-purple-500/70" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <g className="opacity-20">
                    <path className="animate-dash-slow" 
                          d="M200,100 C200,100 200,150 200,200 M200,200 C200,250 200,300 200,300" 
                          stroke="url(#line-gradient)" 
                          strokeWidth="1"
                          fill="none" />
                    <path className="animate-dash-slow" 
                          d="M100,200 C150,200 180,200 200,200 M200,200 C220,200 250,200 300,200" 
                          stroke="url(#line-gradient)" 
                          strokeWidth="1"
                          fill="none" />
                    <path className="animate-dash-slow" 
                          d="M120,140 C160,160 180,180 200,200 M200,200 C220,220 240,240 280,260" 
                          stroke="url(#line-gradient)" 
                          strokeWidth="1"
                          fill="none" />
                  </g>
                  <defs>
                    <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgb(190, 24, 93)" />
                      <stop offset="100%" stopColor="rgb(88, 28, 135)" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </AnimateOnView>
        </div>
      </div>
    </section>
  );
};

export default Hero;