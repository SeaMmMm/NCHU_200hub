<template>
  <div class="WrapperTop" ref="TopWrapper">
    <div class="HeadeWrapper">
      <div class="actionTitle">来到412-413</div>
      <div class="data">只要你给钱</div>
      <div class="addCook">下面的东西随便吃</div>
    </div>
    <div class="Center">
      <CakesCard
        v-for="(element, index) in cakeInformations"
        :key="index"
        :name="element.name"
        :description="element.description"
        :src="element.src"
      />
    </div>
  </div>
</template>

<script>
import CakesCard from "@/components/group/welcomeHome/Cakes_Page/CakesCard.vue";
export default {
  components: {
    CakesCard,
  },
  methods: {
    goRight() {
      this.$refs.TopWrapper.style.width = "100vw";
    },
    goBack() {
      if (document.body.clientWidth > 900) {
        this.$refs.TopWrapper.style.width = "1200px";
      }
    },
  },
  data() {
    return {
      cakeInformations: [
        {
          name: "MM豆",
          description: "美国的一种巧克力豆品牌",
          src: require("@/assets/img/MM.png"),
        },
        {
          name: "马卡龙",
          description: "口味包括：原味、留兰香、冬青、薄荷极乐、野生蓝莓味。",
          src: require("@/assets/img/Marc.png"),
        },
        {
          name: "软糖",
          description: "果冻肚皮酸豆，好吃又酸。六种酸味",
          src: require("@/assets/img/suger.png"),
        },
        {
          name: "甜甜圈",
          description: "我们原创的上釉甜甜圈，并包含有糖果！",
          src: require("@/assets/img/sweetc.png"),
        },
        {
          name: "纸杯蛋糕",
          description: "水果蛋糕是喜欢经典口味的人的理想选择",
          src: require("@/assets/img/papercacke.png"),
        },
        {
          name: "果冻",
          description: "用真正的果汁和所有天然色素制成的大片果冻。",
          src: require("@/assets/img/GD.png"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
* {
  transition: 2s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.WrapperTop {
  width: 1200px;
  max-width: 1500px;
  background: #ffffff;
  border-radius: 100px;
  margin-top: 10%;
  border-radius: 0px 60px 60px 0px;

  @media (max-width: 900px) {
    width: 360px;
    border-radius: 20px;
  }
}
.HeadeWrapper {
  display: grid;
  grid-template-columns: auto auto;
  align-items: end;
  justify-items: start;
  gap: 20px;
  padding: 25px;
}
.actionTitle {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 52px;
  display: flex;
  align-items: center;
  letter-spacing: -0.4px;
  color: #1e0e62;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (max-width: 900px) {
    font-size: 22px;
    line-height: 22px;
  }
}
.data {
  text-decoration: line-through;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
  margin-left: -100%;
  @media (max-width: 900px) {
    margin-left: 10px;
  }
  color: #000000;
}
.addCook {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 52px;
  display: flex;
  align-items: center;
  letter-spacing: -0.4px;
  color: #1e0e62;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 900px) {
    font-size: 22px;
    line-height: 42px;
  }
}
.Center {
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(3, auto);
  justify-content: space-evenly;
  justify-items: stretch;
  align-items: center;
  gap: 25px;
  padding: 2%;

  @media (max-width: 900px) {
    grid-template-columns: auto;
  }
}
</style>
