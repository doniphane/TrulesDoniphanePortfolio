"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, Mail, ExternalLink, Github, Linkedin, ChevronDown } from "lucide-react";
import HeroGeometric from "./hero-geometric";

const texts = [
  "Concepteur Développeur d'Applications",
  "Développeur Web & Web Mobile",
  "Passionné de Cybersécurité",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    const deleting = isDeleting;

    const start = deleting ? 40 : 90;

    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === currentText) {
      // Pause à la fin du mot avant la suppression
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (deleting && text === "") {
      // Passe au mot suivant
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }, 400);
    } else {
      timeout = setTimeout(() => {
        setText((prev) =>
          deleting ? prev.slice(0, -1) : currentText.slice(0, prev.length + 1),
        );
      }, start);
    }

    return () => clearTimeout(timeout);
  }, [text, currentTextIndex, isDeleting]);

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
        <div className="absolute inset-0 bg-background">
          <div className="absolute inset-0 glow-violet" />
          <div className="absolute inset-0 bg-grid-faint" />
        </div>
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
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground/90">
              Bonjour, je suis
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground">
              Trules <span className="text-gradient">Doniphane</span>
            </h1>
            <div className="h-12 md:h-16 flex items-center justify-center">
              <p className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground/80">
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
            <p className="max-w-[700px] text-foreground/70 text-base md:text-lg leading-relaxed px-4 md:px-0">
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
              className="group bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-3 text-base"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Télécharger mon CV
            </Button>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                variant="outline"
                onClick={handleContact}
                className="group border-border/40 hover:border-primary/50"
              >
                <Mail className="mr-2 h-4 w-4" />
                Me contacter
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={handleProjects}
                className="group border-border/40 hover:border-primary/50"
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
              <span className="text-foreground/60 text-sm">Suivez-moi :</span>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/doniphane"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full bg-card/50 hover:bg-primary/20 text-foreground/70 hover:text-primary border border-border/40 transition-all duration-300"
                >
                  <Github className="h-5 w-5" />
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/doniphane-trules"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full bg-card/50 hover:bg-primary/20 text-foreground/70 hover:text-primary border border-border/40 transition-all duration-300"
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
              <p className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors">
                Découvrez mon parcours
              </p>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="p-2 rounded-full bg-card/50 group-hover:bg-primary/20 border border-border/40 transition-colors"
              >
                <ChevronDown className="h-5 w-5 text-foreground/60 group-hover:text-foreground/80" />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
