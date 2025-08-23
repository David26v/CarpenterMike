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


import { Menu, X, Phone, Mail, MapPin, Star, ArrowRight,  CheckCircle, Eye,  Shield,   Crown, Sparkles, Diamond } from 'lucide-react';
import { jobs } from './data/Jobs';
import { siteData } from './data/siteData';
import ContactUs from './components/contact';
import JobsDone from './components/jobs';
import { useRouter } from 'next/navigation';
import JobDialog from './components/JobDialog';
import Footer from './components/Footer';

const CarpenterPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedJob, setSelectedJob] = useState(null);
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

  const openJobModal = (job) => setSelectedJob(job);
  const closeJobModal = () => setSelectedJob(null);
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
        className={`fixed top-0 w-full z-40 transition-all duration-700 ${
          scrollY > 50
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
                  className={`w-full justify-start text-lg transition-all duration-300 transform hover:scale-105 ${
                    activeSection === item 
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
          {/* Premium Hero */}
          <section className="relative min-h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900"></div>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${siteData.hero.backgroundImage}')`,
                filter: 'brightness(0.3) contrast(1.2)',
              }}
            ></div>
            
            {/* Floating elements */}
            <div className="absolute inset-0">
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${3 + Math.random() * 6}s`,
                  }}
                >
                  <div 
                    className="bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-40"
                    style={{
                      width: `${2 + Math.random() * 3}px`,
                      height: `${2 + Math.random() * 3}px`
                    }}
                  ></div>
                </div>
              ))}
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center lg:text-left">
              <div className="max-w-5xl">
                <div className={`mb-8 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-xl text-amber-300 rounded-full text-sm font-bold border border-amber-400/30 shadow-2xl hover:scale-105 transition-transform duration-300">
                    <Crown className="w-5 h-5 mr-3 fill-current" />
                    Master Journeyman Carpenter - Licensed & Certified
                    <Sparkles className="w-5 h-5 ml-3 text-yellow-400" />
                  </div>
                </div>

                <h1 className={`text-6xl md:text-8xl font-black mb-8 leading-tight transition-all duration-1000 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <span className="block text-white mb-4">Luxury Kitchen &</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 animate-gradient">
                    Bath Transformations
                  </span>
                </h1>

                <p className={`text-xl md:text-2xl mb-12 text-gray-300 leading-relaxed max-w-4xl transition-all duration-1000 delay-400 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  {siteData.hero.subtitle}
                </p>

                <div className={`flex flex-col sm:flex-row gap-6 transition-all duration-1000 delay-600 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <Button
                    size="lg"
                    onClick={() => scrollToSection('contact')}
                    className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white text-lg px-8 py-4 rounded-2xl shadow-2xl hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300"
                  >
                    <Crown className="mr-3 h-6 w-6" />
                    Schedule Consultation
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                  <Button
                    size="lg"
                    variant="ghost"
                    onClick={() => scrollToSection('jobs')}
                    className="text-white border-2 border-white/30 hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-4 rounded-2xl hover:scale-105 transition-all duration-300"
                  >
                    <Eye className="mr-3 h-6 w-6" />
                    Premium Portfolio
                  </Button>
                </div>

                <div className={`mt-16 flex items-center justify-center lg:justify-start space-x-8 transition-all duration-1000 delay-800 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  
                  <div className="w-px h-12 bg-white/20"></div>
                  <div className="text-white/60 text-sm">
                    <div className="font-bold text-amber-400 text-lg">30+ Years Experience</div>
                    <div>Master craftsmanship guaranteed</div>
                  </div>
                </div>
              </div>
            </div>

          </section>

          {/* Premium Stats */}
          <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-white to-amber-50"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1),transparent_70%)]"></div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                  Premium Project Excellence
                </h2>
                <p className="text-xl text-slate-600">Delivering luxury transformations for discerning homeowners</p>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {siteData.stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center group relative">
                      <div className="relative inline-block mb-6">
                        <div className={`absolute inset-0 bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition-all duration-500 animate-pulse`}></div>
                        <div className={`relative bg-gradient-to-r from-${stat.color}-500 to-${stat.color}-600 p-6 rounded-3xl shadow-2xl group-hover:scale-110 transition-all duration-500`}>
                          <Icon className="h-10 w-10 text-white mx-auto" />
                        </div>
                      </div>
                      <div className={`text-5xl md:text-6xl font-black mb-3 bg-clip-text text-transparent group-hover:scale-110 transition-all duration-300 ${
                        stat.color === 'amber' ? 'bg-gradient-to-r from-amber-600 to-amber-700' :
                        stat.color === 'purple' ? 'bg-gradient-to-r from-purple-600 to-purple-700' :
                        stat.color === 'blue' ? 'bg-gradient-to-r from-blue-600 to-blue-700' :
                        stat.color === 'green' ? 'bg-gradient-to-r from-green-600 to-green-700' :
                        ''
                        }`}>
                        {stat.number}
                    </div>
                    
                      <div className="text-slate-600 font-semibold text-lg">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Premium Services */}
          <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(251,191,36,0.1),transparent_50%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(249,115,22,0.1),transparent_50%)]"></div>
            </div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-20">
                <h2 className="text-5xl md:text-6xl font-black mb-8 text-white">
                  Luxury <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Specializations</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Premium services exclusively for high-end kitchen and bathroom transformations
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {siteData.services.map((service, index) => (
                  <Card 
                    key={index} 
                    className={`group hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-6 bg-slate-800/50 backdrop-blur-xl border-slate-700/50 hover:border-amber-500/50 overflow-hidden animate-fade-in-up`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-800/80 to-slate-900/80"></div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    <CardContent className="relative pt-8 text-center">
                      <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-500">
                        {service.icon}
                      </div>
                      <CardTitle className="mb-4 text-white group-hover:text-amber-400 transition-colors duration-300 text-xl">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-gray-300 leading-relaxed">
                        {service.desc}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="relative">
                      <Button 
                        variant="link" 
                        className="text-amber-400 w-full justify-center group-hover:text-amber-300 transition-colors duration-300"
                      >
                        Learn More 
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Premium Process */}
          <section className="py-24 bg-gradient-to-br from-white via-amber-50 to-orange-50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-20">
                <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                  Elite Process
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  White-glove service from initial consultation to final reveal
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { step: '01', title: 'Design Consultation', desc: 'In-depth analysis of your space, lifestyle, and vision with 3D renderings', icon: Crown, color: 'purple' },
                  { step: '02', title: 'Master Crafting', desc: 'Precision execution using premium materials and traditional joinery techniques', icon: Diamond, color: 'amber' },
                  { step: '03', title: 'Luxury Installation', desc: 'Meticulous installation with final styling and comprehensive warranty', icon: Sparkles, color: 'green' },
                ].map((process, index) => {
                  const Icon = process.icon;
                  return (
                    <div key={index} className="relative group">
                      <div className="text-center">
                        <div className="relative inline-block mb-8">
                          <div className={`absolute inset-0 bg-gradient-to-r from-${process.color}-400 to-${process.color}-500 rounded-full blur-2xl opacity-30 group-hover:opacity-60 transition-all duration-500 animate-pulse`}></div>
                          <div className={`relative bg-gradient-to-r from-${process.color}-500 to-${process.color}-600 w-24 h-24 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-500`}>
                            <Icon className="h-10 w-10 text-white" />
                          </div>
                          <div className="absolute -top-2 -right-2 bg-slate-800 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                            {process.step}
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-slate-800 group-hover:text-amber-600 transition-colors duration-300">
                          {process.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          {process.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Premium Testimonial */}
          <section className="py-24 bg-slate-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-orange-900/20"></div>
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="mb-12">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-8 w-8 text-amber-400 fill-current mx-1" />
                  ))}
                </div>
                <blockquote className="text-3xl md:text-4xl font-light text-white leading-relaxed italic mb-8">
                  "{siteData.about.testimonial.text}"
                </blockquote>
                <div className="text-amber-400 font-semibold text-xl">
                  — {siteData.about.testimonial.author}
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Enhanced About */}
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
                      Luxury Specialist
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
            jobs ={jobs}
            openJobModal ={openJobModal}
        /> 
      )}

      {/* Premium Contact */}
      {activeSection === 'contact' && (
       <ContactUs 
        siteData ={siteData} 
        showAlert ={showAlert }
        handleContactSubmit ={handleContactSubmit}
       />
      )}

      {/* Enhanced Job Detail Modal */}
        <JobDialog 
            selectedJob = {selectedJob}
            closeJobModal ={closeJobModal }
            handleViewDetalJob ={handleViewDetalJob }
        />

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