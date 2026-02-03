"use client";

import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import "../../styles/Stories.css";

const StoriesBanner = () => {
  return (
    <>
      <section className="stories-banner">
        <div className="stories-banner-container content-container">
          <div className="stories-banner-content text-center">
            <h2>Discover Inspiring Stories</h2>
            <h3>
              Dive into a <span className="stories-banner-highlight">world of creativity</span> and inspiration with our curated
              stories.
            </h3>
            <button className="explore-button">Explore Stories <span><MdOutlineArrowOutward /></span></button>
          </div>
        </div>
      </section>
    </>
  );
};

export default StoriesBanner;
