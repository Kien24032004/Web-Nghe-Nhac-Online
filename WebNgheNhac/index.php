<?php
session_start(); // Khởi tạo session

// Kiểm tra nếu người dùng chưa đăng nhập
if (!isset($_SESSION['username'])) {
    // Chuyển hướng về trang đăng nhập
    header("Location: index.html");
    exit(); // Dừng tiếp tục xử lý trang
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="style.css">
    <title>Music Website</title>
</head>
<body>
    <!-- Nội dung trang index.php của bạn sẽ ở đây -->
    <header>
        <div class="menu_side">
            <h1>Playlist</h1>
            <div class="playlist">
                <h4 class="active"><span></span><i class="bi bi-music-note-beamed"></i> Playlist</h4>
                <h4><span></span><i class="bi bi-music-note-beamed"></i> Last Listening</h4>
                <h4><span></span><i class="bi bi-music-note-beamed"></i> Recomended</h4>
            </div>
            <div class="menu_song">
                <!-- Các bài hát trong playlist -->
                <li class="songItem">
                    <span>01</span>
                    <img src="img/1.jpg" alt="">
                    <h5>All Falls Down <br>
                        <div class="subtitle">Alan Walker</div>
                    </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="1"></i>
                </li>
                <!-- Các bài hát khác -->
            </div>
        </div>

        <div class="song_side">
            <!-- Nội dung của trang -->
        </div>

        <div class="master_play">
            <!-- Các điều khiển phát nhạc -->
        </div>

    </header>
    <script src="app.js"></script>
</body>
</html>
