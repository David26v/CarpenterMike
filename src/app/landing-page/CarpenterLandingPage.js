"use client";

import React, { useState, useEffect } from "react";

// shadcn Components
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

import { Phone, Star, ArrowRight, Eye, Hammer } from "lucide-react";
import { jobs } from "./data/Jobs";
import { siteData } from "./data/siteData";
import ContactUs from "./components/contact";
import JobsDone from "./components/jobs";
import { useRouter } from "next/navigation";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import VideoSection from "./components/VideoSection";
import Process from "../HeroSection/Process";
import Image from "next/image";

const CarpenterPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollY, setScrollY] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) =>
      setMousePosition({ x: e.clientX, y: e.clientY });

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    setIsLoaded(true);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const router = useRouter();

  const scrollToSection = (sectionId) => {
    window.location.hash = sectionId;

    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }

    setIsMenuOpen(false);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    alert("Message sent!");
    e.target.reset();
  };

  const handleViewDetalJob = (id) => {
    router.push(`/landing-page/${id}`);
  };

  useEffect(() => {
    const updateActiveSection = () => {
      const hash = window.location.hash.slice(1);
      if (["home", "about", "jobs", "contact"].includes(hash)) {
        setActiveSection(hash);
      } else {
        setActiveSection("home");
      }
    };

    updateActiveSection();

    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 overflow-x-hidden">
      {/* Premium cursor effect */}
      <div
        className="fixed w-6 h-6 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 opacity-80 pointer-events-none z-50 mix-blend-difference transition-transform duration-75"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${isMenuOpen ? 1.5 : 1})`,
        }}
      />

      <Navbar
        siteData={siteData}
        scrollToSection={scrollToSection}
        activeSection={activeSection}
        scrollY={scrollY}
        toggleMenu={toggleMenu}
        isMenuOpen={isMenuOpen}
      />

      {/* Home Section */}
      {activeSection === "home" && (
        <>
          {/* Simple Hero */}
          <section className="relative min-h-screen flex items-center bg-gray-500">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-500 via-gray-600 to-gray-500"></div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
              <div className="max-w-4xl mx-auto">
                <div
                  className={`mb-6 transition-all duration-1000 ${
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                ></div>

                <h1
                  className={`text-4xl md:text-6xl font-bold mb-6 text-white transition-all duration-1000 delay-200 ${
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  Complete Remodeling, Renovations & Makeovers Residential &
                  Commercial Interior.
                </h1>

                <p
                  className={`text-lg md:text-xl mb-8 text-gray-100 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  {siteData.hero.subtitle}
                </p>

                <div
                  className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-600 ${
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  <Button
                    size="lg"
                    onClick={() => scrollToSection("contact")}
                    className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Get Free Quote
                  </Button>
                  <Button
                    size="lg"
                    variant="default"
                    onClick={() => scrollToSection("jobs")}
                    className="bg-white text-gray-800 border-white hover:bg-gray-100 hover:text-gray-900 px-8 py-3 rounded-lg hover:scale-105 transition-all duration-300"
                  >
                    <Eye className="mr-2 h-5 w-5" />
                    View My Works
                  </Button>
                </div>

                <div
                  className={`mt-12 text-gray-200 text-sm transition-all duration-1000 delay-800 ${
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                ></div>
              </div>
            </div>
          </section>
          {/* Video Section */}
          <VideoSection 
           scrollToSection={scrollToSection} 
          />

          {/* Simple Services */}
          <section id="services" className="py-16 bg-gray-50">
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
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow duration-300 bg-white border-gray-200"
                  >
                    <CardContent className="pt-6 text-center">
                      <div className="text-4xl mb-4">{service.icon}</div>
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
                        onClick={() => {
                          const serviceRoutes = {
                            "Kitchen Renovations":
                              "/services/kitchen-renovations",
                            "Bathroom Renovations":
                              "/services/bathroom-renovations",
                            "Custom Woodwork": "/services/custom-woodwork",
                            "General Home Projects":
                              "/services/general-home-projects",
                            "Commercial Interiors":
                              "/services/commercial-interiors",
                          };
                          router.push(serviceRoutes[service.title]);
                        }}
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
          <Process />

          {/* Simple Testimonial */}
          <section className="py-16 bg-gray-800 text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="mb-8">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-6 w-6 text-yellow-400 fill-current mx-1"
                    />
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

      {activeSection === "about" && (
        <AboutUs siteData={siteData} scrollToSection={scrollToSection} />
      )}

      {/* Premium Portfolio */}
      {activeSection === "jobs" && (
        <JobsDone jobs={jobs} NavigateToDetailed={handleViewDetalJob} />
      )}

      {/* Premium Contact */}
      {activeSection === "contact" && (
        <ContactUs
          siteData={siteData}
          showAlert={showAlert}
          handleContactSubmit={handleContactSubmit}
        />
      )}

      {/* Floating Consultation Button */}
      <div className="fixed bottom-8 right-8 z-30">
        <Button
          onClick={() => scrollToSection("contact")}
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
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(120deg);
          }
          66% {
            transform: translateY(-10px) rotate(240deg);
          }
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
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
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
