<script setup lang="ts"></script>

<template>
  <div class="music-player-container">
    <!-- 歌词 -->
    <div class="lyrics-container">What was I made for</div>
    <!-- MusicPlayerCard 音乐播放器主体 -->
    <main class="music-player-card-container">
      <!-- Card -->
      <div class="music-player-card">
        <div class="card-left">
          <img src="@/assets/musicCover/cover-1.jpg" alt="the album cover" class="album-cover" />
        </div>

        <div class="card-right"></div>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.music-player-container {
  position: relative;

  background: url('@/assets/bgPicture/cool-background(2).png') no-repeat center / cover;
  height: 100vh;
  width: 100vw;

  .music-player-card-container {
    position: absolute;
    bottom: 1rem;
    left: calc(50% - 13rem);
    .music-player-card {
      position: relative;
      width: 26rem;
      height: 7rem;
      border-radius: 1rem;
      background: #e0e0e0;

      //album cover
      .album-cover {
        position: absolute;
        top: -1rem;
        left: 2rem;
        height: 6rem;
        width: 6rem;
        border-radius: 1rem;
      }
    }
  }
}
</style>
