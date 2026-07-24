Stap 1 – Structuur neerzetten

We maken de definitieve mappenstructuur:
Jij noemt steeds:

Object
Relatie
Parameter

Dat zijn de drie fundamentele begrippen van je kennisarchitectuur.

Daarom zou ik in core de map niet models noemen maar entities. We introduceren daarmee nog geen KnowledgeEntity; we zeggen alleen dat Object, Relation en Parameter domeinentiteiten zijn.

core/
│
├── entities/
│     Object.ts
│     Relation.ts
│     Parameter.ts
│
├── valueObjects/
│     Identifier.ts
│     Validity.ts
│
├── types/
│     ObjectType.ts
│     RelationType.ts
│     ValueType.ts
│
└── index.ts

Vanaf nu bouwen we niet meer "ad hoc" bestanden.
Voor elk nieuw onderdeel volgen we steeds dezelfde volgorde:
  core
  repository
  service
  API
  UI

Stap 2a – core

We maken nu alleen:

core/
│
├── entities/
│     Object.ts
│
├── valueObjects/
│     Identifier.ts
│     Validity.ts
│
└── index.ts

Dat is alles.

Ik zou nog één regel toevoegen die ik voor de rest van het project wil aanhouden:

core kent nooit de database. De database kent wél core.

Dat betekent dat als we over een jaar besluiten om een andere opslagvorm of extra opslaglaag toe te voegen, de kern van je kennissysteem (core) onaangetast blijft. Voor een systeem dat bedoeld is om jarenlang mee te groeien, vind ik dat een heel sterk uitgangspunt.


## Stap 3 – Repository

Ik wil hier één belangrijke ontwerpkeuze maken, omdat die de rest van het project gaat bepalen.

Repository ≠ Drizzle-wrapper

Veel projecten maken een repository die nauwelijks meer doet dan:

db.select().from(objects)

Dat zou ik niet doen.

De repository is voor mij de vertaler tussen twee werelden:

core/Object
        ▲
        │
Repository
        │
        ▼
schema.objects

Hij kent dus beide modellen.

Ik zou beginnen met alleen de basis-CRUD.

src/
└── db/
    ├── repositories/
    │   └── objectRepository.ts
    │
    └── mappers/
        └── objectMapper.ts

Ik voeg bewust meteen een mapper toe.

Dat lijkt nu misschien overdreven, maar voorkomt dat straks overal in de code staat:

validity: {
    from: row.validFrom,
    to: row.validTo,
}

Dat hoort op één plek.

Alle CRUD voor Object.

Dat wordt ons referentievoorbeeld voor alle volgende repositories.

## Stap 4 – Service

Alle objectfunctionaliteit.

Ook dit wordt het sjabloon voor alle volgende services.
## Stap 5 – API

Alleen een dunne router.

## Stap 6 – UI

De bestaande ObjectBrowser en ObjectEditor aansluiten.