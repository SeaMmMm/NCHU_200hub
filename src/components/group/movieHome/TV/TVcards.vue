<template>
  <div @click="goWatch" class="card">
    <!-- 封面 -->
    <div class="card-outside">
      <div class="card-outside-container">
        <!-- 正面 -->
        <div class="card-front">
          <div class="card-front-top">
            <img style="width: 300px; height: 200px" :src="url" alt="img" />
          </div>
          <div
            :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }"
            class="card-front-bot"
          >
            {{ name }}
          </div>
        </div>
        <!-- 反面 -->
        <div class="card-back">
          <video class="video-container" autoplay muted loop></video>
        </div>
      </div>
    </div>
    <!-- 封底 -->
    <div class="card-inside">
      <div class="card-inside-container">
        <div
          :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }"
          class="movieTitle"
        >
          {{ name }}
        </div>
        <div
          :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }"
          class="movieDescription"
        >
          {{ description }}
        </div>
        <div
          :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }"
          class="watchButton"
        >
          点击观看
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["url", "name", "description", "where"],
  methods: {
    goWatch() {
      this.$router.push(this.where);
    },
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  z-index: 1000;
  cursor: pointer;
  width: 300px;
  height: 250px;
  transform: translate(-50%, -50%);
  transition: all 1s ease;
  background: radial-gradient(
    120% 154.37% at 100% 100%,
    rgba(51, 253, 241, 0.1) 0%,
    rgba(200, 96, 0, 0.1) 100%
  );
  border-radius: 30px;
}
.card-outside,
.card-inside {
  position: absolute;
  right: 0;
  width: 300px;
  height: 250px;
}
.card-outside {
  z-index: 100;
  perspective: 1000px;
}
.card-outside-container {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transform-origin: left;
  transition: all 1s ease;
}
.card:hover .card-outside-container {
  transform: rotateY(-180deg);
}
.card:hover {
  width: 600px;
}
.card-front,
.card-back {
  width: 100%;
  height: 100%;
  position: absolute;
  right: 0;
}
.card-front {
  background: radial-gradient(
    100% 128.38% at 100% 100%,
    rgba(51, 168, 253, 0.2) 0%,
    rgba(76, 0, 200, 0.2) 100%
  );
  backdrop-filter: blur(40px);
  border-radius: 20px;
}
.card-front-top {
  width: 100%;
  /*修改图片大小*/
  height: 200px;
  background: linear-gradient(
    240.9deg,
    rgba(255, 255, 255, 0.6) 0.04%,
    rgba(255, 255, 255, 0) 100%
  );
  filter: drop-shadow(0px 30px 60px rgba(39, 77, 153, 0.1));
  backdrop-filter: blur(40px);
  border-radius: 20px;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 57% 90%, 50% 100%, 43% 90%, 0 90%);
}
.card-front-top img {
  width: 100%;
  height: 100%;
}
.card-front-bot {
  font-family: "Hannotate SC";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
}
.card-back {
  transform: rotateY(180deg);
}
.video-container {
  width: 100%;
  height: 100%;
  object-fit: cover;
  clip-path: polygon(0 0, 100% 0, 90% 50%, 100% 100%, 0 100%);
}
.card-inside {
  z-index: 99;
}
.card-inside-container {
  padding: 30px;
  display: grid;
  grid-template-rows: repeat(3, auto);
  align-items: center;
  justify-items: center;
  gap: 40px;
  .movieTitle {
    font-family: "Comfortaa";
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 28px;
    text-align: justify;
  }
  .movieDescription {
    font-family: "Hannotate SC";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
  }
  .watchButton {
    padding: 10px 30px;
    cursor: pointer;
    background: linear-gradient(
      180deg,
      rgba(24, 32, 79, 0.4) 0%,
      rgba(24, 32, 79, 0.25) 100%
    );
    border: 0.5px solid rgba(0, 0, 0, 0.3);
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(40px);
    border-radius: 30px;
    :hover {
      filter: hue-rotate(10deg) brightness(150%) saturate(120%);
    }
  }
}
</style>
