// app/Components/Common/TextAnimation.tsx
'use client';
import { motion } from 'framer-motion';

const TextAnimation = ({ text, className, style, delay = 0 }: any) => {
  const letters = Array.from(text);
  
  return (
    <motion.div 
      className={`flex flex-wrap ${className}`} 
      style={style}
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.05, delayChildren: delay } }
      }}
    >
      {letters.map((char, i) => (
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