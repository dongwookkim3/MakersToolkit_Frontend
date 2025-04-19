
import React, { useEffect, useState } from 'react';

// 성능 최적화를 위한 별 수 조정 함수
const useOptimizedStarCount = () => {
  const [starCount, setStarCount] = useState(0);
  
  useEffect(() => {
    const calculateStarCount = () => {
      // 화면 크기 및 기기 성능에 따라 별 수 최적화
      const width = window.innerWidth;
      
      // 모바일은 더 적은 별 생성
      if (width < 768) {
        return 40;
      }
      // 태블릿은 중간 수준의 별 생성
      else if (width < 1280) {
        return 70;
      }
      // 데스크톱은 더 많은 별 생성
      else {
        return 100;
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

const DynamicBackground = () => {
  const starCount = useOptimizedStarCount();
  
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* 그라데이션 배경 */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-950 to-slate-950" />
      
      {/* 최적화된 애니메이션 원형 */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl smooth-floating" style={{ willChange: 'transform' }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl smooth-floating" style={{ animationDelay: '-3s', willChange: 'transform' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-400/20 rounded-full blur-2xl smooth-pulsing" style={{ animationDelay: '-2s', willChange: 'opacity' }} />
      
      {/* 최적화된 추가 원형 */}
      <div className="absolute top-3/4 left-1/3 w-72 h-72 bg-indigo-500/15 rounded-full blur-2xl smooth-floating" style={{ animationDelay: '-4s', willChange: 'transform' }} />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl smooth-floating" style={{ animationDelay: '-1s', willChange: 'transform' }} />
      
      {/* 최적화된 웨이브 효과 */}
      <div className="absolute bottom-0 left-0 right-0 h-48 opacity-30">
        <div className="absolute inset-0 smooth-wave cosmic-gradient" style={{ willChange: 'transform' }} />
        <div className="absolute inset-0 smooth-wave cosmic-gradient" style={{ animationDelay: '-2.5s', opacity: 0.7, willChange: 'transform' }} />
        <div className="absolute inset-0 smooth-wave cosmic-gradient" style={{ animationDelay: '-5s', opacity: 0.4, willChange: 'transform' }} />
        <div className="absolute inset-0 smooth-wave cosmic-gradient" style={{ animationDelay: '-7.5s', opacity: 0.6, willChange: 'transform' }} />
      </div>
      
      {/* 최적화된 별 배경 */}
      <OptimizedStarField count={starCount} />
    </div>
  );
};

// 성능 최적화된 별 배경 컴포넌트
const OptimizedStarField = ({ count = 50 }) => {
  const [stars, setStars] = useState([]);
  
  useEffect(() => {
    const newStars = Array.from({ length: count }).map((_, index) => {
      const size = Math.random() < 0.7 ? 'small' : (Math.random() < 0.9 ? 'medium' : 'large');
      return {
        id: index,
        size,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 6}s`,
        animationDuration: `${Math.random() * 2 + 3}s`, // 랜덤한 지속 시간으로 더 자연스러움 추가
        opacity: Math.random() * 0.5 + 0.3, // 다양한 밝기의 별
      };
    });
    
    setStars(newStars);
  }, [count]);
  
  return (
    <div className="absolute inset-0 pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-twinkle-smooth"
          style={{
            width: star.size === 'small' ? '1px' : (star.size === 'medium' ? '2px' : '3px'),
            height: star.size === 'small' ? '1px' : (star.size === 'medium' ? '2px' : '3px'),
            top: star.top,
            left: star.left,
            opacity: star.opacity,
            animationDelay: star.animationDelay,
            animationDuration: star.animationDuration,
            willChange: 'opacity',
          }}
        />
      ))}
    </div>
  );
};

export default DynamicBackground;
