"use client";

import { Crown, GraduationCap, Award } from "lucide-react";
import teacherPhoto from "@/assets/teacher/david-tapia1.jpg";

const TeacherSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 text-primary">
            <Crown className="w-5 h-5" />
            <span className="uppercase tracking-widest text-xs font-semibold">
              Nuestro Profesor
            </span>
          </div>

          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Trayectoria Profesional
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Formación sólida, 10 años de experiencia y pasión por enseñar ajedrez a niños y jóvenes.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          {/* Photo */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/40 to-transparent blur-xl" />
              <img
                src={teacherPhoto}
                alt="David Tapia - Profesor de Ajedrez"
                className="relative w-72 md:w-80 rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              David Tapia
            </h3>

            <ul className="space-y-4 text-foreground/80">
              <li className="flex items-start gap-3">
                <Award className="w-5 h-5 text-primary mt-1" />
                <span>
                  <strong>Campeón Ajedrez Universitario</strong>, docente entrenador en varias instituciones educativas de Quito. 
                </span>
              </li>

              <li className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-primary mt-1" />
                <span>
                  Campeón <strong>de varios Torneos IRT</strong>.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-primary mt-1" />
                <span>
                  Profesor niveles <strong>inicial, intermedio y avanzado</strong>.
                </span>
              </li>
            </ul>

            <p className="mt-6 text-sm text-muted-foreground">
              Su enfoque combina disciplina, pensamiento estratégico y motivación,
              adaptándose a cada etapa del desarrollo infantil.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherSection;
