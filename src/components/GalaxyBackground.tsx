
import React from 'react';
import StarField from './StarField';

// 은하수 느낌의 그래디언트와 nebula glow, 별, 오오라 등 추가
const GalaxyBackground: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* 은하수 메인 그라데이션 */}
      <div
        className="fixed inset-0 -z-20 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 90% 60% at 50% 55%, #9b87f5cc 0%, #221f26d0 60%, #0a0f29 90%)',
        }}
      />
      {/* 오로라/네뷸라 효과 */}
      <div className="fixed top-1/4 left-1/4 w-[60vw] h-[24vw] -z-10 blur-3xl rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle at 40% 60%, #33c3f080 0%, #abecf000 80%)" }}/>
      <div className="fixed top-1/2 left-[60vw] w-[40vw] h-[20vw] -z-10 blur-2xl rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle at 70% 40%, #d6bcfad0 0%, #0a0f2900 80%)" }}/>
      {/* 별 효과 */}
      <StarField />
      {/* 메인 컨텐츠 */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GalaxyBackground;
