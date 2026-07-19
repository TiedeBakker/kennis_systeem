/**
 * Timestamp
 *
 * Een absoluut tijdstip binnen het KennisSysteem.
 *
 * Een Timestamp vertegenwoordigt één exact moment
 * waarop kennis is vastgelegd, gewijzigd of geldig is.
 *
 * De interne representatie is een ISO 8601 datum/tijd-string
 * in UTC.
 *
 * Daardoor is een Timestamp onafhankelijk van:
 * - platform;
 * - database;
 * - locatie;
 * - tijdzone;
 * - zomer-/wintertijd;
 * - gebruikte kalender.
 *
 * Presentatie aan de gebruiker vindt altijd plaats
 * door conversie vanuit dit absolute tijdstip.
 */
export type Timestamp = string;