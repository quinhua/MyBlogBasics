<template>
  <div id="home" @mousewheel="handleMouseWheel" v-swipeup="showCenter">
    <!-- 遮罩：防止用户在动画播放期间点击屏幕 -->
    <div
      class="mask_ban_touch"
      v-if="!flag"
      style="width: 100%; height: 100%; z-index: 999; position: absolute"
    ></div>
    <div class="nowDate" v-if="flag">{{ nowDate }}</div>
    <!-- 徽标 -->
    <div class="logo">
      <a
        v-for="(item, index) of $config.LOGO_TOP_RIGHT"
        :key="index"
        :class="item.class"
        :href="item.url"
        :title="item.title"
      ></a>
    </div>

    <!-- 中间LOGO部分 -->
    <div
      :style="{ background: `url(${imgUrl})` }"
      :class="[{ wrapper_blur: centerShow }, 'wrapper', 'bg-blur']"
    >
      <div :class="['img_shadow', { img_shadow_show: imgLoded }]"></div>
      <div class="inner" style="cursor: pointer" @click="goToBlog">
        <img
          :class="['Q_logo', { Q_logo_top: flag }]"
          :src="
            $config.LOGO_CENTER == ''
              ? $config.BASICS_LOGO
              : $config.LOGO_CENTER
          "
        />
        <div :class="['hello', { hello_bottom: flag }]">
          <div>{{ slogan }}</div>
          <div class="hello_bottom_text">
            <div>点击以访问 ~</div>
            <div class="print">
              {{ $config.DESIGNED }}
            </div>
            <svg
              xmlns:svg="http://www.w3.org/2000/svg"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.0"
              width="44px"
              height="44px"
              viewBox="0 0 128 128"
              xml:space="preserve"
            >
              <rect x="0" y="0" width="100%" height="100%" fill="none" />
              <g>
                <path
                  d="M64 0L40.08 21.9a10.98 10.98 0 0 0-5.05 8.75C34.37 44.85 64 60.63 64 60.63V0z"
                  fill="red"
                  fill-opacity="0.29"
                />
                <path
                  d="M128 64l-21.88-23.9a10.97 10.97 0 0 0-8.75-5.05C83.17 34.4 67.4 64 67.4 64H128z"
                  fill="blue"
                  fill-opacity="0.38"
                />
                <path
                  d="M63.7 69.73a110.97 110.97 0 0 1-5.04-20.54c-1.16-8.7.68-14.17.68-14.17h38.03s-4.3-.86-14.47 10.1c-3.06 3.3-19.2 24.58-19.2 24.58z"
                  fill="green"
                  fill-opacity="0.24"
                />
                <path
                  d="M64 128l23.9-21.88a10.97 10.97 0 0 0 5.05-8.75C93.6 83.17 64 67.4 64 67.4V128z"
                  fill="purple"
                  fill-opacity="0.69"
                />
                <path
                  d="M58.27 63.7a110.97 110.97 0 0 1 20.54-5.04c8.7-1.16 14.17.68 14.17.68v38.03s.86-4.3-10.1-14.47c-3.3-3.06-24.58-19.2-24.58-19.2z"
                  fill="pink"
                  fill-opacity="0.65"
                />
                <path
                  d="M0 64l21.88 23.9a10.97 10.97 0 0 0 8.75 5.05C44.83 93.6 60.6 64 60.6 64H0z"
                  fill="red"
                  fill-opacity="0.58"
                />
                <path
                  d="M64.3 58.27a110.97 110.97 0 0 1 5.04 20.54c1.16 8.7-.68 14.17-.68 14.17H30.63s4.3.86 14.47-10.1c3.06-3.3 19.2-24.58 19.2-24.58z"
                  fill="red"
                  fill-opacity="0.46"
                />
                <path
                  d="M69.73 64.34a111.02 111.02 0 0 1-20.55 5.05c-8.7 1.14-14.15-.7-14.15-.7V30.65s-.86 4.3 10.1 14.5c3.3 3.05 24.6 19.2 24.6 19.2z"
                  fill="blue"
                  fill-opacity="0.15"
                />
                <circle cx="64" cy="64" r="2.03" />
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 64 64"
                  to="-360 64 64"
                  dur="2400ms"
                  repeatCount="indefinite"
                ></animateTransform>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <!-- 上下滑动指示器 -->
    <div
      :class="['bottom', { bottom_show: flag }]"
      style="cursor: pointer"
      @click="centerShow = !centerShow"
    >
      <div class="bottom-icon">
        <transition name="fade">
          <i v-if="!centerShow" class="mdi-chevron-up mdi"></i>
          <i v-if="centerShow" class="mdi-chevron-down mdi"></i>
        </transition>
      </div>
      <div class="bottom-info">Slide UP</div>
    </div>
    <i
      class="fa fa-arrow-right togglePic"
      @click="togglePic"
      v-if="togglePicsOne"
    ></i>
    <!-- 备案号 -->
    <a
      class="record_number"
      :class="{ record_number_show: flag }"
      href=""
      v-if="recordNumber"
      >{{ recordNumber }}</a
    >

    <!-- 导航抽屉 -->
    <transition name="fade">
      <div class="shadow" v-show="centerShow"></div>
    </transition>
    <transition name="slide">
      <div v-show="centerShow" class="center_wrapper" @click="hideCenter">
        <div class="center_inner" @click="stopPropagation">
          <center @hide="hideCenter" ref="center"></center>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
    default:
      return 0;
  }
}
import axios from "axios";
import center from "../views/center.vue";
export default {
  data() {
    this.startTime = new Date();
    return {
      nowDate: "",
      i: 0,
      flagEquipment: "",
      flag: false, // 动画是否播放完毕
      slogans: [], //自定义句子slogans[i]
      slogan: "", //一言堂句子slogan
      imgUrls: [],
      imgUrl: "",
      centerShow: false, // 导航抽屉显示状态
      imgLoded: false, // 背景图片加载状态
      togglePicsOne: false,
    };
  },
  components: {
    center,
  },
  computed: {
    recordNumber() {
      return this.$config.RECORD_NUMBER;
    },
  },
  methods: {
    hitokoto() {
      axios
       .get(this.$api.yiyan + `?c=d&c=e&c=f&c=g&c=h&c=i&c=l&c=j&c=k`)
        .then((res) => {
          const data = res.hitokoto;
           this.slogan = data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    isMobile() {
      this.flagEquipment = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
    },
    goToBlog() {
      window.location.href = this.$config.BLOG_URL;
    },
    throttleFn(callback, delay) {
      let currentTime = new Date();
      if (currentTime - this.startTime > delay) {
        callback();
        this.startTime = new Date();
      }
    },
    handleMouseWheel(e) {
      if (e.deltaY < 0) {
        if (!this.centerShow) {
          this.centerShow = true;
        } else {
          this.throttleFn(() => {
            this.$refs.center.scroller.scrollBy(
              0,
              100,
              500,
              "cubic-bezier(0.23, 1, 0.32, 1)"
            );
          }, 500);
        }
      } else {
        // 如果鼠标滚轮向下滚动
        if (!this.centerShow) {
          return;
        } else {
          this.throttleFn(() => {
            this.$refs.center.scroller.scrollBy(
              0,
              -100,
              500,
              "cubic-bezier(0.23, 1, 0.32, 1)"
            );
          }, 500);
        }
      }
    },
    showCenter() {
      this.centerShow = true;
    },
    hideCenter() {
      this.centerShow = false;
    },
    stopPropagation(e) {
      e.stopPropagation();
    },
    getNowDate() {
      setInterval(() => {
        const date = new Date();
        this.nowDate = this.$utils.formatDate(date);
      }, 1);
    },
    togglePic() {
      // 图片懒加载
      if (!this.flagEquipment) {
        this.imgUrls = this.$config.BACKGROUND_IMG_URL;
      } else {
        this.imgUrls = this.$config.BACKGROUND_IMG_URL_PHONE;
      }
      this.imgUrl = this.imgUrls[randomNum(0, this.imgUrls.length - 1)];
      var img = new Image();
      img.src = this.imgUrls[randomNum(0, this.imgUrls.length - 1)];
      img.onload = () => {
        this.imgLoded = true;
        setTimeout(() => {
          this.togglePicsOne = true;
        }, 1000);
      };
    },
    togglePicOne() {
      this.togglePic();
    },
  },
  created() {
    this.getNowDate();
  },
  mounted() {
    document.title = this.$config.BLOG_NAME;
    this.isMobile();
    setTimeout(() => {
      this.flag = true;
    }, 1300);
    this.togglePic();
    this.hitokoto(); //一言堂
    //  this.slogans = this.$config.SLOGAN; //自定义句子
    //  this.i = randomNum(0, this.slogans.length - 1);
  },
};
</script>

<style lang="scss" scoped>
#home {
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .nowDate {
    position: absolute;
    top: 100px;
    left: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 9;
    color: #fff;
    font-size: 2rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  .logo {
    position: absolute;
    top: 20px;
    right: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 9;
    a {
      margin: 0 2px;
      color: #fff;
      font-size: 2rem;
      cursor: pointer;
      text-decoration: none;
    }
  }
  .wrapper {
    background-size: cover !important;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    display: flex;
    border-radius: 100%;
    animation: logoEnter 1.2s;
    animation-fill-mode: forwards;
    transition: all 0.8s;
    .inner {
      position: relative;
      .Q_logo {
        height: 3rem;
        position: absolute;
        border-radius: 100%;
        transform: translate(-50%, -50%);
        transition: all 1s;
        top: 0px;
      }
      .Q_logo_top {
        top: -3.2rem;
      }
      .hello {
        color: #ffffff;
        width: 24.75rem;
        text-align: center;
        position: absolute;
        transform: translate(-50%, -50%);
        font-size: 1.5rem;
        opacity: 0;
        top: 100px;
        transition: all 1s;
      }
      .hello_bottom {
        opacity: 1;
        top: 3.5rem;
        .hello_bottom_text {
          cursor: pointer;
          font-size: 1rem;
          margin-top: 0.5rem;
          padding-top: 0.5rem;
          border-top: 1px solid #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          .print {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 5px;
            //   white-space: nowrap;
            //   overflow: hidden;
            //   -webkit-animation: qisong 3s steps(60, end) infinite;
            //   animation: qisong 5s steps(50, end) infinite;
            // }
            // @-webkit-keyframes qisong {
            //   from {
            //     width: 0;
            //   }
            // }
            // @keyframes qisong {
            //   from {
            //     width: 0;
            //   }
          }
        }
      }
    }
  }
  .img_shadow {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #9f85fd;
    overflow: hidden;
    transition: all 0.5s;
  }
  .img_shadow_show {
    background-color: rgba(0, 0, 0, 0.5);
  }
  .wrapper_blur {
    filter: blur(1px);
  }
  .bottom {
    cursor: pointer;
    font-size: 2rem;
    position: absolute;
    color: #fff;
    bottom: 0%;
    opacity: 0;
    transition: all 1s;
    text-align: center;
    .bottom-info {
      font-size: 1rem;
      margin-top: 5px;
      animation: float 4s infinite ease-in-out;
    }
  }
  .bottom_show {
    bottom: 50px;
    opacity: 1;
  }
  .shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .center_wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    .center_inner {
      width: 70%;
      position: absolute;
      overflow: hidden;
      border-radius: 0.5rem;
      left: 0;
      right: 0;
      margin: 0 auto;
      bottom: 5%;
      height: 70%;
    }
  }
  .togglePic {
    position: fixed;
    bottom: 20px;
    right: 20px;
    cursor: pointer;
    font-size: 1.3rem;
    color: #49b1f5;
  }
  .record_number {
    width: 100%;
    text-align: center;
    color: #fff;
    text-decoration: none;
    font-size: 12px;
    line-height: 30px;
    background: rgba(0, 0, 0, 0.4);
    position: fixed;
    bottom: 0;
    transform: translateY(30px);
    transition: transform ease 1s;
  }
  .record_number_show {
    transform: translateY(0px);
  }
}
@media screen and (max-width: 700px) {
  #home {
    .nowDate {
      font-size: 1rem;
      width: 100vw;
      position: absolute;
      left: 0;
      display: flex;
      justify-content: center;
    }
    .wrapper {
      .inner {
        .hello_bottom {
          .hello_bottom_text {
            .print {
              margin: 0 5px;
            }
          }
        }
      }
    }
    .center_wrapper {
      .center_inner {
        width: 100%;
        bottom: 0px;
        padding: 10px;
        box-sizing: border-box;
      }
    }
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.8s ease;
}
.slide-enter,
.slide-leave-to {
  transform: translateY(100%);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.8s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
@keyframes logoEnter {
  0% {
    opacity: 0;
    width: 0rem;
    height: 0rem;
  }
  20% {
    opacity: 1;
    width: 15rem;
    height: 15rem;
  }
  80% {
    transform: rotate(360deg);
    width: 15rem;
    height: 15rem;
  }
  100% {
    transform: rotate(360deg);
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
}
@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>