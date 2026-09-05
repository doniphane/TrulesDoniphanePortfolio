"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, Mail, ExternalLink, Github, Linkedin, ChevronDown, Terminal } from "lucide-react";
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
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (deleting && text === "") {
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

  const handleContact = () => scrollToSection('contact');
  const handleProjects = () => scrollToSection('projects');
  const handleScrollDown = () => scrollToSection('about');

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 glow-blue-center" />
        <HeroGeometric />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col items-center text-center space-y-8">
          
          {/* Top Label */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="inline-flex items-center gap-2 px-3 py-1 border border-primary/30 bg-primary/10 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-mono text-primary uppercase tracking-widest">Disponible pour recrutement</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="space-y-6"
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground font-mono">
              &gt; Bonjour, je suis
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground leading-none">
              Trules <span className="text-gradient">Doniphane</span>
            </h1>
            
            <div className="h-16 md:h-20 flex items-center justify-center">
              <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground/90 font-mono">
                {text}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                  className="text-primary font-bold"
                >
                  _
                </motion.span>
              </p>
            </div>

            <p className="max-w-[600px] text-muted-foreground text-base md:text-lg leading-relaxed mx-auto">
              Je crée des applications web robustes et des expériences mobiles performantes. 
              Passionné par l&apos;architecture logicielle et la sécurité des systèmes.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <Button
              size="lg"
              onClick={handleDownload}
              className="group bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-6 text-base uppercase tracking-wider"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Télécharger CV
            </Button>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="outline"
                onClick={handleContact}
                className="group border-border hover:border-primary/50 hover:bg-primary/10 py-6 uppercase tracking-wider"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={handleProjects}
                className="group border-border hover:border-primary/50 hover:bg-primary/10 py-6 uppercase tracking-wider"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Projets
              </Button>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
            className="flex items-center gap-6 mt-8 md:mt-12"
          >
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground text-sm font-mono uppercase">Suivez-moi :</span>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/doniphane"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 border border-border bg-card/50 hover:border-primary/50 hover:bg-primary/10 hover:text-primary text-foreground/70 transition-all duration-300"
                >
                  <Github className="h-5 w-5" />
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/doniphane-trules"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 border border-border bg-card/50 hover:border-primary/50 hover:bg-primary/10 hover:text-primary text-foreground/70 transition-all duration-300"
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
            transition={{ duration: 0.5, delay: 2.0 }}
            className="mt-8 md:mt-12"
          >
            <motion.button
              onClick={handleScrollDown}
              className="flex flex-col items-center space-y-2 group cursor-pointer"
              whileHover={{ y: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <p className="text-xs text-muted-foreground font-mono uppercase group-hover:text-primary transition-colors">
                Défiler vers le bas
              </p>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="p-1 border border-border group-hover:border-primary/50 transition-colors"
              >
                <ChevronDown className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
