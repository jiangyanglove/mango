import Vue from 'vue';
import Router from 'vue-router';
// import Loading from '@/components/Loading';
import start from '@/page/start';
import confirm from '@/page/confirm';
// const Loading = r => require.ensure([], () => r(require('@/components/Loading')), 'start');
// const start = r => require.ensure([], () => r(require('../page/start.vue')), 'start');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'start',
      component: start,
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: confirm,
    },
  ],
});
