"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

function HexGrid() {
  return (
    <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
      <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIzNCI+PHBhdGggZD0iTTAgMGgyMHYxMEwxMCAxNyAwIDEweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
    </div>
  )
}

export default function HeroGeometric() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-primary/[0.03]" />
      
      <HexGrid />

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.2 }}
          className="absolute top-20 left-20 w-96 h-96 border border-primary/20 rounded-full blur-3xl"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.4 }}
          className="absolute bottom-20 right-20 w-80 h-80 border border-primary/30 rotate-45 blur-2xl"
        />

        {/* ASCII Art Decor */}
        <div className="absolute top-10 right-10 font-mono text-primary/30 text-xs hidden lg:block leading-relaxed">
          <motion.pre
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 2, delay: 1 }}
          >
{`  ____        _        
 |  _ \\  __ _| |_ ___ 
 | | | |/ _\` | __/ _ \\
 | |_| | (_| | ||  __/
 |____/ \\__,_|\\__\\___|`}
          </motion.pre>
        </div>

        {/* Floating Tags */}
        <motion.div
          variants={fadeUpVariants}
          custom={1}
          initial="hidden"
          animate="visible"
          className="absolute top-1/4 left-1/4 hidden md:block"
        >
          <div className="bg-card/80 backdrop-blur-md border border-border px-4 py-2 text-xs font-mono text-muted-foreground">
            {'<React />'}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUpVariants}
          custom={2}
          initial="hidden"
          animate="visible"
          className="absolute bottom-1/3 right-1/4 hidden md:block"
        >
          <div className="bg-card/80 backdrop-blur-md border border-border px-4 py-2 text-xs font-mono text-muted-foreground">
            {'{ Next.js }'}
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/80 pointer-events-none" />
    </div>
  )
}
