import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Crown, Shield, Star } from "lucide-react";

const plans = [
  {
    name: "Plan Estratega",
    price: 30,
    period: "mes",
    description: "Ideal para comenzar el camino del ajedrez",
    features: [
      "2 clases por semana",
      "Material didáctico incluido",
      "Acceso a torneos internos",
      "Seguimiento del progreso",
      "Plataforma digital disponible",
    ],
    icon: Shield,
    popular: false,
  },
  {
    name: "Plan Maestro",
    price: 40,
    period: "mes",
    description: "Para quienes buscan la excelencia",
    features: [
      "3 clases por semana",
      "Material didáctico incluido",
      "Acceso a torneos internos y externos",
      "Clases de táctica avanzada",
      "Análisis de partidas personalizado",
      "Camiseta oficial del club",
      "Plataforma digital disponible",
    ],
    icon: Crown,
    popular: true,
  },
];

const PricingSection = () => {
  const handlePayment = (planName: string, price: number) => {
    const message = `Hola, quiero inscribir a mi hijo en el ${planName} de $${price}. ¿Pueden darme más información?`;
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
            Elige tu <span className="text-gradient-gold">Estrategia</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dos planes diseñados para desarrollar el potencial de tu hijo en el ajedrez
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative bg-card border-2 transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? "border-primary shadow-gold glow-gold"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-gold text-navy px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Más Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pt-8">
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <plan.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-display text-2xl text-foreground">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center pb-6">
                {/* Price */}
                <div className="mb-6">
                  <span className="text-5xl font-bold text-primary">${plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 text-left">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  variant={plan.popular ? "hero" : "outline"}
                  className="w-full"
                  size="lg"
                  onClick={() => handlePayment(plan.name, plan.price)}
                >
                  Inscribirse Ahora
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
