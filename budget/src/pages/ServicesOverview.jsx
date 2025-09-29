import React, { useState, useRef, useEffect } from 'react';
import { Check, Star, Zap, Rocket, Code, ChevronRight, ArrowUp, MessageCircle, Mail, Phone, Bot, Brain, Calendar, Users, TrendingUp, ShoppingCart, BarChart3, Bell, FileText, Share2, UserPlus } from 'lucide-react';

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
  const [activeTab, setActiveTab] = useState('web');
  const [ref, isVisible] = useIntersectionObserver();
  const [aiRef, aiIsVisible] = useIntersectionObserver();

  const webTiers = [
    {
      name: "Basic Starter",
      price: "€1.300",
      period: "Eenmalig",
      description: "Perfect voor starters die online willen gaan",
      icon: <Star className="w-8 h-8" />,
      features: [
        "Tot 5 professionele pagina's",
        "Volledig responsive design",
        "Contact formulier + spam bescherming",
        "Basis SEO optimalisatie",
        "SSL certificaat & veilige verbinding",
        "3 maanden gratis hosting",
        "Cross-browser compatibiliteit"
      ],
      ideal: "Startende ondernemers, lokale dienstverleners",
      popular: false
    },
    {
      name: "Mid Tier Business",
      price: "€2.000", 
      period: "Eenmalig",
      description: "Uitgebreide online aanwezigheid met content beheer",
      icon: <Zap className="w-8 h-8" />,
      features: [
        "Tot 10 uitgebreide pagina's",
        "WordPress CMS + training sessie",
        "Blog functionaliteit",
        "Google Analytics setup",
        "Google Maps + Social media integratie",
        "Uitgebreide SEO optimalisatie",
        "4 maanden gratis hosting"
      ],
      ideal: "Groeiende bedrijven, content creators",
      popular: true
    },
    {
      name: "Pro E-commerce",
      price: "€3.500",
      period: "Eenmalig",
      description: "Complete online verkoop oplossing",
      icon: <Rocket className="w-8 h-8" />,
      features: [
        "Tot 20 pagina's + webshop",
        "WooCommerce met betaalintegraties",
        "Voorraad beheer & order tracking",
        "Boekings-/reserveringssysteem",
        "Meertalige website (NL/FR/EN)",
        "Geavanceerde SEO & analytics",
        "6 maanden support & onderhoud"
      ],
      ideal: "E-commerce, restaurants, dienstverleners",
      popular: false
    },
    {
      name: "Custom Solutions",
      price: "Vanaf €6.000",
      period: "Op maat",
      description: "Volledig maatwerk voor unieke uitdagingen", 
      icon: <Code className="w-8 h-8" />,
      features: [
        "Business Management Systemen",
        "Klanten/leden database (CRUD)",
        "Event planning & management",
        "API ontwikkeling & integraties",
        "Custom dashboards & analytics",
        "PDF generatie & workflows",
        "Multi-platform applicaties"
      ],
      ideal: "Verenigingen, complexe bedrijfsprocessen",
      popular: false
    }
  ];

  const aiAgents = [
    {
      name: "Customer Support Bot",
      price: "€500",
      setup: "€75/maand",
      icon: <Bot className="w-6 h-6" />,
      description: "24/7 automatische beantwoording van veelgestelde vragen",
      benefits: ["Bespaar 10-15 uur/week", "24/7 beschikbaar", "Betere klantervaring"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Appointment Manager",
      price: "€400",
      setup: "€50/maand",
      icon: <Calendar className="w-6 h-6" />,
      description: "Automatische afspraak planning en herinneringen",
      benefits: ["60% minder no-shows", "Geen dubbele boekingen", "Auto SMS herinneringen"],
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Lead Qualifier",
      price: "€600",
      setup: "€85/maand",
      icon: <Users className="w-6 h-6" />,
      description: "Automatische lead kwalificatie en routing naar sales",
      benefits: ["Bespaar 40% sales tijd", "Hogere conversie", "CRM integratie"],
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Feedback Collector",
      price: "€350",
      setup: "€45/maand",
      icon: <MessageCircle className="w-6 h-6" />,
      description: "Automatische feedback verzameling en analyse",
      benefits: ["Gestructureerde feedback", "AI sentiment analyse", "Verbeter service"],
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Order Tracker",
      price: "€450",
      setup: "€60/maand",
      icon: <ShoppingCart className="w-6 h-6" />,
      description: "Automatische order status updates via SMS/chat",
      benefits: ["80% minder vragen", "Betere transparantie", "E-commerce integratie"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      name: "Inventory Alert System",
      price: "€400",
      setup: "€50/maand",
      icon: <BarChart3 className="w-6 h-6" />,
      description: "Real-time voorraad monitoring en alerts",
      benefits: ["Voorkom uitverkoop", "Auto bestellingen", "Slack/email notificaties"],
      color: "from-teal-500 to-cyan-500"
    },
    {
      name: "Invoice Automation",
      price: "€550",
      setup: "€70/maand",
      icon: <FileText className="w-6 h-6" />,
      description: "Automatische factuur generatie en betalingsherinneringen",
      benefits: ["Snellere betalingen", "Bespaar 5-8 uur/week", "Boekhouding integratie"],
      color: "from-violet-500 to-purple-500"
    },
    {
      name: "Social Media Manager",
      price: "€500",
      setup: "€65/maand",
      icon: <Share2 className="w-6 h-6" />,
      description: "Automatische social media posts met AI content",
      benefits: ["Consistente aanwezigheid", "AI-gegenereerde captions", "Multi-platform"],
      color: "from-pink-500 to-rose-500"
    },
    {
      name: "Onboarding Automator",
      price: "€400",
      setup: "€50/maand",
      icon: <UserPlus className="w-6 h-6" />,
      description: "Geautomatiseerde welkomst en onboarding flows",
      benefits: ["Betere eerste indruk", "Bespaar onboarding tijd", "Gepersonaliseerde emails"],
      color: "from-amber-500 to-orange-500"
    },
    {
      name: "Team Notification Hub",
      price: "€350",
      setup: "€45/maand",
      icon: <Bell className="w-6 h-6" />,
      description: "Real-time team notificaties voor belangrijke events",
      benefits: ["Betere communicatie", "Instant updates", "Slack/SMS integratie"],
      color: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8 animate-fadeInUp">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-sm font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Professionele Web Services & AI Automation
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-8 animate-fadeInUp leading-tight" style={{animationDelay: '0.2s'}}>
            Services & Prijzen
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
            Van moderne websites tot intelligente AI-agents die uw bedrijf automatiseren.
            <span className="block mt-2 font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Transparante prijzen, meetbare resultaten.</span>
          </p>

          {/* Tab Switcher */}
          <div className="flex justify-center gap-4 mb-16 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
            <button
              onClick={() => setActiveTab('web')}
              className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                activeTab === 'web'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl scale-105'
                  : 'bg-white/70 text-gray-700 hover:bg-white shadow-lg hover:scale-105'
              }`}
            >
              <Code className="w-5 h-5 inline mr-2" />
              Web Development
            </button>
            <button
              onClick={() => setActiveTab('ai')}
              className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                activeTab === 'ai'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl scale-105'
                  : 'bg-white/70 text-gray-700 hover:bg-white shadow-lg hover:scale-105'
              }`}
            >
              <Brain className="w-5 h-5 inline mr-2" />
              AI Agents
            </button>
          </div>
        </div>
      </section>

      {/* Web Development Section */}
      {activeTab === 'web' && (
        <section className="relative pb-20 px-6 lg:px-8" ref={ref}>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {webTiers.map((tier, index) => (
                <div 
                  key={tier.name}
                  className={`group relative rounded-3xl p-8 transition-all duration-700 hover:scale-[1.02] bg-white/80 backdrop-blur-sm border border-white/50 shadow-xl hover:shadow-2xl ${
                    tier.popular ? 'ring-2 ring-blue-500/50 shadow-blue-500/10' : ''
                  } ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{transitionDelay: `${index * 0.15}s`}}
                >
                  {tier.popular && (
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                      <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-xl animate-pulse">
                        Meest Populair
                      </span>
                    </div>
                  )}

                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl mb-6 shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                    tier.popular 
                      ? 'bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 text-white animate-float' 
                      : 'bg-gradient-to-br from-gray-700 to-gray-900 text-white'
                  }`} style={{animationDelay: `${index * 0.5}s`}}>
                    {tier.icon}
                  </div>

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
                      <p className="relative text-sm font-semibold text-blue-800">
                        {tier.ideal}
                      </p>
                    </div>
                  </div>

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

                  <button className={`w-full py-5 px-8 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-2xl ${
                    tier.popular
                      ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-blue-500/25 hover:shadow-purple-500/50'
                      : 'bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-blue-600 hover:to-purple-600'
                  }`}>
                    <span className="relative z-10">Kies {tier.name}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* AI Agents Section */}
      {activeTab === 'ai' && (
        <section className="relative pb-20 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto" ref={aiRef}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-4">
                AI Agents Die Uw Bedrijf Automatiseren
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Elk AI-agent bespaart gemiddeld <span className="text-purple-600 font-bold">10-20 uur per week</span> aan handmatig werk
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiAgents.map((agent, index) => (
                <div 
                  key={agent.name}
                  className={`group relative rounded-2xl p-6 transition-all duration-700 hover:scale-105 bg-white/80 backdrop-blur-sm border border-white/50 shadow-xl hover:shadow-2xl ${
                    aiIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{transitionDelay: `${index * 0.1}s`}}
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 bg-gradient-to-br ${agent.color} text-white shadow-lg group-hover:rotate-3 transition-transform duration-300`}>
                    {agent.icon}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">{agent.name}</h3>
                  
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">{agent.price}</span>
                      <span className="text-gray-500 text-sm">setup</span>
                    </div>
                    <div className="text-purple-600 font-semibold">{agent.setup} onderhoud</div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{agent.description}</p>

                  <div className="space-y-2 mb-6">
                    {agent.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 mr-2"></div>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full py-3 px-4 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg transition-all duration-300 hover:scale-105">
                    Meer Info
                  </button>
                </div>
              ))}
            </div>

            {/* AI Package Deal */}
            <div className="mt-16 p-8 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-3xl border-2 border-purple-500/30 backdrop-blur-sm">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Bundle Deal: 3+ AI Agents
                </h3>
                <p className="text-xl text-gray-700 mb-6">
                  Kies 3 of meer AI agents en krijg <span className="text-purple-600 font-bold">20% korting</span> op setup + <span className="text-purple-600 font-bold">eerste maand gratis</span>
                </p>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl hover:shadow-2xl">
                  Plan Gratis Consultatie
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

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
              { step: "01", title: "Kennismaking", description: "Gratis consultatie om uw wensen te bespreken", color: "from-blue-500 to-blue-600" },
              { step: "02", title: "Voorstel & Planning", description: "Gedetailleerd voorstel met tijdlijn", color: "from-purple-500 to-purple-600" },
              { step: "03", title: "Ontwikkeling", description: "Wij bouwen met regelmatige updates", color: "from-pink-500 to-pink-600" },
              { step: "04", title: "Oplevering & Training", description: "Testing, oplevering en training", color: "from-indigo-500 to-indigo-600" }
            ].map((item, index) => (
              <div key={index} className="group text-center relative">
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

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default ServicesPage;