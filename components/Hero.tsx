"use client";
import React from "react";
import { SITE } from "@/content/site";

export function Hero() {
  const wpp = `https://wa.me/${SITE.cta.whatsapp.replace(/[^0-9]/g, "")}?text=` +
    encodeURIComponent("Hola, quiero consultar disponibilidad y precio.");
  const mailto = `mailto:${SITE.cta.email}?subject=` +
    encodeURIComponent("Consulta disponibilidad y precio") +
    `&body=` + encodeURIComponent("Hola, quiero consultar disponibilidad y precio.");
  return (
    <section className="w-full py-10 md:py-16" style={{ backgroundColor: SITE.colors.cream }}>
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight" style={{ color: SITE.colors.black }}>
          {SITE.hero.h1}
        </h1>
        <p className="mt-3 text-lg md:text-xl font-semibold" style={{ color: SITE.colors.bordo }}>
          {SITE.hero.phrase}
        </p>
        <p className="mt-2 text-base md:text-lg text-neutral-700">
          {SITE.hero.support}
        </p>
        <div className="mt-6 flex gap-3">
          <a
            href={wpp}
            className="px-5 py-3 rounded-2xl font-medium"
            style={{ backgroundColor: SITE.colors.bordo, color: "white" }}
          >
            {SITE.cta.label}
          </a>
          <a
            href={mailto}
            className="px-5 py-3 rounded-2xl font-medium border"
            style={{ borderColor: SITE.colors.bordo, color: SITE.colors.bordo }}
          >
            Escribir por email
          </a>
        </div>
      </div>
    </section>
  );
}