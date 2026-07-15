import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './VideoParallax.css';

gsap.registerPlugin(ScrollTrigger);

export default function VideoParallax() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // We must wait for the video metadata to load so we know the duration
    const onLoadedMetadata = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.5, // 0.5s smoothing for the scrub
        }
      });

      // Animate the video's currentTime from 0 to its full duration
      tl.fromTo(video, 
        { currentTime: 0 }, 
        { currentTime: video.duration || 1, ease: 'none' }
      );
    };

    if (video.readyState >= 1) {
      onLoadedMetadata();
    } else {
      video.addEventListener('loadedmetadata', onLoadedMetadata);
    }

    return () => {
      video.removeEventListener('loadedmetadata', onLoadedMetadata);
    };
  }, []);

  return (
    <div className="video-parallax-section" ref={containerRef}>
      <div className="video-sticky-container">
        <video 
          ref={videoRef}
          className="parallax-video"
          src="/video.mp4"
          playsInline
          muted
          preload="auto"
        />
      </div>
    </div>
  );
}
