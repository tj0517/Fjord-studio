"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/20 mb-5 w-fit"
    >
      <Sparkles className="w-4 h-4 text-white/80" />
      <span className="text-[14px] font-normal text-white/90 tracking-wide">
        Outdoor Digital Studio
      </span>
    </motion.div>
  );
}
