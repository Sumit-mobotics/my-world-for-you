import { motion } from "framer-motion";
import { Heart, Star, Sparkles, Music, Coffee, Smile } from "lucide-react";
import teddyHeart from "@/assets/teddy-heart.png";

const reasons = [
  {
    icon: Heart,
    title: "Your Smile",
    text: "Your smile lights up my entire world. Every time I see it, I fall in love all over again.",
    emoji: "😊",
  },
  {
    icon: Star,
    title: "Your Kindness",
    text: "The way you care about everyone around you makes you the most beautiful person inside and out.",
    emoji: "🌟",
  },
  {
    icon: Sparkles,
    title: "Your Laugh",
    text: "Your laughter is my favorite sound in the whole universe. It makes everything better.",
    emoji: "✨",
  },
  {
    icon: Music,
    title: "Our Moments",
    text: "Every second with you feels like magic. You turn ordinary moments into extraordinary memories.",
    emoji: "🎵",
  },
  {
    icon: Coffee,
    title: "Your Warmth",
    text: "Being with you feels like a warm hug on a cold day. You are my comfort and my home.",
    emoji: "☕",
  },
  {
    icon: Smile,
    title: "Being You",
    text: "You don't even have to try — just being yourself is more than enough. You are perfect to me.",
    emoji: "💖",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const ReasonsSection = () => {
  return (
    <section className="relative py-24 px-4 bg-gradient-love overflow-hidden">
      {/* Section header */}
      <motion.div
        className="text-center mb-16 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="inline-block mb-4"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <img
            src={teddyHeart}
            alt="Cute teddy bear"
            className="w-32 h-32 mx-auto rounded-2xl"
          />
        </motion.div>
        <h2 className="text-4xl sm:text-6xl font-display font-bold text-gradient-love mb-4">
          Why I Love You
        </h2>
        <p className="text-lg font-body text-muted-foreground">
          Here are just a few of the million reasons 💕
        </p>
      </motion.div>

      {/* Reason cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              transition: { duration: 0.2 } 
            }}
            className="group bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-love hover:shadow-love-lg transition-shadow border border-primary/10"
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <reason.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <span className="text-2xl">{reason.emoji}</span>
            </div>
            <h3 className="text-xl font-display font-bold text-foreground mb-2">
              {reason.title}
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed text-sm">
              {reason.text}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ReasonsSection;
