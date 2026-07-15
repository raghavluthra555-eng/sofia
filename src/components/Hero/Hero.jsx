import React from 'react';
import './Hero.css';

export function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-glow-accent" aria-hidden="true" />
      <div className="hero-content">
        <div className="hero-brand-mark" aria-hidden="true">
          <div className="hero-brand-ring" />
          <div className="hero-brand-ring hero-brand-ring--inner" />
        </div>
        <h1 className="hero-title">Every Screen. Every Format.</h1>
        <p className="hero-subtitle">AI-powered creative that performs across all platforms.</p>
      </div>
      <div className="scroll-indicator" aria-label="Scroll to explore">
        <div className="scroll-indicator__track">
          <div className="scroll-indicator__thumb" />
        </div>
        <span className="scroll-indicator__text">Scroll to explore</span>
      </div>
    </section>
  );
}
