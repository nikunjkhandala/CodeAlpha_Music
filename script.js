const audioPlayer = document.getElementById("audioPlayer");
      const playPauseBtn = document.getElementById("playPauseBtn");
      const songTitle = document.getElementById("songTitle");
      const artist = document.getElementById("artist");

      // Playlist
      const playlist = [
        {
          title: "Sample Song 1",
          artist: "Artist 1",
          src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        },
        {
          title: "Sample Song 2",
          artist: "Artist 2",
          src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        },
        {
          title: "Sample Song 3",
          artist: "Artist 3",
          src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        },
      ];

      let currentSongIndex = 0;

      // Load the initial song
      function loadSong(index) {
        const song = playlist[index];
        audioPlayer.src = song.src;
        songTitle.textContent = song.title;
        artist.textContent = song.artist;
        audioPlayer.load();
      }

      // Play or pause the song
      function playPause() {
        if (audioPlayer.paused) {
          audioPlayer.play();
          playPauseBtn.textContent = "⏸";
        } else {
          audioPlayer.pause();
          playPauseBtn.textContent = "▶️";
        }
      }

      // Play the next song
      function nextSong() {
        currentSongIndex = (currentSongIndex + 1) % playlist.length;
        loadSong(currentSongIndex);
        if (!audioPlayer.paused) {
          audioPlayer.play();
        }
      }

      // Play the previous song
      function prevSong() {
        currentSongIndex =
          (currentSongIndex - 1 + playlist.length) % playlist.length;
        loadSong(currentSongIndex);
        if (!audioPlayer.paused) {
          audioPlayer.play();
        }
      }

      // Initialize the player with the first song
      loadSong(currentSongIndex);

      // Update play/pause button when the song ends
      audioPlayer.addEventListener("ended", () => {
        playPauseBtn.textContent = "▶️";
        nextSong();
      });