"use client"; // Animation ක්‍රියා කිරීමට මෙය අත්‍යවශ්‍ය වේ

import { motion } from 'framer-motion';

export default function ThreeBoxAnimation() {
  const boxes = [
    { color: 'bg-blue-600', shadow: 'shadow-blue-500/50', delay: 0 },
    { color: 'bg-indigo-600', shadow: 'shadow-indigo-500/50', delay: 0.1 },
    { color: 'bg-cyan-500', shadow: 'shadow-cyan-400/50', delay: 0.2 },
  ];

  return (
    <div className="flex justify-center items-center gap-4 md:gap-8 py-10">
      {boxes.map((box, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: box.delay,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 2
          }}
          whileHover={{ 
            scale: 1.2, 
            rotate: 15,
            borderRadius: "40px",
            transition: { duration: 0.2 }
          }}
          className={`w-20 h-20 md:w-32 md:h-32 ${box.color} rounded-3xl shadow-2xl ${box.shadow} cursor-pointer flex items-center justify-center`}
        >
          {/* Box එක ඇතුලේ ලස්සනට පෙනෙන්න කුඩා icon එකක් වැනි දෙයක් */}
          <div className="w-8 h-8 bg-white/20 rounded-full blur-sm"></div>
        </motion.div>
      ))}
    </div>
  );
}