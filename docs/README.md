# KennisSysteem

**Status:** Werkversie
**Versie:** 0.1
**Laatst bijgewerkt:** 19 juli 2026

---

## Doel

Het KennisSysteem is een generiek kennissysteem waarin kennis duurzaam wordt vastgelegd, beheerd en ontsloten.

Museumcollectiebeheer vormt de eerste toepassing, maar de architectuur is nadrukkelijk generiek opgezet zodat ook andere kennisdomeinen kunnen worden ondersteund.

---

## Uitgangspunten

Het project is gebaseerd op een klein aantal fundamentele principes:

* De gebruiker staat centraal.
* Kennis staat centraal.
* De architectuur is modulair.
* De core blijft generiek.
* Opslag is een implementatiedetail.
* Documentatie gaat vóór implementatie.

Deze principes zijn verder uitgewerkt in de **Grondwet**.

---

## Projectstructuur

```text
docs/           Projectdocumentatie
src/
    app/        Next.js applicatie
    core/       Generieke functionaliteit
    db/         Databaselaag
    modules/    Zelfstandige modules
    components/ Gedeelde UI-componenten
```

---

## Documentatie

| Document                | Beschrijving                      |
| ----------------------- | --------------------------------- |
| `grondwet.md`           | Fundamentele ontwerpprincipes     |
| `architectuur.md`       | Logische opbouw van het systeem   |
| `ontwikkelafspraken.md` | Werkwijze tijdens de ontwikkeling |
| `database.md`           | Datamodel en opslagarchitectuur   |
| `roadmap.md`            | Ontwikkelplanning                 |
| `git.md`                | Afspraken over versiebeheer       |

---

## Ontwikkelfilosofie

Het project groeit iteratief.

Iedere stap is:

* klein;
* zelfstandig te begrijpen;
* toetsbaar;
* volledig gedocumenteerd.

Belangrijke ontwerpbeslissingen worden eerst vastgelegd in de documentatie en pas daarna geïmplementeerd.

---

## Status

Dit document vormt de toegang tot het project.

De inhoud blijft bewust compact en verwijst voor verdere details naar de afzonderlijke projectdocumenten.

---

## Wijzigingsgeschiedenis

### v0.1

* Eerste werkversie.
* Projectdoel en uitgangspunten vastgelegd.
* Documentatiestructuur opgenomen.
