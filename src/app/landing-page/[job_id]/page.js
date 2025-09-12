'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft, 
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Grid,
  Maximize2,
  Plus,
  Minus
} from 'lucide-react';
import { jobs } from '../data/Jobs';

const JobsDetailView = () => {
  const params = useParams();
  const router = useRouter();
  const [selectedJob, setSelectedJob] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('grid');
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastPanPoint, setLastPanPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const jobId = params.job_id; 
  
    if (jobId) {
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
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev * 1.5, 5));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => {
      const newZoom = Math.max(prev / 1.5, 1);
      if (newZoom === 1) {
        setPanOffset({ x: 0, y: 0 });
      }
      return newZoom;
    });
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    setZoomLevel(prev => {
      const newZoom = Math.max(Math.min(prev * delta, 5), 1);
      if (newZoom === 1) {
        setPanOffset({ x: 0, y: 0 });
      }
      return newZoom;
    });
  };

  const handleMouseDown = (e) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setLastPanPoint({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && zoomLevel > 1) {
      const deltaX = e.clientX - lastPanPoint.x;
      const deltaY = e.clientY - lastPanPoint.y;
      
      setPanOffset(prev => ({
        x: prev.x + deltaX,
        y: prev.y + deltaY
      }));
      
      setLastPanPoint({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Reset zoom when changing images
  const nextImageWithReset = () => {
    nextImage();
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  };

  const prevImageWithReset = () => {
    prevImage();
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  };


  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-amber-500 border-t-transparent mb-4 mx-auto"></div>
          <p className="text-white text-xl font-light">Loading gallery...</p>
        </div>
      </div>
    );
  }

  if (!selectedJob) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light text-white mb-4">Gallery Not Found</h1>
          <p className="text-gray-400 mb-8">The requested gallery could not be found.</p>
          <Button 
            onClick={() => router.push('/')} 
            className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white rounded-full px-8 py-3"
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
      {/* Header */}
      <div className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => router.push('/#jobs')}
                variant="ghost"
                className="text-white hover:bg-white/10 rounded-full p-2"
                size="icon"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-light text-white">{selectedJob.title}</h1>
                <p className="text-gray-400 text-sm">{selectedJob.category}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm">
                {selectedJob.gallery?.length || 0} photos
              </span>
              <Button
                onClick={() => setViewMode(viewMode === 'grid' ? 'masonry' : 'grid')}
                variant="ghost"
                className="text-white hover:bg-white/10 rounded-full p-2"
                size="icon"
              >
                <Grid className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {selectedJob.gallery && selectedJob.gallery.length > 0 ? (
          <div className={`gap-4 ${
            viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'columns-1 md:columns-2 lg:columns-3 xl:columns-4 space-y-4'
          }`}>
            {selectedJob.gallery.map((image, index) => (
              <div
                key={index}
                className={`relative group cursor-pointer overflow-hidden rounded-lg bg-slate-800 ${
                  viewMode === 'masonry' ? 'break-inside-avoid mb-4' : 'aspect-square'
                }`}
                onClick={() => openGallery(index)}
              >
                <img
                  src={image}
                  alt={`${selectedJob.title} - Image ${index + 1}`}
                  className={`w-full transition-all duration-700 ease-out group-hover:scale-105 ${
                    viewMode === 'masonry' ? 'h-auto' : 'h-full object-cover'
                  }`}
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/20">
                      <ZoomIn className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Image Number */}
                <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                    {index + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-gray-500 mb-4">
              <Grid className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p className="text-xl">No images available</p>
            </div>
          </div>
        )}
      </div>

      {/* Fullscreen Gallery Modal */}
      {isGalleryOpen && selectedJob.gallery && (
        <div className="fixed inset-0 z-50 bg-black">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Header Controls */}
            <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Button
                    onClick={() => setIsGalleryOpen(false)}
                    className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2 backdrop-blur-sm"
                    size="icon"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                  <div className="text-white">
                    <h2 className="font-medium">{selectedJob.title}</h2>
                    <p className="text-sm text-gray-300">
                      {currentImageIndex + 1} of {selectedJob.gallery.length}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button
                    onClick={handleZoomOut}
                    disabled={zoomLevel <= 1}
                    className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2 backdrop-blur-sm disabled:opacity-50"
                    size="icon"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="text-white text-sm min-w-[60px] text-center">
                    {Math.round(zoomLevel * 100)}%
                  </span>
                  <Button
                    onClick={handleZoomIn}
                    disabled={zoomLevel >= 5}
                    className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2 backdrop-blur-sm disabled:opacity-50"
                    size="icon"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Button
                    onClick={handleResetZoom}
                    className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2 backdrop-blur-sm"
                    size="icon"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                  <Button
                    className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2 backdrop-blur-sm"
                    size="icon"
                  >
                    <Maximize2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            {selectedJob.gallery.length > 1 && (
              <>
                <Button
                  onClick={prevImageWithReset}
                  className="absolute left-6 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 backdrop-blur-sm transition-all duration-200"
                  size="icon"
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>

                <Button
                  onClick={nextImageWithReset}
                  className="absolute right-6 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 backdrop-blur-sm transition-all duration-200"
                  size="icon"
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
              </>
            )}

            {/* Main Image */}
            <div 
              className="w-full h-full flex items-center justify-center p-20 overflow-hidden"
              onWheel={handleWheel}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              style={{ cursor: zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
            >
              <img
                src={selectedJob.gallery[currentImageIndex]}
                alt={`${selectedJob.title} - Image ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-transform duration-200 select-none"
                style={{
                  transform: `scale(${zoomLevel}) translate(${panOffset.x / zoomLevel}px, ${panOffset.y / zoomLevel}px)`,
                  transformOrigin: 'center center'
                }}
                draggable={false}
              />
            </div>

            {/* Thumbnail Strip */}
            {selectedJob.gallery.length > 1 && (
              <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="flex justify-center space-x-3 overflow-x-auto pb-2">
                  {selectedJob.gallery.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentImageIndex(index);
                        setZoomLevel(1);
                        setPanOffset({ x: 0, y: 0 });
                      }}
                      className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all duration-200 ${
                        index === currentImageIndex 
                          ? 'ring-2 ring-amber-400 scale-110' 
                          : 'opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default JobsDetailView;