CREATE TABLE `bills` (
	`id` integer PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`content` text,
	`amount` real,
	`userId` text,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updated_at` integer
);
