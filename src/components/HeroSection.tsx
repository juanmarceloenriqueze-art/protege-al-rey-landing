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
    <section className="relative py-32 md:py-40">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/70 to-navy/95" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 opacity-20 animate-float">
        <Crown className="w-16 h-16 text-primary" />
      </div>
      <div className="absolute bottom-32 right-10 opacity-20 animate-float delay-300">
        <Shield className="w-20 h-20 text-primary" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-8">
        {/* Logo with enhanced contrast */}
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
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 animate-fade-in-up delay-100 drop-shadow-lg">
          ¡Protege al{" "}
          <span className="text-gradient-gold">Rey</span>!
        </h1>

        {/* Subtitle */}
        <p className="font-body text-lg md:text-xl lg:text-2xl text-foreground max-w-2xl mx-auto mb-4 animate-fade-in-up delay-200">
          <span className="text-primary font-semibold drop-shadow-md">Únete a nuestras fuerzas</span>
        </p>
        
        <p className="font-body text-base md:text-lg text-foreground/80 max-w-2xl mx-auto mb-8 animate-fade-in-up delay-300 drop-shadow-sm">
          Somos un club de ajedrez para niños y jóvenes donde aprender ajedrez se convierte en una misión. No solo enseñamos movimientos: formamos estrategas, fortalecemos la inteligencia y creamos un fuerte sentido de pertenencia.
        </p>

        {/* CTA Button */}
        <div className="animate-fade-in-up delay-400">
          <Button
            variant="hero"
            size="xl"
            onClick={scrollToContact}
            className="group"
          >
            <Shield className="mr-2 group-hover:animate-float" />
            ¡Acepta la Misión!
          </Button>
        </div>
      </div>

      {/* Stats - Bottom section with better mobile spacing */}
      <div className="absolute bottom-20 md:bottom-24 left-0 right-0 z-10 px-4">
        <div className="grid grid-cols-3 gap-2 md:gap-6 max-w-md mx-auto bg-navy/90 backdrop-blur-sm rounded-xl py-3 md:py-4 px-3 md:px-6 border border-primary/30">
          <div className="text-center">
            <p className="font-display text-xl md:text-3xl font-bold text-primary">50+</p>
            <p className="text-[10px] md:text-sm text-foreground/80">Estudiantes</p>
          </div>
          <div className="text-center border-x border-primary/30">
            <p className="font-display text-xl md:text-3xl font-bold text-primary">3</p>
            <p className="text-[10px] md:text-sm text-foreground/80">Años exp.</p>
          </div>
          <div className="text-center">
            <p className="font-display text-xl md:text-3xl font-bold text-primary">100%</p>
            <p className="text-[10px] md:text-sm text-foreground/80">Dedicación</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-5 h-8 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-primary rounded-full mt-1.5 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
