<template>
  <div class="start" v-bind:style="{minHeight: win_height + 'px'}">
    <i class="lang"></i>
    <i class="info"></i>
    <i class="title"></i>
    <i class="logo"></i>
    <div class="link">
      <a href="https://www.baidu.com/">夏日青春YOUNG</a>
      <a href="https://www.youku.com/">尖叫之夜</a>
    </div>
    <!-- <div class="btn-start">
      <div><span>开始</span></div>
      <div><span>闯关</span><i>></i></div>
    </div> -->
    <router-link to="/confirm" class="btn-go"></router-link>
  </div>
</template>

<script>
export default {
  name: 'start',
  data() {
    return {
      win_height: window.innerHeight,
    };
  },
  mounted() {
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

<style scoped lang="less">
.start {
  background: url(../assets/start-bg.jpg) no-repeat center center / 100% 100%;
}
.lang {
  background: url(../assets/lang.png) no-repeat center center / 100% 100%;
  position: absolute;
  width: 118.5px;
  height: 33px;
  left: 1.5rem;
  top: 2rem;
}
.info {
  background: url(../assets/info.png) no-repeat center center / 100% 100%;
  position: absolute;
  width: 39.5px;
  height: 39.5px;
  right: 2rem;
  top: 1.8rem;
}
.title {
  background: url(../assets//title.png) no-repeat center center / 100% 100%;
  position: absolute;
  width: 246px;
  height: 251px;
  left: 2rem;
  top: 5rem;
}
.btn-start {
  color: #54fa00;
  font-family: 'fangku';
  font-weight: 900;
  font-style: italic;
  font-size: 22px;
  line-height: 1.3;
  position: absolute;
  top: 14rem;
  right: 2rem;
  border-radius: 100%;
  background: rgba(255,255,255,0.2);
  padding: 0.5rem 0.5rem 2rem 2rem;
}
.btn-start span {
  border-bottom: 1px solid #54fa00;
  padding: 1px 0;
}
.btn-start i {
  padding-left: 4px;
}
.link {
  position: absolute;
  bottom: 5rem;
  left: 2rem;
  transform: rotate(-45deg);
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  a {
    color: #fff;
    text-decoration: none;
    display: block;
    font-size: 16px;
    margin: 0.5rem 0;
    &:after {
      content: '';
      display: inline-block;
      width: 0;
      height: 0;
      border-left: 8px solid #fff;
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      vertical-align: middle;
      margin-left: 5px;
    }
  }
}
.logo {
  background: url(../assets/logo.png) no-repeat center center / 100% 100%;
  width: 149px;
  height: 41.5px;
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
}
.btn-go {
  background: url(../assets/btn-start.png) no-repeat center center / 100% 100%;
  position: absolute;
  width: 128.5px;
  height: 128.5px;
  right: 1.5rem;
  bottom: 8rem;
}
</style>
