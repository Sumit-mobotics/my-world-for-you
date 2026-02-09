import { motion } from "framer-motion";
import loveLetter from "@/assets/love-letter.png";

const LoveLetterSection = () => {
  const paragraphs = [
    "My Dearest Love,",
    "From the moment you came into my life, everything changed for the better. You are my sunshine on cloudy days, my calm in every storm, and the reason behind my happiest smiles.",
    "Every day with you feels like a beautiful dream I never want to wake up from. You make my heart skip a beat with just one look, and I find myself falling deeper in love with you every single day.",
    "You mean the world to me — no, you ARE my world. I cannot imagine a life without your warmth, your laughter, your love. You complete me in ways I never knew I needed.",
    "Thank you for being you. Thank you for choosing me. Thank you for making every moment magical.",
    "I love you more than words could ever express, today, tomorrow, and forever.",
    "Forever yours ❤️",
  ];

  let wordIndex = 0;

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 opacity-20 animate-float">
        <span className="text-6xl">💌</span>
      </div>
      <div className="absolute bottom-10 left-10 opacity-20 animate-float-slow">
        <span className="text-5xl">💗</span>
      </div>

      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <motion.img
          src={loveLetter}
          alt="Love letter"
          className="w-40 h-40 mx-auto mb-8 rounded-2xl"
          initial={{ opacity: 0, y: 20, rotate: -10 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
        />

        <motion.h2
          className="text-4xl sm:text-6xl font-display font-bold text-gradient-love mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          A Letter For You
        </motion.h2>

        <motion.div
          className="relative bg-card/60 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-love-lg border border-primary/10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative corner hearts */}
          <div className="absolute top-4 left-4 text-primary/20 text-2xl animate-heart-beat">♥</div>
          <div className="absolute top-4 right-4 text-primary/20 text-2xl animate-heart-beat" style={{ animationDelay: "0.5s" }}>♥</div>
          <div className="absolute bottom-4 left-4 text-primary/20 text-2xl animate-heart-beat" style={{ animationDelay: "1s" }}>♥</div>
          <div className="absolute bottom-4 right-4 text-primary/20 text-2xl animate-heart-beat" style={{ animationDelay: "1.5s" }}>♥</div>

          <div className="text-left font-body text-foreground/90 leading-loose text-base sm:text-lg space-y-4 overflow-hidden break-words">
            {paragraphs.map((paragraph, pIndex) => {
              const words = paragraph.split(" ");
              const startIndex = wordIndex;
              wordIndex += words.length;
              return (
                <p key={pIndex} className="flex flex-wrap">
                  {words.map((word, wIndex) => (
                    <motion.span
                      key={wIndex}
                      className="mr-[0.3em]"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.05,
                        delay: (startIndex + wIndex) * 0.02,
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </p>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LoveLetterSection;
