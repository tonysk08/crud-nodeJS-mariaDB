CREATE TABLE `customers` (
	`id` INT(6) NOT NULL AUTO_INCREMENT,
	`Name` VARCHAR(50) NOT NULL DEFAULT '0' COLLATE 'utf8_spanish_ci',
	`address` VARCHAR(100) NOT NULL DEFAULT '0' COLLATE 'utf8_spanish_ci',
	`phone` VARCHAR(15) NOT NULL DEFAULT '0' COLLATE 'utf8_spanish_ci',
	PRIMARY KEY (`id`)
)
COLLATE='utf8_spanish_ci'
ENGINE=InnoDB
;
