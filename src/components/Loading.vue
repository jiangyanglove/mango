<template>
  <div class="loading" v-bind:style="{minHeight: win_height + 'px'}">
    <div class="dt">
      <div class="dtc">
        <i class="logo"></i>        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading',
  data() {
    return {
      win_height: window.innerHeight,
    };
  },
  mounted() {
    // const that = this;
    // setTimeout(() => {
    //   that.$router.push({ name: 'start' });
    // }, 2000);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.loading {
  background: url(../assets/loading-bg.jpg) no-repeat center center / 100% 100%;
  height: 100%;
  text-align: center;
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
  background: url(../assets/loading.png) no-repeat center center / 100% 100%;
}
</style>
