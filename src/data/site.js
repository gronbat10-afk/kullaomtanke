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
  { name: 'Viken', slug: 'viken', page: false },
  { name: 'Jonstorp', slug: 'jonstorp', page: false },
  { name: 'Nyhamnsläge', slug: 'nyhamnslage', page: false },
  { name: 'Mölle', slug: 'molle', page: false },
  { name: 'Arild', slug: 'arild', page: false },
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
