"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import HeroGeometric from "./hero-geometric";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Concepteur Developpeur D'application";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf"; 
    link.download = "cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <HeroGeometric badge="Portfolio" title1="Trules" title2="Doniphane" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="space-y-2"
          >
            <h2 className="text-xl md:text-2xl font-medium text-white/80">Bonjour, je suis</h2>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">Trules Doniphane</h1>
            <div className="h-8">
              <p className="text-xl md:text-2xl font-medium text-white/60">
                {text}
                <span className="animate-blink">|</span>
              </p>
            </div>
            <p className="max-w-[700px] text-white/50 mt-4">
              Passionné par l&apos;univers du développement et des technologies, je conçois aujourd&apos;hui des
              solutions web modernes et dynamiques. Actuellement en formation pour devenir Concepteur Développeur
              d&apos;Applications, je continue d&apos;élever mes compétences à un niveau supérieur.
            </p>
            <br />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            <Button
              size="lg"
              onClick={handleDownload}
              className="group bg-white/10 hover:bg-white/20 text-white border border-white/20"
            >
              <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Télécharger mon CV
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.1 }}
            className="absolute bottom-8"
          >
            <div className="flex flex-col items-center space-y-2">
              <p className="text-sm text-white/50">Découvrez mon parcours</p>
              <div className="animate-bounce">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-white/50"
                >
                  <path d="M12 5v14" />
                  <path d="m19 12-7 7-7-7" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
