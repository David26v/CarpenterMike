"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle,
  Crown,
  CircleUser,
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const ContactUs = (props) => {
  const { siteData } = props;
  const [showAlert, setShowAlert] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    setIsSubmitting(true);

    try {
      // 🔥 FIXED: Removed trailing spaces from URL!
      const response = await fetch("https://formsubmit.co/david.fajardo26v@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setShowAlert(true);
        e.target.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
                Project
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Contact me if you’d like to discuss your project.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="backdrop-blur-xl bg-slate-800/80 border-slate-700/50 hover:border-amber-500/50 transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center">
                    <CircleUser className="h-6 w-6 mr-3 text-amber-400" />
                    Contact Mike
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
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Premium Contact Form */}
            <Card className="backdrop-blur-xl bg-slate-800/80 border-slate-700/50 hover:border-amber-500/50 transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-3xl text-white mb-2">
                  Send a Message
                </CardTitle>
                <CardDescription className="text-gray-300 text-lg">
                  Give me a brief description of the project you have in mind.
                </CardDescription>
              </CardHeader>

              <CardContent>
                {showAlert && (
                  <Alert className="mb-6 bg-green-500/20 border-green-500/50 text-green-400">
                    <CheckCircle className="h-5 w-5" />
                    <AlertDescription className="text-green-300">
                      Thanks! I’ll be in touch soon to discuss your project.
                    </AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleContactSubmit} className="space-y-6">
                  {/* Prevent captcha popup */}
                  <input type="hidden" name="_captcha" value="false" />

                  {/* 🔥 CORRECTED HTML EMAIL TEMPLATE — NO TRAILING SPACES, SINGLE QUOTES, CLEAN FORMAT */}
                  <input type="hidden" name="_template" value="html" />
                  <input
                    type="hidden"
                    name="_body"
                    value='<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Project Inquiry</title>
  <style>
    body {
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      background-color: #0f172a;
      color: #e2e8f0;
      margin: 0;
      padding: 20px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #1e293b;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 10px 25px rgba(251, 191, 36, 0.1);
      border: 1px solid #334155;
    }
    .header {
      background: linear-gradient(135deg, #fbbf24, #f97316);
      color: white;
      padding: 30px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 28px;
      font-weight: 800;
    }
    .content {
      padding: 30px;
    }
    .section {
      margin-bottom: 24px;
    }
    .label {
      font-weight: 600;
      color: #fbbf24;
      font-size: 15px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 8px;
      display: block;
    }
    .value {
      font-size: 17px;
      line-height: 1.6;
      color: #e2e8f0;
    }
    .footer {
      text-align: center;
      padding: 20px;
      background-color: #1e293b;
      color: #94a3b8;
      font-size: 14px;
      border-top: 1px solid #334155;
    }
    .icon {
      vertical-align: middle;
      margin-right: 8px;
      width: 18px;
      height: 18px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🌟 New Project Inquiry</h1>
    </div>

    <div class="content">

      <div class="section">
        <span class="label">Client Name</span>
        <p class="value">{{name}}</p>
      </div>

      <div class="section">
        <span class="label">Email Address</span>
        <p class="value">{{email}}</p>
      </div>

      <div class="section">
        <span class="label">Phone Number</span>
        <p class="value">{{phone}}</p>
      </div>

      <div class="section">
        <span class="label">Project Type</span>
        <p class="value">{{project}}</p>
      </div>

      <div class="section">
        <span class="label">Project Details</span>
        <p class="value" style="white-space: pre-line;">{{message}}</p>
      </div>

      <div class="footer">
        <p><img src="https://cdn-icons-png.flaticon.com/512/2991/2991542.png" alt="Crown Icon" class="icon"> Sent via Carpenter Mike - Remodeling & Renovations</p>
        <p>© 2025 Carpenter Mike. All rights reserved.</p>
      </div>
    </div>
  </div>
</body>
</html>'
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
                        <option value="kitchen">Kitchen Renovation</option>
                        <option value="bathroom">Bathroom Transformation</option>
                        <option value="both">Kitchen & Bath Combined</option>
                        <option value="cabinetry">Custom Cabinet Systems</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-white font-semibold"
                    >
                      Project Details *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Describe your project vision, timeline preferences, and specific requirements..."
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-amber-500 transition-all duration-300 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-lg py-4 rounded-2xl shadow-2xl hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Crown className="mr-3 h-5 w-5" />
                        Send Me a Message
                        <ArrowRight className="ml-3 h-5 w-5" />
                      </>
                    )}
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