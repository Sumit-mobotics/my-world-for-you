import { motion } from "framer-motion";
import heroCouple from "@/assets/hero-couple.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-hero overflow-hidden px-4">
      {/* Decorative hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/20"
            style={{
              left: `${10 + i * 12}%`,
              top: `${10 + (i % 3) * 25}%`,
              fontSize: `${30 + i * 8}px`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            ♥
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center max-w-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="text-6xl mb-6"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          💝
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-7xl md:text-8xl font-display font-bold text-gradient-love mb-6 leading-tight"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Happy Valentine's Day
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl font-body text-foreground/80 mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          To the most amazing person in my life ✨
        </motion.p>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9, type: "spring", bounce: 0.4 }}
        >
          <div className="absolute -inset-4 bg-primary/10 rounded-full blur-2xl animate-heart-beat" />
          <img
            src={heroCouple}
            alt="Cute couple illustration"
            className="relative w-64 sm:w-80 md:w-96 rounded-3xl shadow-love-lg"
          />
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-primary/60 text-3xl"
          >
            ↓
          </motion.div>
          <p className="text-sm text-muted-foreground font-body mt-1">Scroll down for a surprise</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
