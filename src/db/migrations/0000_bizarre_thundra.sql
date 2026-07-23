
CREATE TABLE `objects` (
	`id` text PRIMARY KEY NOT NULL,
	`label` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `parameter_values` (
	`id` text PRIMARY KEY NOT NULL,
	`parameter_id` text NOT NULL,
	`object_id` text NOT NULL,
	`value` text NOT NULL,
	FOREIGN KEY (`parameter_id`) REFERENCES `parameters`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`object_id`) REFERENCES `objects`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `parameters` (
	`id` text PRIMARY KEY NOT NULL,
	`label` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `relation_values` (
	`id` text PRIMARY KEY NOT NULL,
	`relation_id` text NOT NULL,
	`source_id` text NOT NULL,
	`target_id` text NOT NULL,
	FOREIGN KEY (`relation_id`) REFERENCES `relations`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`source_id`) REFERENCES `objects`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`target_id`) REFERENCES `objects`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `relations` (
	`id` text PRIMARY KEY NOT NULL,
	`label` text NOT NULL
);
