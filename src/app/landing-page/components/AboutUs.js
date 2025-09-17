import React from "react";
import { ArrowRight, Crown, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutUs = ({ siteData, scrollToSection }) => {
  return (
    <section
      id="about"
      className="pt-32 pb-20 min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            About Mike
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Serving Kelowna with 30+ years of kitchen & bathroom renovation
            expertise
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
                <div className="text-3xl font-bold mb-2">
                  {siteData.about.name}
                </div>
                <div className="text-amber-300 text-lg font-medium">
                  {siteData.about.title}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="text-slate-600 text-xl leading-relaxed mb-8 space-y-4">
              {siteData.about.story.split("\n").map((line, i) => (
                <div key={i}>
                  {line.startsWith("•") ? (
                    <span className="flex items-start">
                      <span className="mt-1 mr-2 text-amber-600">•</span>
                      {line.slice(1).trim()}
                    </span>
                  ) : (
                    line
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-lg px-8 py-4 rounded-2xl shadow-xl hover:shadow-amber-500/25 transition-all duration-300"
              >
                <Crown className="mr-3 h-5 w-5" />
                Contact Me
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("jobs")}
                className="text-slate-700 border-2 border-slate-300 hover:bg-slate-50 text-lg px-8 py-4 rounded-2xl transition-all duration-300"
              >
                <Eye className="mr-3 h-5 w-5" />
                View My Work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
