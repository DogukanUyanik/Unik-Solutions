import React, { useEffect, useRef, useState } from "react";

function useIntersectionObserver(options = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1, rootMargin: "50px", ...options });

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);

  return [ref, isVisible];
}

export default function TermsPage() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <main className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen px-6 lg:px-16 py-20">
      <article
        ref={ref}
        className={`max-w-4xl mx-auto bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg p-12 transition-all duration-700 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
          Algemene Voorwaarden
        </h1>

        <section className="space-y-6 text-gray-700 leading-relaxed text-lg">
          <p>
            Deze algemene voorwaarden beschrijven de regels en voorschriften voor het
            gebruik van onze diensten. Door gebruik te maken van onze website ga je
            akkoord met deze voorwaarden.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Gebruik van de dienst
          </h2>
          <p>
            Je mag onze diensten alleen gebruiken voor legale doeleinden en op een manier
            die onze rechten niet schaadt.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Intellectuele eigendom
          </h2>
          <p>
            Alle inhoud en materialen op onze website zijn beschermd door auteursrechten
            en andere intellectuele eigendomsrechten.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Aansprakelijkheid
          </h2>
          <p>
            We zijn niet aansprakelijk voor enige schade die voortvloeit uit het gebruik
            van onze diensten, voor zover wettelijk toegestaan.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Wijzigingen
          </h2>
          <p>
            We behouden ons het recht voor om deze voorwaarden op elk moment te wijzigen.
            Wijzigingen worden op deze pagina gepubliceerd.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Contact
          </h2>
          <p>
            Bij vragen over deze voorwaarden kun je contact opnemen via onze contactpagina.
          </p>
        </section>
      </article>
    </main>
  );
}
