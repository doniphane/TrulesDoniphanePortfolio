"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

function OrganicBlob({
  className,
  delay = 0,
  size = 300,
  color = "from-primary/10",
}: {
  className?: string
  delay?: number
  size?: number
  color?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, delay, ease: [0.23, 0.86, 0.39, 0.96] }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 0.95, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        style={{ width: size, height: size }}
        className="rounded-full bg-primary/10 blur-3xl"
      />
    </motion.div>
  )
}

export default function HeroGeometric() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      <OrganicBlob
        delay={0.2}
        size={500}
        className="top-[-10%] right-[-5%]"
      />
      <OrganicBlob
        delay={0.5}
        size={400}
        className="bottom-[-5%] left-[-10%]"
      />
      <OrganicBlob
        delay={0.8}
        size={250}
        className="top-[20%] left-[10%]"
      />
    </div>
  )
}
