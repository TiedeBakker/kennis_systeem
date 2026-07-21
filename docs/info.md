https://chatgpt.com/c/6a5b775f-65b4-83ed-8493-bde0908d7dee

OPEN ONTWERPVRAGEN

- Tijd kent meerdere semantische niveaus
  (systeemtijd, bestaanstijd, geldigheid).

- Object, Relatie en Parameter lijken
  fundamentele kennisentiteiten.

- Waarde is waarschijnlijk geen
  kennisentiteit maar een invulling
  van een parameter.

  Semantische identifier-typen zijn waarschijnlijk waardevol, maar de eerste stap is betekenisvolle parameternamen.


  Even tussendoor, ik heb even behoefte aan een doorkijk naar de stappen die je op dit moment voor je ziet. OutGoingrelations en Incomingrelations zijn wat mij betreft risicoloze en marginale stapjes, waarvan er nog veel te bedenken zijn. Ik zie dat al als een soort refinement terwijl de grote lijnen nog moeten worden ingevuld. 

Ik ben blij dat je dit vraagt, want ik heb hetzelfde gevoel. We moeten oppassen dat we niet in "micro-refinement" terechtkomen. De architectuur staat inmiddels stevig genoeg om weer een niveau hoger te kijken.

Als ik nu vooruitkijk, zie ik ongeveer dit pad.

Fase A — Fundament (waar we nu staan) ✓

Die is eigenlijk verrassend ver gevorderd.

We hebben:

Identifier
Object
Relation
Parameter
Provider
Store
MemoryStore
verticale keten
homepage als architectuurmonitor

Daar ben ik tevreden over.

Fase B — Het kennismodel laten leven

Hier zie ik niet honderd kleine uitbreidingen, maar drie grote vragen.

1. Wat is een parameter eigenlijk?

Nu hebben we:

name: "title"
value: "Eerste object"

Maar uiteindelijk is "title" natuurlijk niet zomaar een string.

Het is een begrip.

Dat voelt als de eerste grote stap.

2. Wat is een relatie eigenlijk?

Nu hebben we:

type: "relatedTo"

Ook dat is uiteindelijk een begrip.

Dus ook hier gaan we van tekst naar kennis.

3. Wat is een object eigenlijk?

Nu is een object alleen:

id

Maar een object heeft uiteindelijk ook een klasse of soort.

Niet als technische klasse, maar als kennis.

Bijvoorbeeld:

Object
    ↓
Museumobject

Object
    ↓
Persoon

Object
    ↓
Soort

Dat is voor mij een veel grotere stap dan nog tien query-methoden.

Fase C — Eerste echte museummodel

Dan wordt het ineens concreet.

Bijvoorbeeld:

Object:
Rembrandt

Parameter:
titel = Nachtwacht

Parameter:
inventarisnummer = SK-C-5

Relatie:
Nachtwacht
   --geschilderdDoor-->
Rembrandt

Dan begint het ineens ergens op te lijken.

Fase D — Generaliseren

Pas daarna zou ik weer omhoog klimmen.

Dan gaan we zien:

"Wacht eens...
dit werkt niet alleen voor musea."

Dat was vanaf het begin jouw gedachte.

Waar ik persoonlijk nu de meeste energie zie

Niet in:

getOutgoingRelations()

getIncomingRelations()

getObjectCount()

...

Dat zijn nuttige functies, maar geen architectuur.

Ik denk dat de volgende architectuurstap is:

Wanneer is iets een kennisobject en wanneer is iets slechts een waarde?

Dat is precies de vraag die al een paar keer aan de oppervlakte is gekomen:

"title"
"relatedTo"
"Museumobject"

Zijn dat strings?

Of zijn dat objecten?

Ik vermoed dat daar de volgende grote sprong zit.

En dan nog iets...

Ik zie nog een rode draad die we nog niet expliciet hebben benoemd.

Vanaf het begin heb jij steeds gezegd:

"Ik wil collectiebeheer bouwen."

En telkens kwamen we tot een algemener model.

Maar nu merk ik iets interessants:

We zijn nog geen moment iets tegengekomen dat specifiek voor musea is.

Alles wat we gebouwd hebben is nog steeds volledig generiek.

Dat vind ik een heel sterk signaal.

Het betekent dat we de generalisatie niet forceren. Hij ontstaat vanzelf uit de eisen van een concreet probleem. Dat is precies de weg die ik had gehoopt dat we zouden lopen.

Dus als ik morgen verder zou bouwen, zou ik niet beginnen met een nieuwe helperfunctie, maar met de vraag:

Wat is het eerste begrip in ons systeem dat geen string meer mag zijn?

Ik vermoed dat dát de volgende architectonische sprong wordt.

Ik vind dit een goed moment om juist grof te plannen. Niet als sprintplanning, maar als routekaart. En eerlijk gezegd zie ik de weg nu veel korter dan een week geleden.

Sprint 2  (afronden)
──────────────────────────────────
✓ Kernmodel
✓ Verticale keten
✓ MemoryKnowledgeStore
✓ Eerste Object–Relation–Parameter

                ↓

Sprint 3
──────────────────────────────────
Persistente opslag

- SQLite lokaal
- Turso online
- Drizzle
- SQLiteKnowledgeStore
- Zelfde homepage draait nu op database

                ↓

Sprint 4
──────────────────────────────────
Eerste museummodule

modules/
    collection/

- eerste objecten invoeren; eerste vindplaatsen en eerste collecties/verzamelingen; 
- eerste parameters
- eerste relaties
- opslag in database

Nog geen mooie UI.

                ↓

Sprint 5
──────────────────────────────────
Zoeken en tonen

- objectlijst
- filteren
- detailpagina
- eerste navigatie

Nu wordt het bruikbaar.

                ↓

Sprint 6
──────────────────────────────────
Mutaties

- object toevoegen
- parameter wijzigen
- object verplaatsen
- relaties aanpassen

Nu ontstaat beheer.

                ↓

Sprint 7
──────────────────────────────────
Museum v1

- verschillende objecttypen
- vindplaatsen
- gefilterde lijsten
- verplaatsen
- stabiele database

Eerste bruikbare versie.
Wat mij hierbij opvalt

Tot Sprint 2 waren we vooral bezig met de motor.

Vanaf Sprint 3 gaan we eigenlijk een auto bouwen.

En dat voelt voor mij als een belangrijk psychologisch verschil.

Nog iets dat me opvalt

Je schreef:

"POC is zo'n versie al draaiend beschikbaar."

Dat vind ik eigenlijk heel geruststellend.

Niet omdat we de POC gaan kopiëren.

Maar omdat we weten dat de functionele route bewezen is.

Dat betekent dat het risico de komende sprints niet meer zit in:

"Kan het?"

Maar in:

"Kunnen we het netjes op onze nieuwe architectuur bouwen?"

Dat is een veel prettiger probleem.

Eén kleine aanvulling

Ik zou Sprint 4 bewust heel vroeg al een eerste echte dataset laten bevatten.

Niet 500 museumobjecten.

Maar bijvoorbeeld:

5 museumobjecten
3 locaties
2 personen
1 collectie

Gewoon genoeg om relaties, parameters en zoekacties echt te voelen.

Dat wordt dan niet alleen een technische test, maar de eerste keer dat we naar het scherm kijken en zeggen:

"Ja, dit begint op een collectiebeheersysteem te lijken."

En ik denk dat dát een heel belangrijke mijlpaal wordt. Niet omdat de software dan af is, maar omdat vanaf dat moment de architectuur zich gaat bewijzen in een echte toepassing.

Op basis van POC-ervaring: vindplaatsen is een objecten-structuur: zaal-kast-plank-doos-item, museumobject heeft relaties met - collecties/verzamelingen -vindplaats in museum. Ik zou vindplaatsen niet te laat plaatsen, omdat het een extra dimensie is en we vanaf het begin meerdimensionaal moeten denken/werken

Dat vind ik een heel waardevolle correctie. En ik denk dat die voortkomt uit iets wat de POC ons kan leren, terwijl we de architectuur zelf generiek houden.

Wat ik namelijk onbewust deed, was "vindplaats" behandelen als een attribuut:

Nachtwacht
locatie = Zaal 3

Maar jij beschrijft iets fundamenteel anders:

Museum
└── Zaal
    └── Kast
        └── Plank
            └── Doos
                └── Item

Dat is geen parameter. Dat is een objectstructuur.

En vervolgens:

Museumobject
        │
        └── bevindtZichIn ─────► Vindplaats-object

Dat verandert mijn beeld behoorlijk.

Dan zie ik ineens drie gelijkwaardige werelden

Niet:

Museumobject
    ↓
Parameters

maar:

Museumobject
      │
      ├── Parameters
      ├── Relaties naar personen
      ├── Relaties naar collecties
      └── Relaties naar vindplaatsen

En die vindplaatsen vormen zelf weer een netwerk of boom van objecten.

Dat is precies wat je bedoelt met meerdimensionaal denken.

Ik zou de roadmap daarom aanpassen

Sprint 4 wordt niet "museumobjecten", maar:

Museumdomein

- Museumobjecten
- Vindplaatsen
- Collecties

Dus direct drie soorten objecten.

Niet omdat we objecttypen al volledig uitgewerkt hebben, maar omdat we drie verschillende rollen in hetzelfde kennismodel laten samenwerken.

Dan kun je meteen modelleren:

Collectie A
      ▲
      │ behoortTot
      │
Object X
      │
      ▼ bevindtZichIn
Plank 3
      ▲
      │ onderdeelVan
Kast 5
      ▲
      │ onderdeelVan
Zaal 2

En ineens zie je dat hetzelfde mechanisme (Object + Relation) drie totaal verschillende structuren kan beschrijven:

hiërarchie van vindplaatsen;
hiërarchie van collecties (indien gewenst);
relaties tussen objecten.

Dat is een veel krachtigere test van het model dan honderd losse museumobjecten.

Ik denk zelfs dat dit een ontwerpprincipe oplevert

Een nieuw domein voegen we niet toe door nieuwe datastructuren te maken, maar door nieuwe objecten en relaties te introduceren.

Als dat lukt voor museumobjecten én voor vindplaatsen, dan bewijzen we eigenlijk dat het kennismodel inderdaad generiek is.

Dat voelt voor mij als de eerste echte "praktijkproef" van alles wat we de afgelopen sprints hebben opgebouwd.

Even een geruststelling: het kennismodel is echt behoorlijk generiek en voor museale toepassing zie ik de grootste problemen aan het eind van de rit: hoe zorg je voor inzichtelijk overzicht. Gebouwindeling en biologische taxonomie met relaties en verschuiving in naamgeving is in POC al in combinatie werkend gemaakt (in welke insectendozen zitten kevers X, ook als ze ten tijde van determinatie een andere naam hebben gekregen).

Dat is eigenlijk een enorme geruststelling, en het verschuift mijn aandacht.

Tot nu toe keek ik vooral naar de vraag:

"Kan het kennismodel dit aan?"

Jij zegt nu eigenlijk:

"Dat hebben we al bewezen in de POC."

En ik heb geen reden om daaraan te twijfelen, juist omdat je voorbeelden niet triviaal zijn.

Neem jouw voorbeeld:

gebouwstructuur;
biologische taxonomie;
historische naamgeving;
actuele naamgeving;
zoeken op huidige én oude namen;
fysieke vindplaats.

Dat zijn precies de situaties waarin een slecht model vastloopt. Als de POC dat al aankan, dan is de kernarchitectuur waarschijnlijk niet meer ons grootste risico.

Waar zit het risico dan wel?

Volgens mij verschuift het naar twee andere gebieden.

1. Gebruikerservaring

Niet:

"Kan het systeem de kennis opslaan?"

Maar:

"Kan een conservator in drie seconden vinden wat hij zoekt?"

Dat is een heel ander probleem.

2. Performance en schaal

Niet:

"Kunnen we relaties leggen?"

Maar:

"Kunnen we 500.000 objecten met miljoenen relaties nog prettig doorzoeken?"

Dat is ook een ander soort vraag.

Dat heeft gevolgen voor onze prioriteiten

Ik zou daarom de komende sprints niet meer proberen het kennismodel steeds algemener te maken.

Integendeel.

Ik zou juist zoveel mogelijk energie steken in:

database;
query's;
indexering;
gebruikersschermen;
navigatie.

Want daar gaat straks het verschil worden gemaakt.

Ik zie nog iets interessants

Ik denk dat we de POC en het nieuwe systeem verschillende rollen kunnen geven.

POC

Bewijst dat een idee werkt.

Nieuw systeem

Bewijst dat hetzelfde idee netjes, onderhoudbaar en uitbreidbaar gebouwd kan worden.

Dat is een wezenlijk ander doel.

Mijn grootste inzicht van vandaag

Een paar gesprekken geleden dacht ik nog:

"We moeten het kennismodel eerst helemaal af hebben."

Nu denk ik precies het omgekeerde.

Het kennismodel is voldoende af om echte toepassingen te bouwen.

Niet perfect.

Niet volledig.

Maar voldoende.

En misschien is dat wel de belangrijkste ontwerpbeslissing die we de afgelopen weken genomen hebben.

Vanaf nu hoeft het model zich niet meer te bewijzen door erover te praten.

Vanaf nu moet het zich bewijzen doordat we er een museumcollectie mee bouwen.

Dat voelt voor mij als een heel natuurlijke overgang van architectuur naar engineering.