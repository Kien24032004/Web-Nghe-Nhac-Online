CREATE DATABASE nghenhac;
USE nghenhac;


DROP TABLE IF EXISTS `artists`;

CREATE TABLE `artists` (
  `artist_id` VARCHAR(255) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `bio` TEXT,
  `image` VARCHAR(255),
  `birth_date` DATE, 
  PRIMARY KEY (`artist_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `artists` (`artist_id`, `name`, `bio`, `image`, `birth_date`) VALUES 
('ART001', 'Hương Tràm', 'Hương Tràm là một ca sĩ nổi tiếng với các bài hát ballad.', 'huong_tram.jpg', '1995-12-03'),
('ART002', 'Ngọc Anh', 'Ngọc Anh là một nữ ca sĩ có tiếng trong làng nhạc Việt.', 'ngoc_anh.jpg', '1983-11-05'),
('ART003', 'Sơn Tùng M-TP', 'Sơn Tùng M-TP là một ca sĩ nổi tiếng với những ca khúc hit.', 'son_tung_mtp.jpg', '1994-07-05'),
('ART004', 'Noo Phước Thịnh', 'Noo Phước Thịnh là ca sĩ và nhạc sĩ nổi bật của Vpop.', 'noo_phuoc_thinh.jpg', '1988-12-18'),
('ART005', 'Mỹ Tâm', 'Mỹ Tâm là một trong những nữ ca sĩ hàng đầu tại Việt Nam.', 'my_tam.jpg', '1981-01-16'),
('ART006', 'Duy Mạnh', 'Duy Mạnh là ca sĩ, nhạc sĩ nổi tiếng với các ca khúc tình yêu.', 'duy_manh.jpg', '1977-11-01'),
('ART007', 'Hà Anh Tuấn', 'Hà Anh Tuấn là ca sĩ nổi bật với các bài hát trữ tình.', 'ha_anh_tuan.jpg', '1984-12-17'),
('ART008', 'Lê Bảo Bình', 'Lê Bảo Bình là ca sĩ trẻ với các ca khúc ballad nhẹ nhàng.', 'le_bao_binh.jpg', '1990-12-29'),
('ART009', 'Jack', 'Jack là một ca sĩ nổi tiếng với các ca khúc âm nhạc sáng tạo.', 'jack.jpg', '1997-02-12'),
('ART010', 'Lâm Chấn Khang', 'Lâm Chấn Khang là ca sĩ nổi tiếng với các ca khúc về tình yêu.', 'lam_chanh_khang.jpg', '1986-06-14');

DROP TABLE IF EXISTS `songs`;

CREATE TABLE `songs` (
  `title` VARCHAR(255) NOT NULL,
  `artist_id` VARCHAR(255) NOT NULL,
  `file_path` VARCHAR(255) NOT NULL,
  `duration` TIME NOT NULL,
  `release_date` DATE,
  FOREIGN KEY (`artist_id`) REFERENCES `artists`(`artist_id`) ON DELETE CASCADE,
  PRIMARY KEY (`title`, `artist_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `songs` (`title`, `artist_id`, `file_path`, `duration`, `release_date`) VALUES
('All Falls Down', 'ART003', 'music/1.mp3', '00:03:00', '2024-11-19'),
('Faded', 'ART003', 'music/2.mp3', '00:03:00', '2024-11-19'),
('AVANGARD', 'ART009', 'music/3.mp3', '00:03:00', '2024-11-19'),
('Bát Hoang Quyết', 'ART001', 'music/4.mp3', '00:03:00', '2024-11-19'),
('Be The One', 'ART008', 'music/5.mp3', '00:03:00', '2024-11-19'),
('Celestial Symphony', 'ART006', 'music/6.mp3', '00:03:00', '2024-11-19'),
('Hero  Cash Cash ft Christina Perri Lyrics  Vietsub  Top Tik Tok', 'ART007', 'music/7.mp3', '00:03:00', '2024-11-19'),
('Lost Sky  Where We Started', 'ART005', 'music/8.mp3', '00:03:00', '2024-11-19'),
('TINH VỆ', 'ART004', 'music/9.mp3', '00:03:00', '2024-11-19'),
('ĐẢO NGHỊCH', 'ART002', 'music/10.mp3', '00:03:00', '2024-11-19'),
('Heroes Tonight', 'ART010', 'music/11.mp3', '00:03:00', '2024-11-19'),
('Nếu Ví Anh Như  Đông', 'ART003', 'music/12.mp3', '00:03:00', '2024-11-19'),
('Mortals  Warriyo', 'ART006', 'music/13.mp3', '00:03:00', '2024-11-19'),
('Light It Up', 'ART007', 'music/14.mp3', '00:03:00', '2024-11-19'),
('Sky High', 'ART004', 'music/15.mp3', '00:03:00', '2024-11-19'),
('AURA', 'ART002', 'music/16.mp3', '00:03:00', '2024-11-19'),
('Invincible', 'ART005', 'music/17.mp3', '00:03:00', '2024-11-19'),
('Cartoon Jéja  On & On', 'ART009', 'music/18.mp3', '00:03:00', '2024-11-19'),
('TrustLast', 'ART010', 'music/19.mp3', '00:03:00', '2024-11-19'),
('WBX WBoiled Extreme', 'ART008', 'music/20.mp3', '00:03:00', '2024-11-19'),
('Give Me Your Love', 'ART001', 'music/21.mp3', '00:03:00', '2024-11-19');


DROP TABLE IF EXISTS `comments`;

CREATE TABLE `comments` (
  `song_title` VARCHAR(255) NOT NULL,
  `user_name` VARCHAR(255),
  `comment_text` TEXT,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`song_title`) REFERENCES `songs`(`title`) ON DELETE CASCADE,
  PRIMARY KEY (`song_title`, `user_name`, `created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
	
INSERT INTO `comments` (`song_title`, `user_name`, `comment_text`, `created_at`) VALUES
('All Falls Down', 'nguyen_vana', 'Bài hát rất hay và cảm động, tôi rất thích Alan Walker!', '2024-11-17 10:00:00'),
('Faded', 'le_minhc', 'Faded luôn là bài hát yêu thích của tôi, rất dễ nghe!', '2024-11-17 10:15:00'),
('AVANGARD', 'ngoc_thib', 'Bài hát này có giai điệu rất lạ, tôi rất thích!', '2024-11-17 10:30:00'),
('Bát Hoang Quyết', 'bao_binhl', 'Bài hát mang lại cảm xúc rất mạnh mẽ, lời bài hát rất ý nghĩa.', '2024-11-17 10:45:00'),
('Be The One', 'lam_khangl', 'Be The One rất dễ chịu, thích hợp để thư giãn.', '2024-11-17 10:55:00'),
('Celestial Symphony', 'tran_thib', 'Âm nhạc trong bài này rất huyền bí, tôi yêu thích những giai điệu này.', '2024-11-17 11:05:00'),
('TINH VỆ', 'bao_binhl', 'TINH VỆ là một bài hát mạnh mẽ và đầy cảm xúc, rất hay.', '2024-11-17 11:35:00'),
('ĐẢO NGHỊCH', 'jackson_j', 'Một bài hát tuyệt vời để khởi động ngày mới!', '2024-11-17 11:40:00'),
('Heroes Tonight', 'ngoc_thib', 'Một bài hát tuyệt vời cho các buổi party, năng động và đầy cảm hứng!', '2024-11-17 11:50:00'),
('Light It Up', 'jackson_j', 'Một bài hát rất hay, luôn khiến tôi có động lực làm việc!', '2024-11-17 12:20:00'),
('Sky High', 'duy_baol', 'Bài hát rất nhẹ nhàng và dễ chịu, rất thích hợp khi thư giãn.', '2024-11-17 12:30:00'),
('AURA', 'bao_binhl', 'Một bài hát mang lại cảm giác rất mạnh mẽ, thật sự rất tuyệt vời.', '2024-11-17 12:40:00'),
('Invincible', 'hoang_phama', 'Bài hát này rất mạnh mẽ, tạo cảm hứng để vượt qua thử thách!', '2024-11-17 12:50:00'),
('TrustLast', 'tran_thib', 'Bài hát này rất dễ nghe, tôi thích cách nó truyền tải thông điệp!', '2024-11-17 13:10:00'),
('WBX WBoiled Extreme', 'nguyen_vana', 'Bài hát rất đặc biệt, thích hợp cho những người yêu thích âm nhạc năng động.', '2024-11-17 13:20:00'),
('Give Me Your Love', 'hoang_phama', 'Một bài hát lãng mạn và cảm động, rất thích hợp để nghe cùng người yêu.', '2024-11-17 13:30:00');

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `username` VARCHAR(255) NOT NULL UNIQUE,
  `email` VARCHAR(255) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  `role` ENUM('user', 'admin') NOT NULL DEFAULT 'user',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `users` (`username`, `email`, `password`, `role`, `created_at`) VALUES
('nguyen_vana', 'nguyen_vana@example.com', '1', 'user', '2024-11-17'),
('tran_thib', 'tran_thib@example.com', '1', 'user', '2024-11-17'),
('le_minhc', 'le_minhc@example.com', '1', 'user', '2024-11-17'),
('hoang_phama', 'hoang_phama@example.com', '1', 'user', '2024-11-17'),
('ngoc_thib', 'ngoc_thib@example.com', '1', 'user', '2024-11-17'),
('duy_baol', 'duy_baol@example.com', '1', 'user', '2024-11-17'),
('tuan_hoang', 'tuan_hoang@example.com', '1', 'user', '2024-11-17'),
('bao_binhl', 'bao_binhl@example.com', '1', 'user', '2024-11-17'),
('jackson_j', 'jackson_j@example.com', '1', 'user', '2024-11-17'),
('lam_khangl', 'lam_khangl@example.com', '1', 'user', '2024-11-17'),
('admin_user1', 'admin1@example.com', '1', 'admin', '2024-11-17'),
('admin_user2', 'admin2@example.com', '1', 'admin', '2024-11-17');