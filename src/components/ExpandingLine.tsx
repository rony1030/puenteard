"use client";

import { motion } from "framer-motion";

export default function ExpandingLine({ className = "" }: { className?: string }) {
  return (
    <div className={"w-full flex justify-center py-4 " + className}>
      <motion.div
        initial={{ width: "0%", opacity: 0 }}
        whileInView={{ width: "100%", opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="h-[1px] bg-gradient-to-r from-transparent via-sky-400/40 to-transparent"
      />
    </div>
  );
}
