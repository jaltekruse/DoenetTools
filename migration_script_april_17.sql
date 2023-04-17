alter table course add column `portfolioCourseForUserId` char(21) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL;


alter table course_content add column  `imagePath` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL;
alter table course_content add column  `learningOutcomes` json DEFAULT NULL;
alter table course_content add column  `addToPrivatePortfolioDate` timestamp NULL DEFAULT NULL;
alter table course_content add column  `addToPublicPortfolioDate` timestamp NULL DEFAULT NULL;
alter table course_content add column  `isBanned` INT(1) NULL DEFAULT '0';


CREATE TABLE IF NOT EXISTS `doenet_local`.`promoted_content_group` (
  `promotedGroupId` INT NOT NULL AUTO_INCREMENT,
  `groupName` VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `currentlyFeatured` INT(1) NULL,
  `homepage` INT(1) NULL,
  PRIMARY KEY (`promotedGroupId`),
  UNIQUE INDEX `groupName_UNIQUE` (`groupName` ASC) VISIBLE)
ENGINE = InnoDB;



CREATE TABLE IF NOT EXISTS `doenet_local`.`promoted_content` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `doenetId` VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `sortOrder` VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `promotedGroupId` INT NOT NULL,
  PRIMARY KEY (`id`, `promotedGroupId`),
  INDEX `fk_promoted_content_promoted_content_groups1_idx` (`promotedGroupId` ASC) VISIBLE,
  CONSTRAINT `fk_promoted_content_promoted_content_groups1`
    FOREIGN KEY (`promotedGroupId`)
    REFERENCES `doenet_local`.`promoted_content_group` (`promotedGroupId`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



CREATE TABLE IF NOT EXISTS `doenet_local`.`community_admin` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `userId` char(21) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;
