'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { 
  Star, 
  ArrowLeft, 
  CheckCircle, 
  Diamond, 
  Clock, 
  DollarSign,
  Calendar,
  ChevronLeft,
  ChevronRight,
  X,
  Crown,
  Phone,
  Mail
} from 'lucide-react';
import { jobs } from '../data/Jobs';


const JobsDetailView = () => {
  const params = useParams();
  const router = useRouter();
  const [selectedJob, setSelectedJob] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const jobId = params.job_id; 
  
    if (jobId) {
      console.log("Job ID:", jobId);
      const parsedId = parseInt(jobId, 10);
      const job = jobs.find((j) => j.id === parsedId);
      setSelectedJob(job);
    } else {
      setSelectedJob(null);
    }
  
    setLoading(false);
  }, [params.job_id]);

  const nextImage = () => {
    if (selectedJob?.gallery) {
      setCurrentImageIndex((prev) => 
        prev === selectedJob.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedJob?.gallery) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedJob.gallery.length - 1 : prev - 1
      );
    }
  };

  const openGallery = (index) => {
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-amber-500 border-t-transparent mb-4 mx-auto"></div>
          <p className="text-white text-xl">Loading project details...</p>
        </div>
      </div>
    );
  }

  if (!selectedJob) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <p className="text-gray-300 mb-8">The requested project could not be found.</p>
          <Button 
            onClick={() => router.push('/')} 
            className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section with Main Image */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={selectedJob.preview_images || selectedJob.gallery?.[0]}
          alt={selectedJob.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
        
        {/* Back Button */}
        <div className="absolute top-8 left-8">
          <Button
            onClick={() => router.back()}
            variant="ghost"
            className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 rounded-full"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </div>

        {/* Category Badge */}
        <div className="absolute top-8 right-8">
          <span className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-2xl">
            {selectedJob.category}
          </span>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center mb-4">
              {[...Array(selectedJob.rating)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-amber-400 text-amber-400 mr-1" />
              ))}
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
              {selectedJob.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white">
              <div className="flex items-center">
                <DollarSign className="h-5 w-5 text-amber-400 mr-2" />
                <span className="text-2xl font-bold">{selectedJob.price}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-amber-400 mr-2" />
                <span className="text-xl">{selectedJob.duration}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Project Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <Crown className="h-6 w-6 mr-3 text-amber-400" />
                  Project Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {selectedJob.description}
                </p>
              </CardContent>
            </Card>

            {/* Materials & Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="text-xl text-white flex items-center">
                    <Diamond className="h-5 w-5 mr-3 text-amber-400" />
                    Premium Materials
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">{selectedJob.materials}</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="text-xl text-white flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 text-green-400" />
                    Luxury Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {selectedJob.features?.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Project Gallery */}
            {selectedJob.gallery && selectedJob.gallery.length > 0 && (
              <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">
                    Project Gallery ({selectedJob.gallery.length} photos)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {selectedJob.gallery.map((image, index) => (
                      <div
                        key={index}
                        className="relative aspect-square cursor-pointer group overflow-hidden rounded-lg"
                        onClick={() => openGallery(index)}
                      >
                        <img
                          src={image}
                          alt={`${selectedJob.title} - Image ${index + 1}`}
                          className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Right Column - Contact & CTA */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-amber-500 to-orange-600 text-white sticky top-8">
              <CardHeader>
                <CardTitle className="text-xl">Interested in Similar Work?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white/90">
                  Get a free consultation for your luxury kitchen or bathroom project.
                </p>
                <div className="space-y-3">
                  <Button
                    className="w-full bg-white text-orange-600 hover:bg-gray-100 font-semibold"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Schedule Consultation
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-white/30 text-white hover:bg-white/10"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Request Quote
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project Stats */}
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-xl text-white">Project Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-slate-700">
                  <span className="text-gray-400">Duration</span>
                  <span className="text-white font-semibold">{selectedJob.duration}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-700">
                  <span className="text-gray-400">Category</span>
                  <span className="text-white font-semibold">{selectedJob.category}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-700">
                  <span className="text-gray-400">Investment</span>
                  <span className="text-white font-semibold">{selectedJob.price}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-400">Rating</span>
                  <div className="flex">
                    {[...Array(selectedJob.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Full-Screen Gallery Modal */}
      {isGalleryOpen && selectedJob.gallery && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Close Button */}
            <Button
              onClick={() => setIsGalleryOpen(false)}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-2"
              size="icon"
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 z-10 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full">
              {currentImageIndex + 1} / {selectedJob.gallery.length}
            </div>

            {/* Previous Button */}
            {selectedJob.gallery.length > 1 && (
              <Button
                onClick={prevImage}
                className="absolute left-4 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-2"
                size="icon"
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
            )}

            {/* Current Image */}
            <img
              src={selectedJob.gallery[currentImageIndex]}
              alt={`${selectedJob.title} - Image ${currentImageIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />

            {/* Next Button */}
            {selectedJob.gallery.length > 1 && (
              <Button
                onClick={nextImage}
                className="absolute right-4 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-2"
                size="icon"
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default JobsDetailView;