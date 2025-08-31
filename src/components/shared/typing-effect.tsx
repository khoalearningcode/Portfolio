"use client";

import { useState, useEffect, useRef } from 'react';

const roles = [
  'AI Engineer',
  'DevOps Enthusiast',
  'Computer Science Student',
  'Neural Network Explorer',
  'Cloud Computing Advocate',
];

const TypingEffect = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const typingSpeed = 150;
  const deletingSpeed = 75;
  const delay = 2000;
  
  const handleTyping = () => {
    const i = loopNum % roles.length;
    const fullText = roles[i];

    setText(
      isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
    );

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  };
  
  useEffect(() => {
    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  });


  return (
    <span className="text-accent font-mono">
      {text}
      <span className="animate-ping">|</span>
    </span>
  );
};

export default TypingEffect;
