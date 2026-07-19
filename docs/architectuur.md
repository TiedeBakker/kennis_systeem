# Architectuur van het KennisSysteem

**Status:** Werkversie  
**Versie:** 0.2  
**Laatst bijgewerkt:** 19 juli 2026

---

# Doel

Het KennisSysteem is ontworpen om gebruikers op een eenvoudige, consistente en duurzame manier kennis te laten vastleggen, beheren en ontsluiten.

De architectuur is dienend aan dat doel.

---

# Architectuuroverzicht

Het systeem bestaat uit een klein aantal logisch gescheiden lagen.

```text
Modules
    │
    ▼
Core
    │
    ▼
Repositories
    │
    ▼
Databronnen
```

Afhankelijkheden lopen uitsluitend van boven naar beneden.

Stabiliteit loopt in omgekeerde richting.

---

# De gebruiker

De gebruiker staat centraal in het ontwerp.

De architectuur is geen doel op zich, maar ondersteunt het efficiënt en betrouwbaar vastleggen, beheren en ontsluiten van kennis.

Nieuwe technische mogelijkheden worden steeds beoordeeld op hun bijdrage aan de gebruiker.

---

# De lagen

## Modules

Modules bevatten toepassingsspecifieke functionaliteit.

Voorbeelden zijn:

- Objectbeheer
- Taxonomie
- Collectiebeheer
- Presentatiemodules
- Toekomstige domeinspecifieke uitbreidingen

Modules zijn zelfstandig.

Modules zijn nooit rechtstreeks afhankelijk van andere modules.

Wanneer functionaliteit door meerdere modules nodig is, verhuist deze naar de core.

---

## Core

De core bevat alle generieke functionaliteit.

Voorbeelden:

- KnowledgeProvider
- Boomstructuren
- Objectmodel
- Relatiemodel
- Waardenmodel
- Historie
- Validatie

De core kent geen kennis van de gebruikersinterface en geen kennis van de opslagtechniek.

---

## Repositories

Repositories vormen de scheiding tussen het kennismodel en de fysieke opslag.

Zij vertalen verzoeken vanuit de core naar de onderliggende databronnen.

Hierdoor blijft de core onafhankelijk van SQL, Drizzle en de gekozen database.

---

## Databronnen

Databronnen verzorgen uitsluitend de opslag van gegevens.

Een implementatie kan bestaan uit één of meerdere databronnen.

Dat kunnen bijvoorbeeld zijn:

- een lokale SQLite-database;
- een Turso-database;
- een combinatie van beide;
- of toekomstige opslagvormen.

De verdeling van gegevens over databronnen is een implementatiekeuze en heeft geen invloed op de logische architectuur.

---

# De KnowledgeProvider

De KnowledgeProvider vormt de centrale toegang tot alle kennis.

Modules communiceren uitsluitend met de KnowledgeProvider.

De KnowledgeProvider bepaalt uit welke databronnen informatie wordt samengesteld.

Daardoor blijven modules onafhankelijk van de fysieke opslag.

---

# Ontwerpregels

Bij uitbreiding van het systeem gelden de volgende regels.

- Nieuwe functionaliteit wordt bij voorkeur als module toegevoegd.
- Generieke functionaliteit behoort in de core.
- Opslagtechniek is vervangbaar.
- Presentatie staat los van het kennismodel.
- Iedere component heeft één duidelijke verantwoordelijkheid.
- Afhankelijkheden lopen uitsluitend naar stabielere onderdelen.

---

# Groeimodel

Het systeem groeit iteratief.

Nieuwe functionaliteit wordt toegevoegd in kleine, zelfstandig toetsbare stappen.

Iedere stap wordt eerst ontworpen, vervolgens gedocumenteerd en pas daarna geïmplementeerd.

---

# Relatie met de Grondwet

De Grondwet beschrijft de fundamentele uitgangspunten.

De Architectuur vertaalt deze uitgangspunten naar de structuur van het systeem.

Wanneer architectuur en Grondwet elkaar tegenspreken, heeft de Grondwet altijd voorrang.

---

# Status

Dit document beschrijft de logische opbouw van het KennisSysteem.

Het vormt het uitgangspunt voor alle implementatiebeslissingen.

---

# Wijzigingsgeschiedenis

## v0.2

- Gebruiker expliciet centraal geplaatst.
- Databronnen in plaats van één database.
- Ondersteuning voor meerdere databases toegevoegd.
- KnowledgeProvider als centrale toegang verduidelijkt.
- Stabiliteitsprincipe opgenomen.

## v0.1

- Eerste werkversie.