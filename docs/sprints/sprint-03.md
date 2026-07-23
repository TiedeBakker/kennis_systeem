# Sprint 3

Ik zou hem bewust heel strak houden.

## Stap 3.1 — Database-infrastructuur
- Drizzle installeren
- Turso-driver
- SQLite-driver
- src/db/
- schema.ts
- eerste migratie

Nog geen KnowledgeStore, alleen infrastructuur.

## Stap 3.2 — Eerste databaseschema

Nu afgeleid van het kennismodel:
- objects
- relations
- relation_values
- parameters
- parameter_values

Met de samengestelde identifier als primaire sleutel:
- ks:550e8400-e29b-41d4-a716-446655440000
## Stap 3.3 — SQLiteKnowledgeStore

Eerst alleen lokaal SQLite.

De homepage hoeft niet aangepast te worden.

Alleen:

const store = new SQLiteKnowledgeStore();

in plaats van

const store = new MemoryKnowledgeStore();

Dat is voor mij de echte lakmoesproef van de architectuur.

## Stap 3.4 — TursoKnowledgeStore

Vrijwel dezelfde implementatie.

Daarmee kunnen lokaal en online dezelfde kennisstructuur gebruiken.

## Stap 3.5 — Wisselen van store

Bijvoorbeeld via configuratie:

Memory

SQLite

Turso

zonder één regel in de homepage of provider te wijzigen.

Eén kleine aanvulling

## Ik zou in Sprint 3 ook meteen een mapstructuur voor de database vastleggen:

src/
  db/
    schema/
      schema.ts
    migrations/
    client.ts

Dan ligt de infrastructuur vanaf het begin netjes.

Ik denk overigens dat we zojuist een belangrijk punt hebben bereikt. Tot nu toe hebben we het kennismodel gebouwd. Vanaf Sprint 3 bouwen we eigenlijk de kennisdatabase. Dat voelt voor mij als het begin van de volgende fase van het project.