'use client'
import React from 'react'
import { Menu, X, Phone, Mail, MapPin, Star, ArrowRight,  CheckCircle, Eye,  Shield,   Crown, Sparkles, Diamond } from 'lucide-react';


const Footer = (props) => {
    const {siteData} = props
  return (
    <div>
         <footer className="bg-slate-950 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 to-orange-900/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-3 rounded-2xl mr-4">
                  <Crown className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-black text-white">{siteData.branding.name}</div>
                  <div className="text-amber-400 font-medium">{siteData.branding.tagline}</div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Transforming luxury homes with master craftsmanship and uncompromising attention to detail.
              </p>
             
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Premium Services</h3>
              <div className="space-y-3">
                {['Luxury Kitchens', 'Master Bathrooms', 'Custom Cabinetry', 'Architectural Millwork'].map((service, index) => (
                  <div
                    key={index}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-300 cursor-pointer"
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Phone className="h-5 w-5 mr-3 text-amber-400" />
                  {siteData.contact.phone}
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="h-5 w-5 mr-3 text-amber-400" />
                  {siteData.contact.email}
                </div>
                <div className="flex items-start text-gray-300">
                  <MapPin className="h-5 w-5 mr-3 text-amber-400 mt-1" />
                  {siteData.contact.location}
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 {siteData.branding.name}. All rights reserved. Master craftsmanship since 2010.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer