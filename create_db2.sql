CREATE TABLE IF NOT EXISTS `users` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `acct_created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_login` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `first_name` varchar(100),
  `last_name` varchar(100),
  `username` varchar(100),
  PRIMARY KEY (`user_id`),
  UNIQUE KEY (`username`)
);

CREATE TABLE IF NOT EXISTS `Maps` (
  `map_id` int(11) NOT NULL AUTO_INCREMENT,
  `map_name` varchar(100) DEFAULT NULL,
  `map_pmc_name` varchar(100) DEFAULT NULL,
  `map_path` varchar(200) DEFAULT NULL,
  `quest` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`map_id`)
);

CREATE TABLE IF NOT EXISTS `Point of Interest`(
	`X_coord` DECIMAL(8,6) NOT NULL,
    `Y_coord` DECIMAL(8,6) NOT NULL,
    `quest` varchar(30) NULL,
    `wikilink` varchar(100),
    `point_of_interest` varchar(100),
    `map_id` int(11),
    FOREIGN KEY(`map_id`) references `Maps`(`map_id`)
);