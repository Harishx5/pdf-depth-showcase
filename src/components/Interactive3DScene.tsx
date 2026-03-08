import React, { useRef } from 'react';
import { useMousePosition } from '@/hooks/useMousePosition';

const Interactive3DScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouse = useMousePosition(containerRef as React.RefObject<HTMLElement>);

  const shapes = [
    { size: 80, x: '15%', y: '20%', color: 'hsl(187, 72%, 53%)', depth: 40, type: 'cube' },
    { size: 60, x: '75%', y: '15%', color: 'hsl(200, 80%, 65%)', depth: 25, type: 'ring' },
    { size: 100, x: '80%', y: '65%', color: 'hsl(187, 72%, 53%)', depth: 50, type: 'pyramid' },
    { size: 50, x: '20%', y: '70%', color: 'hsl(220, 70%, 60%)', depth: 30, type: 'sphere' },
    { size: 40, x: '50%', y: '25%', color: 'hsl(187, 72%, 40%)', depth: 20, type: 'diamond' },
    { size: 70, x: '40%', y: '75%', color: 'hsl(200, 60%, 50%)', depth: 35, type: 'cube' },
  ];

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden" style={{ perspective: '1200px' }}>
      {/* Grid floor effect */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(187, 72%, 53%) 1px, transparent 1px),
            linear-gradient(90deg, hsl(187, 72%, 53%) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          transform: `perspective(500px) rotateX(60deg) translateY(${mouse.y * -10}px)`,
          transformOrigin: 'center top',
        }}
      />

      {shapes.map((shape, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: shape.x,
            top: shape.y,
            transform: `translate3d(${mouse.x * shape.depth}px, ${mouse.y * shape.depth}px, 0)`,
            transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {shape.type === 'cube' && (
            <div className="animate-spin-slow" style={{ width: shape.size, height: shape.size, transformStyle: 'preserve-3d' }}>
              {[
                { transform: `translateZ(${shape.size / 2}px)` },
                { transform: `translateZ(-${shape.size / 2}px) rotateY(180deg)` },
                { transform: `translateX(${shape.size / 2}px) rotateY(90deg)` },
                { transform: `translateX(-${shape.size / 2}px) rotateY(-90deg)` },
              ].map((face, fi) => (
                <div
                  key={fi}
                  className="absolute inset-0 animate-pulse-glow"
                  style={{
                    ...face,
                    border: `1px solid ${shape.color}`,
                    background: `${shape.color}10`,
                    backfaceVisibility: 'hidden',
                  }}
                />
              ))}
            </div>
          )}
          {shape.type === 'ring' && (
            <div
              className="animate-float rounded-full"
              style={{
                width: shape.size,
                height: shape.size,
                border: `2px solid ${shape.color}`,
                boxShadow: `0 0 20px ${shape.color}40, inset 0 0 20px ${shape.color}10`,
              }}
            />
          )}
          {shape.type === 'pyramid' && (
            <div className="animate-float-delayed" style={{ width: 0, height: 0 }}>
              <div style={{
                width: 0, height: 0,
                borderLeft: `${shape.size / 2}px solid transparent`,
                borderRight: `${shape.size / 2}px solid transparent`,
                borderBottom: `${shape.size}px solid ${shape.color}15`,
                filter: `drop-shadow(0 0 15px ${shape.color}30)`,
              }} />
            </div>
          )}
          {shape.type === 'sphere' && (
            <div
              className="animate-float rounded-full"
              style={{
                width: shape.size,
                height: shape.size,
                background: `radial-gradient(circle at 30% 30%, ${shape.color}30, transparent 70%)`,
                border: `1px solid ${shape.color}40`,
                boxShadow: `0 0 30px ${shape.color}20`,
              }}
            />
          )}
          {shape.type === 'diamond' && (
            <div
              className="animate-float-delayed"
              style={{
                width: shape.size,
                height: shape.size,
                transform: 'rotate(45deg)',
                border: `1px solid ${shape.color}60`,
                background: `${shape.color}08`,
                boxShadow: `0 0 25px ${shape.color}20`,
              }}
            />
          )}
        </div>
      ))}

      {/* Ambient particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={`p-${i}`}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `hsl(187, 72%, ${50 + Math.random() * 30}%)`,
            opacity: Math.random() * 0.5 + 0.1,
            animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
            transform: `translate3d(${mouse.x * (10 + Math.random() * 20)}px, ${mouse.y * (10 + Math.random() * 20)}px, 0)`,
            transition: 'transform 0.5s ease-out',
          }}
        />
      ))}
    </div>
  );
};

export default Interactive3DScene;
