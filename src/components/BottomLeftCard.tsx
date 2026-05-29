"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function BottomLeftCard() {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="absolute bottom-28 right-4 left-auto md:left-9 md:right-auto md:bottom-6 lg:bottom-10 lg:left-[3.75rem] p-3 md:p-4 lg:p-5 rounded-[1.2rem] md:rounded-[1.5rem] lg:rounded-[2.2rem] bg-white/30 backdrop-blur-xl flex flex-col gap-2 lg:gap-3 min-w-[140px] md:min-w-[150px] lg:min-w-[180px] w-fit"
    >
      <div className="flex flex-col">
        <span className="text-2xl md:text-3xl font-normal text-white tracking-tight">
          We know  
        </span>
        <span className="text-[10px] md:text-[12px] font-normal text-white/60 uppercase tracking-wider">
          the brand
        </span>
      </div>

      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link
          href="#work"
          className="flex items-center bg-white rounded-full pl-1.5 pr-5 py-1.5 gap-2 hover:bg-white/90 transition-colors self-start group w-fit"
        >
          <div className="bg-[rgba(0,61,95,0.1)] p-1 rounded-full flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4 text-[rgba(0,61,95,0.9)]" />
          </div>
          <span className="text-[14px] font-normal text-[rgba(0,61,95,0.9)]">
            See Our Work
          </span>
        </Link>
      </motion.div>
    </motion.div>
  );
}
