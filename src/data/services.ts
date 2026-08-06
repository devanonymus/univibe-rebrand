export type Service = {
  slug: string;
  name: string;
  eyebrow: string;
  title: string;
  introduction: string;
  description: string[];
  outcomes: string[];
  capabilities: string[];
  process: {
    title: string;
    description: string;
  }[];
  closingTitle: string;
  closingText: string;
};

export const services: Service[] = [
  {
    slug: "software-engineering",
    name: "Software Engineering",
    eyebrow: "Software su misura",
    title: "Software progettato intorno ai processi reali dell’impresa.",
    introduction:
      "Progettiamo piattaforme, applicazioni e sistemi digitali capaci di semplificare il lavoro, connettere informazioni e sostenere la crescita aziendale.",
    description: [
      "Un software efficace non nasce da un elenco di funzionalità. Nasce dalla comprensione dei processi, delle persone che lo utilizzeranno e degli obiettivi che l’azienda vuole raggiungere.",
      "Analizziamo il funzionamento dell’organizzazione, individuiamo inefficienze e opportunità e costruiamo soluzioni digitali personalizzate, scalabili e integrate con gli strumenti già presenti.",
    ],
    outcomes: [
      "Riduzione delle attività manuali e ripetitive",
      "Maggiore controllo sui processi aziendali",
      "Dati centralizzati e accessibili",
      "Migliore esperienza per operatori e clienti",
      "Sistemi capaci di evolvere nel tempo",
    ],
    capabilities: [
      "Web application",
      "Software gestionali",
      "Dashboard e sistemi di controllo",
      "CRM personalizzati",
      "Portali aziendali",
      "Piattaforme SaaS",
      "API e integrazioni",
      "Automazione dei workflow",
    ],
    process: [
      {
        title: "Analisi",
        description:
          "Studiamo processi, utenti, strumenti esistenti e criticità operative.",
      },
      {
        title: "Architettura",
        description:
          "Definiamo struttura tecnica, flussi, dati, sicurezza e integrazioni.",
      },
      {
        title: "Progettazione",
        description:
          "Disegniamo interfacce e funzionalità intorno all’utilizzo reale.",
      },
      {
        title: "Sviluppo",
        description:
          "Costruiamo il sistema attraverso iterazioni controllate e verificabili.",
      },
      {
        title: "Evoluzione",
        description:
          "Monitoriamo l’utilizzo e miglioriamo progressivamente la piattaforma.",
      },
    ],
    closingTitle: "Il software deve adattarsi all’impresa. Non il contrario.",
    closingText:
      "Costruiamo sistemi digitali che accompagnano l’organizzazione nel tempo e diventano parte concreta del suo vantaggio competitivo.",
  },
  {
    slug: "artificial-intelligence",
    name: "Artificial Intelligence",
    eyebrow: "AI applicata al business",
    title: "L’intelligenza artificiale diventa parte dei processi aziendali.",
    introduction:
      "Progettiamo agenti AI, automazioni e sistemi intelligenti capaci di supportare persone, decisioni e attività operative.",
    description: [
      "L’intelligenza artificiale genera valore quando viene integrata correttamente nel lavoro quotidiano dell’impresa.",
      "Non ci limitiamo a introdurre strumenti generici. Analizziamo processi e informazioni per costruire soluzioni AI controllabili, misurabili e coerenti con l’organizzazione.",
    ],
    outcomes: [
      "Automazione delle attività ripetitive",
      "Riduzione dei tempi operativi",
      "Supporto alle decisioni",
      "Maggiore velocità nella gestione delle informazioni",
      "Esperienze più personalizzate per clienti e operatori",
    ],
    capabilities: [
      "Agenti AI",
      "Assistenti aziendali",
      "Automazione documentale",
      "Chatbot evoluti",
      "Analisi dei dati",
      "Generazione di contenuti",
      "Workflow intelligenti",
      "Integrazione con software e CRM",
    ],
    process: [
      {
        title: "Individuazione",
        description:
          "Identifichiamo processi in cui l’AI può produrre un beneficio concreto.",
      },
      {
        title: "Progettazione",
        description:
          "Definiamo dati, regole, livelli di controllo e integrazioni.",
      },
      {
        title: "Sperimentazione",
        description:
          "Realizziamo un prototipo e ne misuriamo accuratezza e utilità.",
      },
      {
        title: "Integrazione",
        description:
          "Inseriamo il sistema AI nei workflow reali dell’organizzazione.",
      },
      {
        title: "Controllo",
        description:
          "Monitoriamo risultati, rischi, qualità e miglioramenti possibili.",
      },
    ],
    closingTitle: "L’AI non sostituisce il processo. Lo rende più intelligente.",
    closingText:
      "La tecnologia viene progettata per amplificare le competenze delle persone e migliorare la capacità operativa dell’impresa.",
  },
  {
    slug: "growth-strategy",
    name: "Growth & Strategy",
    eyebrow: "Crescita e trasformazione",
    title: "Strategia, dati e tecnologia orientati alla crescita.",
    introduction:
      "Costruiamo sistemi commerciali e digitali capaci di trasformare obiettivi aziendali in processi misurabili.",
    description: [
      "La crescita non dipende da una singola campagna o da un nuovo strumento. Dipende dalla coerenza tra posizionamento, offerta, processi commerciali, tecnologia e dati.",
      "Analizziamo l’impresa nel suo insieme e definiamo una direzione operativa chiara, sostenibile e misurabile.",
    ],
    outcomes: [
      "Maggiore chiarezza strategica",
      "Processi commerciali più efficaci",
      "Migliore utilizzo dei dati",
      "Riduzione delle dispersioni operative",
      "Crescita più controllabile e sostenibile",
    ],
    capabilities: [
      "Business analysis",
      "Posizionamento",
      "Strategia digitale",
      "Funnel commerciali",
      "Customer journey",
      "Dashboard KPI",
      "Ottimizzazione dei processi",
      "Sistemi di acquisizione",
    ],
    process: [
      {
        title: "Diagnosi",
        description:
          "Analizziamo business, mercato, offerta, clienti e processi esistenti.",
      },
      {
        title: "Direzione",
        description:
          "Definiamo obiettivi, priorità e indicatori di risultato.",
      },
      {
        title: "Sistema",
        description:
          "Progettiamo processi, strumenti e canali che devono lavorare insieme.",
      },
      {
        title: "Attivazione",
        description:
          "Implementiamo la strategia attraverso azioni e responsabilità precise.",
      },
      {
        title: "Ottimizzazione",
        description:
          "Misuriamo risultati e correggiamo progressivamente il sistema.",
      },
    ],
    closingTitle: "La crescita diventa un sistema, non una sequenza di tentativi.",
    closingText:
      "Uniamo strategia e capacità esecutiva per costruire modelli operativi più solidi e competitivi.",
  },
  {
    slug: "seo-visibility",
    name: "SEO & Visibility",
    eyebrow: "Visibilità digitale",
    title: "Essere presenti online non basta. Bisogna essere trovati.",
    introduction:
      "Costruiamo strategie SEO e sistemi di contenuto capaci di aumentare visibilità, autorevolezza e opportunità commerciali.",
    description: [
      "La SEO non è una semplice ottimizzazione tecnica. È il risultato dell’integrazione tra struttura del sito, contenuti, ricerca degli utenti, autorevolezza e performance.",
      "Progettiamo ecosistemi digitali che permettono al brand di intercettare le persone giuste nei momenti in cui stanno cercando una soluzione.",
    ],
    outcomes: [
      "Maggiore presenza sui motori di ricerca",
      "Traffico più qualificato",
      "Crescita dell’autorevolezza del brand",
      "Migliore conversione delle visite",
      "Riduzione della dipendenza dalla pubblicità",
    ],
    capabilities: [
      "SEO audit",
      "SEO tecnica",
      "Architettura informativa",
      "Keyword strategy",
      "Content strategy",
      "Local SEO",
      "Ottimizzazione delle conversioni",
      "Monitoraggio e reporting",
    ],
    process: [
      {
        title: "Audit",
        description:
          "Analizziamo struttura, contenuti, performance e posizionamento.",
      },
      {
        title: "Ricerca",
        description:
          "Studiamo intenzioni di ricerca, mercato e comportamento degli utenti.",
      },
      {
        title: "Architettura",
        description:
          "Organizziamo pagine e contenuti intorno alle opportunità reali.",
      },
      {
        title: "Ottimizzazione",
        description:
          "Interveniamo sugli aspetti tecnici, editoriali e di conversione.",
      },
      {
        title: "Crescita",
        description:
          "Monitoriamo risultati e sviluppiamo progressivamente l’autorevolezza.",
      },
    ],
    closingTitle: "La visibilità diventa un asset aziendale.",
    closingText:
      "Costruiamo una presenza digitale capace di generare opportunità anche nel lungo periodo.",
  },
  {
    slug: "it-consulting",
    name: "IT Consulting",
    eyebrow: "Consulenza tecnologica",
    title: "Decisioni tecnologiche più chiare, solide e sostenibili.",
    introduction:
      "Affianchiamo aziende e organizzazioni nella progettazione e gestione delle proprie scelte digitali.",
    description: [
      "Tecnologie, fornitori e sistemi scollegati possono aumentare costi e complessità senza generare un reale miglioramento.",
      "Analizziamo l’ecosistema IT dell’azienda e costruiamo una roadmap coerente con esigenze operative, sicurezza, crescita e sostenibilità economica.",
    ],
    outcomes: [
      "Riduzione della complessità tecnologica",
      "Scelte più consapevoli",
      "Maggiore controllo su costi e fornitori",
      "Migliore integrazione tra sistemi",
      "Riduzione dei rischi operativi",
    ],
    capabilities: [
      "IT assessment",
      "Technology roadmap",
      "Software selection",
      "Vendor management",
      "Digital transformation",
      "System integration",
      "IT governance",
      "Project management",
    ],
    process: [
      {
        title: "Assessment",
        description:
          "Analizziamo infrastruttura, software, processi e organizzazione.",
      },
      {
        title: "Priorità",
        description:
          "Identifichiamo rischi, inefficienze e opportunità di miglioramento.",
      },
      {
        title: "Roadmap",
        description:
          "Definiamo interventi, tempi, investimenti e responsabilità.",
      },
      {
        title: "Supporto",
        description:
          "Affianchiamo l’impresa nelle scelte e nell’implementazione.",
      },
      {
        title: "Governance",
        description:
          "Costruiamo criteri per controllare e far evolvere l’ecosistema IT.",
      },
    ],
    closingTitle: "La tecnologia diventa una scelta strategica.",
    closingText:
      "Aiutiamo l’impresa a investire in sistemi realmente utili, evitando complessità e soluzioni non necessarie.",
  },
  {
    slug: "privacy-gdpr",
    name: "Privacy & GDPR",
    eyebrow: "Governance dei dati",
    title: "La protezione dei dati entra nei processi dell’organizzazione.",
    introduction:
      "Costruiamo sistemi di conformità concreti, integrati e proporzionati alla realtà aziendale.",
    description: [
      "La conformità non può ridursi a documenti e informative. Deve riflettere il modo in cui dati, persone e tecnologie vengono realmente gestiti.",
      "Analizziamo trattamenti, processi e infrastrutture per costruire un modello di governance sostenibile e verificabile.",
    ],
    outcomes: [
      "Riduzione dei rischi normativi",
      "Maggiore consapevolezza organizzativa",
      "Gestione più ordinata dei dati",
      "Procedure realmente applicabili",
      "Migliore capacità di risposta agli incidenti",
    ],
    capabilities: [
      "Privacy assessment",
      "Registri dei trattamenti",
      "DPIA",
      "Policy e procedure",
      "Data governance",
      "Formazione",
      "Gestione dei fornitori",
      "Supporto DPO",
    ],
    process: [
      {
        title: "Mappatura",
        description:
          "Identifichiamo dati, trattamenti, ruoli, fornitori e sistemi coinvolti.",
      },
      {
        title: "Valutazione",
        description:
          "Analizziamo rischi, basi giuridiche e misure di sicurezza.",
      },
      {
        title: "Progettazione",
        description:
          "Definiamo documentazione, procedure e responsabilità.",
      },
      {
        title: "Implementazione",
        description:
          "Portiamo il modello di conformità dentro i processi reali.",
      },
      {
        title: "Monitoraggio",
        description:
          "Verifichiamo aggiornamenti, incidenti e necessità di miglioramento.",
      },
    ],
    closingTitle: "La conformità deve funzionare anche fuori dai documenti.",
    closingText:
      "Progettiamo modelli di privacy capaci di proteggere dati, organizzazione e continuità operativa.",
  },
  {
    slug: "network-infrastructure",
    name: "Network Infrastructure",
    eyebrow: "Reti e infrastrutture",
    title: "Infrastrutture affidabili per aziende sempre più connesse.",
    introduction:
      "Progettiamo reti, sistemi e ambienti IT capaci di garantire continuità, sicurezza e prestazioni.",
    description: [
      "Ogni software, servizio cloud e processo digitale dipende dalla qualità dell’infrastruttura sottostante.",
      "Analizziamo e realizziamo reti aziendali progettate per sostenere operatività, sicurezza, crescita e nuove tecnologie.",
    ],
    outcomes: [
      "Maggiore stabilità della rete",
      "Riduzione delle interruzioni",
      "Migliore sicurezza e segmentazione",
      "Prestazioni più uniformi",
      "Infrastruttura pronta a crescere",
    ],
    capabilities: [
      "Network assessment",
      "Progettazione LAN e Wi-Fi",
      "Segmentazione VLAN",
      "Firewall e sicurezza",
      "Cablaggio strutturato",
      "Monitoraggio",
      "Server e sistemi",
      "Business continuity",
    ],
    process: [
      {
        title: "Sopralluogo",
        description:
          "Analizziamo ambienti, dispositivi, cablaggio e necessità operative.",
      },
      {
        title: "Diagnosi",
        description:
          "Individuiamo colli di bottiglia, rischi e punti di instabilità.",
      },
      {
        title: "Progetto",
        description:
          "Definiamo architettura, apparati, segmentazione e sicurezza.",
      },
      {
        title: "Realizzazione",
        description:
          "Installiamo e configuriamo l’infrastruttura in modo controllato.",
      },
      {
        title: "Monitoraggio",
        description:
          "Verifichiamo prestazioni, disponibilità e possibilità di evoluzione.",
      },
    ],
    closingTitle: "Una buona infrastruttura non si nota. Funziona.",
    closingText:
      "Costruiamo fondamenta tecnologiche solide su cui l’impresa può lavorare, innovare e crescere.",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
