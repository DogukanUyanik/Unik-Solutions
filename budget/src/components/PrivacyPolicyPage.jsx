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

export default function PrivacyPolicyPage() {
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
          Privacybeleid
        </h1>

        <section className="space-y-6 text-gray-700 leading-relaxed text-lg">
          <p>
            Bij ons bedrijf nemen we jouw privacy serieus. In dit privacybeleid
            leggen we uit welke gegevens we verzamelen, waarom we dit doen en hoe
            we jouw informatie beschermen.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Welke gegevens verzamelen we?
          </h2>
          <p>
            We verzamelen alleen de gegevens die nodig zijn om onze diensten te
            leveren en te verbeteren. Dit kunnen naam, e-mailadres, IP-adres en
            cookies zijn.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Hoe gebruiken we jouw gegevens?
          </h2>
          <p>
            Jouw gegevens gebruiken we om onze service te verbeteren, contact met
            je op te nemen als dat nodig is, en om wettelijke verplichtingen na te
            komen.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Beveiliging
          </h2>
          <p>
            We nemen passende technische en organisatorische maatregelen om jouw
            gegevens te beschermen tegen verlies, diefstal en ongeautoriseerde
            toegang.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Contact
          </h2>
          <p>
            Heb je vragen over ons privacybeleid? Neem dan gerust contact met ons
            op via onze contactpagina.
          </p>
        </section>
      </article>
    </main>
  );
}
