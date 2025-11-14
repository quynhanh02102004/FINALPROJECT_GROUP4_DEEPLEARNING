import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero-full">
      <section className="hero-banner">

        {/* Ảnh nền */}
        <div className="hero-bg"></div>

        {/* Content */}
        <div className="hero-content">
          {/* <h1 className="hero-title">
            WEAR YOUR <span className="gold">CHARACTER</span> <br />
            LIVE WITH <span className="gold">CONFIDENCE</span>
          </h1> */}

          <div className="hero-actions">
            <Link className="btn btn-outline" to="/search-image">
              📸Find similar items✨ 
            </Link>
          </div>
        </div>

      </section>
    </div>
  );
}
