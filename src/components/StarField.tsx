
import React, { useEffect, useState } from 'react';

interface Star {
  id: number;
  size: 'small' | 'medium' | 'large';
  top: string;
  left: string;
  animationDelay: string;
}

const StarField = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const newStars: Star[] = [];
    const starCount = window.innerWidth < 768 ? 50 : 100;
    
    for (let i = 0; i < starCount; i++) {
      const sizes = ['small', 'medium', 'large'] as const;
      newStars.push({
        id: i,
        size: sizes[Math.floor(Math.random() * 3)],
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 6}s`
      });
    }
    
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className={`star star-${star.size} animate-twinkle`}
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.animationDelay
          }}
        />
      ))}
    </div>
  );
};

export default StarField;
