# ADR-001 – Opslag van Identifier in de database

## Status

Geaccepteerd

## Context

Het kennismodel gebruikt een `Identifier` bestaande uit:

* `namespace`
* `value`

Bijvoorbeeld:

```text
{
    namespace: "ks",
    value: "550e8400-e29b-41d4-a716-446655440000"
}
```

De vraag is of deze twee onderdelen ook als afzonderlijke databasekolommen moeten worden opgeslagen.

## Besluit

In de kennisdatabase wordt een identifier opgeslagen als **één primaire sleutel**.

Voorbeelden:

```text
ks:550e8400-e29b-41d4-a716-446655440000

gbif:2435098

nsr:123456
```

De database kent uitsluitend deze volledige identifier.

Het domeinmodel (`Identifier`) blijft onveranderd bestaan.

De omzetting tussen database-opslag en domeinmodel is de verantwoordelijkheid van de `KnowledgeStore`.

## Motivatie

* SQLite en Turso kunnen efficiënter werken met één primaire sleutel.
* Indexen blijven kleiner.
* Verwijzingen bestaan uit één kolom.
* Het domeinmodel blijft onafhankelijk van de opslagtechniek.
* De interne vorm van een identifier kan later wijzigen zonder gevolgen voor de rest van het systeem.

## Gevolgen

Het kennismodel blijft werken met:

```typescript
Identifier {
    namespace
    value
}
```

De database werkt uitsluitend met:

```text
id TEXT PRIMARY KEY
```

Hiermee blijft de opslaglaag volledig losgekoppeld van het domeinmodel.
