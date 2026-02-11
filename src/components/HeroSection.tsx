"use client";

import { Button } from "@/components/ui/button";
import { Crown, Shield } from "lucide-react";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contacto");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative z-0 min-h-screen py-32 md:py-40 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/70 to-navy/95" />
      </div>

      {/* Decorative Icons */}
      <Crown className="absolute top-10 left-10 w-16 h-16 text-primary opacity-20 animate-float" />
      <Shield className="absolute bottom-32 right-10 w-20 h-20 text-primary opacity-20 animate-float delay-300" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-8 animate-fade-in-up">
          <div className="inline-block p-6 rounded-2xl bg-foreground/95 backdrop-blur-sm shadow-2xl">
            <img
              src={logo}
              alt="Protege al Rey - Club de Ajedrez"
              className="w-48 md:w-56 mx-auto"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 animate-fade-in-up delay-100">
          ¡Protege al <span className="text-gradient-gold">Rey</span>!
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-foreground mb-4 animate-fade-in-up delay-200">
          <span className="text-primary font-semibold">
            Únete a nuestras fuerzas
          </span>
        </p>

        <p className="text-base md:text-lg text-foreground/80 max-w-2xl mx-auto mb-8 animate-fade-in-up delay-300">
          Somos un club de ajedrez para niños y jóvenes donde aprender ajedrez se
          convierte en una misión.
        </p>

        {/* CTA */}
        <div className="flex flex-col items-center gap-8 animate-fade-in-up delay-400">
          <Button variant="hero" size="xl" onClick={scrollToContact}>
            <Shield className="mr-2" />
            ¡Acepta la Misión!
          </Button>

          {/* Stats */}
          <div className="w-full max-w-md bg-navy/90 backdrop-blur-sm rounded-xl py-4 px-6 border border-primary/30">
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">30</p>
                <p className="text-sm text-foreground/80">Cupos</p>
              </div>

              <div className="text-center border-x border-primary/30">
                <p className="text-3xl font-bold text-primary">10</p>
                <p className="text-sm text-foreground/80">Años exp.</p>
              </div>

              <div className="text-center">
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-foreground/80">Dedicación</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-5 h-8 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-primary rounded-full mt-1.5 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
