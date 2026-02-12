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
  // 👇 NUEVA NOTICIA (AQUÍ agregas)
  {
    image: "/news/fortaleza.jpg",
    alt: "Nuestro fuerte para proger al Rey",
    title: "Nuestra Fortaleza",
    description:
      "La Casa Comunal del Barrio EL Eden nos respalda y nos permite usar sus instalaciones.",
  },
  {
    image: "/news/cupos.jpg",
    alt: "Protege al Rey – Cupos limitados",
    title: "Cupos limitados",
    description:
      "Abrimos solo 30 cupos divididos en dos grupos de 15 alumnos para garantizar una enseñanza personalizada y de calidad.",
  },
  {
    image: "/news/horarios.jpg",
    alt: "Horarios oficiales",
    title: "Horarios de clases",
    description:
      "Las clases se dictan lunes, martes y viernes. Grupo 1 de 17:00 a 18:00 y Grupo 2 de 18:00 a 19:00.",
  },
  {
    image: "/news/inauguracion.jpg",
    alt: "Inauguración del club",
    title: "Inauguración oficial",
    description:
      "El club Protege al Rey abre oficialmente sus puertas el 2 de marzo. ¡Estás invitado a formar parte!",
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
