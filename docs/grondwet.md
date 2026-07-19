# Grondwet van het KennisSysteem

**Status:** Werkversie  
**Versie:** 0.2  
**Laatst bijgewerkt:** 19 juli 2026

---

# 1. Doel

Het KennisSysteem is een generiek systeem voor het duurzaam vastleggen, beheren en ontsluiten van kennis.

De eerste toepassing is museumcollectiebeheer, maar de architectuur is ontworpen zodat ook andere kennisdomeinen zonder fundamentele wijzigingen kunnen worden ondersteund.

---

# 2. De gebruiker staat centraal

Het KennisSysteem is een hulpmiddel voor mensen.

De architectuur, implementatie en gebruikersinterface zijn dienend aan de gebruiker en hebben uitsluitend waarde wanneer zij bijdragen aan het begrijpelijk, betrouwbaar en duurzaam vastleggen, beheren en ontsluiten van kennis.

Kennis is het middelpunt van het systeem; de gebruiker is het middelpunt van het ontwerp.

---

# 3. Kennis staat centraal

Alle informatie wordt vastgelegd als kennis.

Objecten, relaties en waarden vormen gezamenlijk één samenhangend kennismodel.

Nieuwe toepassingen worden gerealiseerd door nieuwe kennis toe te voegen, niet door het fundament van het systeem te wijzigen.

---

# 4. Scheiding van verantwoordelijkheden

Iedere component heeft één duidelijke verantwoordelijkheid.

Modules bevatten toepassingsspecifieke functionaliteit.

De core bevat generieke functionaliteit.

De database verzorgt uitsluitend de opslag.

Presentatie en gebruikersinterface staan los van het kennismodel.

---

# 5. Modulariteit

Het systeem bestaat uit zelfstandig ontwikkelbare modules.

Modules zijn onderling niet afhankelijk.

Gemeenschappelijke functionaliteit behoort in de core.

Wanneer functionaliteit door meerdere modules nodig is, wordt zij verplaatst naar de core of bewust als zelfstandige implementatie onderhouden.

---

# 6. Stabiliteit

Afhankelijkheden lopen uitsluitend naar stabielere onderdelen van het systeem.

De stabiliteit loopt daarom in omgekeerde richting van de afhankelijkheden.

Nieuwe functionaliteit mag bestaande stabiele onderdelen niet onnodig verstoren.

---

# 7. Tijd is onderdeel van kennis

Kennis bestaat altijd binnen een geldigheid.

Die geldigheid kan een periode zijn, maar ook een enkel moment.

Historie wordt bewaard door nieuwe kennis toe te voegen, niet door bestaande kennis te overschrijven.

---

# 8. Duurzaamheid

Het systeem is ontworpen voor langdurig gebruik.

Technieken, databases en gebruikersinterfaces mogen veranderen zonder dat het kennismodel verloren gaat.

Nieuwe inzichten, toepassingsdomeinen en technologieën zijn welkom wanneer zij aantoonbaar bijdragen aan de gebruiker, het kennismodel of de duurzaamheid van het systeem.

Technologie is een middel, nooit een doel op zich.

---

# 9. Kwaliteit boven snelheid

Ontwikkeling verloopt in kleine, toetsbare stappen.

Documentatie gaat vóór implementatie.

Iedere stap wordt begrepen voordat zij wordt geïmplementeerd.

Na iedere stap wordt teruggekeerd naar de architectuur om te toetsen of de gekozen oplossing nog past binnen de grondbeginselen.

---

# 10. Evolutie

Het KennisSysteem is nooit af.

Nieuwe toepassingen, technieken en inzichten mogen leiden tot uitbreiding van het systeem, zolang de fundamentele uitgangspunten van deze Grondwet behouden blijven.

Verandering is een onderdeel van duurzaamheid.

---

# Status

Deze Grondwet beschrijft de fundamentele uitgangspunten van het KennisSysteem.

Architectuur en implementatie zijn altijd ondergeschikt aan deze uitgangspunten.

---

# Wijzigingsgeschiedenis

## v0.2

- De gebruiker expliciet centraal geplaatst.
- Tijd als fundamenteel onderdeel van kennis opgenomen.
- Stabiliteitsprincipe verduidelijkt.
- Duurzaamheid uitgebreid met nieuwe technologie en toepassingsdomeinen.
- Ontwikkelmethode als fundamenteel principe opgenomen.

## v0.1

- Eerste werkversie.