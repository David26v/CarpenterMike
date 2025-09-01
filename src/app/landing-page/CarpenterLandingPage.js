'use client';

import React, { useState, useEffect } from 'react';

// shadcn Components
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';


import { Menu, X, Phone, Mail, MapPin, Star, ArrowRight, CheckCircle, Eye, Shield, Crown, Sparkles, Diamond, Hammer, Home } from 'lucide-react';
import { jobs } from './data/Jobs';
import { siteData } from './data/siteData';
import ContactUs from './components/contact';
import JobsDone from './components/jobs';
import { useRouter } from 'next/navigation';
import Footer from './components/Footer';

const CarpenterPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    setIsLoaded(true);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const router = useRouter();

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
    e.target.reset();
    closeJobModal();
  };

  const handleViewDetalJob = (id) => {
    router.push(`/landing-page/${id}`)
  }


  return (
    <div className="min-h-screen bg-slate-900 overflow-x-hidden">
      {/* Premium cursor effect */}
      <div
        className="fixed w-6 h-6 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 opacity-80 pointer-events-none z-50 mix-blend-difference transition-transform duration-75"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${isMenuOpen ? 1.5 : 1})`
        }}
      />

      {/* Navigation */}
      <nav
        id="home"
        className={`fixed top-0 w-full z-40 transition-all duration-700 ${scrollY > 50
            ? 'bg-slate-900/90 backdrop-blur-2xl shadow-2xl border-b border-amber-500/20'
            : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div
              className="flex items-center group cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition-all duration-500 animate-pulse"></div>
                <div className="relative bg-gradient-to-r from-amber-500 to-orange-600 p-3 rounded-2xl group-hover:scale-110 transition-all duration-500 shadow-2xl">
                  <Crown className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="ml-4">
                <span className="text-3xl font-black bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  {siteData.branding.name}
                </span>
                <div className="text-sm font-semibold text-amber-400/80">
                  {siteData.branding.tagline}
                </div>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-2">
              {['home', 'about', 'jobs', 'contact'].map((item) => (
                <Button
                  key={item}
                  variant={activeSection === item ? 'default' : 'ghost'}
                  className={
                    activeSection === item
                      ? 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 shadow-lg hover:shadow-amber-500/25 transition-all duration-300'
                      : 'text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300'
                  }
                  onClick={() => scrollToSection(item)}
                >
                  {item === 'jobs' ? 'Portfolio' : item.charAt(0).toUpperCase() + item.slice(1)}
                </Button>
              ))}
            </div>

            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                className="text-white hover:bg-white/10 transition-all duration-300"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="bg-slate-900/95 backdrop-blur-2xl border-t border-amber-500/20 shadow-2xl">
            <div className="px-6 py-8 space-y-3">
              {['home', 'about', 'jobs', 'contact'].map((item, index) => (
                <Button
                  key={item}
                  variant={activeSection === item ? 'default' : 'ghost'}
                  className={`w-full justify-start text-lg transition-all duration-300 transform hover:scale-105 ${activeSection === item
                      ? 'bg-gradient-to-r from-amber-500 to-orange-600'
                      : 'text-white hover:bg-white/10'
                    }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => scrollToSection(item)}
                >
                  {item === 'jobs' ? 'Portfolio' : item.charAt(0).toUpperCase() + item.slice(1)}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>


     {/* Home Section */}
     {activeSection === 'home' && (
        <>
          {/* Simple Hero */}
          <section className="relative min-h-screen flex items-center bg-slate-800">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40"
              style={{
                backgroundImage: `url('${siteData.hero.backgroundImage}')`,
              }}
            ></div>
            
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
              <div className="max-w-4xl mx-auto">
                <div className={`mb-6 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <div className="inline-flex items-center px-6 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold">
                    <Hammer className="w-4 h-4 mr-2" />
                    Licensed & Insured Carpenter
                  </div>
                </div>

                <h1 className={`text-4xl md:text-6xl font-bold mb-6 text-white transition-all duration-1000 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  Quality Kitchen & Bathroom Remodeling
                </h1>

                <p className={`text-lg md:text-xl mb-8 text-gray-200 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  {siteData.hero.subtitle}
                </p>

                <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-600 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <Button
                    size="lg"
                    onClick={() => scrollToSection('contact')}
                    className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Get Free Quote
                  </Button>
                  <Button
                    size="lg"
                    variant="ghost"
                    onClick={() => scrollToSection('jobs')}
                    className="text-white border-white hover:bg-white hover:text-slate-800 px-8 py-3 rounded-lg hover:scale-105 transition-all duration-300"
                  >
                    <Eye className="mr-2 h-5 w-5" />
                    View Our Work
                  </Button>
                </div>

                <div className={`mt-12 text-white/80 text-sm transition-all duration-1000 delay-800 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <div className="font-semibold text-amber-400">30+ Years Experience</div>
                  <div>Professional craftsmanship you can trust</div>
                </div>
              </div>
            </div>
          </section>

          {/* Video Section */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                  See Our Work in Action
                </h2>
                <p className="text-lg text-gray-600">
                  Watch how we transform kitchens and bathrooms
                </p>
              </div>
              
              <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
                <div className="aspect-video">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    poster="/home_page_video_thumbnail.jpg"
                    preload="metadata"
                  >
                    <source src="/home_page_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <p className="text-gray-600 mb-4">
                  Ready to start your project?
                </p>
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-6 py-2 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Contact Us Today
                </Button>
              </div>
            </div>
          </section>

          {/* Beautiful Stats */}
          <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-amber-50 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.05),transparent_70%)]"></div>
            
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                  Why Choose Us
                </h2>
                <p className="text-xl text-slate-600">Quality work, fair prices, reliable service</p>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {siteData.stats.map((stat, index) => {
                  const Icon = stat.icon;
                  const colors = ['amber', 'orange', 'blue', 'green'];
                  const color = colors[index % colors.length];
                  
                  return (
                    <div key={index} className="text-center group relative">
                      <div className="relative inline-block mb-6">
                        <div className={`absolute inset-0 bg-gradient-to-r from-${color}-400 to-${color}-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500 animate-pulse`}></div>
                        <div className={`relative bg-gradient-to-br from-${color}-500 to-${color}-600 p-6 rounded-3xl shadow-xl group-hover:scale-110 group-hover:shadow-2xl transition-all duration-500`}>
                          <Icon className="h-10 w-10 text-white mx-auto" />
                        </div>
                      </div>
                      
                      <div className={`text-4xl md:text-5xl font-black mb-3 bg-clip-text text-transparent group-hover:scale-110 transition-all duration-300 ${
                        color === 'amber' ? 'bg-gradient-to-r from-amber-600 to-amber-700' :
                        color === 'orange' ? 'bg-gradient-to-r from-orange-600 to-orange-700' :
                        color === 'blue' ? 'bg-gradient-to-r from-blue-600 to-blue-700' :
                        color === 'green' ? 'bg-gradient-to-r from-green-600 to-green-700' :
                        'bg-gradient-to-r from-gray-600 to-gray-700'
                      }`}>
                        {stat.number}
                      </div>
                      
                      <div className="text-slate-700 font-semibold text-lg group-hover:text-slate-800 transition-colors duration-300">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Simple Services */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                  Our Services
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Professional kitchen and bathroom remodeling services
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {siteData.services.map((service, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white border-gray-200">
                    <CardContent className="pt-6 text-center">
                      <div className="text-4xl mb-4">
                        {service.icon}
                      </div>
                      <CardTitle className="mb-3 text-gray-800 text-xl">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {service.desc}
                      </CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        variant="link" 
                        className="text-amber-600 w-full justify-center hover:text-amber-700"
                      >
                        Learn More 
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Simple Process */}
          <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                  How We Work
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Simple, straightforward process from start to finish
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { step: '1', title: 'Free Consultation', desc: 'We visit your home to discuss your needs and provide a detailed estimate', icon: Home, color: 'blue' },
                  { step: '2', title: 'Professional Work', desc: 'Our experienced team completes your project with quality materials', icon: Hammer, color: 'green' },
                  { step: '3', title: 'Final Walkthrough', desc: 'We ensure everything meets your expectations and provide warranty', icon: CheckCircle, color: 'purple' },
                ].map((process, index) => (
                  <div key={index} className="text-center">
                    <div className={`bg-${process.color}-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                      <div className="text-lg font-bold text-gray-800">{process.step}</div>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">
                      {process.title}
                    </h3>
                    <p className="text-gray-600">
                      {process.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Simple Testimonial */}
          <section className="py-16 bg-gray-800 text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="mb-8">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current mx-1" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl mb-6 italic">
                  "{siteData.about.testimonial.text}"
                </blockquote>
                <div className="text-yellow-400 font-semibold">
                  — {siteData.about.testimonial.author}
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {activeSection === 'about' && (
        <section id="about" className="pt-32 pb-20 min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Master Craftsman
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                30+ years of luxury kitchen and bathroom expertise
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-3xl blur-3xl opacity-30 group-hover:opacity-50 transition-all duration-700"></div>
                <div className="relative">
                  <img
                    src={siteData.about.image}
                    alt={siteData.about.name}
                    className="w-full h-[600px] object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-3xl"></div>
                  <div className="absolute bottom-8 left-8 text-white">
                    <div className="text-3xl font-bold mb-2">{siteData.about.name}</div>
                    <div className="text-amber-300 text-lg font-medium">{siteData.about.title}</div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-4xl font-black mb-8 text-slate-800">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                      Specialist
                    </span>
                  </h3>
                  <p className="text-slate-600 text-xl leading-relaxed mb-8">
                    {siteData.about.story}
                  </p>
                  <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-8 rounded-2xl text-white">
                    <div className="flex items-center mb-4">
                      <Shield className="h-8 w-8 mr-3" />
                      <span className="text-xl font-bold">Premium Guarantee</span>
                    </div>
                    <p className="leading-relaxed">
                      Lifetime craftsmanship warranty on all custom cabinetry and millwork. Your investment is protected.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {siteData.stats.slice(0, 4).map((stat, i) => (
                    <Card key={i} className="text-center group hover:scale-110 transition-all duration-500 bg-white/80 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-4xl font-black bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                          {stat.number}
                        </CardTitle>
                        <CardDescription className="font-semibold text-slate-600">{stat.label}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => scrollToSection('contact')}
                    className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-lg px-8 py-4 rounded-2xl shadow-xl hover:shadow-amber-500/25 transition-all duration-300"
                  >
                    <Crown className="mr-3 h-5 w-5" />
                    Schedule Consultation
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => scrollToSection('jobs')}
                    className="text-slate-700 border-2 border-slate-300 hover:bg-slate-50 text-lg px-8 py-4 rounded-2xl transition-all duration-300"
                  >
                    <Eye className="mr-3 h-5 w-5" />
                    Premium Portfolio
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Premium Portfolio */}
      {activeSection === 'jobs' && (
        <JobsDone
          jobs={jobs}
          NavigateToDetailed={handleViewDetalJob}
        />
      )}

      {/* Premium Contact */}
      {activeSection === 'contact' && (
        <ContactUs
          siteData={siteData}
          showAlert={showAlert}
          handleContactSubmit={handleContactSubmit}
        />
      )}

     

      {/* Floating Consultation Button */}
      <div className="fixed bottom-8 right-8 z-30">
        <Button
          onClick={() => scrollToSection('contact')}
          className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 rounded-full w-16 h-16 shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 group"
        >
          <Phone className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
        </Button>
      </div>

      {/* Premium Footer */}
      <Footer siteData={siteData} />

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(120deg); }
          66% { transform: translateY(-10px) rotate(240deg); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default CarpenterPortfolio;