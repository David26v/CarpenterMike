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
} from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { siteData } from '../landing-page/data/siteData';
import Footer from '../landing-page/components/Footer';
import { 
  bathroomImages, 
  beforeAfterImages, 
  faqs, 
  processes, 
  services, 
  testimonials } from '../data/BathroomServiceData';


const BathroomRenovationPage = () => {
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
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                onClick={() => scrollToSection('contact')}
              >
                <Phone className="h-4 w-4 mr-2" />
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Bathroom Renovations in Kelowna
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Create a beautiful, functional bathroom that fits your lifestyle. From walk-in showers to complete makeovers, I handle every detail with 30+ years of experience.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold">30+</div>
                  <div className="text-blue-200">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">150+</div>
                  <div className="text-blue-200">Bathrooms Renovated</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-blue-50"
                  onClick={() => scrollToSection('contact')}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Get Free Quote
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-black hover:bg-white hover:text-blue-600"
                  onClick={() => scrollToSection('gallery')}
                >
                  <Image className="h-5 w-5 mr-2" />
                  View Gallery
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                alt="Beautiful Bathroom Renovation" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Complete Bathroom Renovation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From design consultation to final installation, I handle every aspect of your bathroom renovation with professional expertise.
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

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              My Bathroom Renovation Process
            </h2>
            <p className="text-xl text-gray-600">
              A systematic 5-step approach that ensures quality results and minimal disruption
            </p>
          </div>

          <div className="space-y-12">
            {processes.map((process, index) => {
              const IconComponent = process.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl mr-8 flex-shrink-0">
                      {process.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-semibold text-gray-900 flex items-center">
                          <IconComponent className="h-6 w-6 mr-3 text-blue-600" />
                          {process.title}
                        </h3>
                        <div className="flex items-center text-blue-600 font-medium">
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

      {/* Before & After Gallery */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Bathroom Transformations
            </h2>
            <p className="text-xl text-gray-600">
              See how I've transformed bathrooms throughout Kelowna
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {beforeAfterImages.map((images, index) => (
              <Card key={index} className="overflow-hidden shadow-xl">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img src={images.before} alt="Before renovation" className="w-full h-64 object-cover" />
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Before
                    </div>
                  </div>
                  <div className="relative">
                    <img src={images.after} alt="After renovation" className="w-full h-64 object-cover" />
                    <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      After
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{images.title}</h3>
                  <p className="text-gray-600">{images.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bathroom Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bathroomImages.map((image, index) => (
              <div 
                key={index} 
                className="relative group cursor-pointer overflow-hidden rounded-xl"
                onClick={() => setActiveImage(index)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <Image className="h-8 w-8 mx-auto mb-2" />
                    <div className="font-semibold">{image.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              What My Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from real bathroom renovation projects in Kelowna
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
                    <div className="text-sm text-blue-600 font-medium">{testimonial.project}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about bathroom renovations
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

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Bathroom?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss your bathroom renovation project. I offer free consultations and detailed quotes with no obligations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Phone className="h-8 w-8 mx-auto mb-2" />
              <div className="font-semibold">Call Today</div>
              <div className="text-blue-100">(250) 300-4551</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Clock className="h-8 w-8 mx-auto mb-2" />
              <div className="font-semibold">Free Consultation</div>
              <div className="text-blue-100">Within 48 Hours</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Shield className="h-8 w-8 mx-auto mb-2" />
              <div className="font-semibold">2-Year Warranty</div>
              <div className="text-blue-100">On All Work</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (250) 300-4551
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer 
        siteData={siteData}
      />
    </div>
  );
};

export default BathroomRenovationPage;