<template>
  <div id="center">
    <div class="top">
      <nav class="nav_wrap">
        <div
          :class="[
            'nav_item',
            { active: sortData[sortIndex].sortId == item.sortId },
          ]"
          v-for="(item, index) in sortData"
          :key="item.sortId"
          @click="changeSortIndex(index)"
        >
          {{ item.title }}
        </div>
      </nav>
      <div class="close">
        <i class="mdi mdi-close-box" @click="handleClose"></i>
      </div>
    </div>
    <div class="scroll-wrapper main">
      <transition-group tag="div" class="row scroll-content" name="list">
        <div class="col page_item" v-for="item in pagesData" :key="item.pageId">
          <a :href="item.url" class="page" :title="item.title">
            <div class="left">
              <div class="title">{{ item.title }}</div>
              <div class="subtitle">{{ item.subtitle }}</div>
            </div>
            <div class="right">
              <img
                :src="item.icon == '' ? $config.BASICS_ICONFONT : item.icon"
              />
            </div>
          </a>
        </div>
      </transition-group>
    </div>
    <div class="footer" v-if="$config.FOOTER_INFO">
      <i class="mdi mdi-fountain-pen-tip"></i> Designed By
      <a :href="$config.LOGO_TOP_RIGHT[0].url">{{ $config.DESIGNED }}</a>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      sortData: [],
      sortIndex: 0,
      pagesData: [],
      scroller: null,
    };
  },
  computed: {
    parentCenterShow() {
      // 与父元素耦合
      return this.$parent.centerShow;
    },
  },
  watch: {
    parentCenterShow(val) {
      if (val) {
        this.scrollerResize();
      }
    },
  },
  methods: {
    getPages() {
      return new Promise((resolve, reject) => {
        let sortId = this.sortData[this.sortIndex].sortId;
        if (this.$config.SERVE) {
          this.axios
            .get("/getPages?sortId=" + sortId)
            .then((res) => {
              this.pagesData = res.data.data;
              resolve();
            })
            .catch((err) => {
              console.log(err);
              reject(err);
            });
        } else {
          this.pagesData = [];
          for (let i in this.$config.PAGES_DATA) {
            let item = this.$config.PAGES_DATA[i];
            if (item.sortId == sortId) {
              this.pagesData.push(item);
            }
          }
          resolve();
        }
      });
    },
    getSort() {
      return new Promise((resolve, reject) => {
        if (this.$config.SERVE) {
          this.axios
            .get("/getSort")
            .then((res) => {
              if (res.data.code == 1) {
                this.sortData = res.data.data;
                resolve();
              } else {
                reject();
              }
            })
            .catch((err) => {
              console.log(err);
              reject(err);
            });
        } else {
          this.sortData = this.$config.SORT_DATA;
          resolve();
        }
      });
    },
    changeSortIndex(index) {
      this.sortIndex = index;
      this.getPages();
    },
    handleClose() {
      this.$emit("hide");
    },
    _getStyleNumber(el, property) {
      return parseInt(window.getComputedStyle(el).getPropertyValue(property));
    },
    scrollerResize() {
      if (!this.parentCenterShow) {
        return;
      }
      let drawer = document.querySelector("#center");
      let drawerHeight =
        this._getStyleNumber(drawer, "height") -
        this._getStyleNumber(drawer, "padding-top") -
        this._getStyleNumber(drawer, "padding-bottom");
      let top = document.querySelector("#center .top");
      let topHeight = this._getStyleNumber(top, "height");
      let footer = document.querySelector("#center .footer");
      let footerHeight = this._getStyleNumber(footer, "height");
      let scrollerWrapper = document.querySelector(".scroll-wrapper");
      scrollerWrapper.style.height = `${
        drawerHeight - footerHeight - topHeight
      }px`;
      if (this.scroller) {
        this.scroller.refresh();
      } else {
        let wrapper = document.querySelector(".scroll-wrapper");
        this.scroller = new BScroll(wrapper, {
          click: true,
        });
      }
    },
  },
  mounted() {
    this.getSort()
      .then(() => {
        return this.getPages();
      })
      .then(() => {
        // 数据已获取完成 Better Scroll 进行初始化
        this.scrollerResize();
      });
    window.addEventListener("resize", this.scrollerResize);
  },
};
</script>

<style lang="scss" scoped>
#center {
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.9);
  color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  .top {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    padding: 0 0.5rem;
    .nav_wrap {
      display: flex;
      // align-content: center;
      .nav_item {
        margin-right: 15px;
        font-size: 0.9rem;
        color: rgb(0, 0, 0);
        cursor: pointer;
        transition: all 0.3s;
        border-bottom: 2px solid rgba(255, 255, 255, 0);
        padding-bottom: 10px;
        margin-bottom: 10px;
        transition: all 0.6s ease-in-out;
      }
      .active {
        border-bottom: 2px solid rgb(34, 20, 235);
        color: rgba(0,0,0,1);
        font-size: 1.02rem;
      }
    }
    .close {
      cursor: pointer;
      transition: all .6s ease-in-out;
      display:flex;
      align-items: center;
      font-size:1.8rem;
      &:hover{
        transform: rotate(360deg);
      }
    }
  }
  .scroll-wrapper.main {
    height: 300px;
    overflow: hidden;
    margin: 0 -0.5rem;
    .scroll-content {
      margin: 0;
      .page_item {
        height: 120px;
        .page {
          background-color: rgba(255, 255, 255, 0.9);
          padding: 1rem;
          box-sizing: border-box;
          border-radius: 1rem;
          display: flex;
          align-items: center;
          height: 100%;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s ease-in-out;
          &:hover {
            box-shadow: 1px 1px 50px rgba(0, 0, 0, 0.1);
            transform: scale(1.1);
          }
          .left {
            width: 80%;
            margin-right: 10px;
            overflow: hidden;
            .title {
              font-size: 1rem;
              color: rgba(0, 0, 0, 0.8);
              font-weight: bold;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .subtitle {
              margin-top: 0.5rem;
              font-size: 0.8rem;
              line-height: 1.5;
              color: rgba(0, 0, 0, 0.6);
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
          .right {
            width: 20%;
            img {
              width: 100%;
              height: 100%;
              border-radius: 50%;
            }
          }
        }
      }
    }
  }
  .row {
    margin: 0 -0.5rem;
    display: flex;
    flex-wrap: wrap;
  }
  .col {
    padding: 0.5rem;
    box-sizing: border-box;
    width: 25%;
    transition: all 1s;
  }
  .footer {
    font-size: 12px;
    text-align: right;
    color: #201e1e;
    margin-top: 10px;
    .mdi {
      font-size: 18px;
      position: relative;
      top: 3px;
      font-weight: bold;
    }
    a {
      // color: #2196F3;
      color: rgb(7, 7, 7);
      text-decoration: none;
      font-weight: bold;
      border-bottom: 1px solid #333;
    }
  }
}
@media screen and (max-width: 900px) {
  #center {
    .main {
      .page {
        align-items: inherit;
        padding: 0.8rem;
        .left {
          width: 70%;
        }
      }
    }
    .col {
      width: 50%;
    }
  }
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-leave-active {
  position: absolute;
}
</style>
