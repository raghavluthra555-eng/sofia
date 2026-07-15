import React from 'react';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer-section" id="footer">
      <div className="footer-glow" aria-hidden="true" />
      <div className="footer-content">
        <p className="footer-brand">Sofia</p>
        <p className="footer-tagline">The future of creative, on every screen.</p>
        <p className="footer-copy">&copy; {new Date().getFullYear()} Sofia. All rights reserved.</p>
      </div>
    </footer>
  );
}
