<template>
  <div id="Wrapper">
    <div id="Content">
      <div id="LeftWrapper">
        <div id="TopWrapper">
          <img id="fk1" src="@/assets/svg/pc1.svg" />
          Hey,Welcome
        </div>
        <div id="ACenWrapper">纽约时报</div>
        <div id="BCenWrapper">412 x 413 勉强打造</div>
        <div id="CCenWrapper">Can Can Need</div>
        <button><p>前往康康</p></button>
      </div>
      <div id="RightWrapper">
        <img id="fk2" src="@/assets/svg/Ilustra.svg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
* {
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  border: none;
}
#Wrapper {
  background: #121414;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  width: 1140px;
  height: 650px;
  @media (max-width: 900px) {
    width: 360px;
    height: 240px;
    border-radius: 20px;
  }
}

#Content {
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(1, auto);
  grid-column-gap: 100px;
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    text-align: center;
  }
}
#LeftWrapper {
  display: grid;
  grid-template-rows: repeat(5, auto);
  margin-top: 100px;
  @media (max-width: 900px) {
    margin-top: 40px;
  }
}
#TopWrapper {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  color: #e1e1e6;
  display: grid;
  grid-template-columns: 10px 200px;
  justify-items: center;
  justify-content: start;
  align-items: center;
  margin-left: 25%;
  @media (max-width: 900px) {
    font-size: 10px;
    line-height: 20px;
    grid-template-columns: 20px auto;
    margin-left: 20px;
    #fk1 {
      width: 20px;
    }
  }
}

#ACenWrapper {
  font-family: "Songti SC";
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 72px;
  /* identical to box height, or 100% */
  color: #e1e1e6;
  margin-left: 25%;
  @media (max-width: 900px) {
    font-size: 15px;
    line-height: 30px;
    margin-left: 10%;
  }
}

#BCenWrapper {
  font-family: "HanziPen SC";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 72px;
  color: #61dcfb;
  margin-left: 25%;
  @media (max-width: 900px) {
    width: 130px;
    font-size: 15px;
    line-height: 20px;
    margin-left: 15%;
  }
}

#CCenWrapper {
  color: #61dcfb;
  margin-left: 25%;
  @media (max-width: 900px) {
    font-size: 15px;
    line-height: 12px;
    margin-left: 15%;
  }
}
button {
  background: #eba417;
  border-radius: 100px;
  width: 215px;
  height: 53px;
  left: 153px;
  top: 444px;
  margin-left: 23%;
  cursor: pointer;
  @media (max-width: 900px) {
    width: 80px;
    height: 30px;
    margin-left: 12%;
    margin-top: 10px;
  }
}
p {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #121214;
  @media (max-width: 900px) {
    font-size: 10px;
    font-weight: 500;
  }
}
#RightWrapper {
  display: grid;
  margin-top: 100px;
}
#fk2 {
  @media (max-width: 900px) {
    width: 100px;
    margin-top: -30px;
  }
}
#fk2:hover {
  transform: scale(1.2);
}
button:hover {
  transform: scale(1.1) translateX(10px);
  filter: hue-rotate(10deg) brightness(150%) saturate(120%);
}
</style>
