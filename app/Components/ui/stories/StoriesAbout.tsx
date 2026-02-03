'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import "../../styles/Stories.css"

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const StoriesAbout = () => {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    // Split text into spans for each letter
    const content = textRef.current.textContent || "";
    const splitText = content
      .split("")
      .map((char) => `<span class="scroll-letter">${char}</span>`)
      .join("");
    
    textRef.current.innerHTML = splitText;

    // GSAP Animation
    gsap.to(".scroll-letter", {
      color: "#000000", // Target color (Black)
      stagger: 0.1,
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%", // Start when text is near bottom of viewport
        end: "bottom 40%", // End when text is near top
        scrub: true, // Sync animation with scroll
      },
    });
  }, []);

  return (
    <>
        <section className='stories-about'>
            <div className='stories-about-container content-container'>
                <div className='stories-about-content text-center'> 
                    <h2>Born from the Love of Cinema</h2>  
                    <p ref={textRef}>
                      Cinema isn’t just entertainment—it’s emotion, memory, and art. Cinema Crafted was born from a simple idea: what if your favorite movie moments could live beyond the screen? From iconic posters to unforgettable scenes, we collaborate with skilled designers and artists to transform films into wearable art and collectible masterpieces.
                    </p>
                </div>
            </div>
        </section>
    </>
  )
}

export default StoriesAbout