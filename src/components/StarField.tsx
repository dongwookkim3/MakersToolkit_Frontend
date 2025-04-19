
import React, { useEffect, useState, useMemo } from 'react';

// 성능 최적화를 위한 별 수 조정 함수
const useOptimizedStarCount = () => {
  const [starCount, setStarCount] = useState(50);
  
  useEffect(() => {
    const calculateStarCount = () => {
      // 화면 크기 및 기기 성능에 따라 별 수 최적화
      const width = window.innerWidth;
      
      // 모바일은 더 적은 별 생성
      if (width < 640) {
        return 30;
      }
      // 태블릿은 중간 수준의 별 생성
      else if (width < 1024) {
        return 50;
      }
      // 데스크톱은 더 많은 별 생성
      else {
        return 80;
      }
    };
    
    setStarCount(calculateStarCount());
    
    const handleResize = () => {
      setStarCount(calculateStarCount());
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return starCount;
};

const StarField = () => {
  const starCount = useOptimizedStarCount();
  
  // 별들을 useMemo로 생성하여 불필요한 재계산 방지
  const stars = useMemo(() => {
    const newStars = [];
    
    for (let i = 0; i < starCount; i++) {
      const size = Math.random() < 0.7 ? 'small' : (Math.random() < 0.9 ? 'medium' : 'large');
      newStars.push({
        id: i,
        size,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 6}s`,
        animationDuration: `${3 + Math.random() * 3}s`,
        opacity: 0.2 + Math.random() * 0.8
      });
    }
    
    return newStars;
  }, [starCount]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            top: star.top,
            left: star.left,
            width: star.size === 'small' ? '1px' : (star.size === 'medium' ? '2px' : '3px'),
            height: star.size === 'small' ? '1px' : (star.size === 'medium' ? '2px' : '3px'),
            opacity: star.opacity,
            animation: `twinkle-smooth ${star.animationDuration} ease-in-out infinite`,
            animationDelay: star.animationDelay,
            willChange: 'opacity',
            '--initial-opacity': star.opacity,
            '--final-opacity': star.opacity * 0.3,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default StarField;
