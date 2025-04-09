import React, { useState, useEffect, useRef } from 'react';
import { Play, Users, TrendingUp, Clock, Award, Mail, Phone, MapPin, ChevronLeft, ChevronRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function HomePage() {
  // State for testimonials carousel
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  
  // States for scroll animations
  const [sectionsVisible, setSectionsVisible] = useState({
    about: false,
    whyChoose: false,
    testimonials: false,
    secondaryHero: false,
    services: false,
    team: false,
    contact: false
  });

  // Refs for sections
  const aboutRef = useRef(null);
  const whyChooseRef = useRef(null);
  const testimonialsRef = useRef(null);
  const secondaryHeroRef = useRef(null);
  const servicesRef = useRef(null);
  const teamRef = useRef(null);
  const contactRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      image: "/api/placeholder/80/80",
      text: "Working with DigitalEdge transformed our online presence. Their strategic approach to our social media campaigns increased our engagement by 240% in just three months!"
    },
    {
      id: 2,
      name: "Marcus Chen",
      company: "Evolve Retail",
      image: "/api/placeholder/80/80",
      text: "The SEO expertise at DigitalEdge is unmatched. Our organic traffic has doubled since implementing their recommendations, and our conversion rates have improved significantly."
    },
    {
      id: 3,
      name: "Priya Patel",
      company: "NexGen Solutions",
      image: "/api/placeholder/80/80",
      text: "We've worked with several agencies before, but none delivered results like DigitalEdge. Their data-driven approach and transparent reporting make all the difference."
    }
  ];

  const services = [
    { 
      title: "Search Engine Optimization", 
      description: "Boost your visibility with our data-driven SEO strategies that put you at the top of search results.",
      icon: <TrendingUp className="w-10 h-10 mb-4 text-cyan-400" />
    },
    { 
      title: "Pay-Per-Click Advertising", 
      description: "Maximize ROI with targeted PPC campaigns that deliver qualified leads and drive conversions.",
      icon: <Play className="w-10 h-10 mb-4 text-cyan-400" />
    },
    { 
      title: "Social Media Marketing", 
      description: "Engage your audience and build brand loyalty through strategic social media management.",
      icon: <Users className="w-10 h-10 mb-4 text-cyan-400" />
    },
    { 
      title: "Email Marketing", 
      description: "Nurture leads and retain customers with personalized email campaigns that drive results.",
      icon: <Mail className="w-10 h-10 mb-4 text-cyan-400" />
    },
    { 
      title: "Content Strategy", 
      description: "Tell your brand story effectively with compelling content that resonates with your target audience.",
      icon: <Award className="w-10 h-10 mb-4 text-cyan-400" />
    },
    { 
      title: "Analytics & Reporting", 
      description: "Make data-driven decisions with comprehensive analytics and actionable insights.",
      icon: <TrendingUp className="w-10 h-10 mb-4 text-cyan-400" />
    }
  ];

  const team = [
    {
      name: "Alex Rodriguez",
      role: "Founder & CEO",
      expertise: "Digital Strategy, Business Growth",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Jamie Lee",
      role: "SEO Director",
      expertise: "Technical SEO, Content Strategy",
      image: "/api/placeholder/200/200"
    },
    {
      name: "David Okafor",
      role: "PPC Specialist",
      expertise: "Google Ads, Facebook Ads",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Sophia Chen",
      role: "Creative Director",
      expertise: "Brand Strategy, Design",
      image: "/api/placeholder/200/200"
    }
  ];

  // Autoplay for testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Scroll animation observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setSectionsVisible(prev => ({
            ...prev,
            [sectionId]: true
          }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (whyChooseRef.current) observer.observe(whyChooseRef.current);
    if (testimonialsRef.current) observer.observe(testimonialsRef.current);
    if (secondaryHeroRef.current) observer.observe(secondaryHeroRef.current);
    if (servicesRef.current) observer.observe(servicesRef.current);
    if (teamRef.current) observer.observe(teamRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
      if (whyChooseRef.current) observer.unobserve(whyChooseRef.current);
      if (testimonialsRef.current) observer.unobserve(testimonialsRef.current);
      if (secondaryHeroRef.current) observer.unobserve(secondaryHeroRef.current);
      if (servicesRef.current) observer.unobserve(servicesRef.current);
      if (teamRef.current) observer.unobserve(teamRef.current);
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, []);

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    // In a real app, you'd handle the form submission to a backend here
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="font-sans text-gray-200 bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          className="absolute w-full h-full object-cover"
        >
          <source src="/video/home.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-black/80 z-10"></div>
        
        {/* Hero Content */}
        <div className="container mx-auto px-6 relative z-30 text-center max-w-6xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
            DigitalEdge
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
            Transforming brands with data-driven digital strategies that deliver measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50">
              Get Started
            </button>
            <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 hover:shadow-lg hover:shadow-white/30">
              Learn More
            </button>
          </div>
        </div>
        
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Main Content Wrapper - Max Width for Desktop */}
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        {/* About Us Section */}
        <section 
          id="about" 
          ref={aboutRef} 
          className={`py-20 ${sectionsVisible.about ? 'animate-fade-in-up' : 'opacity-0'} transition-all duration-700`}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative">
                <div className="bg-cyan-800/20 absolute -top-4 -left-4 right-16 bottom-16 rounded-lg"></div>
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Our agency at work" 
                  className="relative z-10 rounded-lg shadow-xl hover:shadow-cyan-500/20 transition-all duration-300"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">About DigitalEdge</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Founded in 2018, DigitalEdge has grown from a small startup to a leading digital marketing agency serving clients across industries. Our passion for digital innovation and commitment to measurable results sets us apart.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We believe that exceptional digital marketing combines creativity with data-driven strategy. Our team of experts works closely with every client to create custom solutions that drive growth and deliver ROI.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
                  <h3 className="font-bold text-cyan-400 mb-2">Our Mission</h3>
                  <p className="text-sm text-gray-300">To empower businesses through innovative digital strategies that create lasting growth.</p>
                </div>
                <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
                  <h3 className="font-bold text-cyan-400 mb-2">Our Vision</h3>
                  <p className="text-sm text-gray-300">To be the most trusted partner for businesses navigating the digital landscape.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section 
          id="whyChoose" 
          ref={whyChooseRef}
          className={`py-20 ${sectionsVisible.whyChoose ? 'animate-fade-in-up' : 'opacity-0'} transition-all duration-700`}
        >
          <h2 className="text-3xl font-bold text-center mb-16 text-cyan-400">Why Choose DigitalEdge?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 text-center transform hover:-translate-y-2">
              <div className="bg-cyan-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="text-cyan-400 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">ROI Driven</h3>
              <p className="text-gray-300">
                We focus on strategies that deliver measurable returns. Your success is our success.
              </p>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 text-center transform hover:-translate-y-2">
              <div className="bg-cyan-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Award className="text-cyan-400 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Certified Experts</h3>
              <p className="text-gray-300">
                Our team holds certifications from Google, Facebook, HubSpot, and other industry leaders.
              </p>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 text-center transform hover:-translate-y-2">
              <div className="bg-cyan-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Clock className="text-cyan-400 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">24/7 Support</h3>
              <p className="text-gray-300">
                We're always available to answer questions and address concerns whenever you need us.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section 
          id="testimonials" 
          ref={testimonialsRef}
          className={`py-20 ${sectionsVisible.testimonials ? 'animate-fade-in-up' : 'opacity-0'} transition-all duration-700`}
        >
          <h2 className="text-3xl font-bold text-center mb-16 text-cyan-400">What Our Clients Say</h2>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gray-800 p-8 rounded-lg shadow-md border border-gray-700 hover:shadow-cyan-500/20 transition-all duration-300">
                      <div className="flex items-center mb-6">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-cyan-500/50"
                        />
                        <div>
                          <h4 className="font-bold text-lg text-white">{testimonial.name}</h4>
                          <p className="text-cyan-400">{testimonial.company}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 italic">"{testimonial.text}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center mt-6 gap-3">
              <button 
                onClick={prevTestimonial} 
                className="bg-gray-700 hover:bg-cyan-600 p-2 rounded-full transition-colors duration-300"
              >
                <ChevronLeft size={20} />
              </button>
              {testimonials.map((_, index) => (
                <button 
                  key={index} 
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${currentTestimonial === index ? 'bg-cyan-500' : 'bg-gray-600'} hover:bg-cyan-400 transition-colors duration-300`}
                />
              ))}
              <button 
                onClick={nextTestimonial} 
                className="bg-gray-700 hover:bg-cyan-600 p-2 rounded-full transition-colors duration-300"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Secondary Hero Image Section - Full Width */}
      <section 
        id="secondaryHero" 
        ref={secondaryHeroRef}
        className={`relative py-40 bg-cover bg-center ${sectionsVisible.secondaryHero ? 'animate-fade-in-up' : 'opacity-0'} transition-all duration-700`} 
        style={{ backgroundColor: '#0a1525' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-cyan-900 opacity-80"></div>
        <div className="container mx-auto max-w-6xl px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your Brand Deserves to Be Seen
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Let us help you stand out in today's crowded digital landscape with strategies that capture attention and drive growth.
          </p>
          <button className="bg-cyan-500 text-gray-900 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50">
            Elevate Your Brand Today
          </button>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        {/* Our Services Section */}
        <section 
          id="services" 
          ref={servicesRef}
          className={`py-20 ${sectionsVisible.services ? 'animate-fade-in-up' : 'opacity-0'} transition-all duration-700`}
        >
          <h2 className="text-3xl font-bold text-center mb-16 text-cyan-400">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="p-6 border border-gray-700 rounded-lg hover:border-cyan-500/40 bg-gray-800/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center"
              >
                {service.icon}
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Meet Our Team Section */}
        <section 
          id="team" 
          ref={teamRef}
          className={`py-20 ${sectionsVisible.team ? 'animate-fade-in-up' : 'opacity-0'} transition-all duration-700`}
        >
          <h2 className="text-3xl font-bold text-center mb-16 text-cyan-400">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-700 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-2"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-1 text-white">{member.name}</h3>
                  <p className="text-cyan-400 mb-2">{member.role}</p>
                  <p className="text-sm text-gray-300">{member.expertise}</p>
                  <div className="mt-4 flex justify-center gap-3">
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                      <Linkedin size={18} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                      <Twitter size={18} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Us Section */}
        <section 
          id="contact" 
          ref={contactRef}
          className={`py-20 ${sectionsVisible.contact ? 'animate-fade-in-up' : 'opacity-0'} transition-all duration-700`}
        >
          <h2 className="text-3xl font-bold text-center mb-16 text-cyan-400">Get In Touch</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Send Us a Message</h3>
              
              {isFormSubmitted ? (
                <div className="bg-green-900/30 border border-green-500/30 text-green-400 p-4 rounded-lg">
                  <p className="font-medium">Thank you for your message!</p>
                  <p>We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-200 mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-200 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-200 mb-2">Your Message</label>
                    <textarea
                      id="message"
                      rows="5"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white"
                      placeholder="How can we help you?"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="bg-cyan-500 hover:bg-cyan-600 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
                  <MapPin className="w-6 h-6 text-cyan-400 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Our Office</h4>
                    <p className="text-gray-300">
                      123 Marketing Street, Digital District<br />
                      San Francisco, CA 94103
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
                  <Mail className="w-6 h-6 text-cyan-400 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Email Us</h4>
                    <p className="text-gray-300">info@digitaledge.agency</p>
                    <p className="text-gray-300">support@digitaledge.agency</p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
                  <Phone className="w-6 h-6 text-cyan-400 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Call Us</h4>
                    <p className="text-gray-300">(555) 123-4567</p>
                    <p className="text-gray-300">(555) 987-6543</p>
                  </div>
                </div>
                
                <div className="pt-6">
                  <h4 className="font-semibold mb-3 text-white">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full text-cyan-400 transition-colors duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                      <Facebook size={20} />
                    </a>
                    <a href="#" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full text-cyan-400 transition-colors duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                      <Twitter size={20} />
                    </a>
                    <a href="#" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full text-cyan-400 transition-colors duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                      <Instagram size={20} />
                    </a>
                    <a href="#" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full text-cyan-400 transition-colors duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}