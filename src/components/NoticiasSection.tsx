"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

const noticias = [
  {
    image: "/news/cupos.jpg",
    alt: "Protege al Rey – Cupos limitados: solo 30 estudiantes disponibles",
  },
  {
    image: "/news/horarios.jpg",
    alt: "Horarios oficiales de clases del club de ajedrez Protege al Rey",
  },
  {
    image: "/news/inauguracion.jpg",
    alt: "Inauguración oficial del club Protege al Rey el 2 de marzo",
  },
];

const NoticiasSection = () => {
  const autoplay = useRef(
    Autoplay({
      delay: 5000, // 5 segundos
      stopOnInteraction: true,
    })
  );

  return (
    <section className="relative py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Noticias Importantes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Novedades, anuncios importantes y eventos del Club de Ajedrez Protege al Rey.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[autoplay.current]}
          className="relative max-w-6xl mx-auto"
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
        >
          <CarouselContent className="-ml-6">
            {noticias.map((noticia, index) => (
              <CarouselItem
                key={index}
                className="pl-6 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <Card className="group overflow-hidden rounded-2xl border border-primary/20 bg-background/60 backdrop-blur">
                  <div className="aspect-[4/3] w-full bg-black/10 flex items-center justify-center p-4 rounded-xl overflow-hidden">
                    <img
                      src={noticia.image}
                      alt={noticia.alt}
                      className="max-h-full max-w-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Botones responsive */}
          <CarouselPrevious className="left-2 md:-left-12" />
          <CarouselNext className="right-2 md:-right-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default NoticiasSection;
