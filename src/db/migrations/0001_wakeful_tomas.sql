CREATE TABLE `object_types` (
	`id` text PRIMARY KEY NOT NULL,
	`label` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `units` (
	`id` text PRIMARY KEY NOT NULL,
	`label` text NOT NULL,
	`symbol` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `value_types` (
	`id` text PRIMARY KEY NOT NULL,
	`label` text NOT NULL
);
--> statement-breakpoint
ALTER TABLE `objects` ADD `valid_from` text;--> statement-breakpoint
ALTER TABLE `objects` ADD `valid_to` text;--> statement-breakpoint
ALTER TABLE `parameter_values` ADD `valid_from` text;--> statement-breakpoint
ALTER TABLE `parameter_values` ADD `valid_to` text;--> statement-breakpoint
ALTER TABLE `parameters` ADD `value_type_id` text REFERENCES value_types(id);--> statement-breakpoint
ALTER TABLE `parameters` ADD `unit_id` text REFERENCES units(id);--> statement-breakpoint
ALTER TABLE `parameters` ADD `valid_from` text;--> statement-breakpoint
ALTER TABLE `parameters` ADD `valid_to` text;--> statement-breakpoint
ALTER TABLE `relation_values` ADD `valid_from` text;--> statement-breakpoint
ALTER TABLE `relation_values` ADD `valid_to` text;