// app/Components/Common/TextAnimation.tsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';

// Define an interface for the props to provide proper typing
interface TextAnimationProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}

const TextAnimation = ({ text, className, style, delay = 0 }: TextAnimationProps) => {
  // Ensure text is treated as a string array
  const letters = Array.from(text);
  
  return (
    <motion.div 
      className={`flex flex-wrap ${className || ''}`} 
      style={style}
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.05, delayChildren: delay } }
      }}
    >
      {/* Explicitly type char as a string to resolve the ReactNode assignment error */}
      {letters.map((char: string, i: number) => (
        <motion.span 
          key={i}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TextAnimation;