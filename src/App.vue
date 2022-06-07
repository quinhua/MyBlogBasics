<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    //this.stopF5Refresh();
    console.log('%c 欢迎访问钱辉的博客 ⭐', 'color: #fff;font-size:20px;background-color:black;padding:200px;');
     },
  methods: {
    stopF5Refresh() {
      document.onkeydown = function (e) {
        var evt = window.event || e;
        var code = evt.keyCode || evt.which;
        //屏蔽F1---F12
        if (code > 111 && code < 124) {
          if (evt.preventDefault) {
            evt.preventDefault();
          } else {
            evt.keyCode = 0;
            evt.returnValue = false;
          }
        }
      };
      //禁止鼠标右键菜单
      document.oncontextmenu = function (e) {
        return false;
      };
      //阻止后退的所有动作，包括 键盘、鼠标手势等产生的后退动作。
      // history.pushState(null, null, window.location.href);
      // window.addEventListener("popstate", function() {
      //   history.pushState(null, null, window.location.href);
      // });
    },
  },
};
</script>

<style lang="scss">
#app {
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
html,
body {
  min-height: 100%;
  user-select: none;
  margin: 0;
  padding: 0;
}

@media screen and (max-width: 900px) {
  html {
    font-size: 14px;
  }
}
</style>



