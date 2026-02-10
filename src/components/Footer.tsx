import { useState } from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Crown, Mail, MapPin, Phone, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_og4x0yu",
        "template_8xn7dqr",
        {
          email,
          date: new Date().toLocaleString("es-EC"),
        },
        "EcVUkDAxoPGHMgbb7"
      );

      toast({
        title: "¡Suscripción exitosa! 🎉",
        description: "Ahora recibirás novedades y consejos de ajedrez.",
      });

      setEmail("");
    } catch {
      toast({
        title: "Error al suscribirse",
        description: "Inténtalo nuevamente en unos segundos.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-card border-t border-primary/30">

      {/* Newsletter */}
      <div className="py-12 bg-secondary">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <Crown className="w-10 h-10 text-primary mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            Tácticas Semanales
          </h3>
          <p className="text-foreground/70 mb-6">
            Suscríbete para recibir consejos y noticias del club.
          </p>

          <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
            <Input
              type="email"
              placeholder="Tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Suscribirse"}
            </Button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-10 bg-foreground text-background">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">

          {/* Brand */}
          <div className="text-center md:text-left">
            <img src={logo} alt="Protege al Rey" className="w-32 mx-auto md:mx-0 mb-4" />
            <p className="text-sm text-navy">
              Club de Ajedrez para niños en edad escolar.
            </p>
          </div>

          {/* Links */}
          <div className="text-center">
            <h4 className="font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li><a href="#planes" className="hover:text-primary transition">Planes</a></li>
              <li><a href="#tienda" className="hover:text-primary transition">Tienda</a></li>
              <li><a href="#contacto" className="hover:text-primary transition">Contacto</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right space-y-2">
            <p className="flex justify-center md:justify-end gap-2">
              <MapPin className="w-4 h-4" /> Quito
            </p>
            <p className="flex justify-center md:justify-end gap-2">
              <Phone className="w-4 h-4" /> +593 98 237 5944
            </p>
            <p className="flex justify-center md:justify-end gap-2">
              <Mail className="w-4 h-4" /> juanmarceloenriqueze@gmail.com
            </p>

            <div className="flex justify-center md:justify-end gap-4 mt-4">
              <Facebook />
              <Instagram />
            </div>
          </div>

        </div>

        <div className="mt-8 text-center text-sm opacity-70">
          © 2024 Protege al Rey. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
