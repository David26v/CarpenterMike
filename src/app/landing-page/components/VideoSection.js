import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

const VideoSection = ({ scrollToSection }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [showControls, setShowControls] = useState(false); 
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play();
          setIsPlaying(true);
        } else if (videoRef.current) {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let timeoutId;
    if (showControls) {
      timeoutId = setTimeout(() => {
        setShowControls(false);
      }, 2000);
    }
    return () => clearTimeout(timeoutId);
  }, [showControls]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const handleVideoClick = () => {
    // Toggle controls on click
    setShowControls(prev => !prev);

    // If video is paused, play it on click
    if (!isPlaying) {
      videoRef.current?.play();
      setIsPlaying(true);
    }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600"></div>
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.1) 0%, transparent 50%)`
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Animation */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full mb-6">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wide">
              ✨ Our Work Showcase
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
            See My Work in{' '}
            <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Experience the transformation journey as I turn ordinary spaces into extraordinary sanctuaries
          </p>
        </div>

        {/* Video Container — Click to Show Controls */}
        <div className="relative max-w-5xl mx-auto group">
          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-20 blur-xl"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-15 blur-2xl"></div>
          
          {/* Main Video Container — CLICKABLE */}
          <div 
            className="relative bg-black rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500 border border-gray-200 cursor-pointer"
            onClick={handleVideoClick}
          >
            <div className="aspect-video relative">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/home_page_video_thumbnail.png"
                preload="auto"
                onLoadedData={() => {
                  if (videoRef.current && isVisible) {
                    videoRef.current.play();
                  }
                }}
              >
                <source src="/home_page_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* ✅ CONTROLS — ONLY SHOW ON CLICK */}
              {showControls && (
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-black bg-opacity-60 backdrop-blur-sm rounded-full px-6 py-3 text-white z-20 transition-opacity duration-300">
                  <button
                    onClick={(e) => { e.stopPropagation(); togglePlay(); }}
                    className="hover:text-amber-400 transition-colors duration-200"
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  >
                    {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                  </button>
                  
                  <button
                    onClick={(e) => { e.stopPropagation(); toggleMute(); }}
                    className="hover:text-amber-400 transition-colors duration-200"
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                  >
                    {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                  </button>
                  
                  <button
                    onClick={(e) => { e.stopPropagation(); handleFullscreen(); }}
                    className="hover:text-amber-400 transition-colors duration-200"
                    aria-label="Fullscreen"
                  >
                    <Maximize size={24} />
                  </button>
                </div>
              )}

              {/* 🎬 Play Icon When Paused (Only if controls are hidden) */}
              {!isPlaying && !showControls && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-full p-8 border border-white border-opacity-20">
                    <Play size={48} className="text-white" />
                  </div>
                </div>
              )}

              {/* Video Progress Indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700 bg-opacity-50">
                <div className="h-full bg-gradient-to-r from-amber-500 to-orange-600 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-xl text-gray-600 mb-6 font-medium">
              Ready to transform your space?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection("contact")}
                className="group relative bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold text-lg min-w-[200px]"
              >
                <span className="relative z-10">Contact Us  </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button 
                className="text-gray-600 hover:text-gray-800 px-6 py-4 rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 font-semibold"
                onClick={() => scrollToSection("jobs")}
              >
                View My Works
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;