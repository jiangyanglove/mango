<template>
  <div class="confirm" v-bind:style="{minHeight: win_height + 'px'}">
    <audio :src="mp3" ref="music" preload></audio>
    <div class="bg">
      <span class="img" :class="{active: isTrue}" :style="{backgroundImage: 'url(' + img +')'}"></span>
    </div>
    <div class="top">
      <div class="left" @click="music()"><i class="icon-vioce"></i>听音频猜明星</div>
      <div class="right">求助好友<i class="icon-mark"></i></div>
    </div>
    <i class="next" v-if="!isTrue"></i>
    <i class="next active" v-else @click="goNext()"></i>
    <div class="bottom">
      <div class="anwser">
        <div class="a-t"><span v-for="anwser in anwsers">{{ anwser }}</span></div>
        <div class="a-b">{{ num }}/{{ total }}</div>
      </div>
      <div class="icon-logo"></div>
    </div>
    <div class="fly" v-show="!isTrue">
      <span @click="getAnwser(name)" v-for="name in names" :class="{active: isClick}">{{ name }}</span>
    </div>
  </div>
</template>

<script>
import { info } from '../mUtil/info';

export default {
  name: 'confirm',
  data() {
    return {
      win_height: window.innerHeight,
      img: info[0].img, // 背景图片
      anwsers: [], // 答案
      isTrue: 0, // 是否正确
      mp3: info[0].music, // 背景音乐
      names: info[0].names, // 文字
      right: info[0].right, // 正确答案
      i: 0,
      isClick: 0,
      total: info.length, // 总题数
      isFinish: 0,
      num: 1, // 当前题数
    };
  },
  mounted() {
    const that = this;
    this.addStr();
    setTimeout(() => {
      that.music();
    }, 1000);
  },
  methods: {
    music() {
      this.$refs.music.play();
    },
    getAnwser(name) {
      const that = this;
      const anwsersLen = this.right.length;
      if (this.i < anwsersLen) {
        this.anwsers.splice(this.i, 1, name);
        this.i += 1;
        if (that.anwsers.toString() === that.right.toString()) {
          that.isTrue = 1;
        }
        if (this.i === anwsersLen) {
          that.isFinish = 1;
        }
      }
    },
    goNext() {
      const that = this;
      that.isTrue = 0;
      that.isFinish = 0;
      that.anwsers = [];
      that.i = 0;
      for (let i = 0; i < info.length; i += 1) {
        that.img = info[i].img;
        that.mp3 = info[i].music;
        that.names = info[i].names;
        that.right = info[i].right;
      }
      this.$refs.music.load();
      setTimeout(() => {
        this.$refs.music.play();
      }, 1000);
      if (that.num < info.length) {
        that.num += 1;
      }
      const anwsersLen = that.right.length;
      for (let i = 0; i < anwsersLen; i += 1) {
        that.anwsers.push('');
      }
    },
    // 添加站位符
    addStr() {
      const that = this;
      that.anwsers = [];
      that.i = 0;
      const anwsersLen = that.right.length;
      for (let i = 0; i < anwsersLen; i += 1) {
        that.anwsers.push('');
      }
    },
  },
};
</script>

<style scoped lang="less">
.confirm {
  position: relative;
}
.bg {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  .img {
    // background-image: url(../assets/img1.jpg);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-size: 100%;
    filter: blur(30px);
    transition: all 1s ease-in;
    &.active {
      filter: blur(0);
    }
  }
  img {
    min-width: 100%;
    height: 100%;
  }
}
.top {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  color: #54fa00;
  border-bottom: 2px solid #54fa00;
  font-size: 14px;
  justify-content: space-between;
  align-items: center;
  margin: 0 1rem;
  padding-top: 0.8rem;
  padding-bottom: 0.1rem;
  z-index: 99;
  .icon-vioce {
    display: inline-block;
    background: url(../assets/icon-voice.png) no-repeat center center / 100% 100%;
    width: 43px;
    height: 31.5px;
    vertical-align: middle;
    margin-right: 5px;
    position: relative;
    top: -4px;
  }
  .icon-mark {
    display: inline-block;
    background: url(../assets/mark.png) no-repeat center center / 100% 100%;
    width: 30px;
    height: 29px;
    vertical-align: middle;
    margin-left: 5px;
    position: relative;
    top: -4px;
  }
}
.bottom {
  display: flex;
  color: #54fa00;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  background: rgba(0,0,0,0.5);
  padding: 0.5rem;
  align-items: center;
  font-size: 15px;
  .anwser {
    .a-t {
      border-bottom: 1px solid #54fa00;
      text-align: center;
      margin-bottom: 0.3rem;
      padding: 0 0.1rem;
    }
    span {
      display: inline-block;
      width: 20px;
      padding: 0 5px;
      &:after {
        content: '/';
      }
      &:last-child {
        &:after {
          display: none;
        }
      }
    }
  }
  .icon-logo {
    display: inline-block;
    background: url(../assets/logo.png) no-repeat center center / 100% 100%;
    width: 149px;
    height: 41.5px;
  }
}
.fly {
  color: #fff;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  padding-top: 4rem;
  padding-bottom: 3rem;
  font-size: 18px;
  span {
    margin: 10px;
    padding: 10px;
    font-family: 'sukai';
    transition: all 0.3s;
    &.active {
      color: #54fa00;
    }
  }
}
.next {
  background-image: url(../assets/next.png);
  background-size: 89.5px 23.5px;
  position: absolute;
  width: 89.5px;
  height: 23.5px;
  top: 2.6rem;
  right: 1rem;
  z-index: 99;
  &.active {
    background-image: url(../assets/next-active.png);
  }
}
</style>
