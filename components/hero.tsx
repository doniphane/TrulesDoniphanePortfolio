"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, Mail, ExternalLink, Github, Linkedin, ChevronDown } from "lucide-react";
import HeroGeometric from "./hero-geometric";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

export default function Hero() {
  const [text, setText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    "Concepteur Développeur d'Applications",
    "Développeur Web & Web Mobile",
    "Passionné de Cybersécurité",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing effect
        if (index < currentText.length) {
          setText((prev) => prev + currentText[index]);
          setIndex((prev) => prev + 1);
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting effect
        if (text.length > 0) {
          setText((prev) => prev.slice(0, -1));
        } else {
          setIsDeleting(false);
          setIndex(0);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, currentTextIndex, text, texts]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "CV_Doniphane_Trules.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleContact = () => {
    scrollToSection('contact');
  };

  const handleProjects = () => {
    scrollToSection('projects');
  };

  const handleScrollDown = () => {
    scrollToSection('about');
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <HeroGeometric badge="Portfolio" title1="Trules" title2="Doniphane" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="space-y-4 md:space-y-6"
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-white/90">
              Bonjour, je suis
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white">
              Trules Doniphane
            </h1>
            <div className="h-12 md:h-16 flex items-center justify-center">
              <p className="text-xl md:text-2xl lg:text-3xl font-medium text-white/80">
                {text}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                  className="text-primary"
                >
                  |
                </motion.span>
              </p>
            </div>
            <p className="max-w-[700px] text-white/70 text-base md:text-lg leading-relaxed px-4 md:px-0">
              Développeur passionné spécialisé dans la création d&apos;applications web modernes.
              J&apos;allie créativité technique et innovation pour donner vie à vos projets digitaux.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <Button
              size="lg"
              onClick={handleDownload}
              className="group bg-white text-black hover:bg-white/90 font-semibold px-8 py-3 text-base"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Télécharger mon CV
            </Button>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                variant="outline"
                onClick={handleContact}
                className="group bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white/50"
              >
                <Mail className="mr-2 h-4 w-4" />
                Me contacter
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={handleProjects}
                className="group bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white/50"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Mes projets
              </Button>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.1 }}
            className="flex items-center gap-6 mt-8 md:mt-12"
          >
            <div className="flex items-center gap-4">
              <span className="text-white/60 text-sm">Suivez-moi :</span>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/doniphane"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all duration-300"
                >
                  <Github className="h-5 w-5" />
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/doniphane-trules"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.4 }}
            className="mt-8 md:mt-12"
          >
            <motion.button
              onClick={handleScrollDown}
              className="flex flex-col items-center space-y-2 group cursor-pointer"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors">
                Découvrez mon parcours
              </p>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors"
              >
                <ChevronDown className="h-5 w-5 text-white/60 group-hover:text-white/80" />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
