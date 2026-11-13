import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Check, Crown, MapPin, Monitor } from "lucide-react";

const program = {
  name: "Programa de Iniciación al Ajedrez",
  price: 60,
  period: "mes",
  description: "Para niños principiantes de 6 a 12 años",
  features: [
    "Dirigido a principiantes",
    "Grupo reducido: máximo 6 alumnos",
    "Material didáctico incluido",
    "Seguimiento personalizado",
    "Acceso a plataforma digital",
  ],
};

const schedule = [
  { day: "Lunes", mode: "Online", time: "17:00 a 18:00", icon: Monitor },
  { day: "Miércoles", mode: "Online", time: "17:00 a 18:00", icon: Monitor },
  { day: "Viernes", mode: "Presencial", time: "17:00 a 19:00", icon: MapPin },
];

const PricingSection = () => {
  const handlePayment = () => {
    const message = `Hola, quiero inscribir a mi hijo en el ${program.name} de $${program.price} mensuales. ¿Pueden darme más información?`;
    const whatsappUrl = `https://wa.me/593982375944?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="planes" className="py-20 bg-gradient-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Programa de <span className="text-gradient-gold">Iniciación</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Una sola oferta pensada para que tu hijo dé sus primeros pasos en el ajedrez
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-xl mx-auto">
          <Card className="relative bg-card border-2 border-primary shadow-gold glow-gold">
            <CardHeader className="text-center pt-8">
              <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Crown className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="font-display text-2xl text-foreground">
                {program.name}
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                {program.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="text-center pb-6">
              {/* Price */}
              <div className="mb-6">
                <span className="text-5xl font-bold text-primary">${program.price}</span>
                <span className="text-muted-foreground">/{program.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 text-left mb-8">
                {program.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Schedule */}
              <div className="text-left">
                <h3 className="flex items-center gap-2 font-semibold text-foreground mb-3">
                  <CalendarDays className="w-5 h-5 text-primary" />
                  Horarios
                </h3>
                <ul className="space-y-2">
                  {schedule.map((slot) => (
                    <li
                      key={slot.day}
                      className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-primary/20 bg-primary/5 px-4 py-2"
                    >
                      <span className="flex items-center gap-2 text-foreground font-medium">
                        <slot.icon className="w-4 h-4 text-primary" />
                        {slot.day}
                        <span className="text-sm text-muted-foreground font-normal">
                          ({slot.mode})
                        </span>
                      </span>
                      <span className="text-foreground">{slot.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>

            <CardFooter>
              <Button variant="hero" className="w-full" size="lg" onClick={handlePayment}>
                Inscribirse Ahora
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
