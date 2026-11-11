"use client";

import { useState } from "react";

type PreviewMode = "desktop" | "mobile";

export default function WebsiteShowcase() {
  const [mode, setMode] = useState<PreviewMode>("desktop");

  return (
    <div className={`showcase-preview showcase-${mode}`}>
      <div className="showcase-preview-bar">
        <div>
          <span className="showcase-kicker">RESPONSIVE BY DESIGN</span>
          <span className="showcase-domain">yourbusiness.co.za</span>
        </div>
        <div className="showcase-toggle" role="group" aria-label="Choose website preview size">
          <button
            type="button"
            aria-pressed={mode === "desktop"}
            onClick={() => setMode("desktop")}
          >
            <svg viewBox="0 0 20 16" aria-hidden="true">
              <rect x="1" y="1" width="18" height="12" rx="1.5" />
              <path d="M7 15h6M10 13v2" />
            </svg>
            Desktop
          </button>
          <button
            type="button"
            aria-pressed={mode === "mobile"}
            onClick={() => setMode("mobile")}
          >
            <svg viewBox="0 0 16 20" aria-hidden="true">
              <rect x="2" y="1" width="12" height="18" rx="2" />
              <path d="M7 16h2" />
            </svg>
            Mobile
          </button>
        </div>
      </div>
      <div className="showcase-device-stage">
        <div className="showcase-device-orbit" aria-hidden="true" />
        <div className="showcase-browser">
          <div className="showcase-browser-chrome">
            <span />
            <span />
            <span />
            <div className="showcase-browser-address">yourbusiness.co.za</div>
            <span className="browser-lock" aria-hidden="true">⌑</span>
          </div>
          <div className="showcase-website">
            <header className="showcase-site-header">
              <span className="showcase-site-mark">Y<span>B</span></span>
              <span className="showcase-site-name">YOUR BUSINESS</span>
              <nav aria-label="Illustrative website preview">
                <span>HOME</span>
                <span>ABOUT</span>
                <span>CONTACT</span>
              </nav>
              <span className="showcase-site-cta">LET&apos;S TALK <b>↗</b></span>
            </header>
            <div className="showcase-site-hero">
              <div className="showcase-site-copy">
                <span className="showcase-site-eyebrow">WELCOME TO YOUR BUSINESS</span>
                <h3>A good business<br />deserves a <em>great</em><br />first impression.</h3>
                <p>A considered online home for the work you do.</p>
                <span className="showcase-discover">GET TO KNOW US <b>↗</b></span>
              </div>
              <div className="showcase-site-visual" aria-hidden="true">
                <div className="visual-sun" />
                <div className="visual-vase"><i /><i /><i /><i /><i /></div>
                <div className="visual-plinth" />
                <span className="visual-caption">WEBSITE<br />CONCEPT</span>
              </div>
            </div>
            <div className="showcase-site-footer">
              <span>YOUR WORK, YOUR STORY</span>
              <span>MADE FOR PEOPLE LIKE YOU <b>✳</b></span>
            </div>
          </div>
        </div>
        <div className="showcase-phone">
          <div className="showcase-phone-screen">
            <div className="showcase-phone-notch" />
            <div className="showcase-phone-nav">
              <span>YB</span>
              <span>☰</span>
            </div>
            <span className="showcase-phone-kicker">WELCOME TO</span>
            <strong>A good business deserves a <em>great</em> first impression.</strong>
            <span className="showcase-phone-art" aria-hidden="true">
              <i /><i /><i />
            </span>
            <span className="showcase-phone-cta">GET TO KNOW US ↗</span>
            <span className="showcase-phone-home" />
          </div>
        </div>
        <span className="showcase-illustrative-label">
          ILLUSTRATIVE WEBSITE CONCEPT <span>·</span> NOT A CLIENT PROJECT
        </span>
      </div>
    </div>
  );
}
