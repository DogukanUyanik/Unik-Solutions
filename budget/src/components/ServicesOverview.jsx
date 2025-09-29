import React, { useState, useRef, useEffect } from 'react';
import { Star, Zap, Rocket, Code, ChevronRight } from 'lucide-react';

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

function ServicesOverview() {
  const [ref, isVisible] = useIntersectionObserver();

  const servicePackages = [
    {
      name: "Starter Website",
      price: "€1.300",
      description: "Perfect voor kleine bedrijven die online willen gaan",
      icon: <Star className="w-8 h-8" />,
      features: ["Tot 5 pagina's", "Responsive design", "SEO basis", "3 mnd hosting"],
      popular: false,
      gradient: "from-gray-500 to-gray-600"
    },
    {
      name: "Business Website", 
      price: "€2.000",
      description: "Uitgebreide website met blog en CMS",
      icon: <Zap className="w-8 h-8" />,
      features: ["Tot 10 pagina's", "WordPress CMS", "Analytics", "Social media"],
      popular: true,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      name: "E-commerce Pro",
      price: "€3.500", 
      description: "Volledige webshop met alle functies",
      icon: <Rocket className="w-8 h-8" />,
      features: ["Webshop", "Betalingen", "Meertalig", "6 mnd support"],
      popular: false,
      gradient: "from-purple-500 to-pink-600"
    },
    {
      name: "Custom Solutions",
      price: "Vanaf €6.000",
      description: "Maatwerk ontwikkeling voor unieke behoeften", 
      icon: <Code className="w-8 h-8" />,
      features: ["Volledig maatwerk", "API integraties", "Business systemen", "AI automatisering"],
      popular: false,
      gradient: "from-indigo-500 to-blue-600"
    },
      {
    name: "Customer Support FAQ Bot",
    price: "Setup €500 / €100 p.m.",
    description: "AI chatbot that answers common questions 24/7 via chat or messaging apps.",
    icon: <Star className="w-8 h-8" />,
    features: [
      "Beantwoordt veelgestelde vragen automatisch",
      "24/7 beschikbaar",
      "Verbetert klanttevredenheid",
      "Bespaart tijd voor medewerkers"
    ],
    popular: true,
    gradient: "from-blue-500 to-purple-600"
  },
  {
    name: "Appointment Booking & Reminders",
    price: "Setup €750 / €150 p.m.",
    description: "Automatiseer afspraken en verstuur herinneringen via SMS of e-mail.",
    icon: <Zap className="w-8 h-8" />,
    features: [
      "Online afspraken plannen",
      "Automatische SMS/email herinneringen",
      "Voorkomt dubbele boekingen",
      "Minder no-shows"
    ],
    popular: false,
    gradient: "from-green-500 to-teal-600"
  },
  {
    name: "Lead Capture & Qualification",
    price: "Setup €1.000 / €200 p.m.",
    description: "AI chatbot die leads verzamelt en doorstuurt naar uw sales team.",
    icon: <Rocket className="w-8 h-8" />,
    features: [
      "Stelt kwalificatievragen",
      "Integreert met CRM",
      "Bespaart sales tijd",
      "Verhoogt conversieratio"
    ],
    popular: true,
    gradient: "from-orange-500 to-pink-600"
  },
  {
    name: "Customer Feedback Collection",
    price: "Setup €600 / €120 p.m.",
    description: "Automatische enquêtes en sentimentanalyse na aankoop of service.",
    icon: <Code className="w-8 h-8" />,
    features: [
      "Automatische e-mails/SMS na aankoop",
      "AI analyseert feedback",
      "Inzicht in klanttevredenheid",
      "Verbeterpunten zichtbaar"
    ],
    popular: false,
    gradient: "from-indigo-500 to-blue-600"
  },
  {
    name: "Order Tracking Notifications",
    price: "Setup €800 / €150 p.m.",
    description: "Automatische updates over bestelling via SMS of chat.",
    icon: <Zap className="w-8 h-8" />,
    features: [
      "Real-time orderstatus",
      "Minder klantvragen",
      "Verhoogt transparantie",
      "Koppeling met webshop-API"
    ],
    popular: false,
    gradient: "from-purple-500 to-pink-600"
  },
  {
    name: "Inventory Alerts",
    price: "Setup €1.200 / €200 p.m.",
    description: "Houd voorraadniveaus in de gaten en ontvang automatische meldingen.",
    icon: <Rocket className="w-8 h-8" />,
    features: [
      "Monitoring van voorraad",
      "Slack/email waarschuwingen",
      "Voorkomt stockouts",
      "Efficiënter inkopen"
    ],
    popular: false,
    gradient: "from-yellow-500 to-red-600"
  },
  {
    name: "Invoice Automation",
    price: "Setup €1.500 / €250 p.m.",
    description: "Automatisch facturen genereren en betaalherinneringen versturen.",
    icon: <Code className="w-8 h-8" />,
    features: [
      "Automatische factuur na dienst",
      "E-mail betaalherinneringen",
      "Snellere cashflow",
      "Minder administratie"
    ],
    popular: false,
    gradient: "from-blue-700 to-cyan-600"
  },
  {
    name: "Social Media Automation",
    price: "Setup €900 / €180 p.m.",
    description: "Plan en post automatisch content op social media met AI-captions.",
    icon: <Star className="w-8 h-8" />,
    features: [
      "Contentkalender integratie",
      "Automatische postplanning",
      "AI gegenereerde captions",
      "Consistente online aanwezigheid"
    ],
    popular: true,
    gradient: "from-pink-500 to-purple-600"
  },
  {
    name: "New Customer Onboarding",
    price: "Setup €700 / €130 p.m.",
    description: "Automatische welkomstmails en gepersonaliseerde onboarding.",
    icon: <Zap className="w-8 h-8" />,
    features: [
      "Welkomstmail met stappenplan",
      "Persoonlijke informatie",
      "Geautomatiseerd proces",
      "Verhoogt klanttevredenheid"
    ],
    popular: false,
    gradient: "from-green-500 to-emerald-600"
  },
  {
    name: "Internal Team Notifications",
    price: "Setup €600 / €120 p.m.",
    description: "Directe notificaties bij nieuwe bestellingen of urgente verzoeken.",
    icon: <Rocket className="w-8 h-8" />,
    features: [
      "Notificaties in Slack of SMS",
      "Directe communicatie",
      "Betere responstijd",
      "Minder gemiste events"
    ],
    popular: false,
    gradient: "from-gray-500 to-gray-700"
  }
  ];

  return (
    <section className="w-full px-6 lg:px-8 py-20 bg-white/50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              Onze Service Pakketten
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Van eenvoudige websites tot complexe business oplossingen. 
            Kies het pakket dat perfect bij jouw ambities past.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {servicePackages.map((service, index) => (
            <div 
              key={service.name}
              className={`relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 ${
                service.popular ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
              } ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${index * 0.1}s`
              }}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Populair
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 bg-gradient-to-r ${service.gradient} text-white shadow-md`}>
                {service.icon}
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{service.name}</h3>
                  <div className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
                    {service.price}
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className={`w-2 h-2 rounded-full mr-2 bg-gradient-to-r ${service.gradient}`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <a href="/services">
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto">
              Bekijk Alle Services & Prijzen
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ServicesOverview;