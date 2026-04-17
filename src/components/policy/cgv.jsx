import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const CGV = () => {
  const sections = [
    {
      id: 1,
      title: "Objet",
      content: "Les présentes Conditions Générales de Vente ont pour objet de définir les modalités selon lesquelles la société RiseGroup met à disposition du client la solution logicielle RiseManager en mode SaaS (Software as a Service). L’utilisation du service implique l’acceptation pleine et entière des présentes CGV."
    },
    {
      id: 2,
      title: "Description du service",
      content: "RiseManager est une plateforme en ligne permettant notamment :",
      list: [
        "gestion des commandes",
        "suivi logistique",
        "gestion clients",
        "analytics et reporting"
      ],
      comment: "Le service est accessible via internet, sans installation locale."
    },
    {
      id: 3,
      title: "Accès au service",
      points: [
        "Accès via identifiants sécurisés",
        "Disponible 24/7 (hors maintenance)",
        "L’éditeur peut suspendre temporairement pour maintenance"
      ]
    },
    {
      id: 4,
      title: "Conditions d’abonnement",
      content: "Le service est proposé sous forme d’abonnement :",
      list: [
        "mensuel ou annuel",
        "selon le plan choisi (RiseGo / RiseBasic / RiseCart…)"
      ],
      comment: "L’accès est activé après paiement."
    },
    {
      id: 5,
      title: "Prix et paiement",
      points: [
        "Les prix sont affichés sur le site",
        "Paiement anticipé obligatoire",
        "Tout retard peut entraîner suspension du service",
        "Les CGV doivent toujours préciser clairement les modalités de paiement et les pénalités éventuelles."
      ]
    },
    {
      id: 6,
      title: "Période d’essai",
      points: [
        "Une période d’essai peut être proposée",
        "À la fin de celle-ci, le client doit payer pour continuer"
      ]
    },
    {
      id: 7,
      title: "Obligations du client",
      content: "Le client s’engage à :",
      list: [
        "utiliser la plateforme uniquement pour ses besoins professionnels",
        "ne pas revendre ou exploiter le logiciel",
        "fournir des informations exactes"
      ]
    },
    {
      id: 8,
      title: "Propriété intellectuelle",
      content: "RiseManager reste la propriété exclusive de RiseGroup. Le client bénéficie uniquement d’un droit d’usage :",
      list: [
        "non exclusif",
        "non transférable",
        "limité à la durée de l’abonnement"
      ]
    },
    {
      id: 9,
      title: "Données et confidentialité",
      points: [
        "Le client reste propriétaire de ses données",
        "RiseManager agit comme hébergeur/traitant",
        "Les données sont traitées conformément aux règles de protection (type RGPD)."
      ]
    },
    {
      id: 10,
      title: "Sécurité",
      content: "RiseGroup met en place :",
      list: [
        "mesures techniques de sécurité",
        "sauvegardes régulières"
      ],
      comment: "En cas de faille, le client est informé rapidement."
    },
    {
      id: 11,
      title: "Réversibilité des données",
      content: "En cas de résiliation :",
      list: [
        "le client peut récupérer ses données",
        "délai limité (ex : 30 jours)"
      ],
      comment: "C’est une clause essentielle en SaaS."
    },
    {
      id: 12,
      title: "Support et maintenance",
      points: [
        "Support technique inclus selon le plan",
        "Maintenance corrective et évolutive"
      ]
    },
    {
      id: 13,
      title: "Responsabilité",
      content: "RiseGroup ne pourra être tenu responsable :",
      list: [
        "des pertes de chiffre d’affaires",
        "des erreurs liées à une mauvaise utilisation",
        "des interruptions indépendantes de sa volonté"
      ],
      comment: "La responsabilité est limitée au montant payé par le client."
    },
    {
      id: 14,
      title: "Résiliation",
      content: "Le client peut résilier :",
      list: [
        "à tout moment (fin de période en cours)"
      ],
      subTitle: "RiseGroup peut résilier en cas :",
      subList: [
        "de non-paiement",
        "d’abus ou fraude"
      ]
    },
    {
      id: 15,
      title: "Force majeure",
      content: "Aucune des parties ne pourra être tenue responsable en cas d’événement indépendant de sa volonté (panne majeure, catastrophe, etc.)."
    },
    {
      id: 16,
      title: "Modification des CGV",
      points: [
        "RiseGroup peut modifier les CGV à tout moment.",
        "Le client est informé via la plateforme ou email."
      ]
    },
    {
      id: 17,
      title: "Droit applicable et litiges",
      content: "Droit applicable : à définir (Algérie ou autre)",
      subTitle: "En cas de litige :",
      subList: [
        "tentative de résolution amiable",
        "tribunal compétent"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500">
      <Header />
      
      <main className="pt-32 pb-24 lg:pt-48 lg:pb-40">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-24 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-900 rounded-full border border-slate-100 dark:border-slate-800 transition-colors">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-[10px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-none">Juridique</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-heading dark:text-white leading-tight">
              Conditions Générales <br />
              <span className="text-primary italic">de Vente (CGV)</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>

          {/* Content Grid */}
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <div 
                key={section.id} 
                className="bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 rounded-[32px] p-8 lg:p-10 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="hidden sm:flex shrink-0 w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-2xl items-center justify-center text-primary font-black text-xl border border-slate-100 dark:border-slate-700/50">
                    {section.id}
                  </div>
                  <div className="space-y-4 flex-1">
                    <h2 className="text-xl lg:text-2xl font-extrabold text-heading dark:text-white">
                      {section.id}. {section.title}
                    </h2>
                    
                    {section.content && (
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                        {section.content}
                      </p>
                    )}

                    {section.list && (
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                        {section.list.map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-slate-600 dark:text-slate-400 font-medium bg-slate-50/50 dark:bg-slate-800/30 p-3 rounded-xl border border-slate-50 dark:border-slate-800/50 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.points && (
                      <ul className="space-y-3">
                        {section.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 font-medium text-sm lg:text-base">
                            <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.subTitle && (
                      <p className="text-heading dark:text-white font-bold mt-6">
                        {section.subTitle}
                      </p>
                    )}

                    {section.subList && (
                      <ul className="space-y-2 mt-2">
                        {section.subList.map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-slate-600 dark:text-slate-400 font-medium text-sm">
                            <div className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-600" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.comment && (
                      <div className="mt-6 p-4 bg-primary/5 dark:bg-primary/10 border-l-4 border-primary rounded-r-xl">
                        <p className="text-primary text-sm font-bold italic">
                          {section.comment}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="max-w-4xl mx-auto mt-16 p-8 bg-slate-900 dark:bg-primary/20 rounded-[32px] text-white text-center space-y-4">
            <h3 className="text-xl font-bold">Besoin d'aide ou de précisions ?</h3>
            <p className="text-slate-300 dark:text-slate-200">
              Notre équipe support est à votre disposition pour répondre à toutes vos questions concernant nos conditions de service.
            </p>
            <div className="pt-4">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-2xl transition-all active:scale-95 shadow-lg shadow-primary/20"
              >
                Contactez le support
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CGV;
