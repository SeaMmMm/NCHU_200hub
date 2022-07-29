<template>
  <button class="Shot" @click="screenShot" ref="Shot">
    <img class="ShotImage" src="@/assets/svg/Shot.svg" alt="" />
  </button>
</template>

<script>
import html2canvas from "html2canvas";
export default {
  methods: {
    //截图方法
    //截图
    screenShot() {
      this.$refs.Shot.style.display = "none";
      //获取页面dom
      //这里的html标签是获取页面最大的dom元素；根据实际业务场景自行更改
      const el = document.querySelector("div");
      html2canvas(el, {
        allowTaint: true,
        backgroundColor: null, //画出来的图片有白色的边框,不要可设置背景为透明色（null）
        useCORS: true, //支持图片跨域
      }).then((canvas) => {
        //document.body.appendChild(canvas)  页面布局会乱
        //转换base64
        const capture = canvas.toDataURL("image/jpg");
        //下载浏览器弹出下载信息的属性
        const saveInfo = {
          //导出文件格式自己定义，我这里用的是时间作为文件名
          download: "Certificate" + `.jpg`,
          href: capture,
        };
        //下载，浏览器弹出下载文件提示
        this.downloadFile(saveInfo);

        //调用保存接口 如果需要后台保存，放开注释
        /*   uploadImage({capture:capture}).then(res => {
          if (res.code == 200) {
            this.$message.success("截取成功！")
          }
        });*/
      });
      setTimeout(() => {
        this.$refs.Shot.style.display = "block";
      }, 2000);
    },

    //下载截图
    downloadFile(saveInfo) {
      const element = document.createElement("a");
      element.style.display = "none";
      for (const key in saveInfo) {
        element.setAttribute(key, saveInfo[key]);
      }
      document.body.appendChild(element);
      element.click();
      setTimeout(() => {
        document.body.removeChild(element);
      }, 300);
    },
  },
};
</script>

<style scoped>
@keyframes toShow {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes toShow {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.Shot {
  text-align: center;
  position: absolute;
  cursor: pointer;
  border-radius: 50px;
  padding: 10px;
  border: none;
  animation: toShow 0.5s;
  animation-fill-mode: both !important;
  -webkit-animation-fill-mode: both !important;
}
.Shot:hover {
  transform: scale(1.1);
}
.ShotImage {
  background-size: 100%;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  width: 40px;
  height: 40px;
}
</style>
