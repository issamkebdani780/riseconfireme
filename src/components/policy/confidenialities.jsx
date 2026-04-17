import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const Confidentialities = () => {
  const sections = [
    {
      id: 1,
      title: "Introduction",
      content: "La présente Politique de Confidentialité a pour objectif d’informer les utilisateurs de la plateforme RiseManager, éditée par RiseGroup, sur la manière dont leurs données personnelles sont collectées, utilisées, protégées et conservées. L’utilisation du site et des services RiseManager implique l’acceptation pleine et entière de cette politique."
    },
    {
      id: 2,
      title: "Responsable du traitement",
      content: "Le responsable du traitement des données est :",
      subItems: [
        { label: "Société", value: "RiseGroup" },
        { label: "Email", value: "contact@risemanager.com" },
        { label: "Site web", value: "www.risemanager.com" }
      ],
      comment: "Pour toute question relative à la protection des données, les utilisateurs peuvent contacter RiseGroup à l’adresse mentionnée ci-dessus."
    },
    {
      id: 3,
      title: "Données collectées",
      subSections: [
        {
          subTitle: "3.1 Données fournies directement par l’utilisateur",
          content: "Lors de l’inscription ou de l’utilisation de la plateforme, les données suivantes peuvent être collectées :",
          list: ["Nom et prénom", "Adresse e-mail", "Numéro de téléphone", "Nom de l’entreprise", "Adresse professionnelle", "Informations de facturation", "Identifiants de connexion"]
        },
        {
          subTitle: "3.2 Données relatives aux clients du client",
          content: "Dans le cadre de l’utilisation de RiseManager, des données concernant les clients finaux peuvent être traitées :",
          list: ["Nom et prénom", "Numéro de téléphone", "Adresse de livraison", "Historique des commandes", "Informations relatives aux livraisons"],
          info: "RiseGroup agit alors en qualité de sous-traitant, tandis que le client utilisateur est le responsable du traitement de ces données."
        },
        {
          subTitle: "3.3 Données collectées automatiquement",
          content: "Lors de la navigation sur le site :",
          list: ["Adresse IP", "Type de navigateur", "Données de connexion et d’utilisation", "Cookies et technologies similaires", "Données analytiques (ex : Google Analytics)"]
        }
      ]
    },
    {
      id: 4,
      title: "Finalités du traitement",
      content: "Les données collectées sont utilisées pour les finalités suivantes :",
      list: [
        "Création et gestion des comptes utilisateurs",
        "Fourniture et amélioration des services RiseManager",
        "Gestion des abonnements et de la facturation",
        "Support technique et assistance client",
        "Analyse statistique et amélioration de la plateforme",
        "Communication commerciale et marketing (avec consentement)",
        "Respect des obligations légales et réglementaires",
        "Prévention de la fraude et sécurisation des systèmes"
      ]
    },
    {
      id: 5,
      title: "Base légale du traitement",
      content: "Les traitements de données reposent sur les bases légales suivantes :",
      list: [
        "Exécution du contrat : fourniture des services RiseManager",
        "Obligation légale : conformité aux exigences réglementaires",
        "Intérêt légitime : amélioration du service et sécurité",
        "Consentement : envoi de communications marketing et utilisation de certains cookies"
      ]
    },
    {
      id: 6,
      title: "Destinataires des données",
      content: "Les données personnelles peuvent être transmises uniquement aux destinataires suivants :",
      list: [
        "Équipes internes de RiseGroup",
        "Prestataires techniques (hébergement, maintenance, paiement)",
        "Partenaires logistiques intégrés (ex : transporteurs)",
        "Autorités administratives ou judiciaires lorsque la loi l’exige"
      ],
      info: "RiseGroup s’engage à ne jamais vendre les données personnelles des utilisateurs."
    },
    {
      id: 7,
      title: "Transferts internationaux de données",
      content: "Dans le cadre de l’utilisation de certains services (hébergement cloud, outils d’analyse, etc.), les données peuvent être transférées vers des pays situés en dehors de l’Algérie.",
      info: "RiseGroup s’assure que ces transferts sont effectués avec des garanties appropriées, notamment par l’utilisation de clauses contractuelles types conformes aux standards internationaux."
    },
    {
      id: 8,
      title: "Durée de conservation des données",
      content: "Les données sont conservées uniquement pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées :",
      table: [
        { type: "Données de compte", duration: "Durée de l’abonnement + 3 ans" },
        { type: "Données de facturation", duration: "10 ans (obligations légales)" },
        { type: "Données clients", duration: "Selon les instructions du client" },
        { type: "Cookies", duration: "13 mois maximum" },
        { type: "Données marketing", duration: "Jusqu’au retrait du consentement" }
      ]
    },
    {
      id: 9,
      title: "Sécurité des données",
      content: "RiseGroup met en œuvre des mesures techniques et organisationnelles appropriées pour garantir la sécurité des données :",
      list: [
        "Chiffrement des données (HTTPS/SSL)",
        "Accès sécurisé et authentification",
        "Sauvegardes régulières",
        "Surveillance des accès",
        "Protection contre les intrusions"
      ]
    },
    {
      id: 10,
      title: "Droits des utilisateurs",
      content: "Conformément aux réglementations applicables, les utilisateurs disposent des droits suivants :",
      list: [
        "Droit d’accès : obtenir une copie de leurs données",
        "Droit de rectification : corriger des données inexactes",
        "Droit à l’effacement : demander la suppression des données",
        "Droit à la limitation du traitement",
        "Droit d’opposition",
        "Droit à la portabilité des données",
        "Droit de retirer son consentement à tout moment"
      ],
      info: "Une réponse sera fournie dans un délai maximum de 30 jours.",
      actionLabel: "Contactez-nous à :",
      actionValue: "contact@risemanager.com"
    },
    {
      id: 11,
      title: "Gestion des cookies",
      subSections: [
        {
          subTitle: "11.1 Qu’est-ce qu’un cookie ?",
          content: "Un cookie est un fichier texte déposé sur le terminal de l’utilisateur lors de la navigation sur le site."
        },
        {
          subTitle: "11.2 Types de cookies utilisés",
          list: [
            "Cookies essentiels : nécessaires au fonctionnement du site",
            "Cookies analytiques : mesure d’audience et amélioration du service",
            "Cookies marketing : personnalisation des publicités"
          ]
        },
        {
          subTitle: "11.3 Gestion des cookies",
          content: "L’utilisateur peut accepter ou refuser les cookies via le bandeau prévu à cet effet ou en configurant son navigateur."
        }
      ]
    },
    {
      id: 12,
      title: "Données des mineurs",
      content: "Les services de RiseManager sont destinés exclusivement à un usage professionnel. Ils ne sont pas conçus pour les mineurs et RiseGroup ne collecte pas sciemment de données les concernant."
    },
    {
      id: 13,
      title: "Modification de la politique de confidentialité",
      content: "RiseGroup se réserve le droit de modifier la présente Politique de Confidentialité à tout moment. Les utilisateurs seront informés de toute modification significative via le site ou par e-mail."
    },
    {
      id: 14,
      title: "Contact",
      subItems: [
        { label: "Société", value: "RiseGroup" },
        { label: "Email", value: "contact@risemanager.com" },
        { label: "Site web", value: "www.risemanager.com" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500">
      <Header />
      
      <main className="pt-32 pb-24 lg:pt-48 lg:pb-40">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-24 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-900 rounded-full border border-slate-100 dark:border-slate-800 transition-colors">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-[10px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-none">Confidentialité</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-heading dark:text-white leading-tight">
              Politique de <br />
              <span className="text-primary italic">Confidentialité</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">
              Chez RiseManager, nous prenons la protection de vos données très au sérieux. 
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
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

                  {section.subItems && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {section.subItems.map((item, i) => (
                        <div key={i} className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800/50">
                          <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase mb-1">{item.label}</div>
                          <div className="text-sm font-bold text-heading dark:text-white">{item.value}</div>
                        </div>
                      ))}
                    </div>
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
                          {sub.info && (
                             <div className="mt-2 text-xs font-bold text-primary italic p-3 bg-primary/5 rounded-lg border-l-2 border-primary">
                                {sub.info}
                             </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {section.table && (
                     <div className="overflow-x-auto rounded-2xl border border-slate-100 dark:border-slate-800">
                        <table className="w-full text-left text-sm">
                           <thead className="bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-bold uppercase text-[10px] tracking-wider">
                              <tr>
                                 <th className="px-6 py-4">Type de données</th>
                                 <th className="px-6 py-4">Durée de conservation</th>
                              </tr>
                           </thead>
                           <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                              {section.table.map((row, i) => (
                                 <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="px-6 py-4 font-bold text-heading dark:text-white">{row.type}</td>
                                    <td className="px-6 py-4 text-slate-500 dark:text-slate-400">{row.duration}</td>
                                 </tr>
                              ))}
                           </tbody>
                        </table>
                     </div>
                  )}

                  {section.info && !section.subSections && (
                     <div className="mt-4 p-4 bg-primary/5 dark:bg-primary/10 border-l-4 border-primary rounded-r-xl">
                        <p className="text-primary text-sm font-bold italic">
                          {section.info}
                        </p>
                      </div>
                  )}

                  {(section.actionLabel || section.actionValue) && (
                    <div className="pt-4">
                      <a 
                        href={`mailto:${section.actionValue}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-heading dark:bg-white dark:text-heading text-white rounded-xl font-bold text-sm hover:scale-[1.02] transition-transform"
                      >
                        {section.actionLabel} {section.actionValue}
                      </a>
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

export default Confidentialities;
