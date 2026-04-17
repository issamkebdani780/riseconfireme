import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const Legals = () => {
  const sections = [
    {
      id: 1,
      title: "Éditeur du site",
      content: "Le présent site web www.risemanager.com est édité par :",
      subTitle: "RiseGroup",
      details: [
        { label: "Forme juridique", value: "EURL" },
        { label: "Capital social", value: "100.000 DA" },
        { label: "Siège social", value: "Oran" },
        { label: "NIF", value: "[À compléter]" },
        { label: "RC", value: "[À compléter]" },
        { label: "AI", value: "[À compléter]" }
      ],
      representative: {
        title: "Représentant légal",
        name: "Cherif Mohamed El Amine",
        role: "Directeur Général"
      },
      contact: [
        { type: "Email", value: "contact@risemanager.com", href: "mailto:contact@risemanager.com" },
        { type: "Téléphone", value: "0665584456", href: "tel:0665584456" }
      ]
    },
    {
      id: 2,
      title: "Hébergement du site",
      content: "Le site RiseManager est hébergé par :",
      subItems: [
        { label: "Hébergeur", value: "[Nom de l’hébergeur – ex. : AWS, Google Cloud, OVH]" },
        { label: "Adresse", value: "[Adresse complète]" },
        { label: "Site web", value: "[URL]" },
        { label: "Téléphone", value: "[À compléter]" }
      ]
    },
    {
      id: 3,
      title: "Directeur de la publication",
      content: "Le directeur de la publication est :",
      points: [
        "Nom : Cherif Mohamed El Amine",
        "Fonction : CEO"
      ]
    },
    {
      id: 4,
      title: "Propriété intellectuelle",
      content: "L’ensemble des éléments composant le site RiseManager, incluant notamment :",
      list: [
        "les textes",
        "graphismes",
        "logos",
        "icônes",
        "images",
        "vidéos",
        "bases de données",
        "logiciels et codes sources"
      ],
      info: "Ils sont la propriété exclusive de RiseGroup, sauf mentions contraires, et sont protégés par les lois nationales et internationales relatives à la propriété intellectuelle. Toute reproduction, représentation, modification, publication ou adaptation, totale ou partielle, de ces éléments, quel que soit le moyen ou le procédé utilisé, est strictement interdite sans l’autorisation écrite préalable de RiseGroup."
    },
    {
      id: 5,
      title: "Accès au site",
      content: "Le site est accessible 24h/24 et 7j/7, sauf cas de force majeure, pannes éventuelles ou opérations de maintenance nécessaires à son bon fonctionnement. RiseGroup se réserve le droit de suspendre, limiter ou interrompre l’accès au site à tout moment sans préavis."
    },
    {
      id: 6,
      title: "Responsabilité",
      subSections: [
        {
          subTitle: "6.1 Responsabilité liée à l’utilisation du site",
          content: "L’utilisateur reconnaît utiliser le site sous sa responsabilité exclusive. RiseGroup ne saurait être tenu responsable :",
          list: [
            "des dommages directs ou indirects résultant de l’utilisation du site",
            "d’une interruption de service",
            "de bugs ou d’inexactitudes éventuelles",
            "de toute perte de données ou de chiffre d’affaires"
          ]
        },
        {
          subTitle: "6.2 Liens hypertextes",
          content: "Le site peut contenir des liens vers des sites tiers. RiseGroup n’exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou à leur politique de confidentialité."
        }
      ]
    },
    {
      id: 7,
      title: "Protection des données personnelles",
      content: "RiseGroup s’engage à protéger les données personnelles des utilisateurs conformément à la réglementation applicable, notamment :",
      list: [
        "la loi algérienne n° 18-07 relative à la protection des personnes physiques dans le traitement des données à caractère personnel",
        "et, le cas échéant, le Règlement Général sur la Protection des Données (RGPD) pour les utilisateurs situés dans l’Union européenne"
      ],
      info: "Pour plus d’informations sur la gestion des données personnelles, l’utilisateur est invité à consulter la Politique de Confidentialité accessible sur le site."
    },
    {
      id: 8,
      title: "Cookies",
      content: "Le site RiseManager utilise des cookies afin d’améliorer l’expérience utilisateur et de réaliser des statistiques de visite. L’utilisateur peut configurer son navigateur pour accepter ou refuser les cookies. Pour plus d’informations, veuillez consulter la Politique de Confidentialité ou la Politique de Cookies du site."
    },
    {
      id: 9,
      title: "Droit applicable et juridiction compétente",
      content: "Les présentes mentions légales sont régies par le droit algérien. En cas de litige et à défaut de résolution amiable, les tribunaux compétents seront ceux du ressort du siège social de RiseGroup, sauf disposition légale impérative contraire."
    },
    {
      id: 10,
      title: "Mise à jour des mentions légales",
      content: "RiseGroup se réserve le droit de modifier les présentes mentions légales à tout moment. Les utilisateurs sont invités à les consulter régulièrement afin de prendre connaissance des éventuelles mises à jour."
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
              Mentions <br />
              <span className="text-primary italic">Légales</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">
              Informations légales obligatoires concernant l'éditeur et l'hébergement du site RiseManager.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section) => (
              <div 
                key={section.id} 
                className="bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 rounded-[32px] p-8 lg:p-10 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center text-primary font-black text-lg">
                      {section.id}
                    </div>
                    <h2 className="text-xl lg:text-2xl font-extrabold text-heading dark:text-white">
                      {section.title}
                    </h2>
                  </div>

                  {section.content && (
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      {section.content}
                    </p>
                  )}

                  {section.subTitle && (
                    <h3 className="text-2xl font-black text-primary italic pt-2">{section.subTitle}</h3>
                  )}

                  {section.details && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {section.details.map((detail, i) => (
                        <div key={i} className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800/50">
                          <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase mb-1">{detail.label}</div>
                          <div className="text-sm font-bold text-heading dark:text-white">{detail.value}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.representative && (
                    <div className="mt-6 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <div className="text-[10px] font-bold text-primary uppercase mb-1">{section.representative.title}</div>
                        <div className="text-lg font-black text-heading dark:text-white">{section.representative.name}</div>
                        <div className="text-sm font-medium text-slate-500">{section.representative.role}</div>
                      </div>
                      <div className="flex flex-col gap-2">
                        {section.contact.map((c, i) => (
                          <a key={i} href={c.href} className="text-sm font-bold text-primary hover:underline flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {c.value}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.subItems && (
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {section.subItems.map((item, i) => (
                           <div key={i} className="flex flex-col gap-1 p-4 bg-slate-50 dark:bg-slate-800/30 rounded-2xl border border-slate-100 dark:border-slate-800/50">
                              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{item.label}</span>
                              <span className="text-sm font-bold text-heading dark:text-white">{item.value}</span>
                           </div>
                        ))}
                     </div>
                  )}

                  {section.points && (
                     <ul className="space-y-3">
                        {section.points.map((p, i) => (
                           <li key={i} className="flex items-center gap-3 text-slate-600 dark:text-slate-400 font-bold">
                              <div className="w-1 h-1 rounded-full bg-primary" />
                              {p}
                           </li>
                        ))}
                     </ul>
                  )}

                  {section.list && (
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {section.list.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-600 dark:text-slate-400 font-medium bg-slate-50/50 dark:bg-slate-800/30 p-3 rounded-xl border border-slate-50 dark:border-slate-800/50 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.subSections && (
                    <div className="space-y-6 pt-2">
                      {section.subSections.map((sub, i) => (
                        <div key={i} className="space-y-3">
                          <h3 className="text-lg font-bold text-heading dark:text-white">{sub.subTitle}</h3>
                          {sub.content && <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{sub.content}</p>}
                          {sub.list && (
                            <ul className="grid grid-cols-1 gap-2">
                              {sub.list.map((item, j) => (
                                <li key={j} className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                  <div className="w-1 h-1 rounded-full bg-primary shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {section.info && (
                     <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-2xl">
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed italic">
                          {section.info}
                        </p>
                      </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Legals;
