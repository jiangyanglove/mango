<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <div v-if="isLoading" class="loading" v-bind:style="{minHeight: win_height + 'px'}">
        <div class="dt">
          <div class="dtc">
            <i class="logo"></i>        
          </div>
        </div>
      </div>
    </transition>
    <!-- <transition name="router-fade" mode="out-in"> -->
      <router-view></router-view>
    <!-- </transition> -->
  </div>
</template>

<script>
import 'normalize.css';

export default {
  name: 'app',
  data() {
    return {
      win_height: window.innerHeight,
      isLoading: 1,
    };
  },
  mounted() {
    const that = this;
    setTimeout(() => {
      that.isLoading = 0;
    }, 1000);
    this.touchMove();
  },
  methods: {
    touchMove() {
      document.addEventListener('touchmove', (event) => {
        event.preventDefault();
      });
    },
  },
};
</script>

<style>
body, div, span, header, footer, nav, section, aside, article, ul, dl, dt, dd, li, a, p, h1, h2, h3, h4,h5, h6, i, b, textarea, button, input, select, figure, figcaption, {
      padding: 0;
      margin: 0;
      list-style: none;
      font-style: normal;
      text-decoration: none;
      font-weight: normal;
      font-family: "SF Pro SC","SF Pro Text","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif;
      box-sizing: border-box;
      -webkit-tap-highlight-color:transparent;
      -webkit-font-smoothing: antialiased;
      &:hover{
          outline: none;
      }
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
body {
    background: #000;
}
@font-face {
  font-family: 'fangku';
  /*src: url('http://at.alicdn.com/t/font_1397098551_95441.eot');*/
  /*src: url('http://at.alicdn.com/t/font_1397098551_95441.eot?#iefix') format('embedded-opentype'),*/
  /*url('http://at.alicdn.com/t/font_1397098552_0142624.woff') format('woff'),*/
  src: url(assets/fangku.ttf) format('truetype'),
  /*url('http://at.alicdn.com/t/font_1397098552_0586202.svg#iconfont') format('svg');*/
}
@font-face {
  font-family: 'sukai';
  /*src: url('http://at.alicdn.com/t/font_1397098551_95441.eot');*/
  /*src: url('http://at.alicdn.com/t/font_1397098551_95441.eot?#iefix') format('embedded-opentype'),*/
  /*url('http://at.alicdn.com/t/font_1397098552_0142624.woff') format('woff'),*/
  src: url(assets/sukai.ttf) format('truetype'),
  /*url('http://at.alicdn.com/t/font_1397098552_0586202.svg#iconfont') format('svg');*/
}
.router-fade-enter-active, .router-fade-leave-active {
  transition: opacity .3s;
}
.router-fade-enter, .router-fade-leave-active {
  opacity: 0;
}

.loading {
  background: url(assets/loading-bg.jpg) no-repeat center center / 100% 100%;
  height: 100%;
  text-align: center;
  z-index: 999;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.dt {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: table;
}
.dtc {
  display: table-cell;
  vertical-align: middle;
}
.logo {
  display: inline-block;
  width: 247px;
  height: 86.5px;
  background: url(assets/loading.png) no-repeat center center / 100% 100%;
}
</style>
