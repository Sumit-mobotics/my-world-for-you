import { useEffect, useState } from "react";

interface FloatingHeart {
  id: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    const generateHearts = () => {
      const newHearts: FloatingHeart[] = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 20 + 10,
        delay: Math.random() * 5,
        duration: Math.random() * 4 + 4,
        opacity: Math.random() * 0.4 + 0.1,
      }));
      setHearts(newHearts);
    };

    generateHearts();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-rise"
          style={{
            left: `${heart.left}%`,
            bottom: "-50px",
            fontSize: `${heart.size}px`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            opacity: heart.opacity,
            animationIterationCount: "infinite",
          }}
        >
          💕
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
