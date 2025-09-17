"use client";
import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";

const Footer = ({ siteData }) => {
  const router = useRouter();

  const serviceRoutes = {
    "Kitchen Renovations": "/services/kitchen-renovations",
    "Bathroom Renovations": "/services/bathroom-renovations",
    "Custom Woodwork": "/services/custom-woodwork",
    "General Home Projects": "/services/general-home-projects",
    "Commercial Interiors": "/services/commercial-interiors",
  };

  return (
    <footer className="bg-slate-950 text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 to-orange-900/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Branding */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-3 rounded-2xl mr-4">
                <siteData.branding.logo.icon className="h-8 w-8 text-white" />
              </div>
              <div>
                <div className="text-2xl font-black text-white">
                  {siteData.branding.name}
                </div>
                <div className="text-amber-400 font-medium">
                  {siteData.branding.tagline}
                </div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              {siteData.about.story}
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Services</h3>
            <div className="space-y-3">
              {siteData.services.map((service) => (
                 <div key={service.id}> 
                 <button
                   onClick={() => {
                     const route = serviceRoutes[service.title];
                     if (route) router.push(route);
                   }}
                   className="text-gray-300 hover:text-amber-400 transition-colors duration-300 text-left font-medium relative pb-1"
                 >
                   {service.title}
                   <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                 </button>
               </div>
              ))}
            </div>
          </div>

          {/* Contact */}
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

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              {siteData.contact.social.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 {siteData.branding.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
