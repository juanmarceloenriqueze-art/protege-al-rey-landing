import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Crown, MapPin, Phone, Mail, Send } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  representanteName: z.string().trim().min(2, "Nombre muy corto").max(100, "Nombre muy largo"),
  childName: z.string().trim().min(2, "Nombre muy corto").max(100, "Nombre muy largo"),
  email: z.string().trim().email("Correo electrónico inválido").max(255),
  phone: z.string().trim().min(10, "Número de celular inválido").max(15, "Número de celular muy largo"),
});

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    representanteName: "",
    childName: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      contactSchema.parse(formData);

await emailjs.send(
  "service_og4x0yu",
  "template_ldxrr5t",
  {
    representanteName: formData.representanteName,
    childName: formData.childName,
    email: formData.email,
    phone: formData.phone,
  },
  "EcVUkDAxoPGHMgbb7"
);


      toast({
        title: "¡Inscripción enviada!",
        description: "Nos pondremos en contacto contigo muy pronto.",
      });
      const message = `Hola 👋  
Quiero unirme a *Protege al Rey – Club de Ajedrez* ♟️  
Ya envié la inscripción y quisiera coordinar la clase de prueba.

👤 Representante: ${formData.representanteName}
🧒 Estudiante: ${formData.childName}
📧 Email: ${formData.email}
📱 Celular: ${formData.phone}

Quedo atento/a a más información sobre horarios y la clase de prueba.`;

const whatsappURL = `https://wa.me/593982375944?text=${encodeURIComponent(message)}`;

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
  window.open(whatsappURL, "_blank");
}





      // Reset form
      setFormData({
        representanteName: "",
        childName: "",
        email: "",
        phone: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Info Side */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-4 text-primary">
              <Crown className="w-6 h-6" />
              <span className="uppercase tracking-widest text-sm font-semibold">Únete al Club</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contacto e <span className="text-gradient-gold">Inscripciones</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Completa el formulario y nos pondremos en contacto contigo para coordinar la primera clase de prueba gratuita.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-foreground">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Ubicación</p>
                  <p className="text-muted-foreground">Barrio El Edén, Norte de Quito</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-foreground">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-muted-foreground">+593 99 999 9999</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-foreground">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-muted-foreground">info@protegealrey.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <Card className="bg-card border-primary/20 shadow-epic glow-gold">
            <CardHeader>
              <CardTitle className="font-display text-2xl text-foreground text-center">
                Formulario de Inscripción
              </CardTitle>
              <CardDescription className="text-center">
                Todos los campos son obligatorios
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="representanteName" className="text-foreground">
                    Nombre del Representante
                  </Label>
                  <Input
                    id="representanteName"
                    name="representanteName"
                    value={formData.representanteName}
                    onChange={handleChange}
                    placeholder="Ingrese su nombre completo"
                    className="bg-input border-border focus:border-primary"
                  />
                  {errors.representanteName && (
                    <p className="text-destructive text-sm">{errors.representanteName}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="childName" className="text-foreground">
                    Nombre del Niño/a
                  </Label>
                  <Input
                    id="childName"
                    name="childName"
                    value={formData.childName}
                    onChange={handleChange}
                    placeholder="Ingrese el nombre del estudiante"
                    className="bg-input border-border focus:border-primary"
                  />
                  {errors.childName && (
                    <p className="text-destructive text-sm">{errors.childName}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    Correo Electrónico
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ejemplo@correo.com"
                    className="bg-input border-border focus:border-primary"
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">
                    Celular (WhatsApp)
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+593 99 999 9999"
                    className="bg-input border-border focus:border-primary"
                  />
                  {errors.phone && (
                    <p className="text-destructive text-sm">{errors.phone}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  className="w-full"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Inscripción
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
