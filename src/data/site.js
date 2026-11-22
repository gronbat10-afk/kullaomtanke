export const site = {
  name: 'Kulla Omtanke',
  slogan: 'En extra närstående',
  phone: '070-965 57 27',
  phoneIntl: '+46709655727',
  email: 'info@kullaomtanke.se',
  hourly: 290,
  hourlyBefore: 580,
};

export const nav = [
  { label: 'För vem', href: '/#for-vem' },
  { label: 'Tjänster', href: '/#tjanster' },
  { label: 'För anhöriga', href: '/for-anhoriga/' },
  { label: 'Priser', href: '/priser-och-rut/' },
  { label: 'Kontakt', href: '/kontakt/' },
];

export const places = [
  { name: 'Höganäs', slug: 'hoganas', page: true },
  { name: 'Ängelholm', slug: 'angelholm', page: true },
  { name: 'Viken', slug: 'viken', page: true },
  { name: 'Jonstorp', slug: 'jonstorp', page: true },
  { name: 'Nyhamnsläge', slug: 'nyhamnslage', page: true },
  { name: 'Mölle', slug: 'molle', page: true },
  { name: 'Arild', slug: 'arild', page: true },
  { name: 'Munka-Ljungby', slug: 'munka-ljungby', page: true },
  { name: 'Vejbystrand', slug: 'vejbystrand', page: true },
];

export const services = [
  {
    slug: 'sallskap-for-aldre',
    short: 'Sällskap för äldre',
    title: 'Sällskap för äldre i Höganäs och Ängelholm | Kulla Omtanke',
    description: 'Sällskap för äldre i hemmet: fika, samtal, kortspel och promenad med samma person varje vecka. Höganäs kommun och Ängelholm. 290 kr/tim efter RUT.',
    h1: 'Sällskap för äldre, med samma person varje vecka',
    lead: 'Någon som kommer på bestämd tid, sätter på kaffet och har tid att lyssna. Vi erbjuder sällskap för äldre i Höganäs kommun och Ängelholm, som ett komplement till hemtjänst och äldreboende.',
    rut: 'Rent sällskap ger inte RUT-avdrag. Därför lägger vi nästan alltid in en promenad, ett ärende eller lite tvätt i besöket, så att den tiden ger avdrag.',
    sections: [
      { h: 'Varför sällskap gör skillnad', p: [
        'Många äldre klarar vardagen men saknar någon att prata med mellan hemtjänstens korta besök. Veckorna blir långa när barnen bor på annan ort och vännerna blivit färre.',
        'Ett återkommande besök ger något att se fram emot. Det blir fler samtal, mer rörelse och ofta bättre aptit och humör. Och familjen vet att någon tittar till.',
      ] },
      { h: 'Så kan ett besök se ut', list: [
        'Fika och samtal vid köksbordet',
        'Kortspel, korsord eller att titta i gamla fotoalbum',
        'Läsa tidningen eller en bok högt',
        'En promenad till hamnen, parken eller affären',
        'Hjälp att ringa eller videosamtala med barnbarnen',
      ] },
      { h: 'Samma person varje gång', p: [
        'Vi matchar varje kund med en fast person utifrån intressen och personkemi. Det skapar trygghet, och efter några veckor vet vi hur man vill ha det.',
      ] },
    ],
    faq: [
      { q: 'Hur ofta kan vi boka sällskap?', a: 'De flesta väljer två timmar i veckan eller varannan vecka. Det går att lägga till fler besök när det behövs.' },
      { q: 'Kan vi göra något utanför hemmet?', a: 'Ja. Vi följer gärna med på promenad, till affären eller till ett café. Vår bil har plats för rullstol och rollator.' },
      { q: 'Får man RUT-avdrag för sällskap?', a: 'Inte för rent sällskap. Promenader, ärenden och tvätt i hemmet ger däremot RUT, och vi planerar besöken så att de innehåller sådant.' },
    ],
  },
  {
    slug: 'promenad-och-ledsagning',
    short: 'Promenad och ledsagning',
    title: 'Promenadsällskap och ledsagning för äldre | Kulla Omtanke',
    description: 'Promenadsällskap och ledsagning för äldre i Höganäs, Viken och Ängelholm. Trygg promenad i egen takt, även med rullstol eller rollator. RUT-avdrag.',
    h1: 'Promenadsällskap och ledsagning i egen takt',
    lead: 'En promenad längs havet eller runt kvarteret blir både tryggare och roligare i sällskap. Vi följer med, i den takt som passar, med eller utan rollator och rullstol.',
    rut: 'Promenader och ledsagning ger RUT-avdrag, så du betalar 290 kr i timmen inklusive moms efter avdraget.',
    sections: [
      { h: 'Rörelse som blir av', p: [
        'Det är lätt att stanna inne när benen är osäkra eller vädret är grått. Med någon vid sin sida blir promenaden av, och den ger både motion, frisk luft och nya samtalsämnen.',
      ] },
      { h: 'Vi följer med till', list: [
        'Strandpromenaden, hamnen eller en park i närheten',
        'Vårdcentralen, tandläkaren eller frisören',
        'Banken, apoteket eller biblioteket',
        'Kyrkan, en träff eller en vän',
      ] },
      { h: 'Med rullstol eller rollator', p: [
        'Vår bil har bra insteg och plats för både rullstol och rollator. Det gör det möjligt att komma ut till platser lite längre bort, som Mölle hamn eller Kullabergs naturum.',
      ] },
    ],
    faq: [
      { q: 'Vad händer om vädret är dåligt?', a: 'Då gör vi något annat inomhus, till exempel fika, ett ärende eller lite hjälp i hemmet. Ni bestämmer.' },
      { q: 'Kan ni följa med till läkarbesök?', a: 'Ja. Vi följer med som sällskap och stöd, hjälper till att komma ihåg frågorna och berättar för de anhöriga hur det gick om ni vill.' },
      { q: 'Kostar bilresan extra?', a: 'Nej, vi tar betalt för tiden vi är hos er.' },
    ],
  },
  {
    slug: 'arenden-och-handling',
    short: 'Ärenden och handling',
    title: 'Hjälp att handla och göra ärenden för äldre | Kulla Omtanke',
    description: 'Vi följer med och handlar, hämtar på apoteket och gör ärenden på bank och post för äldre i Höganäs kommun och Ängelholm. RUT-avdrag, samma person varje gång.',
    h1: 'Hjälp att handla och göra ärenden',
    lead: 'Matbutiken, apoteket, paketet som ska hämtas. Vi följer med eller gör ärendet tillsammans med dig, så att vardagen fungerar utan att någon behöver stressa.',
    rut: 'Att följa med på ärenden ger RUT-avdrag. Själva varorna betalar du som vanligt.',
    sections: [
      { h: 'Ärenden vi ofta hjälper till med', list: [
        'Handla mat tillsammans, eller packa upp varorna hemma',
        'Hämta medicin på apoteket',
        'Hämta och lämna paket',
        'Följa med till banken eller posten',
        'Hjälpa till att betala räkningar och sortera post',
      ] },
      { h: 'Tillsammans, inte åt dig', p: [
        'Vi gör helst ärendena tillsammans med dig. Det håller igång både kropp och vanor, och du bestämmer själv vad som ska köpas. Orkar du inte följa med en dag så hjälper vi till hemma i stället.',
      ] },
      { h: 'Trygga regler kring pengar', p: [
        'Vi hjälper gärna till med banken och räkningarna, men vi tar aldrig emot koder och loggar aldrig in med ditt BankID. Det skyddar både dig och oss.',
      ] },
    ],
    faq: [
      { q: 'Kan ni handla utan att jag är med?', a: 'Vi föredrar att handla tillsammans, men om du inte orkar en dag hittar vi en lösning. Kontakta oss så pratar vi om hur det kan fungera för er.' },
      { q: 'Hur betalas varorna?', a: 'Du betalar dina varor själv, med kort eller som du brukar. Vi hanterar aldrig dina koder.' },
      { q: 'Ger hjälp med ärenden RUT-avdrag?', a: 'Ja, att följa med på ärenden räknas som omsorgstjänst och ger 50 procent RUT-avdrag på arbetskostnaden.' },
    ],
  },
  {
    slug: 'teknikhjalp-for-seniorer',
    short: 'Hjälp med mobil och tv',
    title: 'Enklare hjälp med mobil och tv för äldre | Kulla Omtanke',
    description: 'Enklare hjälp med mobilen, tv:n och videosamtal med familjen, som en del av besöket. Höganäs kommun och Ängelholm. RUT-avdrag, 290 kr/tim efter avdrag.',
    h1: 'Enklare hjälp med mobil, tv och videosamtal',
    lead: 'Ibland krånglar mobilen eller tv:n, eller så vill man ringa ett videosamtal till barnbarnen. Vi hjälper gärna till med det enkla, i lugn takt, som en del av besöket.',
    rut: 'Hjälp med teknik som utförs i hemmet ger RUT-avdrag, 290 kr i timmen inklusive moms efter avdraget.',
    sections: [
      { h: 'Det här kan vi hjälpa till med', list: [
        'Ringa, svara och skicka sms i mobilen',
        'Videosamtal med familjen',
        'Hitta tv-kanalerna igen',
        'Titta på bilder som familjen skickat',
      ] },
      { h: 'Enkelt och i lugn takt', p: [
        'Vi visar steg för steg och skriver gärna en liten lapp som kan ligga bredvid telefonen. Det handlar om vardagliga saker, inte om att laga datorer eller installera nya system.',
      ] },
    ],
    faq: [
      { q: 'Loggar ni in med mitt BankID?', a: 'Nej, aldrig. Koder och BankID hanterar bara du.' },
      { q: 'Kan ni laga min dator?', a: 'Nej, vi hjälper bara till med enklare saker som mobilen, tv:n och videosamtal. För reparationer rekommenderar vi en datorbutik.' },
      { q: 'Ger hjälp med teknik RUT-avdrag?', a: 'Ja, när hjälpen ges hemma hos dig.' },
    ],
  },
  {
    slug: 'tvatt-och-hemhjalp',
    short: 'Tvätt och hemhjälp',
    title: 'Hemhjälp för äldre: tvätt och enklare städning | Kulla Omtanke',
    description: 'Hemhjälp för äldre i Höganäs kommun och Ängelholm: tvätt, byta sängkläder och enklare städning, gärna kombinerat med sällskap. RUT-avdrag.',
    h1: 'Hemhjälp med tvätt och lite städning',
    lead: 'Tvättkorgen som växer och sängkläderna som borde bytas. Vi hjälper till med det praktiska i hemmet, och gör det gärna tillsammans med en fika eller en promenad.',
    rut: 'Tvätt och städning i hemmet ger RUT-avdrag, 290 kr i timmen inklusive moms efter avdraget.',
    sections: [
      { h: 'Det här kan vi hjälpa till med', list: [
        'Tvätta, hänga upp, vika och lägga in',
        'Byta sängkläder',
        'Torka av, damma och ta disken',
        'Vattna blommorna och vädra',
        'Rensa kylskåpet och slänga gammal mat',
      ] },
      { h: 'Inte en städfirma', p: [
        'Vi gör enklare sysslor som en del av besöket, inte storstädning. Det viktiga är att hemmet känns ombonat och att det finns tid över till samtal.',
      ] },
    ],
    faq: [
      { q: 'Gör ni storstädning?', a: 'Nej, vi hjälper till med enklare städning och tvätt som en del av besöket. För storstädning rekommenderar vi en städfirma.' },
      { q: 'Kan tvätt kombineras med sällskap?', a: 'Ja, det är vanligast så. Maskinen går medan vi fikar eller tar en promenad.' },
      { q: 'Ger hemhjälp RUT-avdrag?', a: 'Ja, tvätt och städning i hemmet ger 50 procent RUT-avdrag på arbetskostnaden.' },
    ],
  },
];

export const placePages = {
  hoganas: {
    name: 'Höganäs',
    title: 'Hemhjälp och sällskap för äldre i Höganäs | Kulla Omtanke',
    description: 'Sällskap, promenader och ärenden för äldre i Höganäs, Viken, Jonstorp, Nyhamnsläge, Mölle och Arild. Samma person varje gång. 290 kr/tim efter RUT.',
    h1: 'Sällskap och hemhjälp för äldre i Höganäs',
    lead: 'Kulla Omtanke finns i Höganäs kommun. Vi hjälper äldre i Höganäs, Viken, Jonstorp, Nyhamnsläge, Mölle och Arild med sällskap, promenader, ärenden och vardagshjälp, som ett komplement till hemtjänsten.',
    p: [
      'Vi känner Kullabygden och vet var det finns bänkar längs strandpromenaden, var det är lätt att parkera vid apoteket och vilka caféer som är bra med rollator.',
      'En vanlig vecka kan innehålla en promenad i Höganäs hamn, ett ärende på vårdcentralen och en fika hemma. Efter varje besök får de anhöriga en kort rapport.',
    ],
    areas: ['Höganäs', 'Viken', 'Jonstorp', 'Nyhamnsläge', 'Mölle', 'Arild', 'Lerberget', 'Ingelsträde'],
  },
  angelholm: {
    name: 'Ängelholm',
    title: 'Hemhjälp och sällskap för äldre i Ängelholm | Kulla Omtanke',
    description: 'Sällskap, promenader och ärenden för äldre i Ängelholm. Ett komplement till hemtjänsten, samma person varje gång. 290 kr/tim efter RUT-avdrag.',
    h1: 'Sällskap och hemhjälp för äldre i Ängelholm',
    lead: 'Vi hjälper äldre i Ängelholm med sällskap, promenader, ärenden och tvätt. Samma person kommer varje gång, och familjen får en rapport efter besöket.',
    p: [
      'En promenad längs Rönne å, en fika på stan eller hjälp att handla på vägen hem. Vi anpassar besöken efter vad som passar just er.',
      'Många av våra kunder har hemtjänst som sköter det nödvändiga. Vi står för tiden däremellan, med sällskap och det där lilla extra som gör veckan lättare.',
    ],
    areas: ['Ängelholm centrum', 'Munka-Ljungby', 'Strövelstorp', 'Vejbystrand', 'Skälderviken'],
  },
};

export const faqGeneral = [
  { q: 'Är det hemtjänst?', a: 'Nej. Vi är ett komplement till hemtjänst och äldreboende. Vi gör ingen vård eller omvårdnad, och ni bokar direkt hos oss utan biståndsbeslut.' },
  { q: 'Kan jag som barn boka och betala för min förälder?', a: 'Ja. Du kan få RUT-avdrag för tjänster som utförs i din förälders hem även när det är du som betalar.' },
  { q: 'Finns det någon bindningstid?', a: 'Nej. Det finns ingen bindningstid och ni kan säga upp med en veckas varsel.' },
  { q: 'Hur vet jag att personen är trygg?', a: 'Alla som arbetar hos oss intervjuas och visar utdrag ur belastningsregistret för arbete i hemmet hos äldre.' },
];

export const plans = [
  { name: 'Varannan vecka', time: '2 timmar varannan vecka', price: '1 160 kr/mån', before: '2 320 kr före RUT', text: 'Ett tryggt besök varannan vecka med rapport till familjen.' },
  { name: 'Varje vecka', time: '2 timmar i veckan', price: '2 320 kr/mån', before: '4 640 kr före RUT', text: 'Tid för både promenad, ärenden och fika varje vecka.' },
  { name: 'Extra närstående', time: '4 timmar i veckan', price: '4 640 kr/mån', before: '9 280 kr före RUT', text: 'Två längre besök i veckan när det behövs lite mer.' },
];

export const extraServices = [
  {
    slug: 'folje-till-lakarbesok',
    short: 'Följe till läkarbesök',
    title: 'Följe till vårdcentral och läkarbesök för äldre | Kulla Omtanke',
    description: 'Vi följer med till vårdcentralen, sjukhuset, tandläkaren eller optikern i Höganäs och Ängelholm. Stöd före, under och efter besöket. RUT-avdrag.',
    h1: 'Följe till vårdcentral och läkarbesök',
    lead: 'Ett läkarbesök kan kännas stort när man är osäker på vägen, på bussen eller på vad man ska fråga. Vi följer med hela vägen, från dörren hemma till dörren hemma igen.',
    rut: 'Att följa med till vårdcentral och läkare ger RUT-avdrag, 290 kr i timmen inklusive moms efter avdraget.',
    sections: [
      { h: 'Så hjälper vi till', list: [
        'Påminner om tiden och hjälper till att göra sig i ordning',
        'Följer med i vår bil, som rymmer både rullstol och rollator',
        'Skriver gärna ner frågorna innan och svaren efteråt',
        'Hämtar ut medicinen på apoteket på vägen hem',
        'Berättar för de anhöriga hur besöket gick, om ni vill',
      ] },
      { h: 'Vart vi följer med', p: [
        'Vårdcentraler i Höganäs kommun och Ängelholm, Ängelholms sjukhus, Helsingborgs lasarett vid behov, tandläkare, optiker och fotvård.',
      ] },
      { h: 'Vi är ett stöd, inte vårdpersonal', p: [
        'Vi är med som sällskap och stöd. Vi ger inga medicinska råd och fattar inga beslut, men vi ser till att inget faller mellan stolarna.',
      ] },
    ],
    faq: [
      { q: 'Kan ni följa med in till läkaren?', a: 'Ja, om du vill. Annars väntar vi i väntrummet.' },
      { q: 'Kostar resan extra?', a: 'Nej, vi tar betalt för tiden vi är med dig.' },
      { q: 'Kan anhöriga boka följe åt sin förälder?', a: 'Ja, och då kan du som anhörig få en kort rapport efter besöket.' },
    ],
  },
  {
    slug: 'sallskap-pa-aldreboende',
    short: 'Sällskap på äldreboende',
    title: 'Sällskap och besök på äldreboende | Kulla Omtanke',
    description: 'Egen tid med en fast person för den som bor på äldreboende i Höganäs eller Ängelholm. Samtal, promenad, fika och ärenden. Rapport till anhöriga.',
    h1: 'Sällskap för dig som bor på äldreboende',
    lead: 'Personalen på boendet har många att ta hand om. Med Kulla Omtanke får din förälder en egen stund med en person som bara är där för henne eller honom.',
    rut: 'Promenader och ärenden ger RUT-avdrag även på äldreboende, eftersom boendet räknas som hemmet. Rent sällskap ger inte avdrag.',
    sections: [
      { h: 'Det här brukar vi göra', list: [
        'En promenad ute, i rullstol eller till fots',
        'Fika i cafeterian eller på stan',
        'Handla det lilla extra, som favoritgodis eller en ny tröja',
        'Läsa högt, titta i fotoalbum eller lösa korsord',
        'Hjälpa till med videosamtal till familjen',
      ] },
      { h: 'I samarbete med boendet', p: [
        'Vi stämmer av med personalen så att besöken passar in i rutinerna. Vi gör ingen omvårdnad, utan står för tid, sällskap och lite guldkant.',
      ] },
    ],
    faq: [
      { q: 'Behöver boendet godkänna besöken?', a: 'Nej, men vi hör gärna av oss till personalen så att alla vet vem vi är och när vi kommer.' },
      { q: 'Får man RUT-avdrag på äldreboende?', a: 'Ja, för promenader och ärenden. Boendet räknas som hemmet. Rent sällskap ger inte avdrag.' },
      { q: 'Kan vi få veta hur besöket gick?', a: 'Ja, anhöriga får en kort rapport efter varje besök.' },
    ],
  },
  {
    slug: 'avlastning-for-anhoriga',
    short: 'Avlastning för anhöriga',
    title: 'Avlastning för anhöriga till äldre i Höganäs och Ängelholm | Kulla Omtanke',
    description: 'Tar du hand om en äldre förälder eller partner? Vi avlastar med sällskap, promenader och ärenden, så att du får tid för dig själv. RUT-avdrag.',
    h1: 'Avlastning för dig som anhörig',
    lead: 'Att ta hand om en förälder eller partner är ofta ett heltidsjobb vid sidan av allt annat. Vi tar över några timmar i veckan, så att du kan andas, jobba eller göra något för dig själv.',
    rut: 'Promenader, ärenden och tvätt ger RUT-avdrag, 290 kr i timmen inklusive moms efter avdraget.',
    sections: [
      { h: 'Så kan avlastningen se ut', list: [
        'Ett fast besök varje vecka medan du är på jobbet eller på egen aktivitet',
        'Vi tar promenaden, handlingen eller apoteksärendet',
        'Sällskap hemma så att du kan gå iväg en stund',
        'En kort rapport efteråt, så att du vet hur det gick',
      ] },
      { h: 'Samma person varje gång', p: [
        'Det är tryggt både för den du tar hand om och för dig. Efter några veckor vet vi hur ni vill ha det och kan ta över utan långa förklaringar.',
      ] },
      { h: 'Kommunens stöd finns också', p: [
        'Kommunen kan erbjuda avlösning och anhörigstöd via biståndsbeslut. Vi är ett privat komplement som går att boka direkt, utan ansökan.',
      ] },
    ],
    faq: [
      { q: 'Hur snabbt kan ni börja?', a: 'Oftast inom en till två veckor efter det första mötet.' },
      { q: 'Kan ni komma på kvällar och helger?', a: 'Hör av er så ser vi vad som går att lösa.' },
      { q: 'Gör ni omvårdnad?', a: 'Nej. Vi hjälper inte till med personlig hygien eller medicinering, det sköter hemtjänsten.' },
    ],
  },
];

export const morePlaces = {
  viken: { name: 'Viken', kommun: 'Höganäs kommun', title: 'Sällskap och hemhjälp för äldre i Viken | Kulla Omtanke', description: 'Sällskap, promenader och ärenden för äldre i Viken. Samma person varje gång och rapport till anhöriga. 290 kr/tim efter RUT-avdrag.', h1: 'Sällskap och vardagshjälp för äldre i Viken', lead: 'Vi hjälper äldre i Viken med sällskap, promenader, ärenden och tvätt, som ett komplement till hemtjänsten.', p: ['En promenad genom gamla fiskeläget eller ner till hamnen, en fika och ett ärende på vägen hem. Vi tar det i den takt som passar.', 'Bor barnen långt bort får de en kort rapport efter varje besök, så att de vet hur det går.'] },
  jonstorp: { name: 'Jonstorp', kommun: 'Höganäs kommun', title: 'Sällskap och hemhjälp för äldre i Jonstorp | Kulla Omtanke', description: 'Sällskap, promenader och ärenden för äldre i Jonstorp och Farhult. Samma person varje gång. 290 kr/tim efter RUT-avdrag.', h1: 'Sällskap och vardagshjälp för äldre i Jonstorp', lead: 'Vi besöker äldre i Jonstorp och Farhult med sällskap, promenader och hjälp med ärenden.', p: ['På landet blir avstånden längre. Vår bil rymmer både rullstol och rollator, så ärenden i Höganäs eller Ängelholm blir enkla att göra tillsammans.', 'Samma person kommer varje gång, och de anhöriga får en kort rapport efter besöket.'] },
  nyhamnslage: { name: 'Nyhamnsläge', kommun: 'Höganäs kommun', title: 'Sällskap och hemhjälp för äldre i Nyhamnsläge | Kulla Omtanke', description: 'Sällskap, promenader och ärenden för äldre i Nyhamnsläge. Samma person varje gång och rapport till anhöriga. RUT-avdrag.', h1: 'Sällskap och vardagshjälp för äldre i Nyhamnsläge', lead: 'Vi hjälper äldre i Nyhamnsläge med sällskap, promenader, ärenden och lite hjälp hemma.', p: ['En tur ner till hamnen, en fika och lite handling på vägen. Små saker som gör veckan lättare.', 'Vi är ett komplement till hemtjänsten och kommer på fasta tider, med samma person varje gång.'] },
  molle: { name: 'Mölle', kommun: 'Höganäs kommun', title: 'Sällskap och hemhjälp för äldre i Mölle | Kulla Omtanke', description: 'Sällskap, promenader och ärenden för äldre i Mölle på Kullahalvön. Samma person varje gång. 290 kr/tim efter RUT-avdrag.', h1: 'Sällskap och vardagshjälp för äldre i Mölle', lead: 'Längst ut på Kullahalvön kan vardagen bli ensam, särskilt på vintern. Vi kommer till Mölle med sällskap, promenader och hjälp med ärenden.', p: ['Vi följer med ner till hamnen, tar bilen till affären eller vårdcentralen i Höganäs och fikar hemma.', 'Familjen får en kort rapport efter varje besök.'] },
  arild: { name: 'Arild', kommun: 'Höganäs kommun', title: 'Sällskap och hemhjälp för äldre i Arild | Kulla Omtanke', description: 'Sällskap, promenader och ärenden för äldre i Arild. Samma person varje gång och rapport till anhöriga. RUT-avdrag.', h1: 'Sällskap och vardagshjälp för äldre i Arild', lead: 'Vi hjälper äldre i Arild med sällskap, promenader och ärenden, så att det går att bo kvar hemma i fiskeläget.', p: ['En promenad i fiskeläget, en fika och ett ärende i Höganäs. Bilen har plats för rullstol och rollator.', 'Samma person kommer varje gång, och de anhöriga får veta hur det gick.'] },
  'munka-ljungby': { name: 'Munka-Ljungby', kommun: 'Ängelholms kommun', title: 'Sällskap och hemhjälp för äldre i Munka-Ljungby | Kulla Omtanke', description: 'Sällskap, promenader och ärenden för äldre i Munka-Ljungby. Samma person varje gång. 290 kr/tim efter RUT-avdrag.', h1: 'Sällskap och vardagshjälp för äldre i Munka-Ljungby', lead: 'Vi besöker äldre i Munka-Ljungby med sällskap, promenader och hjälp med ärenden, som ett komplement till hemtjänsten.', p: ['Ärenden i Ängelholm blir enkla när vi tar bilen tillsammans. Annars blir det en promenad i närområdet och en fika hemma.', 'De anhöriga får en kort rapport efter varje besök.'] },
  vejbystrand: { name: 'Vejbystrand', kommun: 'Ängelholms kommun', title: 'Sällskap och hemhjälp för äldre i Vejbystrand | Kulla Omtanke', description: 'Sällskap, promenader och ärenden för äldre i Vejbystrand. Samma person varje gång och rapport till anhöriga. RUT-avdrag.', h1: 'Sällskap och vardagshjälp för äldre i Vejbystrand', lead: 'Vi hjälper äldre i Vejbystrand med sällskap, promenader vid havet och ärenden.', p: ['En promenad längs stranden, handling i Ängelholm och en fika hemma. Vi anpassar besöken efter vad som passar.', 'Samma person kommer varje gång, och familjen får en rapport efteråt.'] },
};

export const guides = [
  {
    slug: 'rut-avdrag-for-aldre',
    title: 'RUT-avdrag för äldre: det här gäller för sällskap och vardagshjälp',
    short: 'RUT-avdrag för äldre',
    description: 'Vilka tjänster för äldre ger RUT-avdrag? Promenader, ärenden och tvätt gör det, rent sällskap gör det inte. Så fungerar det när anhöriga betalar.',
    intro: 'RUT-avdraget halverar arbetskostnaden för många tjänster i hemmet, även för äldre. Men alla delar av ett besök ger inte avdrag. Här är det viktigaste att veta.',
    sections: [
      { h: 'Det här ger RUT-avdrag', list: ['Promenader och att följa med på ärenden, till exempel vårdcentral, bank och affär', 'Hjälp att betala räkningar och att läsa högt', 'Tvätt och enklare städning i hemmet'] },
      { h: 'Det här ger inte RUT-avdrag', list: ['Tid som bara är sällskap och samtal', 'Att följa med på bio, restaurang eller museum', 'Resor och transporter'] },
      { h: 'Anhöriga kan betala', p: ['Den som betalar får avdraget, även om tjänsten utförs i en förälders hem. Avdraget dras direkt på fakturan, och företaget ansöker om resten hos Skatteverket.'] },
      { h: 'Hur mycket kan man få?', p: ['Avdraget är 50 procent av arbetskostnaden, upp till 75 000 kr per person och år för ROT och RUT tillsammans. Läs mer hos Skatteverket.'] },
    ],
    source: { name: 'Skatteverket: Ger arbetet rätt till rutavdrag?', url: 'https://skatteverket.se/foretag/skatterochavdrag/rotochrut/gerarbetetratttillrutavdrag.html' },
  },
  {
    slug: 'tecken-pa-att-din-foralder-behover-hjalp',
    title: 'Tecken på att din förälder behöver lite mer hjälp i vardagen',
    short: 'Tecken på att din förälder behöver hjälp',
    description: 'Tomt kylskåp, posten på hög och färre promenader. Här är vanliga tecken på att en äldre förälder behöver lite mer stöd, och vad du kan göra.',
    intro: 'Det är lätt att missa små förändringar när man bara hörs i telefon. Här är några vanliga tecken på att mamma eller pappa behöver lite mer stöd i vardagen.',
    sections: [
      { h: 'Vanliga tecken', list: ['Kylskåpet är tomt eller fullt av gammal mat', 'Hon eller han går sällan ut längre', 'Posten och räkningarna samlas på hög', 'Telefonen eller tv:n krånglar och blir liggande', 'Samtalen handlar mest om att dagarna är långa', 'Hemmet är stökigare än det brukar vara'] },
      { h: 'Börja med ett samtal', p: ['Prata om vad som känns jobbigt, utan att ta över. Många vill inte vara till besvär och säger att allt är bra.'] },
      { h: 'Små steg räcker ofta', p: ['Ett fast besök i veckan med promenad, handling och fika kan göra stor skillnad. Kontakta också kommunens biståndshandläggare om behoven är större, till exempel omvårdnad.'] },
    ],
  },
  {
    slug: 'ensamhet-hos-aldre',
    title: 'Ensamhet hos äldre: så kan du som anhörig hjälpa till',
    short: 'Ensamhet hos äldre',
    description: 'Ensamhet är vanligt bland äldre, särskilt efter en förlust eller när orken tryter. Konkreta tips för anhöriga som bor nära eller långt bort.',
    intro: 'Ensamhet smyger sig ofta på, efter att en partner har gått bort, vänner har flyttat eller orken att ta sig ut har minskat. Som anhörig kan du göra mycket, även på avstånd.',
    sections: [
      { h: 'Om du bor nära', list: ['Gör besöken regelbundna, så att det finns något att se fram emot', 'Ta med på små utflykter, även korta', 'Hjälp till att komma till träffar, kyrkan eller en förening'] },
      { h: 'Om du bor långt bort', list: ['Ring på fasta tider', 'Lär ut videosamtal, så att barnbarnen syns', 'Skicka vykort och bilder, gärna på papper', 'Låt någon på plats göra fasta besök'] },
      { h: 'Lokala mötesplatser', p: ['PRO, SPF Seniorerna, kyrkan och kommunens träffpunkter ordnar aktiviteter för äldre i både Höganäs och Ängelholm.'] },
    ],
  },
];

for (const [k, v] of Object.entries(morePlaces)) { placePages[k] = { ...v, areas: [v.name, v.kommun] }; }
