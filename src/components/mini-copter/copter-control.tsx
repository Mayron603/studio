
"use client";

import { useState, useEffect, useCallback } from 'react';

const GAME_WIDTH = 500;
const GAME_HEIGHT = 300;
const COPTER_WIDTH = 60;
const COPTER_HEIGHT = 35; // Adjusted for the new SVG aspect ratio
const STEP = 10; // Movement step in pixels

const HelicopterSVG = () => (
  <svg
    width={COPTER_WIDTH}
    height={COPTER_HEIGHT}
    viewBox="0 0 60 35" // Adjusted viewBox
    className="fill-primary transition-transform duration-100"
  >
    {/* Main Rotor Base */}
    <rect x="28" y="0" width="4" height="8" rx="1" />
    {/* Main Rotor Blades */}
    <rect x="5" y="5" width="50" height="3" rx="1.5" />
    {/* Body */}
    <path d="M10 12 Q15 8, 30 12 T50 12 L55 22 Q30 28, 5 22 Z" />
    {/* Tail Boom */}
    <polygon points="0,17 10,15 10,20 0,22" />
    {/* Tail Rotor */}
    <circle cx="3" cy="19" r="4" className="fill-secondary" />
    <circle cx="3" cy="19" r="2" className="fill-primary/70" />
    {/* Skids */}
    <rect x="15" y="25" width="30" height="2" rx="1" />
    <rect x="20" y="22" width="2" height="3" rx="1" />
    <rect x="38" y="22" width="2" height="3" rx="1" />
  </svg>
);


export function CopterControl() {
  const [position, setPosition] = useState({ 
    x: GAME_WIDTH / 2 - COPTER_WIDTH / 2, 
    y: GAME_HEIGHT / 2 - COPTER_HEIGHT / 2 
  });

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    event.preventDefault(); // Prevent page scrolling with arrow keys
    setPosition((prevPos) => {
      let newX = prevPos.x;
      let newY = prevPos.y;

      switch (event.key) {
        case 'ArrowUp':
          newY = Math.max(0, prevPos.y - STEP);
          break;
        case 'ArrowDown':
          newY = Math.min(GAME_HEIGHT - COPTER_HEIGHT, prevPos.y + STEP);
          break;
        case 'ArrowLeft':
          newX = Math.max(0, prevPos.x - STEP);
          break;
        case 'ArrowRight':
          newX = Math.min(GAME_WIDTH - COPTER_WIDTH, prevPos.x + STEP);
          break;
        default:
          return prevPos;
      }
      return { x: newX, y: newY };
    });
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div
      className="relative bg-muted/30 border border-border rounded-md shadow-inner overflow-hidden cursor-grab focus:outline-none focus:ring-2 focus:ring-primary"
      style={{ width: GAME_WIDTH, height: GAME_HEIGHT }}
      tabIndex={0} // Make div focusable to receive key events
      aria-label="Área de controle do helicóptero"
    >
      <div
        style={{
          position: 'absolute',
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: `${COPTER_WIDTH}px`,
          height: `${COPTER_HEIGHT}px`,
        }}
      >
        <HelicopterSVG />
      </div>
      {/* Optional: Grid lines for visual aid */}
      {Array.from({ length: Math.floor(GAME_HEIGHT / 50) }).map((_, i) => (
        <div key={`h-${i}`} className="absolute left-0 right-0 bg-border/30" style={{ top: (i + 1) * 50, height: '1px' }} />
      ))}
      {Array.from({ length: Math.floor(GAME_WIDTH / 50) }).map((_, i) => (
        <div key={`w-${i}`} className="absolute top-0 bottom-0 bg-border/30" style={{ left: (i + 1) * 50, width: '1px' }} />
      ))}
    </div>
  );
}

    