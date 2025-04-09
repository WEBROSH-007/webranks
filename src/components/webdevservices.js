import { useState, useEffect } from 'react';
import { Code, Globe, Zap, Users, Award, Layers, Settings, PenTool, Layout, Database, ShoppingCart, Briefcase, Monitor, Image, BookOpen, FileText, Smartphone, Rocket, Palette, Server, DollarSign, BarChart } from 'lucide-react';

export default function WebDevelopmentServices() {
  const [activeTab, setActiveTab] = useState('websites');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Apply background color to the entire document body
    document.body.style.backgroundColor = '#0a192f'; // Tech-inspired deep blue background
    
    // Clean up when component unmounts
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  const frameworksData = [
    { name: "React.js", purpose: "Dynamic, fast SPAs with reusable components", icon: <Code className="mr-2" /> },
    { name: "Next.js", purpose: "Server-side rendering, static site generation, and SEO-friendly builds", icon: <Globe className="mr-2" /> },
    { name: "HTML5/CSS3", purpose: "Clean static sites, fast load, fully customizable", icon: <Layout className="mr-2" /> },
    { name: "Tailwind CSS / Bootstrap", purpose: "Rapid UI development with responsive, modern designs", icon: <PenTool className="mr-2" /> },
    { name: "Figma / Adobe XD", purpose: "UI/UX design mockups and user flow wireframes", icon: <Layers className="mr-2" /> }
  ];

  const websiteTypes = [
    { 
      type: "SaaS Platforms", 
      desc: "Cloud-based subscription software solutions", 
      icon: <Server size={32} />,
      bgGradient: "from-purple-500 to-indigo-600",
      textColor: "text-white"
    },
    { 
      type: "AI-Powered Interfaces", 
      desc: "Smart, adaptive user experiences", 
      icon: <Rocket size={32} />,
      bgGradient: "from-blue-400 to-cyan-500",
      textColor: "text-white"
    },
    { 
      type: "E-commerce Platforms", 
      desc: "Feature-rich online shopping experiences", 
      icon: <ShoppingCart size={32} />,
      bgGradient: "from-emerald-400 to-teal-500",
      textColor: "text-white"
    },
    { 
      type: "Corporate Solutions", 
      desc: "Enterprise-grade web applications", 
      icon: <Briefcase size={32} />,
      bgGradient: "from-blue-700 to-indigo-800",
      textColor: "text-white"
    },
    { 
      type: "Creative Portfolios", 
      desc: "Showcase work with immersive designs", 
      icon: <Palette size={32} />,
      bgGradient: "from-pink-500 to-rose-500",
      textColor: "text-white"
    },
    { 
      type: "Financial Dashboards", 
      desc: "Data visualization and analytics", 
      icon: <BarChart size={32} />,
      bgGradient: "from-green-500 to-emerald-600",
      textColor: "text-white"
    },
    { 
      type: "Educational Platforms", 
      desc: "Interactive learning experiences", 
      icon: <BookOpen size={32} />,
      bgGradient: "from-amber-500 to-orange-600",
      textColor: "text-white"
    },
    { 
      type: "Membership Sites", 
      desc: "Subscription and community platforms", 
      icon: <Users size={32} />,
      bgGradient: "from-violet-500 to-purple-600",
      textColor: "text-white"
    }
  ];

  return (
    <div className="min-h-screen mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8 font-sans text-gray-200 bg-[#0a192f] pt-[100px]">
      {/* Hero Section */}
      <div className={`py-16 md:py-24 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'} shadow-lg border border-blue-700`}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Website Development Services</h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-8">Let's Build Your Digital Presence with Stunning Websites!</p>
          <p className="text-gray-300 text-lg mb-8 px-4">
            From eye-catching landing pages to complex web platforms, we bring your vision to life using powerful technologies like <span className="font-medium text-blue-300">React.js</span>, <span className="font-medium text-blue-300">Next.js</span>, <span className="font-medium text-blue-300">HTML5/CSS3</span>, and modern UI/UX design principles. Whether you're a startup, a growing brand, or an enterprise — we've got you covered.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Get Started
          </button>
        </div>
      </div>

      {/* Our Services Section */}
      <section className="mb-20">
        <div className={`text-center mb-12 transition-all duration-1000 transform ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
          <h2 className="text-3xl font-bold text-blue-300 mb-4">Our Services in Website Development</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <div 
              key={index}
              className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <ServiceCard 
                icon={[
                  <Layout size={32} className="text-blue-400" />,
                  <Smartphone size={32} className="text-blue-400" />,
                  <Zap size={32} className="text-blue-400" />,
                  <Code size={32} className="text-blue-400" />,
                  <Globe size={32} className="text-blue-400" />,
                  <Settings size={32} className="text-blue-400" />
                ][index]}
                title={[
                  "Custom Website Development",
                  "Responsive Web Design",
                  "Next.js Static & Dynamic Websites",
                  "Single Page Applications (SPA)",
                  "HTML/CSS Static Pages",
                  "Website Redesign & Optimization"
                ][index]}
                description={[
                  "Tailored websites built to meet your specific business needs and goals.",
                  "Websites that look and function perfectly on all devices and screen sizes.",
                  "Blazing-fast sites with server-side rendering for optimal performance.",
                  "Interactive web apps built with React.js for seamless user experiences.",
                  "Lightweight, fast-loading sites perfect for simpler web presences.",
                  "Revamp your existing website for better performance and user experience."
                ][index]}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mb-20 bg-gradient-to-r from-blue-900 to-indigo-900 py-16 px-4 rounded-xl shadow-lg border border-blue-700">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 transform ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '600ms' }}>
          <h2 className="text-3xl font-bold text-center text-blue-300 mb-12">Why Choose Us?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <div 
                key={index}
                className={`flex items-start transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-x-0' : index % 2 === 0 ? 'opacity-0 -translate-x-16' : 'opacity-0 translate-x-16'}`}
                style={{ transitionDelay: `${700 + index * 100}ms` }}
              >
                <div className="flex-shrink-0 mr-4 bg-blue-800/50 p-2 rounded-lg shadow-md border border-blue-500">
                  {[
                    <Users size={28} className="text-blue-300" />,
                    <Code size={28} className="text-blue-300" />,
                    <Smartphone size={28} className="text-blue-300" />,
                    <PenTool size={28} className="text-blue-300" />,
                    <Zap size={28} className="text-blue-300" />,
                    <Settings size={28} className="text-blue-300" />
                  ][index]}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-200">
                    {[
                      "Client-Centric Design",
                      "Clean & Scalable Code",
                      "Fully Responsive",
                      "UI/UX Driven",
                      "Fast Load Times",
                      "End-to-End Support"
                    ][index]}
                  </h3>
                  <p className="text-gray-300">
                    {[
                      "Every project starts with understanding your brand goals and target audience needs.",
                      "We write reusable, well-structured code for long-term success and easy maintenance.",
                      "Your website will look great and function perfectly on desktops, tablets, and mobile devices.",
                      "Engaging design that boosts user experience & conversions through intuitive interfaces.",
                      "Optimized performance for speed, SEO, and improved user engagement.",
                      "Comprehensive assistance from design to deployment and ongoing maintenance."
                    ][index]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frameworks & Tools Section */}
      <section className="mb-20">
        <div className={`text-center mb-12 transition-all duration-1000 transform ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '1000ms' }}>
          <h2 className="text-3xl font-bold text-blue-300 mb-4">Frameworks & Tools We Use</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
        </div>

        <div className={`bg-[#112240] rounded-xl shadow-lg overflow-hidden transition-all duration-1000 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} border border-blue-700`} style={{ transitionDelay: '1100ms' }}>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-blue-900/50 text-blue-200">
                  <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider border-b border-blue-700">Framework/Tool</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider border-b border-blue-700">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-800">
                {frameworksData.map((framework, index) => (
                  <tr 
                    key={index} 
                    className={`${index % 2 === 0 ? 'bg-blue-900/20' : 'bg-[#112240]'} hover:bg-blue-800/30 transition-colors duration-300`}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {framework.icon}
                        <span className="font-medium text-blue-300">{framework.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-300">{framework.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why These Technologies Section */}
      <section className="mb-20 bg-gradient-to-r from-blue-900 to-indigo-900 py-16 px-4 rounded-xl shadow-lg border border-blue-700">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 transform ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1200ms' }}>
          <h2 className="text-3xl font-bold text-center text-blue-300 mb-12">Why These Technologies?</h2>
          
          <div className="space-y-8">
            {[0, 1, 2, 3].map((index) => (
              <div 
                key={index}
                className={`flex items-start transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                style={{ transitionDelay: `${1300 + index * 150}ms` }}
              >
                <div className="flex-shrink-0 bg-[#112240] p-3 rounded-full mr-4 shadow-md border border-blue-500">
                  {[
                    <Code size={24} className="text-blue-300" />,
                    <Globe size={24} className="text-blue-300" />,
                    <Layout size={24} className="text-blue-300" />,
                    <PenTool size={24} className="text-blue-300" />
                  ][index]}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-200">
                    {["React.js", "Next.js", "HTML/CSS", "Tailwind/Bootstrap"][index]}
                  </h3>
                  <p className="text-gray-300">
                    {[
                      "Ideal for fast, interactive UIs with component-based architecture that makes development efficient and maintenance easier.",
                      "Great for SEO-heavy, scalable websites with server-side rendering (SSR) or static site generation (SSG) support for optimal performance.",
                      "Perfect for lightweight landing pages and static websites where speed and simplicity are priorities.",
                      "Speed up styling without compromising on custom design, enabling responsive layouts with minimal effort."
                    ][index]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Websites Section - UPDATED WITH NEW DESIGN */}
      <section className="mb-20">
        <div className={`text-center mb-12 transition-all duration-1000 transform ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '1700ms' }}>
          <h2 className="text-4xl font-bold text-blue-300 mb-4">Types of Websites We Build</h2>
          <div className="w-32 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-12">
            From cutting-edge SaaS platforms to immersive creative portfolios, we specialize in building websites that stand out in today's digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {websiteTypes.map((item, index) => (
            <div 
              key={index} 
              className={`rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'} border border-transparent hover:border-blue-400 group`}
              style={{ transitionDelay: `${1800 + index * 100}ms` }}
            >
              <div className={`bg-gradient-to-br ${item.bgGradient} p-8 h-full relative overflow-hidden`}>
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12 transition-transform duration-700 group-hover:scale-150"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-black/10 rounded-full -ml-8 -mb-8 transition-transform duration-700 group-hover:scale-150"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="bg-white/20 p-4 rounded-full shadow-lg backdrop-blur-sm">
                      <div className={item.textColor}>
                        {item.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className={`text-xl font-bold text-center mb-3 ${item.textColor}`}>{item.type}</h3>
                  <p className={`${item.textColor} text-center opacity-90`}>{item.desc}</p>
                  
                  <div className="mt-6 flex justify-center">
                    <button className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white text-sm font-medium transition-all duration-300 backdrop-blur-sm">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`text-center mt-12 transition-all duration-1000 transform ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '2200ms' }}>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 flex items-center mx-auto">
            <Rocket size={20} className="mr-2" />
            View Our Portfolio
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`mb-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 rounded-xl text-center shadow-lg transition-all duration-1000 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} border border-blue-500`} style={{ transitionDelay: '2300ms' }}>
        <h2 className="text-3xl font-bold mb-6">Ready to Build Your Dream Website?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Let's collaborate to create a website that perfectly represents your brand and drives results.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-blue-700 hover:bg-blue-100 font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Contact Us
          </button>
          <button className="bg-transparent border-2 border-white text-white hover:bg-blue-700 font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            View Portfolio
          </button>
        </div>
      </section>
    </div>
  );
}

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-[#112240] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-800 hover:border-blue-600 h-full">
      <div className="mb-4 text-blue-400">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-blue-300">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};