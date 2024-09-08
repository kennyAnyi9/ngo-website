"use client";
import { HeroSection } from "@/lib/types";
import { Button } from "../ui/button";

import { motion } from "framer-motion";

const heroData: HeroSection = {
  title: "Empowering Communities",
  subtitle: "Join us in making a difference, one project at a time.",
  backgroundImageUrl: "/images/hero-background.jpg",
  ctaText: "Donate Now",
  ctaLink: "/donate",
};

const Hero: React.FC = () => {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-background opacity-70"></div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-foreground"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {heroData.title}
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl mb-8 text-muted-foreground"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {heroData.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button size="lg" className="rounded-full" asChild>
            <a href={heroData.ctaLink}>{heroData.ctaText}</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
