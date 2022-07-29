<template>
  <div id="ToTal">
    <div class="WrapperCertificate">
      <LiveInCard />
      <img
        class="buttomImage"
        src="@/assets/waves/livestream-wave6.svg"
        alt="bottomimg"
      />
      <ShotBottom style="right: 4%; top: 50%; width: 80px; height: 80px" />
    </div>
    <BackButton
      style="position: absolute; right: 1%; bottom: 2%; z-index: 10000"
    />
  </div>
</template>

<script>
import LiveInCard from "./LiveInCard.vue";
import BackButton from "@/components/button/BackButton.vue";
import ShotBottom from "@/components/button/ShotBottom.vue";
export default {
  components: {
    LiveInCard,
    BackButton,
    ShotBottom,
  },
};
</script>

<style scoped>
#Total {
  display: relative;
}
.WrapperCertificate {
  position: relative;
  width: 100%;
  height: 800px;
  max-height: 1000px;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
}
.buttomImage {
  width: 100%;
  position: absolute;
  bottom: 0%;
}
</style>
