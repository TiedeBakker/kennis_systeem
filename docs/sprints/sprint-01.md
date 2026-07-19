# Sprint 1 – De eerste levende schil

**Status:** Werkversie  
**Sprint:** 1  
**Versie:** 0.1  
**Laatst bijgewerkt:** 19 juli 2026

---

# Doel

Sprint 1 levert de eerste werkende versie van het KennisSysteem op.

De nadruk ligt niet op functionaliteit, maar op het neerzetten van een complete, stabiele en toetsbare ontwikkelomgeving waarin de architectuur zichtbaar wordt.

Aan het einde van deze sprint is de applicatie lokaal én online beschikbaar en vormt zij de basis voor alle volgende ontwikkeling.

---

# Uitgangspunten

Tijdens deze sprint blijven de fundamentele ontwerpprincipes leidend.

- Documentatie gaat vóór implementatie.
- Ontwikkeling verloopt in kleine toetsbare stappen.
- Iedere stap wordt eerst begrepen en daarna gebouwd.
- Na iedere stap wordt teruggekeerd naar de architectuur.
- Kwaliteit gaat vóór snelheid.

---

# Resultaten

Aan het einde van Sprint 1 beschikt het project over:

## 1. Werkende ontwikkelomgeving

- Next.js project
- TypeScript
- Git
- GitHub repository
- VS Code configuratie

---

## 2. Logische projectstructuur

De projectstructuur sluit aan op de architectuur.

Onder andere:

```text
docs/
src/

    app/
    components/
    core/
    db/
    modules/
```

Iedere map heeft een duidelijke verantwoordelijkheid.

---

## 3. Eerste Core

De eerste onderdelen van de generieke core zijn aanwezig.

Nog zonder functionele implementatie.

Voorbereiding voor onder andere:

- KnowledgeProvider
- boomstructuren
- objectmodel
- relatiemodel
- waardenmodel

---

## 4. Eerste KnowledgeProvider

De eerste versie van de KnowledgeProvider wordt geïntroduceerd.

Deze vormt vanaf nu het centrale toegangspunt tot alle kennis.

De implementatie mag nog grotendeels leeg zijn.

De architectuur staat centraal.

---

## 5. Werkende applicatie

De applicatie draait:

- lokaal;
- op Vercel;
- op PC;
- op tablet;
- op smartphone.

De nadruk ligt op een stabiele ontwikkelketen.

---

## 6. Eerste Git-werkwijze

Git wordt vanaf deze sprint bewust onderdeel van het ontwikkelproces.

Onder andere:

- betekenisvolle commits;
- logische ontwikkelstappen;
- versiebeheer van documentatie;
- voorbereiding op sprint-afsluitingen.

---

# Nog niet in Sprint 1

Bewust uitgesteld:

- database-implementatie;
- Turso-koppeling;
- lokaal SQLite-gebruik;
- Drizzle-schema's;
- objectbeheer;
- relatiebeheer;
- UI-functionaliteit.

Deze volgen in latere sprints.

---

# Definition of Done

Sprint 1 is gereed wanneer:

- alle documentatie is bijgewerkt;
- de projectstructuur aanwezig is;
- de eerste KnowledgeProvider bestaat;
- de applicatie lokaal draait;
- de applicatie succesvol via Vercel bereikbaar is;
- de applicatie werkt op PC, tablet en smartphone;
- alle wijzigingen zijn vastgelegd in Git.

---

# Verwachte opbrengst

Na Sprint 1 beschikt het project over een stabiele, gedeelde basis waarop de verdere ontwikkeling veilig en gecontroleerd kan plaatsvinden.

Vanaf Sprint 2 verschuift de nadruk van infrastructuur naar het kennismodel.

---

# Wijzigingsgeschiedenis

## v0.1

- Eerste versie van Sprint 1.
- Ontwikkeldoelen vastgelegd.
- Deploy via Vercel opgenomen.
- Testen op meerdere apparaten opgenomen.
- Git als onderdeel van de sprint toegevoegd.