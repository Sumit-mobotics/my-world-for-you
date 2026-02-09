import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import celebration from "@/assets/celebration.png";

const FinaleSection = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiPieces, setConfettiPieces] = useState<
    { id: number; left: number; color: string; delay: number; size: number }[]
  >([]);

  useEffect(() => {
    const pieces = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      color: ["💕", "💖", "✨", "💗", "🌸", "💝", "⭐", "🎀"][
        Math.floor(Math.random() * 8)
      ],
      delay: Math.random() * 3,
      size: Math.random() * 10 + 14,
    }));
    setConfettiPieces(pieces);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-finale overflow-hidden px-4">
      {/* Confetti */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {confettiPieces.map((piece) => (
            <motion.div
              key={piece.id}
              className="absolute"
              style={{
                left: `${piece.left}%`,
                top: "-20px",
                fontSize: `${piece.size}px`,
              }}
              initial={{ y: -20, opacity: 1, rotate: 0 }}
              animate={{
                y: "100vh",
                opacity: [1, 1, 0],
                rotate: 360 * (Math.random() > 0.5 ? 1 : -1),
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                delay: piece.delay,
                ease: "easeIn",
              }}
            >
              {piece.color}
            </motion.div>
          ))}
        </div>
      )}

      <motion.div
        className="relative z-10 flex flex-col items-center text-center max-w-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        onViewportEnter={() => setShowConfetti(true)}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
        >
          <img
            src={celebration}
            alt="Celebration"
            className="w-72 sm:w-96 rounded-3xl shadow-love-lg mb-10"
          />
        </motion.div>

        <motion.div
          className="text-6xl sm:text-8xl mb-6"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring", bounce: 0.6 }}
          animate={{ scale: [1, 1.15, 1] }}
        >
          <span className="animate-heart-beat inline-block">💖</span>
        </motion.div>

        <motion.h2
          className="text-5xl sm:text-7xl md:text-8xl font-display font-bold text-gradient-love mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          You Mean Everything To Me
        </motion.h2>

        <motion.p
          className="text-xl sm:text-2xl font-body text-foreground/80 mb-8 max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          You are the best thing that has ever happened to me. 
          I promise to love you, cherish you, and make you smile every single day. 
          You make my world complete. 💕
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {["My Love", "My Best Friend", "My Everything", "My Soulmate", "My Forever"].map(
            (tag, i) => (
              <motion.span
                key={i}
                className="bg-primary/10 text-primary font-body font-semibold px-5 py-2.5 rounded-full text-sm border border-primary/20"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 + i * 0.1 }}
              >
                {tag} 💗
              </motion.span>
            )
          )}
        </motion.div>

        <motion.div
          className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 sm:p-10 shadow-love-lg border border-primary/10 max-w-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          <p className="font-display text-3xl sm:text-4xl text-foreground mb-4">
            I Love You
          </p>
          <p className="font-body text-muted-foreground text-lg">
            Today, tomorrow, and every day after that. 
            You are my forever Valentine. 🌹
          </p>
          <motion.div
            className="mt-6 text-5xl"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🥰
          </motion.div>
        </motion.div>

        <motion.p
          className="mt-16 font-body text-muted-foreground text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.8 }}
        >
          Made with all my love, just for you 💝
        </motion.p>
      </motion.div>
    </section>
  );
};

export default FinaleSection;
