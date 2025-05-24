"use client"
import React from 'react';

// 1. Main Gradient Background Component
const GradientBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      {/* Main gradient matching IEEE image - dark navy to deep purple/black */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-black"></div>
      
      {/* Secondary overlay for the exact color match */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/80 via-purple-950/60 to-slate-900/90"></div>
      
      {/* Dark overlay to match the deep tones */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-black/50"></div>
    </div>
  );
};

// 2. Rectangle Shapes Component - Distributed ONLY in middle areas (NO CORNERS)
const AnimatedRectangles = () => {
  const rectangles = [
    // Top row - only middle areas
    { id: 1, size: 'w-96 h-24', position: 'top-[34%] -left-[4%]', rotation: '-rotate-32' },
    { id: 2, size: 'w-96 h-28', position: 'top-[78%] left-[74%]', rotation: '-rotate-16' },
    
    // Upper middle row
    // { id: 3, size: 'w-36 h-24', position: 'top-[20%] left-[75%]', rotation: 'rotate-3' },
    { id: 4, size: 'w-48 h-12', position: 'top-[75%] left-[22%]', rotation: '-rotate-12' },
    
    // Center left and right (not corners)
    // { id: 5, size: 'w-44 h-20', position: 'top-[35%] left-[80%]', rotation: 'rotate-8' },
    // { id: 6, size: 'w-36 h-20', position: 'top-[40%] left-[70%]', rotation: '-rotate-4' },
    
    // True center
    // { id: 7, size: 'w-44 h-24', position: 'top-[50%] left-[45%]', rotation: 'rotate-15' },
    
    // Lower middle areas  
    // { id: 8, size: 'w-44 h-28', position: 'top-[60%] left-[80%]', rotation: 'rotate-6' },
    // { id: 9, size: 'w-40 h-24', position: 'top-[65%] left-[60%]', rotation: '-rotate-10' },
    
    // Bottom row - only middle areas
    // { id: 10, size: 'w-36 h-28', position: 'top-[75%] left-[90%]', rotation: 'rotate-4' },
    { id: 11, size: 'w-64 h-20', position: 'top-[20%] left-[82%]', rotation: '-rotate-128' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <style jsx>{`
        @keyframes floatMove {
          0%, 100% { 
            transform: translate(0, 0) rotate(var(--rotation));
          }
          33% { 
            transform: translate(15px, -10px) rotate(calc(var(--rotation) + 2deg));
          }
          66% { 
            transform: translate(-10px, 8px) rotate(calc(var(--rotation) - 3deg));
          }
        }
      `}</style>
      {rectangles.map((rect) => (
        <div
          key={rect.id}
          className={`absolute ${rect.size} ${rect.position} opacity-50
                     bg-gradient-to-br from-blue-500/15 via-purple-500/12 to-indigo-500/15 
                     backdrop-blur-sm border-2 border-white/20 rounded-3xl`}
          style={{
            '--rotation': rect.rotation.includes('-') ? rect.rotation.replace('-rotate-', '-') + 'deg' : rect.rotation.replace('rotate-', '') + 'deg',
            animation: `floatMove ${8 + (rect.id % 3)}s ease-in-out infinite`,
            animationDelay: `${rect.id * 0.5}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

// 3. Circular Shapes Component - Distributed ONLY in middle areas (NO CORNERS)
const AnimatedCircles = () => {
  const circles = [
    // Top row - only middle areas
    // { id: 1, size: 'w-32 h-32', position: 'top-[12%] left-[40%]' },
    // { id: 2, size: 'w-28 h-28', position: 'top-[75%] left-[25%]' },
    
    // Upper middle
    // { id: 3, size: 'w-24 h-24', position: 'top-[25%] left-[30%]' },
    // { id: 4, size: 'w-36 h-36', position: 'top-[30%] left-[50%]' },
    
    // Left and right middle (not corners)
    // { id: 5, size: 'w-30 h-30', position: 'top-[40%] left-[25%]' },
    // { id: 6, size: 'w-26 h-26', position: 'top-[45%] left-[65%]' },
    
    // True center
    // { id: 7, size: 'w-22 h-22', position: 'top-[55%] left-[45%]' },
    
    // Lower middle areas
    // { id: 8, size: 'w-34 h-34', position: 'top-[65%] left-[35%]' },
    // { id: 9, size: 'w-28 h-28', position: 'top-[70%] left-[55%]' },
    
    // Bottom row - only middle areas  
    // { id: 10, size: 'w-24 h-24', position: 'top-[80%] left-[30%]' },
    // { id: 11, size: 'w-30 h-30', position: 'top-[85%] left-[50%]' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <style jsx>{`
        @keyframes circleFloat {
          0%, 100% { 
            transform: translate(0, 0) scale(1);
          }
          25% { 
            transform: translate(12px, -8px) scale(1.05);
          }
          50% { 
            transform: translate(-8px, 12px) scale(0.95);
          }
          75% { 
            transform: translate(8px, -12px) scale(1.02);
          }
        }
      `}</style>
      {circles.map((circle) => (
        <div
          key={circle.id}
          className={`absolute ${circle.size} ${circle.position} opacity-35
                     bg-gradient-to-br from-cyan-500/12 via-blue-500/15 to-indigo-500/12 
                     backdrop-blur-sm border-2 border-white/25 rounded-full`}
          style={{
            animation: `circleFloat ${6 + (circle.id % 4)}s ease-in-out infinite`,
            animationDelay: `${circle.id * 0.7}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

// Main Component combining all three
const IEEEBackground = () => {
  return (
    <div className="relative min-h-screen">
      {/* Main gradient background with exact IEEE colors */}
      <GradientBackground />
      
      {/* Animated rectangles distributed across page */}
      <AnimatedRectangles />
      
      {/* Animated circles distributed across page */}
      <AnimatedCircles />
      
      {/* Your content goes here */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center text-white">
          <div className="mb-8">
            <div className="text-red-400 text-sm mb-4">● IEEE</div>
            <h1 className="text-7xl font-bold mb-6 text-white">IEEE</h1>
            <h2 className="text-4xl mb-4 text-gray-300">Student Branch</h2>
            <p className="text-2xl mb-6 text-gray-400">Birla Institute of Technology Mesra</p>
            <p className="text-lg text-blue-400">Advancing Technology for Humanity</p>
            
            {/* Buttons like in original */}
            <div className="flex gap-4 justify-center mt-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Join Now
              </button>
              <button className="bg-transparent hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold border border-white/30 transition-colors">
                View Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IEEEBackground;