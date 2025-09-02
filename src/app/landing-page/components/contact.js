"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Star,
  ArrowRight,
  CheckCircle,
  Eye,
  Shield,
  Crown,
  Sparkles,
  Diamond,
} from "lucide-react";

const ContactUs = (props) => {
  const { siteData, showAlert, handleContactSubmit } = props;

  return (
    <div>
      <section
        id="contact"
        className="pt-32 pb-20 min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(251,191,36,0.1),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(249,115,22,0.1),transparent_70%)]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-white">
              Start Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                Luxury Project
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Schedule your complimentary design consultation and receive a
              detailed project proposal
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="backdrop-blur-xl bg-slate-800/80 border-slate-700/50 hover:border-amber-500/50 transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center">
                    <Crown className="h-6 w-6 mr-3 text-amber-400" />
                    Premium Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="flex items-start group">
                    <div className="p-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-lg mb-1">
                        Direct Line
                      </div>
                      <div className="text-gray-300 text-lg">
                        {siteData.contact.phone}
                      </div>
                      <div className="text-amber-400 text-sm font-medium">
                        Priority response within 2 hours
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="p-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-lg mb-1">
                        Professional Email
                      </div>
                      <div className="text-gray-300 text-lg">
                        {siteData.contact.email}
                      </div>
                      <div className="text-blue-400 text-sm font-medium">
                        Detailed project discussions
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="p-4 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-lg mb-1">
                        Service Area
                      </div>
                      <div className="text-gray-300 text-lg">
                        {siteData.contact.location}
                      </div>
                      <div className="text-green-400 text-sm font-medium">
                        Premium Kelowna projects
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Premium Contact Form */}
            <Card className="backdrop-blur-xl bg-slate-800/80 border-slate-700/50 hover:border-amber-500/50 transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-3xl text-white mb-2">
                  Schedule Consultation
                </CardTitle>
                <CardDescription className="text-gray-300 text-lg">
                  Tell us about your luxury project vision and receive a
                  comprehensive proposal
                </CardDescription>
              </CardHeader>

              <CardContent>
                {showAlert && (
                  <Alert className="mb-6 bg-green-500/20 border-green-500/50 text-green-400">
                    <CheckCircle className="h-5 w-5" />
                    <AlertDescription className="text-green-300">
                      Thank you! Your consultation request has been received.
                      We'll contact you within 2 hours to schedule your premium
                      design meeting.
                    </AlertDescription>
                  </Alert>
                )}

                <form
                  action="https://formsubmit.co/expertmike@yahoo.com"
                  method="POST"
                  className="space-y-6"
                >
                  {/* Prevent captcha popup */}
                  <input type="hidden" name="_captcha" value="false" />
                  {/* Redirect after submit */}
                  <input
                    type="hidden"
                    name="_next"
                    value="https://kelowanakitchenrenovations.ca/thank-you"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="text-white font-semibold"
                      >
                        Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="Your full name"
                        className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-amber-500 transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-white font-semibold"
                      >
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        required
                        placeholder="your.email@example.com"
                        className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-amber-500 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="phone"
                        className="text-white font-semibold"
                      >
                        Phone *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        required
                        placeholder="(236) 555-0198"
                        className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-amber-500 transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="project"
                        className="text-white font-semibold"
                      >
                        Project Type *
                      </Label>
                      <select
                        id="project"
                        name="project"
                        required
                        className="w-full bg-slate-700/50 border-slate-600 text-white p-2 rounded-md focus:border-amber-500"
                      >
                        <option value="">Select Project</option>
                        <option value="kitchen">
                          Kitchen Renovation
                        </option>
                        <option value="bathroom">
                          Master Bathroom Transformation
                        </option>
                        <option value="both">Kitchen & Bath Combined</option>
                        <option value="cabinetry">
                          Custom Cabinet Systems
                        </option>
                        <option value="millwork">Architectural Millwork</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-white font-semibold"
                    >
                      Project Vision *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Describe your  project vision, timeline preferences, and specific requirements..."
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-amber-500 transition-all duration-300 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-lg py-4 rounded-2xl shadow-2xl hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300"
                  >
                    <Crown className="mr-3 h-5 w-5" />
                    Send Me a Message
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
