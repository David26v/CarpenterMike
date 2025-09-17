"use client";

import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Phone, 
  CheckCircle, 
  Star, 
  Clock, 
  DollarSign, 
  Award, 
  Image,
  Shield,
  PhoneCall,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Footer from '../landing-page/components/Footer';
import { siteData } from '../landing-page/data/siteData';
import {  
  commercialImages,
  beforeAfterImages,
  processes,
  services,
  testimonials,
  faqs } from '../data/CommercialData';

const CommercialInteriorsPage = () => {
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

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Commercial Interiors in Kelowna
              </h1>
              <p className="text-xl mb-8 text-orange-100">
                Transform your business space into an environment that boosts productivity, impresses clients, and reflects your brand. From offices to retail to hospitality.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold">30+</div>
                  <div className="text-orange-200">Commercial Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">100+</div>
                  <div className="text-orange-200">Business Clients</div>
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
                  View Portfolio
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                alt="Modern Commercial Office Interior" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3">
                <Award className="h-6 w-6 text-orange-600" />
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
              Commercial Interior Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional, reliable, and tailored interior solutions designed to elevate your business environment and customer experience.
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
              My Commercial Project Process
            </h2>
            <p className="text-xl text-gray-600">
              A proven 5-step approach designed for businesses that demand professionalism, minimal disruption, and lasting results.
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

      {/* Before & After Gallery */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Commercial Transformations
            </h2>
            <p className="text-xl text-gray-600">
              See how I’ve helped local businesses upgrade their spaces for better function, brand impact, and customer appeal.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {beforeAfterImages.map((images, index) => (
              <Card key={index} className="overflow-hidden shadow-xl">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img src={images.before} alt="Before project" className="w-full h-64 object-cover" />
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Before
                    </div>
                  </div>
                  <div className="relative">
                    <img src={images.after} alt="After project" className="w-full h-64 object-cover" />
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

          {/* Project Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commercialImages.map((image, index) => (
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
              What Business Owners Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by Kelowna businesses for reliable, high-quality commercial renovations
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

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about commercial interior projects
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
      <section id="contact" className="py-20 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Upgrade Your Business Space?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Let’s discuss how a professional commercial renovation can improve your operations, attract more customers, and increase your property value.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Phone className="h-8 w-8 mx-auto mb-2" />
              <div className="font-semibold">Call Today</div>
              <div className="text-orange-100">(250) 300-4551</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <DollarSign className="h-8 w-8 mx-auto mb-2" />
              <div className="font-semibold">Free Estimate</div>
              <div className="text-orange-100">No Obligation</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Shield className="h-8 w-8 mx-auto mb-2" />
              <div className="font-semibold">Satisfaction Guarantee</div>
              <div className="text-orange-100">On All Work</div>
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

export default CommercialInteriorsPage;