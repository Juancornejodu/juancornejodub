"use client";
import React from "react";
import type { Item } from "@/content/inventory";
import { SITE } from "@/content/site";

export function Listing({ items }: { items: Item[] }) {
  const toWpp = (title?: string) => {
    const base = `https://wa.me/${SITE.cta.whatsapp.replace(/[^0-9]/g, "")}?text=`;
    const msg = `Hola, quiero disponibilidad y precio del cartel "${title ?? ""}".`;
    return base + encodeURIComponent(msg);
  };
  const toMail = (title?: string) => {
    const subject = "Consulta disponibilidad y precio";
    const body = `Hola, quiero disponibilidad y precio del cartel "${title ?? ""}".`;
    return `mailto:${SITE.cta.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="w-full py-10 md:py-14">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Carteles disponibles</h2>
        <div className="mt-6 grid grid-cols-1 divide-y">
          {items.map((it, idx) => (
            <div key={idx} className="py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div className="min-w-0">
                <div className="text-lg font-medium truncate">{it.title}</div>
                <div className="text-sm text-neutral-600 truncate">
                  {it.address} {it.city ? `· ${it.city}` : ""} {it.province ? `· ${it.province}` : ""}
                </div>
                <div className="text-sm text-neutral-700">
                  {it.format ? `${it.format}` : ""}{it.size ? ` · ${it.size}` : ""}{it.orientation ? ` · ${it.orientation}` : ""}
                  {it.availability ? ` · ${it.availability}` : ""}
                </div>
                {it.notes ? <div className="text-sm text-neutral-500">{it.notes}</div> : null}
              </div>
              <div className="flex gap-2 shrink-0">
                <a
                  href={toWpp(it.title)}
                  className="px-4 py-2 rounded-xl font-medium"
                  style={{ backgroundColor: SITE.colors.bordo, color: "white" }}
                >
                  Consultar por WhatsApp
                </a>
                <a
                  href={toMail(it.title)}
                  className="px-4 py-2 rounded-xl font-medium border"
                  style={{ borderColor: SITE.colors.bordo, color: SITE.colors.bordo }}
                >
                  Consultar por email
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Sextuples - ficha general */}
        <div className="mt-10 p-5 rounded-2xl border border-neutral-200">
          <div className="text-lg font-medium">Séxtuples (consulta por zonas)</div>
          <p className="text-sm text-neutral-700 mt-1">
            Consultá disponibilidad por zonas y formatos. Respondemos rápido.
          </p>
          <div className="mt-3 flex gap-2">
            <a
              href={toWpp("Sextuples")}
              className="px-4 py-2 rounded-xl font-medium"
              style={{ backgroundColor: SITE.colors.bordo, color: "white" }}
            >
              Consultar por WhatsApp
            </a>
            <a
              href={toMail("Sextuples")}
              className="px-4 py-2 rounded-xl font-medium border"
              style={{ borderColor: SITE.colors.bordo, color: SITE.colors.bordo }}
            >
              Consultar por email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}