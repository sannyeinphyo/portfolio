import React, { useState, useEffect, useRef } from "react";

export default function CatNavigator() {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [state, setState] = useState("walk"); // 'walk' | 'code' | 'sleep'
  const [facingLeft, setFacingLeft] = useState(false);
  const [tilt, setTilt] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const mousePos = useRef({ x: 100, y: 100 });
  const catPos = useRef({ x: 100, y: 100 });
  const lastDx = useRef(0);
  const idleTimer = useRef(null);

  // 1. Theme Detection (Auto detects dark mode via HTML class)
  useEffect(() => {
    const updateTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };
    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // 2. Mouse Tracking & Multi-Stage Idle States
  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      setState("walk");

      clearTimeout(idleTimer.current);

      // Idle State Machine:
      // After 2s -> Starts Coding ⌨️
      // After 8s -> Falls Asleep 💤
      idleTimer.current = setTimeout(() => {
        setState("code");
        idleTimer.current = setTimeout(() => {
          setState("sleep");
        }, 6000);
      }, 2000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(idleTimer.current);
    };
  }, []);

  // 3. Smooth Physics Engine (Lerp + Velocity Tilt)
  useEffect(() => {
    let animationFrameId;

    const updateCatPosition = () => {
      if (state === "walk") {
        const dx = mousePos.current.x - catPos.current.x - 20;
        const dy = mousePos.current.y - catPos.current.y - 20;
        const distance = Math.hypot(dx, dy);

        // Direction flipping
        if (dx < -2) setFacingLeft(true);
        if (dx > 2) setFacingLeft(false);

        if (distance > 12) {
          // Lerp position movement
          catPos.current.x += dx * 0.09;
          catPos.current.y += dy * 0.09;

          // Rotational physics lean into velocity curve
          const velocityX = dx - lastDx.current;
          setTilt(Math.max(-15, Math.min(15, velocityX * 0.8)));
          lastDx.current = dx;

          setPosition({ x: catPos.current.x, y: catPos.current.y });
        } else {
          setTilt(0);
        }
      } else {
        setTilt(0);
      }
      animationFrameId = requestAnimationFrame(updateCatPosition);
    };

    animationFrameId = requestAnimationFrame(updateCatPosition);
    return () => cancelAnimationFrame(animationFrameId);
  }, [state]);

  // Color Palette Definition
  const furColor = isDarkMode ? "#F8FAFC" : "#1E293B"; // White in Dark Mode, Dark Slate in Light Mode
  const eyeColor = isDarkMode ? "#38BDF8" : "#6366F1"; // Cyan Glow vs Indigo
  const innerEar = isDarkMode ? "#F472B6" : "#EC4899"; // Soft Pink
  const shadowColor = isDarkMode ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0.15)";

  return (
    <div
      className="fixed pointer-events-none z-[99999] transition-transform duration-75 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `scaleX(${facingLeft ? -1 : 1}) rotate(${facingLeft ? -tilt : tilt}deg)`,
      }}
    >
      {/* Ground Shadow */}
      <div
        className="absolute -bottom-1 left-3 w-10 h-3 rounded-full blur-sm transition-all duration-300"
        style={{
          backgroundColor: shadowColor,
          transform: state === "sleep" ? "scaleX(1.4)" : "scaleX(1)",
        }}
      />

      {/* STATE 1: CODING CAT */}
      {state === "code" && (
        <div className="relative flex flex-col items-center">
          <div className="absolute -top-7 px-2.5 py-0.5 bg-indigo-600/90 text-cyan-200 text-[10px] font-mono rounded-full border border-cyan-400/40 whitespace-nowrap shadow-lg backdrop-blur-md animate-bounce">
            const dev = "🐱";
          </div>

          <svg width="56" height="56" viewBox="0 0 64 64" fill="none">
            {/* Tail */}
            <path
              d="M14 44 C 6 36, 4 22, 10 16"
              stroke={furColor}
              strokeWidth="4.5"
              strokeLinecap="round"
              className="animate-[tail-sway_1.2s_ease-in-out_infinite] origin-bottom"
              fill="none"
            />

            {/* Body & Head */}
            <ellipse cx="32" cy="42" rx="16" ry="12" fill={furColor} />
            <circle cx="32" cy="26" r="13" fill={furColor} />

            {/* Ears */}
            <polygon points="21,18 25,6 30,18" fill={furColor} />
            <polygon points="23,17 25,9 28,17" fill={innerEar} />
            <polygon points="34,18 39,6 43,18" fill={furColor} />
            <polygon points="36,17 39,9 41,17" fill={innerEar} />

            {/* Glasses / Eyes */}
            <circle cx="27" cy="26" r="3.5" stroke={eyeColor} strokeWidth="1.5" fill="none" />
            <circle cx="37" cy="26" r="3.5" stroke={eyeColor} strokeWidth="1.5" fill="none" />
            <line x1="30.5" y1="26" x2="33.5" y2="26" stroke={eyeColor} strokeWidth="1.5" />

            {/* Pink Nose */}
            <polygon points="31,30 33,30 32,31.5" fill={innerEar} />

            {/* Laptop Base & Screen */}
            <rect x="12" y="48" width="40" height="4" rx="2" fill="#94A3B8" />
            <rect x="16" y="35" width="32" height="14" rx="2" fill="#0F172A" stroke="#475569" strokeWidth="1.5" />

            {/* Laptop Screen Lines */}
            <line x1="19" y1="38" x2="30" y2="38" stroke={eyeColor} strokeWidth="2" strokeLinecap="round" />
            <line x1="19" y1="42" x2="38" y2="42" stroke="#F472B6" strokeWidth="2" strokeLinecap="round" />

            {/* Tapping Paws */}
            <ellipse cx="24" cy="47" rx="3" ry="2.5" fill={furColor} className="animate-[paw-tap_0.2s_ease-in-out_infinite]" />
            <ellipse cx="40" cy="47" rx="3" ry="2.5" fill={furColor} className="animate-[paw-tap_0.2s_ease-in-out_infinite_0.1s]" />
          </svg>
        </div>
      )}

      {/* STATE 2: SLEEPING CAT */}
      {state === "sleep" && (
        <div className="relative flex flex-col items-center">
          <div className="absolute -top-6 right-0 text-cyan-400 font-bold font-mono text-xs animate-bounce">
            Z z z... 💤
          </div>

          <svg width="55" height="45" viewBox="0 0 64 48" fill="none">
            <ellipse cx="32" cy="30" rx="20" ry="14" fill={furColor} />
            <path
              d="M48 30 C 52 38, 38 44, 22 42"
              stroke={furColor}
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
            />
            <polygon points="16,22 20,12 25,22" fill={furColor} />
            <polygon points="18,21 20,15 23,21" fill={innerEar} />
            {/* Sleeping eyes (u _ u) */}
            <path d="M 20 28 Q 23 31 26 28" stroke="#64748B" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M 30 28 Q 33 31 36 28" stroke="#64748B" strokeWidth="2" strokeLinecap="round" fill="none" />
          </svg>
        </div>
      )}

      {/* STATE 3: WALKING / RUNNING CAT */}
      {state === "walk" && (
        <svg width="52" height="52" viewBox="0 0 64 64" fill="none">
          {/* Swaying Tail */}
          <path
            d="M12 40 C 4 30, 2 18, 8 10"
            stroke={furColor}
            strokeWidth="4.5"
            strokeLinecap="round"
            className="animate-[tail-sway_1.2s_ease-in-out_infinite] origin-bottom"
            fill="none"
          />

          {/* Body */}
          <path d="M 18 42 C 18 26, 44 26, 44 42 C 44 48, 18 48, 18 42 Z" fill={furColor} />

          {/* Head */}
          <circle cx="42" cy="24" r="12" fill={furColor} />

          {/* Ears */}
          <polygon points="33,16 37,4 42,16" fill={furColor} />
          <polygon points="35,15 37,7 40,15" fill={innerEar} />
          <polygon points="43,16 48,4 52,16" fill={furColor} />
          <polygon points="45,15 48,7 50,15" fill={innerEar} />

          {/* Glowing Eye */}
          <circle cx="46" cy="22" r="2.5" fill={eyeColor} className="animate-pulse" />

          {/* Whiskers */}
          <line x1="48" y1="25" x2="58" y2="23" stroke={eyeColor} strokeWidth="1" strokeLinecap="round" opacity="0.7" />
          <line x1="48" y1="27" x2="57" y2="28" stroke={eyeColor} strokeWidth="1" strokeLinecap="round" opacity="0.7" />

          {/* Paws with Running Animation */}
          <rect x="22" y="44" width="4" height="9" rx="2" fill={furColor} className="animate-[paw-tap_0.2s_ease-in-out_infinite]" />
          <rect x="38" y="44" width="4" height="9" rx="2" fill={furColor} className="animate-[paw-tap_0.2s_ease-in-out_infinite_0.1s]" />
        </svg>
      )}
    </div>
  );
}