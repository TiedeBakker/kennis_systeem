import type { Timestamp } from "./Timestamp";

/**
 * Validity
 *
 * Beschrijft de geldigheid van kennis.
 *
 * Kennis is geldig vanaf 'validFrom' tot en met 'validUntil'.
 *
 * Wanneer validFrom en validUntil gelijk zijn,
 * beschrijft de kennis één exact moment.
 *
 * Wanneer validUntil ontbreekt,
 * loopt de geldigheid onbeperkt door.
 */
export interface Validity {
  validFrom: Timestamp;
  validUntil?: Timestamp;
}