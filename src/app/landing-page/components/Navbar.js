import React from 'react'
import { Crown, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"



const Navbar = (props) => {
    const {scrollToSection,siteData ,activeSection ,scrollY ,toggleMenu,isMenuOpen } = props
  return (
    <nav
    id="home"
    className={`fixed top-0 w-full z-40 transition-all duration-700 ${
      scrollY > 50
        ? "bg-slate-900/90 backdrop-blur-2xl shadow-2xl border-b border-amber-500/20"
        : "bg-transparent"
    }`}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <div
          className="flex items-center group cursor-pointer"
          onClick={() => scrollToSection("home")}
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
          {["home", "about", "jobs", "contact"].map((item) => (
            <Button
              key={item}
              variant={activeSection === item ? "default" : "ghost"}
              className={
                activeSection === item
                  ? "bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
                  : "text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
              }
              onClick={() => scrollToSection(item)}
            >
              {item === "jobs"
                ? "Portfolio"
                : item.charAt(0).toUpperCase() + item.slice(1)}
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
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>
    </div>

    {/* Mobile Menu */}
    <div
      className={`lg:hidden transition-all duration-500 ${
        isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      } overflow-hidden`}
    >
      <div className="bg-slate-900/95 backdrop-blur-2xl border-t border-amber-500/20 shadow-2xl">
        <div className="px-6 py-8 space-y-3">
          {["home", "about", "jobs", "contact"].map((item, index) => (
            <Button
              key={item}
              variant={activeSection === item ? "default" : "ghost"}
              className={`w-full justify-start text-lg transition-all duration-300 transform hover:scale-105 ${
                activeSection === item
                  ? "bg-gradient-to-r from-amber-500 to-orange-600"
                  : "text-white hover:bg-white/10"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => scrollToSection(item)}
            >
              {item === "jobs"
                ? "Portfolio"
                : item.charAt(0).toUpperCase() + item.slice(1)}
            </Button>
          ))}
        </div>
      </div>
    </div>
  </nav>

  )
}

export default Navbar
