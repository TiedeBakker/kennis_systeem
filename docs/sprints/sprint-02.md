# Sprint 2 – Het eerste kennismodel

**Status:** Werkversie  
**Sprint:** 2  
**Versie:** 0.1  
**Laatst bijgewerkt:** 20 juli 2026

---

# Doel

Sprint 2 legt de eerste functionele laag van het KennisSysteem vast.

De nadruk ligt op het modelleren van de fundamentele kennisentiteiten en hun onderlinge samenhang.

Nog niet de database of de gebruikersinterface staan centraal, maar het kennismodel waarop deze later worden gebouwd.

---

# Uitgangspunten

Tijdens deze sprint blijven de fundamentele ontwerpprincipes leidend.

- Documentatie gaat vóór implementatie.
- Ontwikkeling verloopt in kleine toetsbare stappen.
- Iedere stap wordt eerst begrepen en daarna gebouwd.
- Iedere nieuwe bouwsteen krijgt één duidelijke verantwoordelijkheid.
- De architectuur blijft leidend.
- Generaliseren gebeurt alleen wanneer dit de huidige toepassing niet ingewikkelder maakt en toekomstige toepassingen eenvoudiger maakt.
- Kwaliteit gaat vóór snelheid.

---

# Resultaten

Aan het einde van Sprint 2 beschikt het project over:

## 1. Eerste kennismodel

De eerste fundamentele kennisentiteiten zijn beschreven en geïmplementeerd.

Voorbereiding voor onder andere:

- Object
- Relatie
- Parameter

Hun betekenis staat centraal, nog niet de opslag.

---

## 2. Eerste gemeenschappelijke typen

De generieke bouwstenen van het kennismodel worden verder uitgebreid.

Onder andere:

- UUID
- Timestamp
- aanvullende basistypen indien nodig

Nieuwe typen worden alleen toegevoegd wanneer zij een zelfstandig begrip vertegenwoordigen.

---

## 3. Eerste uitbreidingen van de KnowledgeProvider

De KnowledgeProvider groeit mee met het kennismodel.

Nieuwe functionaliteit wordt uitsluitend toegevoegd wanneer het onderliggende model voldoende is uitgewerkt.

---

## 4. Eerste samenhang

De onderlinge samenhang tussen objecten, relaties en parameters wordt vastgelegd.

Nog zonder database-implementatie.

De nadruk ligt op de semantiek van het model.

---

## 5. Toetsbare voorbeelden

Iedere nieuwe bouwsteen wordt direct gebruikt in kleine, toetsbare voorbeelden.

Daardoor blijft het model voortdurend controleerbaar.

---

## 6. Doorlopende kwaliteit

Na iedere betekenisvolle stap:

- testen;
- committen;
- documentatie bijwerken indien nodig.

Architectuur en implementatie blijven daardoor synchroon.

---

# Nog niet in Sprint 2

Bewust uitgesteld:

- database-tabellen;
- Drizzle-schema's;
- repositories;
- SQLite-opslag;
- Turso-opslag;
- objectbeheer via gebruikersinterface;
- relatiebeheer via gebruikersinterface;
- formulieren;
- presentatie van collecties.

Deze volgen zodra het kennismodel voldoende stabiel is.

---

# Definition of Done

Sprint 2 is gereed wanneer:

- de eerste fundamentele kennisentiteiten zijn vastgelegd;
- de eerste uitbreidingen van de KnowledgeProvider aanwezig zijn;
- het kennismodel intern consistent is;
- de applicatie blijft draaien op alle ondersteunde platforms;
- alle wijzigingen zijn vastgelegd in Git.

---

# Verwachte opbrengst

Na Sprint 2 beschikt het project over een stabiel en samenhangend kennismodel waarop de verdere ontwikkeling veilig kan voortbouwen.

Vanaf Sprint 3 verschuift de nadruk geleidelijk naar opslag, beheer en ontsluiting van kennis.

---

# Wijzigingsgeschiedenis

## v0.1

- Eerste versie van Sprint 2.
- Kennismodel centraal gesteld.
- Eerste fundamentele kennisentiteiten opgenomen.
- KnowledgeProvider verder uitgewerkt.