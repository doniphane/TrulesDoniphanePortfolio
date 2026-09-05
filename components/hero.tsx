"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, Mail, ExternalLink, Github, Linkedin, Youtube, ChevronDown } from "lucide-react";
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
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <HeroGeometric />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Text */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block text-sm font-medium tracking-widest uppercase text-primary mb-4">
                Portfolio
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05]">
                Bonjour, je suis
                <br />
                <span className="text-gradient italic">Trules Doniphane</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="h-10"
            >
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                {text}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                  className="text-primary font-normal"
                >
                  |
                </motion.span>
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-xl"
            >
              Développeur passionné spécialisé dans la création d&apos;applications web modernes.
              J&apos;allie créativité technique et innovation pour donner vie à vos projets digitaux.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Button
                size="lg"
                onClick={handleDownload}
                className="group bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8"
              >
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Télécharger mon CV
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="group border-border hover:border-primary/50"
              >
                <Mail className="mr-2 h-4 w-4" />
                Me contacter
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('projects')}
                className="group border-border hover:border-primary/50"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Mes projets
              </Button>
            </motion.div>
          </div>

          {/* Right: Monogram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-primary/20 flex items-center justify-center bg-card/30 backdrop-blur-sm">
                <span className="text-7xl md:text-8xl font-bold text-gradient italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                  DT
                </span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border border-primary/30 rounded-full" />
              <div className="absolute -top-6 -left-6 w-12 h-12 border border-primary/20 rounded-full" />
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 flex items-center gap-6"
        >
          <span className="text-sm text-muted-foreground tracking-wide">Suivez-moi</span>
          <div className="flex gap-3">
            <a
              href="https://github.com/doniphane"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 border border-border rounded-full hover:border-primary/50 hover:bg-primary/5 text-muted-foreground hover:text-primary transition-all duration-300"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/doniphane-trules"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 border border-border rounded-full hover:border-primary/50 hover:bg-primary/5 text-muted-foreground hover:text-primary transition-all duration-300"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://www.youtube.com/@noelson9749/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 border border-border rounded-full hover:border-primary/50 hover:bg-primary/5 text-muted-foreground hover:text-primary transition-all duration-300"
            >
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        {/* Scroll Down */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection('about')}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs tracking-widest uppercase">Découvrir</span>
            <ChevronDown className="h-4 w-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
