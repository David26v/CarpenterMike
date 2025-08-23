'use client'
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
import { Menu, X, Phone, Mail, MapPin, Star, ArrowRight,  CheckCircle, Eye,  Shield,   Crown, Sparkles, Diamond } from 'lucide-react';


const JobsDone = (props) => {
    const {jobs ,openJobModal} = props 
  return (
    <div>
         <section id="jobs" className="pt-32 pb-20 min-h-screen bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black mb-8 text-white">
                Jobs <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Done</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Luxury kitchen and bathroom transformations for discerning homeowners
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {jobs.map((job, index) => (
                <div
                  key={job.id}
                  className={`animate-fade-in-up transition-all duration-700`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <Card
                    className="cursor-pointer hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-6 bg-slate-800/80 backdrop-blur-xl border-slate-700/50 hover:border-amber-500/50 group overflow-hidden"
                    onClick={() => openJobModal(job)}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={job.preview_images}
                        alt={job.title}
                        className="w-full h-80 object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      
                      <div className="absolute top-6 right-6">
                        <span className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                          {job.category}
                        </span>
                      </div>
                      
                      <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        <div className="text-white font-bold text-2xl mb-2">{job.price}</div>
                        <div className="text-amber-300 text-lg font-medium">{job.duration}</div>
                      </div>

                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-6">
                          <Eye className="h-8 w-8 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-2xl text-white group-hover:text-amber-400 transition-colors duration-300">
                          {job.title}
                        </CardTitle>
                        <div className="flex">
                          {[...Array(job.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="pb-6">
                      <CardDescription className="line-clamp-3 text-gray-300 leading-relaxed text-lg">
                        {job.description}
                      </CardDescription>
                    </CardContent>
                    
                    <CardFooter className="pt-0">
                      <div className="flex justify-between items-center w-full">
                        <span className="text-amber-400 font-semibold text-lg">View Project Details</span>
                        <ArrowRight className="h-6 w-6 text-amber-400 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
    </div>
  )
}

export default JobsDone