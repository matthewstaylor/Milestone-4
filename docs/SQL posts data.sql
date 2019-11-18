#
# TABLE STRUCTURE FOR: post
#

DROP TABLE IF EXISTS `post`;

CREATE TABLE `post` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `author` char(9) COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `title` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `content` text COLLATE utf8_unicode_ci NOT NULL,
  `type` enum('announcement','event','issue') COLLATE utf8_unicode_ci NOT NULL,
  `votes` int(10) unsigned DEFAULT 0,
  `status` enum('pending','in-progress','solved') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'pending',
  `created` timestamp NOT NULL DEFAULT current_timestamp(),
  `solved` datetime DEFAULT NULL,
  `inProgress` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `image` (`image`),
  KEY `author` (`author`),
  CONSTRAINT `post_ibfk_1` FOREIGN KEY (`author`) REFERENCES `user` (`z_number`)
) ENGINE=InnoDB AUTO_INCREMENT=201 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

