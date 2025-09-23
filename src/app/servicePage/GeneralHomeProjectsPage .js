"use client";

import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Phone, 
  CheckCircle, 
  Star, 
  Clock, 
  Award, 
  Image,
  Shield,
  PhoneCall,
  Eye,
  ZoomIn,
  MousePointer,
  ArrowRight
} from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Footer from '../landing-page/components/Footer';
import { siteData } from '../landing-page/data/siteData';
import { 
    homeProjectImages,
    beforeAfterImages,
    processes,
    services,
    testimonials,
    faqs
 } from '../data/GeneralHomeProjectData';

const GeneralHomeProjectsPage = () => {
  const [activeImage, setActiveImage] = useState(0);
  const router = useRouter();
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Button 
              variant="ghost" 
              onClick={() => router.push('/')}
              className="text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
            <div className="flex items-center space-x-4">
              <a href="tel:(250)300-4551" className="text-gray-600 hover:text-gray-900">
                (250) 300-4551
              </a>
              <Button 
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                onClick={() => scrollToSection('contact')}
              >
                <Phone className="h-4 w-4 mr-2" />
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Removed inflated statistics */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                General Home Projects in Kelowna
              </h1>
              <p className="text-xl mb-8 text-orange-100">
                Reliable solutions for all your home improvement needs. From painting and repairs to flooring and maintenance, no project is too big or small.
              </p>
              {/* Removed fake statistics, kept simple authentic info */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold">Versatile</div>
                  <div className="text-orange-200">Skills</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">Reliable</div>
                  <div className="text-orange-200">Service</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-orange-600 hover:bg-orange-50"
                  onClick={() => scrollToSection('contact')}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Get Free Quote
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-black hover:bg-white hover:text-orange-600"
                  onClick={() => scrollToSection('gallery')}
                >
                  <Image className="h-5 w-5 mr-2" />
                  View Gallery
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src= "/gallery/Tatina-Guest-Bedroom/IMG_5333.jpg"
                alt="Quality Home Improvement" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3">
                <Award className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Simplified to what Mike actually does */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Home Improvement Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reliable home improvement services with quality work and fair pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Simplified and honest */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              My Approach to Home Projects
            </h2>
            <p className="text-xl text-gray-600">
              A straightforward approach focused on quality work and your satisfaction
            </p>
          </div>

          <div className="space-y-12">
            {processes.map((process, index) => {
              const IconComponent = process.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-start">
                    <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl mr-8 flex-shrink-0">
                      {process.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-semibold text-gray-900 flex items-center">
                          <IconComponent className="h-6 w-6 mr-3 text-orange-600" />
                          {process.title}
                        </h3>
                        <div className="flex items-center text-orange-600 font-medium">
                          <Clock className="h-4 w-4 mr-1" />
                          {process.duration}
                        </div>
                      </div>
                      <p className="text-gray-600 text-lg mb-4">{process.desc}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {process.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              General Homes Projects
            </h2>
            <p className="text-xl text-gray-600">
              Examples of General home repairs 
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {beforeAfterImages.map((images, index) => (
              <Card
                key={index}
                className="overflow-hidden shadow-xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
                onClick={() => {
                  if (images.url) {
                    window.open(images.url, '_blank');
                  } else {
                    setActiveImage(index);
                  }
                }}
              >
                <div className="grid grid-cols-2 relative">
                  <div className="relative overflow-hidden">
                    <img
                      src={images.before}
                      alt="Before renovation"
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                      Before
                    </div>
                    {/* Hover overlay for before image */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Eye className="h-6 w-6 mx-auto" />
                      </div>
                    </div>
                  </div>
                  <div className="relative overflow-hidden">
                    <img
                      src={images.after}
                      alt="After renovation"
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                      After
                    </div>
                    {/* Hover overlay for after image */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Eye className="h-6 w-6 mx-auto" />
                      </div>
                    </div>
                  </div>

                  {/* Click indicator overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100 shadow-lg">
                      <ZoomIn className="h-6 w-6 text-gray-700" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 relative">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {images.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{images.description}</p>

                  {/* Click to view indicator */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <MousePointer className="h-4 w-4 mr-1" />
                      Click to View More Pictures
                    </div>
                    <div className="flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-medium">View Project</span>
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Kitchen Gallery - Enhanced with better hover effects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeProjectImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => setActiveImage(index + beforeAfterImages.length)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 group-hover:from-black/70 transition-all duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white font-semibold text-lg mb-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {image.title}
                    </div>
                    <div className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      Click to view full size
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100 shadow-lg">
                    <Image className="h-6 w-6 text-gray-700" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Real client feedback */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Client Feedback
            </h2>
            <p className="text-xl text-gray-600">
              What clients say about my home improvement work
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-gray-200 shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-gray-700 mb-4 italic">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-orange-600 font-medium">{testimonial.project}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Common Questions
            </h2>
            <p className="text-xl text-gray-600">
              Answers to frequently asked questions about home projects
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-gray-50 border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Honest, authentic messaging */}
      <section id="contact" className="py-20 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Home Project?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Let's discuss your home improvement needs. I offer free estimates and reliable service.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Phone className="h-8 w-8 mx-auto mb-2" />
              <div className="font-semibold">Call Today</div>
              <div className="text-orange-100">(250) 300-4551</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Clock className="h-8 w-8 mx-auto mb-2" />
              <div className="font-semibold">Free Estimate</div>
              <div className="text-orange-100">No Obligation</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Shield className="h-8 w-8 mx-auto mb-2" />
              <div className="font-semibold">Quality Work</div>
              <div className="text-orange-100">Satisfaction Guaranteed</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-orange-50"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (250) 300-4551
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-black hover:bg-white hover:text-orange-600"
              onClick={() => router.push('/#contact')}
            >
              <PhoneCall/>
              Contact Me
            </Button>
          </div>
        </div>
      </section>
      
        <Footer
          siteData={siteData}
        />

    </div>
  );
};

export default GeneralHomeProjectsPage;