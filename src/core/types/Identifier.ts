/**
 * Identifier
 *
 * Unieke identiteit van een kennisentiteit.
 *
 * De combinatie (namespace, value)
 * is binnen het KennisSysteem uniek.
 *
 * Voorbeelden:
 *
 * ks    : 550e8400-e29b-41d4-a716-446655440000
 * gbif  : 2480498
 * nsr   : 123456
 * wikidata : Q146
 */
export interface Identifier {
  readonly namespace: string;
  readonly value: string;
}