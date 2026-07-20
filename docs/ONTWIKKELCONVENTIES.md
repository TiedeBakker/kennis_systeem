# Ontwikkelconventies

## Doel

Dit document beschrijft praktische ontwikkelafspraken die tijdens de bouw van het KennisSysteem zijn ontstaan.

De conventies ondersteunen de architectuur en zorgen voor een consistente codebasis.

---

## 1. Loketprincipe

Iedere map die functionaliteit naar buiten aanbiedt, heeft precies één publiek loket:

`index.ts`

Alle publieke exports verlopen via dit loket.

Alles wat niet via het loket wordt geëxporteerd, is intern.

---

## 2. Afhankelijkheidsprincipe

Iedere laag kent alleen het loket van de laag eronder.

Interne bestanden van andere lagen worden nooit rechtstreeks geïmporteerd.

---

## 3. Expliciete exports

Publieke types worden expliciet geëxporteerd.

Gebruik:

export type { Identifier } from "./Identifier";

Niet:

export * from "./Identifier";

---

## 4. Kleine stappen

Nieuwe functionaliteit wordt in kleine, toetsbare stappen ontwikkeld.

Na iedere stap:

- compileren;
- testen;
- committen.

---

## 5. Begrijpen vóór invoeren

Nieuwe code wordt pas opgenomen nadat:

- de bedoeling duidelijk is;
- de architectuur klopt;
- de functionaliteit is getoetst.

## Next.js

Tijdens de ontwikkelfase worden pagina's die de volledige keten testen expliciet dynamisch gemaakt.

```typescript
export const dynamic = "force-dynamic";

Ik zou deze afspraak zelfs opnemen in onze ontwikkelconventies:

Relaties zijn gericht. Ze worden altijd geïnterpreteerd als:

source --type--> target