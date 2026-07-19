/**
 * UUID
 *
 * Een UUID is de permanente identiteit van een entiteit
 * binnen het KennisSysteem.
 *
 * UUID's veranderen nooit.
 * Inventarisnummers, namen of andere identificaties
 * kunnen wijzigen en worden daarom als waarden vastgelegd.
 * 
 * Een UUID identificeert exact één entiteit binnen het KennisSysteem. 
 * Daardoor kan iedere verwijzing naar een UUID altijd ondubbelzinnig 
 * worden gevolgd, ongeacht of de entiteit een object, relatie 
 * of een andere identificeerbare kennisentiteit is.
 */

export type UUID = string;