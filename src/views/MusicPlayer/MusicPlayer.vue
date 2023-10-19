<script setup lang="ts"></script>

<template>
  <div class="music-player-container">
    <!-- 歌词 -->
    <div class="lyrics-container">What was I made for</div>
    <!-- MusicPlayerCard 音乐播放器主体 -->
    <main class="music-player-card-container">
      <!-- Card -->
      <div class="music-player-card">
        <img src="@/assets/musicCover/cover-1.jpg" alt="the album cover" class="album-cover" />
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped module>
.music-player-container {
  background: url('@/assets/bgPicture/cool-background(2).png') no-repeat center / cover;
  height: 100vh;
  width: auto;

  //album cover
}
</style>
