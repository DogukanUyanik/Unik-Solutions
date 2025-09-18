import React, { useState, useRef, useEffect } from 'react';
import { Check, Star, Zap, Rocket, Code, ChevronRight, ArrowUp, MessageCircle, Mail, Phone } from 'lucide-react';

// Custom hook for intersection observer
function useIntersectionObserver(options = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible];
}

function ServicesPage() {
  const [ref, isVisible] = useIntersectionObserver();

  const tiers = [
    {
      name: "Basic Starter Website",
      price: "€1.300",
      period: "Eenmalig",
      description: "Perfect voor starters en kleine lokale bedrijven die online willen gaan",
      icon: <Star className="w-8 h-8" />,
      features: [
        "Tot 5 professionele pagina's",
        "Volledig responsive design (mobiel-vriendelijk)",
        "Contact formulier met spam bescherming",
        "Basis SEO optimalisatie (titels, meta descriptions)",
        "SSL certificaat (veilige verbinding)",
        "3 maanden gratis hosting inbegrepen",
        "Cross-browser compatibiliteit",
        "Google-vriendelijke structuur"
      ],
      ideal: "Ideaal voor: Startende ondernemers, lokale dienstverleners, kleine praktijken",
      popular: false,
      buttonText: "Kies Basic",
      gradient: "from-gray-100 to-gray-200",
      borderColor: "border-gray-200"
    },
    {
      name: "Mid Tier Business",
      price: "€2.000", 
      period: "Eenmalig",
      description: "Uitgebreide online aanwezigheid voor groeiende bedrijven met eigen content beheer",
      icon: <Zap className="w-8 h-8" />,
      features: [
        "Tot 10 uitgebreide pagina's",
        "WordPress Content Management Systeem",
        "Blog functionaliteit voor content marketing",
        "Google Analytics setup & configuratie",
        "Google Maps integratie (locatie weergave)",
        "Social media integratie & sharing buttons",
        "Uitgebreide SEO optimalisatie",
        "Training sessie (1 uur) voor CMS gebruik",
        "4 maanden gratis hosting inbegrepen",
        "Contact formulieren op maat"
      ],
      ideal: "Ideaal voor: Groeiende bedrijven, content creators, lokale winkels",
      popular: true,
      buttonText: "Meest Gekozen ⭐",
      gradient: "from-blue-100 to-purple-100",
      borderColor: "border-blue-300"
    },
    {
      name: "Pro E-commerce Package",
      price: "€3.500",
      period: "Eenmalig",
      description: "Complete online verkoop oplossing met alle features voor serieuze bedrijven",
      icon: <Rocket className="w-8 h-8" />,
      features: [
        "Tot 20 pagina's (inclusief product pagina's)",
        "Volledig Content Management Systeem",
        "Complete webshop functionaliteit (WooCommerce)",
        "Betaalintegraties (iDEAL, Bancontact, Stripe)",
        "Voorraad beheer & order tracking",
        "Online boekings-/reserveringssysteem",
        "Meertalige website (NL/FR/EN)",
        "Geavanceerde SEO (audit, schema markup)",
        "Google Analytics & conversie tracking",
        "6 maanden support & onderhoud",
        "SSL certificaat & beveiliging",
        "Automatische backups"
      ],
      ideal: "Ideaal voor: E-commerce bedrijven, restaurants, dienstverleners met online verkoop",
      popular: false,
      buttonText: "Kies Pro",
      gradient: "from-purple-100 to-pink-100",
      borderColor: "border-purple-300"
    },
    {
      name: "Custom Solutions",
      price: "Vanaf €6.000",
      period: "Op maat",
      description: "Volledig maatwerk voor unieke business uitdagingen en complexe systemen", 
      icon: <Code className="w-8 h-8" />,
      features: [
        "Business Management Systemen",
        "Klanten/leden database met CRUD functionaliteit",
        "Event planning & management tools",
        "Automatische WhatsApp notificaties (API)",
        "Payment request workflows via WhatsApp",
        "Custom dashboards & KPI analytics",
        "PDF document generatie (facturen, rapporten)",
        "CRM/boekhoudsoftware integraties",
        "Multi-platform applicaties",
        "API ontwikkeling & integraties",
        "Legacy systeem migraties",
        "Volledig op maat gemaakte oplossingen"
      ],
      ideal: "Ideaal voor: Verenigingen, complexe bedrijfsprocessen, unieke workflow behoeften",
      popular: false,
      buttonText: "Bespreek Project",
      gradient: "from-indigo-100 to-blue-100", 
      borderColor: "border-indigo-300"
    }
  ];

  const faqs = [
    {
      question: "Hoe lang duurt het ontwikkelen van mijn website?",
      answer: "Basic websites: 1-2 weken. Mid Tier: 2-3 weken. Pro packages: 3-4 weken. Custom projecten: afhankelijk van complexiteit, meestal 4-8 weken."
    },
    {
      question: "Krijg ik eigendom van mijn website?",
      answer: "Ja, u krijgt volledige eigendom van uw website. Alle bronbestanden en toegangen worden overgedragen na voltooiing van het project."
    },
    {
      question: "Wat gebeurt er na de gratis hosting periode?",
      answer: "Na de gratis periode kunt u kiezen uit onze hosting pakketten vanaf €15/maand, of uw website naar elke andere hosting provider verhuizen."
    },
    {
      question: "Kan mijn website later worden uitgebreid?",
      answer: "Absoluut! Alle websites zijn gebouwd om mee te groeien. U kunt altijd upgraden naar een hoger pakket of extra functionaliteiten toevoegen."
    },
    {
      question: "Bieden jullie ook onderhoud en support?",
      answer: "Ja, wij bieden verschillende onderhoudscontracten vanaf €25/maand voor updates, backups, security monitoring en kleine aanpassingen."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8 animate-fadeInUp">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-sm font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              ✨ Professionele Web Services
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-8 animate-fadeInUp leading-tight" style={{animationDelay: '0.2s'}}>
            Services & Prijzen
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
            Van eenvoudige websites tot complexe business systemen. 
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Transparante prijzen, geen verborgen kosten, altijd op maat.</span>
          </p>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl animate-float hidden lg:block"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-lg animate-float hidden lg:block" style={{animationDelay: '1s'}}></div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="relative pb-20 px-6 lg:px-8" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tiers.map((tier, index) => (
              <div 
                key={tier.name}
                className={`group relative rounded-3xl p-8 transition-all duration-700 hover:scale-[1.02] bg-white/80 backdrop-blur-sm border border-white/50 shadow-xl hover:shadow-2xl ${
                  tier.popular ? 'ring-2 ring-blue-500/50 shadow-blue-500/10' : ''
                } ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${index * 0.15}s`
                }}
              >
                {/* Animated Border Gradient */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                <div className="relative z-10">
                  {/* Popular Badge */}
                  {tier.popular && (
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                      <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-xl animate-pulse">
                        ⭐ Meest Populair
                      </span>
                    </div>
                  )}

                  {/* Icon with Floating Animation */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl mb-6 shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                    tier.popular 
                      ? 'bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 text-white animate-float' 
                      : 'bg-gradient-to-br from-gray-700 to-gray-900 text-white'
                  }`} style={{animationDelay: `${index * 0.5}s`}}>
                    {tier.icon}
                  </div>

                  {/* Header */}
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{tier.name}</h3>
                    <div className="flex items-baseline mb-4">
                      <span className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                        {tier.price}
                      </span>
                      <span className="text-gray-500 ml-3 text-lg">/ {tier.period}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg mb-4">{tier.description}</p>
                    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 p-4">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
                      <p className="relative text-sm font-semibold text-blue-800">
                        {tier.ideal}
                      </p>
                    </div>
                  </div>

                  {/* Features with Enhanced Styling */}
                  <ul className="space-y-4 mb-10">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start group/item">
                        <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-0.5 transition-all duration-300 ${
                          tier.popular 
                            ? 'bg-gradient-to-r from-blue-500 to-purple-600 group-hover/item:scale-110' 
                            : 'bg-gradient-to-r from-green-400 to-green-600 group-hover/item:scale-110'
                        }`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700 leading-relaxed group-hover/item:text-gray-900 transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Enhanced CTA Button */}
                  <button className={`w-full py-5 px-8 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-2xl ${
                    tier.popular
                      ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-blue-500/25 hover:shadow-purple-500/50'
                      : 'bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-blue-600 hover:to-purple-600'
                  }`}>
                    <span className="relative z-10">{tier.buttonText}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-20 px-6 lg:px-8 bg-white/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-8">
              Ons Werkproces
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Van eerste gesprek tot oplevering - zo werken wij samen aan uw succes
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Kennismaking",
                description: "Gratis consultatie om uw wensen en doelen te bespreken",
                color: "from-blue-500 to-blue-600"
              },
              {
                step: "02", 
                title: "Voorstel & Planning",
                description: "Gedetailleerd voorstel met tijdlijn en prijsafspraak",
                color: "from-purple-500 to-purple-600"
              },
              {
                step: "03",
                title: "Ontwikkeling",
                description: "Wij bouwen uw oplossing met regelmatige updates",
                color: "from-pink-500 to-pink-600"
              },
              {
                step: "04",
                title: "Oplevering & Training",
                description: "Testing, oplevering en training voor gebruik",
                color: "from-indigo-500 to-indigo-600"
              }
            ].map((item, index) => (
              <div key={index} className="group text-center relative">
                {/* Connection Line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 z-0"></div>
                )}
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${item.color} text-white rounded-full text-2xl font-bold mb-6 shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 animate-float`} style={{animationDelay: `${index * 0.5}s`}}>
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-8">
              Veelgestelde Vragen
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Antwoorden op de meest gestelde vragen over onze services
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-300">
                    ?
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-800 transition-colors">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-12 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-3xl shadow-2xl text-center text-white overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-6">
                Klaar om te beginnen?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Laten we uw digitale ambities werkelijkheid maken
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact">
                  <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    <Phone className="w-5 h-5 inline mr-2" />
                    Gratis Consultatie
                  </button>
                </a>
                <a href="mailto:info@nextline.be">
                  <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                    <Mail className="w-5 h-5 inline mr-2" />
                    Email Ons
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .hover\:scale-\[1\.02\]:hover {
          transform: scale(1.02);
        }
        
        /* Custom gradient animations */
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
      `}</style>
    </div>
  );
}

export default ServicesPage;