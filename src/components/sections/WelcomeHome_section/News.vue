<template>
  <div class="WrapperNews">
    <NewsInformation />
    <div ref="cards" class="HoverCards">
      <TeamCard class="teamCard" />
      <FarmCard class="farmCard" ref="farmCard" />
    </div>
    <div class="cook" ref="cooks">
      <Cook ref="cookCard" />
    </div>
    <div class="Pick">
      <Pick ref="pickUp" />
    </div>
    <div class="hand" ref="pick">
      <Hand />
    </div>
  </div>
</template>

<script>
import NewsInformation from "@/components/group/welcomeHome/EventNews_Page/NewsInformation.vue";
import FarmCard from "@/components/group/welcomeHome/EventNews_Cards/FarmCard.vue";
import TeamCard from "@/components/group/welcomeHome/EventNews_Cards/TeamCard.vue";
import Cook from "@/components/group/welcomeHome/Cakes_Page/Cook.vue";
import Hand from "@/components/group/welcomeHome/Footer/Hand.vue";
import Pick from "@/components/group/welcomeHome/Information_Page/Pick.vue";
export default {
  data() {
    return {
      currentScroll: 0,
    };
  },
  components: {
    NewsInformation,
    FarmCard,
    TeamCard,
    Cook,
    Hand,
    Pick,
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("scroll", this.handleScroll02);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("scroll", this.handleScroll02);
  },
  methods: {
    handleScroll() {
      // console.log(this.currentScroll, this.$refs.cards.offsetTop + 150);
      this.currentScroll = window.pageYOffset; //表示当前滚动的位置
      if (this.currentScroll >= this.$refs.cards.offsetTop - 150) {
        if (
          this.currentScroll < this.$refs.cards.offsetTop + 800 &&
          document.body.clientWidth <= 900
        ) {
          this.$refs.farmCard.letDowm();
        } else if (
          this.currentScroll < this.$refs.cards.offsetTop + 1000 &&
          document.body.clientWidth > 900
        ) {
          this.$refs.farmCard.letDowm();
        }
      } else if (this.currentScroll >= this.$refs.cards.offsetTop + 560) {
        this.$refs.farmCard.letTop();
      } else {
        this.$refs.farmCard.letTop();
      }
    },
    handleScroll02() {
      this.currentScroll = window.pageYOffset; //表示当前滚动的位置
      if (
        this.currentScroll >= this.$refs.cooks.offsetTop - 400 &&
        this.currentScroll < this.$refs.cooks.offsetTop + 600 &&
        document.body.clientWidth > 900
      ) {
        this.$refs.cookCard.goRight();
      } else {
        this.$refs.cookCard.goBack();
      }
      // console.log(this.currentScroll, this.$refs.pick.offsetTop - 900);
      if (document.body.clientWidth <= 900) {
        if (
          this.currentScroll >= this.$refs.pick.offsetTop - 1400 &&
          this.currentScroll < this.$refs.pick.offsetTop - 900
        ) {
          this.$refs.pickUp.goLeft();
        } else {
          this.$refs.pickUp.goBack();
        }
      } else {
        if (
          this.currentScroll >= this.$refs.pick.offsetTop - 1900 &&
          this.currentScroll < this.$refs.pick.offsetTop - 800
        ) {
          this.$refs.pickUp.goBack();
        } else {
          this.$refs.pickUp.goLeft();
        }
      }
    },
  },
};
</script>

<style lang="scss" scped>
* {
  transition: 2s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.WrapperNews {
  background: linear-gradient(
    180deg,
    rgba(254, 208, 252, 0.3),
    rgba(250, 208, 200, 0.3)
  );
  border-radius: 150px;
  @media screen and (max-width: 900px) {
    border-radius: 20px;
  }
}
.HoverCards {
  display: grid;
  grid-template-rows: repeat(2, auto);
  align-items: center;
  justify-items: center;
  @media (max-width: 900px) {
    justify-items: center;
  }
  width: 100%;
  .teamCard {
    margin-top: 5%;
  }
  .farmCard {
    margin-top: -400px;
    @media (max-width: 900px) {
      margin-top: -120px;
    }
  }
}
.cook {
  display: grid;
  align-items: center;
  justify-items: center;
}
.Pick {
  margin-top: 15%;
  padding-left: 15.75%;
  @media (max-width: 900px) {
    display: grid;
    justify-items: center;
    padding-left: 0;
  }
}
.hand {
  margin-left: 30%;
  margin-top: 35%;
  @media (max-width: 900px) {
    display: grid;
    justify-items: center;
    margin-left: 0;
  }
}
</style>
