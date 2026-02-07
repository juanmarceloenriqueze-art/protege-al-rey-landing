import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Crown, Mail, MapPin, Phone, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Error",
        description: "Por favor ingresa un correo válido",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    toast({
      title: "¡Suscrito!",
      description: "Recibirás nuestras tácticas semanales en tu correo.",
    });
    
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <footer className="bg-card border-t border-primary/30">
      {/* Newsletter Section */}
      <div className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Crown className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              Tácticas Semanales
            </h3>
            <p className="text-foreground/70 mb-6">
              Suscríbete para recibir consejos, estrategias y noticias del club directamente en tu correo.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-input border-border focus:border-primary flex-1"
              />
              <Button 
                type="submit" 
                variant="default"
                disabled={isSubmitting}
              >
                <Mail className="w-4 h-4 mr-2" />
                {isSubmitting ? "..." : "Suscribirse"}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-10 md:py-12 bg-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand - Logo with white background for contrast */}
            <div className="text-center md:text-left">
              <div className="inline-block p-3 md:p-4 bg-white rounded-xl mb-4 shadow-lg">
                <img src={logo} alt="Protege al Rey" className="w-28 md:w-36 mx-auto md:mx-0" />
              </div>
              <p className="text-navy text-sm px-4 md:px-0">
                Club de Ajedrez para niños en edad escolar. 
                Fortaleciendo la inteligencia desde el Barrio El Edén.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="font-display text-lg font-semibold text-navy mb-4">
                Enlaces Rápidos
              </h4>
              <ul className="space-y-2 text-navy/70">
                <li>
                  <a href="#planes" className="hover:text-primary transition-colors">Planes</a>
                </li>
                <li>
                  <a href="#tienda" className="hover:text-primary transition-colors">Tienda</a>
                </li>
                <li>
                  <a href="#contacto" className="hover:text-primary transition-colors">Contacto</a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="text-center md:text-right">
              <h4 className="font-display text-lg font-semibold text-navy mb-4">
                Contacto
              </h4>
              <div className="space-y-2 text-navy/70 text-sm">
                <p className="flex items-center justify-center md:justify-end gap-2">
                  <MapPin className="w-4 h-4 text-gold-dark" />
                  Barrio El Edén, Norte de Quito
                </p>
                <p className="flex items-center justify-center md:justify-end gap-2">
                  <Phone className="w-4 h-4 text-gold-dark" />
                  +593 99 999 9999
                </p>
                <p className="flex items-center justify-center md:justify-end gap-2">
                  <Mail className="w-4 h-4 text-gold-dark" />
                  info@protegealrey.com
                </p>
              </div>
              {/* Social */}
              <div className="flex gap-4 mt-4 justify-center md:justify-end">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center text-navy hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center text-navy hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-navy/20 text-center text-navy/60 text-sm">
            <p>© 2024 Protege al Rey - Club de Ajedrez. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
