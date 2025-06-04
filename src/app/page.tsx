"use client";

import ForumLayout from "../components/forum/ForumLayout";
import Header from "../components/ui/Header";

export default function Home() {

  const starPositions = Array.from({ length: 25 }, () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 4}s`,
    size: `${Math.random() * 2 + 1}px`,
  }));

  return (
    <div
      className="relative w-full bg-gradient-to-r from-[#16062B] from-[10%] via-[#0D0216] via-[50%] to-[#15375B] to-[88%] bg-no-repeat bg-center bg-contain min-h-screen pt-10"
    >
      <div className="stars-container absolute inset-0 w-full min-h-screen"></div>

      {starPositions.map((pos, index) => (
        <div
          key={index}
          className={`absolute bg-white rounded-full ${index % 2 === 0 ? "animate-twinkle" : "animate-twinkle-slow"
            }`}
          style={{
            top: pos.top,
            left: pos.left,
            width: pos.size,
            height: pos.size,
            animationDelay: pos.animationDelay,
          }}
        />
      ))}

      <Header />
      <ForumLayout />

    </div>
  );
}
