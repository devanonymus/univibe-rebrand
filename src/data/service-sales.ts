export type ServiceSalesContent = {
  slug: string;
  promise: string;
  heroText: string;
  heroHighlights: string[];
  problemTitle: string;
  problemCopy: string[];
  consequencesTitle: string;
  consequences: string[];
  solutionTitle: string;
  solutionCopy: string[];
  deliverablesTitle: string;
  deliverablesIntro: string;
  deliverables: {
    title: string;
    description: string;
  }[];
  whyTitle: string;
  whyCopy: string[];
  objections: {
    question: string;
    answer: string;
  }[];
  finalTitle: string;
  finalText: string;
};

export const serviceSalesContents: ServiceSalesContent[] = [
  {
    slug: "software-engineering",
    promise:
      "Un software costruito sui tuoi processi, non un altro strumento che obbliga l’azienda ad adattarsi.",
    heroText:
      "Progettiamo applicazioni, piattaforme e sistemi gestionali capaci di ridurre attività manuali, collegare le informazioni e dare finalmente controllo sui processi aziendali.",
    heroHighlights: [
      "Niente software preconfezionato imposto all’azienda",
      "Processi più veloci, ordinati e misurabili",
      "Una piattaforma progettata per evolvere nel tempo",
    ],
    problemTitle:
      "Il problema non è la mancanza di software. È avere strumenti che non lavorano insieme.",
    problemCopy: [
      "Molte aziende utilizzano fogli Excel, messaggi WhatsApp, email, documenti condivisi e software acquistati in momenti diversi. Ogni strumento risolve una piccola necessità, ma nessuno governa davvero l’intero processo.",
      "Il risultato è che i dati vengono duplicati, le informazioni si perdono, le persone devono ricordare passaggi manuali e il titolare non ha una visione affidabile di quello che sta accadendo.",
      "Quando l’azienda cresce, questa disorganizzazione diventa un costo. Aumentano gli errori, aumentano i tempi di gestione e diventa sempre più difficile controllare attività, clienti, ordini, documenti e responsabilità.",
    ],
    consequencesTitle:
      "Continuare con sistemi frammentati costa più di quanto sembri.",
    consequences: [
      "Ore di lavoro perse ogni settimana in attività ripetitive",
      "Errori causati da informazioni duplicate o non aggiornate",
      "Dipendenza da singole persone che conoscono il processo",
      "Difficoltà nel misurare tempi, costi e risultati",
      "Impossibilità di crescere senza aumentare la complessità",
    ],
    solutionTitle:
      "Noi non partiamo dal codice. Partiamo da come lavora realmente la tua azienda.",
    solutionCopy: [
      "Prima di sviluppare analizziamo le attività, le persone coinvolte, i punti di passaggio delle informazioni e le criticità che rallentano il lavoro.",
      "Solo dopo progettiamo il sistema: flussi, ruoli, autorizzazioni, dati, automazioni, integrazioni e interfacce. Il software viene costruito intorno al processo reale, invece di costringere il processo dentro uno strumento standard.",
      "L’obiettivo non è consegnare una piattaforma bella da mostrare. L’obiettivo è costruire uno strumento che venga utilizzato, che riduca il lavoro inutile e che dia all’azienda più controllo.",
    ],
    deliverablesTitle: "Cosa possiamo costruire per la tua organizzazione.",
    deliverablesIntro:
      "La soluzione dipende dal problema. Non proponiamo un pacchetto uguale per tutti.",
    deliverables: [
      {
        title: "Gestionali personalizzati",
        description:
          "Sistemi per organizzare clienti, ordini, attività, documenti, scadenze e processi interni.",
      },
      {
        title: "Web application",
        description:
          "Applicazioni accessibili da browser, progettate per operatori, clienti, partner o reti commerciali.",
      },
      {
        title: "Dashboard direzionali",
        description:
          "Cruscotti che trasformano dati sparsi in informazioni leggibili e utilizzabili nelle decisioni.",
      },
      {
        title: "Portali e piattaforme",
        description:
          "Aree riservate, piattaforme SaaS, sistemi multiutente e ambienti digitali complessi.",
      },
      {
        title: "Integrazioni",
        description:
          "Collegamenti tra CRM, e-commerce, gestionali, servizi esterni, database e strumenti già presenti.",
      },
      {
        title: "Automazioni",
        description:
          "Workflow capaci di eliminare passaggi manuali, notifiche dimenticate e duplicazioni di lavoro.",
      },
    ],
    whyTitle:
      "Perché non affidare un progetto simile a chi realizza semplicemente siti web.",
    whyCopy: [
      "Un software aziendale non è una pagina online con qualche funzione aggiuntiva. È un sistema che deve gestire dati, responsabilità, sicurezza, continuità operativa e crescita futura.",
      "Univibe unisce sviluppo software, consulenza IT, infrastrutture, automazione, analisi dei processi e strategia. Questo ci permette di osservare il progetto nel suo insieme, evitando soluzioni tecnicamente corrette ma inutili nella pratica.",
    ],
    objections: [
      {
        question: "Un software su misura non costa troppo?",
        answer:
          "Costa troppo un software che non viene utilizzato o che obbliga l’azienda a mantenere decine di procedure manuali. Il progetto viene dimensionato sul reale valore da generare e può essere sviluppato progressivamente.",
      },
      {
        question: "Dobbiamo cambiare tutti gli strumenti che utilizziamo?",
        answer:
          "Non necessariamente. Quando è conveniente integriamo sistemi e strumenti già presenti, evitando migrazioni inutili.",
      },
      {
        question: "Il personale riuscirà a utilizzarlo?",
        answer:
          "L’esperienza viene progettata partendo dagli utenti reali. Un sistema efficace deve ridurre la complessità, non aggiungerne altra.",
      },
      {
        question: "E dopo la consegna?",
        answer:
          "Il software può essere monitorato, mantenuto ed evoluto. Non consegniamo un progetto destinato a diventare obsoleto dopo pochi mesi.",
      },
    ],
    finalTitle:
      "Prima di parlare di funzionalità, dobbiamo capire dove la tua azienda sta perdendo tempo e controllo.",
    finalText:
      "Una prima analisi permette di individuare i processi che possono essere semplificati, automatizzati o gestiti attraverso un sistema digitale su misura.",
  },
  {
    slug: "artificial-intelligence",
    promise:
      "Portiamo l’intelligenza artificiale dentro il lavoro quotidiano, senza trasformarla nell’ennesimo giocattolo tecnologico.",
    heroText:
      "Progettiamo agenti AI e automazioni capaci di leggere informazioni, assistere le persone, gestire attività ripetitive e rendere i processi aziendali più veloci.",
    heroHighlights: [
      "AI collegata ai processi reali",
      "Automazioni controllabili e misurabili",
      "Meno attività manuali, più capacità operativa",
    ],
    problemTitle:
      "Il mercato parla continuamente di AI. Ma installare un chatbot non significa trasformare un’azienda.",
    problemCopy: [
      "Molte imprese stanno acquistando strumenti di intelligenza artificiale senza avere una strategia, dati organizzati o processi chiari.",
      "Il risultato è una collezione di abbonamenti che produce qualche testo, qualche immagine e poco valore operativo.",
      "L’intelligenza artificiale diventa utile quando viene collegata alle informazioni dell’azienda, alle regole di lavoro e alle responsabilità delle persone.",
    ],
    consequencesTitle:
      "Utilizzare l’AI senza progettazione genera costi e nuovi rischi.",
    consequences: [
      "Strumenti acquistati ma poco utilizzati",
      "Informazioni aziendali gestite senza controllo",
      "Output inesatti che nessuno verifica",
      "Automazioni scollegate dai processi reali",
      "Aspettative elevate e risultati irrilevanti",
    ],
    solutionTitle:
      "L’AI deve risolvere un problema preciso, non dimostrare che l’azienda è moderna.",
    solutionCopy: [
      "Individuiamo le attività che assorbono tempo, le informazioni che devono essere elaborate e le decisioni che possono essere supportate.",
      "Progettiamo quindi agenti, workflow e sistemi intelligenti con regole, fonti, autorizzazioni e livelli di controllo definiti.",
      "L’obiettivo è ottenere un sistema affidabile che lavori insieme alle persone e che produca un beneficio verificabile.",
    ],
    deliverablesTitle: "Dove l’intelligenza artificiale può diventare operativa.",
    deliverablesIntro:
      "Non tutte le attività devono essere automatizzate. Selezioniamo quelle in cui il beneficio è concreto.",
    deliverables: [
      {
        title: "Agenti AI aziendali",
        description:
          "Sistemi capaci di svolgere attività, utilizzare strumenti e seguire procedure definite.",
      },
      {
        title: "Assistenti interni",
        description:
          "Accesso intelligente a documenti, procedure, conoscenza aziendale e informazioni operative.",
      },
      {
        title: "Automazione documentale",
        description:
          "Lettura, classificazione, estrazione e gestione di dati contenuti in documenti ed email.",
      },
      {
        title: "Customer care intelligente",
        description:
          "Sistemi capaci di assistere clienti e operatori mantenendo controllo e possibilità di intervento umano.",
      },
      {
        title: "Produzione e controllo dei contenuti",
        description:
          "Workflow per creare, revisionare, adattare e distribuire contenuti in modo coerente.",
      },
      {
        title: "Analisi e supporto decisionale",
        description:
          "Sistemi che elaborano dati e segnalano anomalie, opportunità e informazioni rilevanti.",
      },
    ],
    whyTitle:
      "Perché l’AI richiede competenze che vanno oltre la scelta del modello.",
    whyCopy: [
      "Un progetto AI coinvolge dati, privacy, software, sicurezza, processi, responsabilità e integrazioni.",
      "Univibe affronta l’intero ecosistema, evitando di costruire automazioni spettacolari in demo ma inutilizzabili nella realtà aziendale.",
    ],
    objections: [
      {
        question: "L’intelligenza artificiale può sostituire il personale?",
        answer:
          "Il primo obiettivo è eliminare attività ripetitive e aumentare la capacità delle persone. Le responsabilità critiche devono restare governate.",
      },
      {
        question: "I nostri dati sono sufficientemente organizzati?",
        answer:
          "Lo verifichiamo durante l’analisi. Quando necessario, il progetto parte dalla sistemazione delle fonti informative.",
      },
      {
        question: "Possiamo utilizzare gli strumenti che abbiamo già?",
        answer:
          "Spesso sì. Gli agenti e le automazioni possono essere integrati con software, CRM, database e piattaforme esistenti.",
      },
      {
        question: "Come evitiamo risposte errate?",
        answer:
          "Attraverso fonti controllate, regole, validazioni, monitoraggio e intervento umano nei passaggi più delicati.",
      },
    ],
    finalTitle:
      "Non chiederti dove inserire l’AI. Chiediti quale processo sta limitando la crescita dell’azienda.",
    finalText:
      "Partiamo da un’attività concreta e valutiamo se l’intelligenza artificiale può ridurre tempi, errori o costi senza compromettere il controllo.",
  },
  {
    slug: "growth-strategy",
    promise:
      "Trasformiamo marketing, vendite e tecnologia in un sistema commerciale misurabile.",
    heroText:
      "Analizziamo posizionamento, offerta, acquisizione, processi e dati per costruire una strategia capace di generare opportunità e crescita controllabile.",
    heroHighlights: [
      "Strategia collegata alle vendite",
      "Dati utilizzabili nelle decisioni",
      "Meno iniziative casuali, più direzione",
    ],
    problemTitle:
      "Molte aziende non hanno un problema di marketing. Hanno un problema di sistema.",
    problemCopy: [
      "Pubblicano contenuti, investono in pubblicità, rifanno il sito e provano nuovi strumenti, ma ogni attività nasce separata dalle altre.",
      "Non esiste un percorso chiaro che accompagni il potenziale cliente dalla scoperta dell’azienda alla decisione di acquistare.",
      "Senza un sistema commerciale, il marketing produce movimento ma non necessariamente risultati.",
    ],
    consequencesTitle:
      "Quando manca una direzione, il budget viene consumato in tentativi.",
    consequences: [
      "Campagne che generano contatti poco qualificati",
      "Sito web scollegato dal processo commerciale",
      "Offerte difficili da comprendere o confrontare",
      "Nessun controllo sul costo di acquisizione",
      "Decisioni prese sulla base delle impressioni",
    ],
    solutionTitle:
      "La crescita nasce dall’allineamento tra offerta, comunicazione, processo commerciale e tecnologia.",
    solutionCopy: [
      "Analizziamo il mercato, il cliente ideale, il posizionamento, il percorso di acquisto e il modo in cui l’azienda gestisce le opportunità.",
      "Costruiamo quindi un sistema fatto di messaggi, contenuti, pagine, automazioni, strumenti commerciali e indicatori.",
      "Ogni componente deve avere una funzione precisa: attirare, qualificare, convincere, convertire o fidelizzare.",
    ],
    deliverablesTitle: "Gli elementi di un sistema di crescita.",
    deliverablesIntro:
      "Non serve attivare tutto contemporaneamente. Serve sapere cosa viene prima e perché.",
    deliverables: [
      {
        title: "Posizionamento",
        description:
          "Una proposta chiara che renda l’azienda riconoscibile e difficile da confrontare esclusivamente sul prezzo.",
      },
      {
        title: "Offerta commerciale",
        description:
          "Struttura, presentazione e argomentazioni capaci di aumentare il valore percepito.",
      },
      {
        title: "Funnel",
        description:
          "Percorsi progettati per trasformare attenzione in contatti e contatti in opportunità.",
      },
      {
        title: "Sistema dei contenuti",
        description:
          "Messaggi e contenuti coerenti con obiettivi, pubblico e fase del percorso di acquisto.",
      },
      {
        title: "Automazioni commerciali",
        description:
          "Follow-up, qualificazione, nurturing e gestione dei contatti senza dipendere dalla memoria.",
      },
      {
        title: "KPI e controllo",
        description:
          "Indicatori per capire quali azioni producono valore e quali stanno consumando risorse.",
      },
    ],
    whyTitle:
      "Perché marketing e tecnologia non possono essere progettati da reparti che non comunicano.",
    whyCopy: [
      "Una strategia può essere corretta ma fallire perché il sito, il CRM, il processo commerciale o i contenuti non sono coerenti.",
      "Univibe unisce strategia, sviluppo, dati e automazione per trasformare il piano in un sistema realmente utilizzabile.",
    ],
    objections: [
      {
        question: "Abbiamo già un’agenzia che gestisce i social.",
        answer:
          "La gestione dei social è soltanto una componente. Il punto è capire se sta contribuendo a un processo commerciale misurabile.",
      },
      {
        question: "Abbiamo già un sito web.",
        answer:
          "Avere un sito non significa avere uno strumento capace di acquisire, qualificare e convertire opportunità.",
      },
      {
        question: "Quanto tempo serve per vedere risultati?",
        answer:
          "Dipende dal punto di partenza e dagli obiettivi. Alcuni miglioramenti sono immediati, mentre posizionamento e acquisizione richiedono continuità.",
      },
      {
        question: "Dobbiamo aumentare il budget pubblicitario?",
        answer:
          "Non necessariamente. Prima si interviene sulle dispersioni, sull’offerta e sulla conversione. Aumentare traffico verso un sistema inefficiente amplifica soltanto lo spreco.",
      },
    ],
    finalTitle:
      "Prima di spendere di più per ottenere attenzione, dobbiamo capire perché l’attenzione attuale non diventa vendita.",
    finalText:
      "Analizziamo il percorso commerciale e individuiamo i punti in cui l’azienda sta perdendo opportunità, margine e controllo.",
  },
  {
    slug: "seo-visibility",
    promise:
      "Costruiamo una presenza digitale che intercetta clienti mentre stanno già cercando una soluzione.",
    heroText:
      "Progettiamo architetture, contenuti e strategie SEO capaci di aumentare visibilità, autorevolezza e opportunità commerciali nel tempo.",
    heroHighlights: [
      "Visibilità collegata alle intenzioni di acquisto",
      "Contenuti progettati per posizionare e convertire",
      "Meno dipendenza dalla pubblicità continua",
    ],
    problemTitle:
      "Il sito può essere online, bello e perfettamente inutile.",
    problemCopy: [
      "Se Google non comprende cosa offre l’azienda, dove opera e perché dovrebbe considerarla autorevole, il sito rimane invisibile.",
      "Molte imprese possiedono poche pagine generiche, testi intercambiabili e nessuna strategia legata alle ricerche reali dei clienti.",
      "Il risultato è una presenza online che esiste, ma che non viene trovata nei momenti in cui il mercato manifesta un bisogno.",
    ],
    consequencesTitle:
      "L’invisibilità digitale lascia spazio ai concorrenti.",
    consequences: [
      "Clienti che trovano aziende meno competenti ma più visibili",
      "Dipendenza costante da campagne a pagamento",
      "Sito che riceve visite ma non richieste",
      "Nessuna crescita dell’autorevolezza",
      "Contenuti pubblicati senza una direzione",
    ],
    solutionTitle:
      "La SEO non consiste nell’inserire parole chiave. Consiste nel costruire rilevanza.",
    solutionCopy: [
      "Studiamo il modo in cui le persone cercano problemi, servizi e soluzioni nel mercato di riferimento.",
      "Progettiamo struttura del sito, pagine, contenuti, collegamenti, performance e segnali di autorevolezza.",
      "Ogni contenuto deve rispondere a una domanda reale e accompagnare l’utente verso un passo successivo.",
    ],
    deliverablesTitle: "Il sistema necessario per diventare trovabili.",
    deliverablesIntro:
      "La visibilità nasce dall’unione tra struttura tecnica, contenuto e autorevolezza.",
    deliverables: [
      {
        title: "Audit SEO",
        description:
          "Analisi tecnica, contenutistica, competitiva e strategica della presenza online.",
      },
      {
        title: "Architettura del sito",
        description:
          "Organizzazione di pagine e contenuti in funzione delle ricerche e del percorso del cliente.",
      },
      {
        title: "SEO tecnica",
        description:
          "Performance, indicizzazione, struttura, dati e qualità tecnica necessaria ai motori di ricerca.",
      },
      {
        title: "Content strategy",
        description:
          "Piano editoriale costruito sulle domande, sui problemi e sulle intenzioni del mercato.",
      },
      {
        title: "Local SEO",
        description:
          "Ottimizzazione della presenza locale per intercettare persone vicine all’attività.",
      },
      {
        title: "Misurazione",
        description:
          "Monitoraggio delle ricerche, del traffico qualificato, delle conversioni e delle opportunità.",
      },
    ],
    whyTitle:
      "Perché posizionarsi non basta se il traffico non diventa opportunità.",
    whyCopy: [
      "Univibe collega SEO, UX, copywriting, sviluppo e strategia commerciale.",
      "Non inseguiamo visite inutili. Costruiamo pagine capaci di attirare persone rilevanti e guidarle verso una decisione.",
    ],
    objections: [
      {
        question: "La SEO garantisce la prima posizione?",
        answer:
          "Nessun professionista serio può garantire una posizione specifica. Possiamo progettare, misurare e migliorare tutti i fattori controllabili.",
      },
      {
        question: "Quanto tempo serve?",
        answer:
          "La SEO richiede continuità. I tempi dipendono da concorrenza, autorevolezza iniziale, qualità del sito e ampiezza del progetto.",
      },
      {
        question: "Possiamo lavorare sul sito attuale?",
        answer:
          "Sì, quando la struttura lo consente. In altri casi è più conveniente intervenire sull’architettura o riprogettare alcune sezioni.",
      },
      {
        question: "I contenuti devono essere molti?",
        answer:
          "Devono essere utili, strategici e coerenti. Pubblicare grandi quantità di testi irrilevanti non produce autorevolezza.",
      },
    ],
    finalTitle:
      "La domanda non è quante visite riceve il sito. La domanda è quante opportunità sta generando.",
    finalText:
      "Analizziamo la presenza online e individuiamo le ricerche, le pagine e i contenuti che possono produrre maggiore valore commerciale.",
  },
  {
    slug: "it-consulting",
    promise:
      "Ti aiutiamo a scegliere e governare la tecnologia prima che costi, fornitori e sistemi diventino incontrollabili.",
    heroText:
      "Affianchiamo le imprese nell’analisi, nella progettazione e nella gestione delle scelte IT, mantenendo tecnologia e obiettivi aziendali nella stessa direzione.",
    heroHighlights: [
      "Meno strumenti inutili e costi nascosti",
      "Scelte tecnologiche più consapevoli",
      "Un interlocutore capace di vedere l’intero sistema",
    ],
    problemTitle:
      "Quando nessuno governa l’IT, ogni fornitore vende la propria soluzione.",
    problemCopy: [
      "Software, hardware, cloud, reti, licenze e assistenza vengono spesso acquistati in momenti diversi e da soggetti differenti.",
      "Nessuno possiede una visione completa e l’azienda diventa dipendente da fornitori che conoscono soltanto una parte del sistema.",
      "La complessità aumenta, i costi diventano difficili da controllare e ogni cambiamento rischia di produrre nuovi problemi.",
    ],
    consequencesTitle:
      "L’assenza di governance trasforma la tecnologia in una fonte di rischio.",
    consequences: [
      "Costi ricorrenti non realmente necessari",
      "Sistemi duplicati o incompatibili",
      "Dipendenza eccessiva dai fornitori",
      "Mancanza di documentazione e responsabilità",
      "Decisioni prese senza valutare impatti futuri",
    ],
    solutionTitle:
      "La consulenza IT serve a proteggere l’interesse dell’azienda, non quello del fornitore.",
    solutionCopy: [
      "Analizziamo infrastrutture, software, contratti, processi e necessità future.",
      "Definiamo priorità e una roadmap realistica, distinguendo ciò che è urgente da ciò che è soltanto desiderabile.",
      "Possiamo inoltre affiancare l’impresa nella selezione dei fornitori, nella valutazione delle proposte e nel controllo dell’implementazione.",
    ],
    deliverablesTitle: "Come possiamo affiancare la direzione.",
    deliverablesIntro:
      "Il supporto può essere puntuale oppure continuativo, in base alla complessità dell’organizzazione.",
    deliverables: [
      {
        title: "Assessment tecnologico",
        description:
          "Mappatura di sistemi, strumenti, rischi, costi e criticità operative.",
      },
      {
        title: "Roadmap IT",
        description:
          "Piano degli interventi con priorità, tempi, investimenti e obiettivi.",
      },
      {
        title: "Selezione software",
        description:
          "Analisi comparativa delle soluzioni sulla base dei requisiti reali.",
      },
      {
        title: "Gestione fornitori",
        description:
          "Valutazione delle offerte, coordinamento e controllo delle attività.",
      },
      {
        title: "Trasformazione digitale",
        description:
          "Progettazione del percorso di evoluzione di processi, strumenti e competenze.",
      },
      {
        title: "Governance",
        description:
          "Regole, responsabilità e criteri per mantenere il sistema sotto controllo.",
      },
    ],
    whyTitle:
      "Perché un consulente deve comprendere software, reti, sicurezza e business.",
    whyCopy: [
      "Le decisioni IT producono conseguenze su persone, processi, dati, costi e continuità operativa.",
      "Univibe possiede competenze trasversali che permettono di valutare il sistema nel suo insieme, senza limitarsi a proporre un singolo prodotto.",
    ],
    objections: [
      {
        question: "Abbiamo già un tecnico informatico.",
        answer:
          "Il supporto tecnico risolve problemi operativi. La consulenza definisce priorità, architettura, investimenti e responsabilità.",
      },
      {
        question: "Non siamo abbastanza grandi per una consulenza IT.",
        answer:
          "Le piccole e medie imprese sono spesso quelle più esposte perché dipendono da poche persone e possiedono meno procedure.",
      },
      {
        question: "Dovremo sostituire tutto?",
        answer:
          "No. L’obiettivo è valorizzare ciò che funziona ed eliminare soltanto ciò che produce rischi, inefficienza o costi ingiustificati.",
      },
      {
        question: "Possiamo coinvolgere i fornitori attuali?",
        answer:
          "Certamente. Possiamo coordinare e controllare il lavoro dei soggetti già presenti.",
      },
    ],
    finalTitle:
      "Prima di acquistare un nuovo strumento, verifica quale problema deve risolvere e quale complessità introdurrà.",
    finalText:
      "Una valutazione indipendente permette di evitare investimenti sbagliati e costruire una direzione tecnologica sostenibile.",
  },
  {
    slug: "privacy-gdpr",
    promise:
      "Trasformiamo la privacy da raccolta di documenti a sistema concreto di protezione dell’impresa.",
    heroText:
      "Analizziamo dati, processi, fornitori e infrastrutture per costruire un modello di conformità realmente applicabile e sostenibile.",
    heroHighlights: [
      "Procedure collegate al lavoro reale",
      "Riduzione dei rischi normativi e organizzativi",
      "Governance dei dati chiara e verificabile",
    ],
    problemTitle:
      "Firmare informative e conservare modelli standard non rende un’azienda conforme.",
    problemCopy: [
      "La conformità deve rappresentare ciò che accade realmente: quali dati vengono raccolti, chi li utilizza, dove vengono conservati e con quali fornitori vengono condivisi.",
      "Quando documentazione e attività quotidiana non coincidono, l’organizzazione rimane esposta anche se possiede decine di moduli.",
      "Il rischio non riguarda soltanto le sanzioni. Un incidente può bloccare l’operatività, danneggiare la reputazione e compromettere rapporti con clienti e partner.",
    ],
    consequencesTitle:
      "Una conformità soltanto formale non protegge l’organizzazione.",
    consequences: [
      "Documenti non coerenti con i processi reali",
      "Responsabilità interne non definite",
      "Fornitori che trattano dati senza controllo",
      "Difficoltà nel gestire richieste e incidenti",
      "Misure di sicurezza non adeguate ai rischi",
    ],
    solutionTitle:
      "La privacy deve entrare nella progettazione dei processi e dei sistemi.",
    solutionCopy: [
      "Mappiamo trattamenti, ruoli, strumenti, fornitori e flussi informativi.",
      "Valutiamo rischi, basi giuridiche, conservazione e misure di sicurezza.",
      "Costruiamo quindi documentazione, procedure e responsabilità che possano essere realmente applicate e aggiornate.",
    ],
    deliverablesTitle: "Gli elementi di un sistema di governance dei dati.",
    deliverablesIntro:
      "Il progetto viene dimensionato sulla struttura, sui rischi e sui trattamenti effettivamente svolti.",
    deliverables: [
      {
        title: "Assessment privacy",
        description:
          "Analisi dello stato attuale, delle lacune e delle priorità di intervento.",
      },
      {
        title: "Registro dei trattamenti",
        description:
          "Mappatura strutturata delle attività che coinvolgono dati personali.",
      },
      {
        title: "Policy e procedure",
        description:
          "Regole operative per personale, strumenti, accessi, conservazione e incidenti.",
      },
      {
        title: "DPIA e valutazioni",
        description:
          "Analisi approfondita dei trattamenti che presentano rischi elevati.",
      },
      {
        title: "Gestione dei fornitori",
        description:
          "Valutazione dei responsabili esterni e degli accordi necessari.",
      },
      {
        title: "Formazione",
        description:
          "Percorsi comprensibili per trasformare le persone in parte attiva del sistema.",
      },
    ],
    whyTitle:
      "Perché oggi privacy e tecnologia non possono essere trattate separatamente.",
    whyCopy: [
      "Gran parte dei trattamenti avviene attraverso software, reti, cloud, email e piattaforme esterne.",
      "Univibe integra competenza normativa e tecnica, collegando la documentazione al funzionamento reale dei sistemi.",
    ],
    objections: [
      {
        question: "Abbiamo già fatto la privacy alcuni anni fa.",
        answer:
          "Processi, software, fornitori e normative evolvono. La conformità deve essere verificata e aggiornata periodicamente.",
      },
      {
        question: "Siamo una piccola azienda.",
        answer:
          "Le dimensioni incidono sulla complessità, non eliminano gli obblighi né i rischi legati alla gestione dei dati.",
      },
      {
        question: "Bastano i modelli acquistati online?",
        answer:
          "I modelli possono essere un punto di partenza, ma devono descrivere attività e responsabilità reali.",
      },
      {
        question: "La privacy riguarda soltanto i dati dei clienti?",
        answer:
          "No. Coinvolge dipendenti, candidati, fornitori, utenti del sito, videosorveglianza, marketing e molti altri trattamenti.",
      },
    ],
    finalTitle:
      "La domanda non è quanti documenti possiedi. È se sapresti cosa fare domani in caso di incidente.",
    finalText:
      "Partiamo da una valutazione del sistema attuale e individuiamo le priorità necessarie per ridurre l’esposizione dell’organizzazione.",
  },
  {
    slug: "network-infrastructure",
    promise:
      "Progettiamo reti aziendali che funzionano anche quando l’azienda cresce, cambia sede o aumenta il numero di dispositivi.",
    heroText:
      "Analizziamo, progettiamo e realizziamo infrastrutture di rete capaci di garantire stabilità, sicurezza, prestazioni e continuità operativa.",
    heroHighlights: [
      "Connessione stabile in tutti gli ambienti",
      "Rete segmentata e più sicura",
      "Infrastruttura documentata e monitorabile",
    ],
    problemTitle:
      "La rete viene ignorata fino al momento in cui smette di funzionare.",
    problemCopy: [
      "Connessioni lente, Wi-Fi instabile, cavi non identificati, apparati domestici e configurazioni mai documentate sono più comuni di quanto sembri.",
      "Finché l’azienda riesce a lavorare, il problema viene rimandato. Ma ogni nuovo dispositivo, software cloud, telecamera o postazione aumenta il carico e la complessità.",
      "Quando la rete diventa instabile, non si blocca soltanto Internet. Si fermano telefonia, gestionali, backup, stampanti, videosorveglianza e accesso ai dati.",
    ],
    consequencesTitle:
      "Un’infrastruttura debole compromette ogni servizio digitale.",
    consequences: [
      "Interruzioni e rallentamenti difficili da diagnosticare",
      "Copertura Wi-Fi non uniforme",
      "Dispositivi aziendali e ospiti sulla stessa rete",
      "Nessuna documentazione del cablaggio",
      "Dipendenza da interventi urgenti e improvvisati",
    ],
    solutionTitle:
      "Una rete professionale viene progettata, non assemblata aggiungendo apparati.",
    solutionCopy: [
      "Effettuiamo un sopralluogo tecnico, analizziamo ambienti, cablaggio, dispositivi, criticità e necessità future.",
      "Definiamo architettura, apparati, segmentazione, copertura, sicurezza, continuità e monitoraggio.",
      "L’infrastruttura viene realizzata e documentata affinché possa essere gestita, verificata ed evoluta nel tempo.",
    ],
    deliverablesTitle: "Gli elementi di un’infrastruttura affidabile.",
    deliverablesIntro:
      "Ogni progetto nasce dalle caratteristiche fisiche e operative della sede.",
    deliverables: [
      {
        title: "Network assessment",
        description:
          "Analisi dello stato della rete, degli apparati, delle prestazioni e dei rischi.",
      },
      {
        title: "LAN e cablaggio",
        description:
          "Progettazione della rete cablata, degli armadi, delle patch e dei collegamenti.",
      },
      {
        title: "Wi-Fi professionale",
        description:
          "Copertura progettata sulla base degli ambienti, degli ostacoli e del numero di utenti.",
      },
      {
        title: "VLAN e segmentazione",
        description:
          "Separazione di reparti, ospiti, dispositivi IoT, videosorveglianza e servizi critici.",
      },
      {
        title: "Firewall e sicurezza",
        description:
          "Protezione degli accessi, controllo del traffico e riduzione dell’esposizione.",
      },
      {
        title: "Monitoraggio",
        description:
          "Controllo di disponibilità, prestazioni e anomalie prima che diventino emergenze.",
      },
    ],
    whyTitle:
      "Perché l’infrastruttura deve essere progettata insieme ai servizi che dovrà sostenere.",
    whyCopy: [
      "La rete non è un insieme isolato di switch e access point. Deve supportare software, cloud, telefonia, sicurezza, videosorveglianza e operatività quotidiana.",
      "Univibe unisce competenze di networking, sistemi e sviluppo, valutando l’intero ambiente digitale.",
    ],
    objections: [
      {
        question: "La connessione Internet è veloce. Perché abbiamo problemi?",
        answer:
          "La velocità della linea non garantisce qualità della rete interna, copertura Wi-Fi, configurazione o capacità degli apparati.",
      },
      {
        question: "Possiamo mantenere gli apparati attuali?",
        answer:
          "Sì, se risultano adeguati. L’assessment serve anche a evitare sostituzioni non necessarie.",
      },
      {
        question: "È necessario fermare l’attività?",
        answer:
          "Gli interventi vengono pianificati per ridurre al minimo l’impatto operativo e possono essere eseguiti progressivamente.",
      },
      {
        question: "Dopo l’installazione chi gestisce la rete?",
        answer:
          "L’infrastruttura viene documentata e può essere affiancata da monitoraggio, manutenzione e supporto.",
      },
    ],
    finalTitle:
      "La rete migliore è quella che nessuno nota, perché permette a tutto il resto di funzionare.",
    finalText:
      "Un sopralluogo tecnico consente di capire se i problemi dipendono dalla linea, dal cablaggio, dalla copertura o dalla configurazione degli apparati.",
  },
];

export function getServiceSalesContent(slug: string) {
  return serviceSalesContents.find((service) => service.slug === slug);
}
