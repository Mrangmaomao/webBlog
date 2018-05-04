import Vue from 'vue'
import Router from 'vue-router'
import { Indicator } from 'mint-ui';
import { MessageBox } from 'mint-ui';
const Login = r => require.ensure([], () => r(require('../components/index.vue')), 'login')
const My = r => require.ensure([], () => r(require('../components/my.vue')), 'My')
const Blog = r => require.ensure([], () => r(require('../components/blog.vue')), 'Blog')
const Photography = r => require.ensure([], () => r(require('../components/photography.vue')), 'Photography')

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      meta: { keepAlive: false }
    },    {
      path: '/resume',
      name: 'resume',
      component: My,
      meta: { keepAlive: false }
    },    {
      path: '/blog',
      name: 'blog',
      component: Blog,
      meta: { keepAlive: false }
    },    {
      path: '/photography',
      name: 'photography',
      component: Photography,
      meta: { keepAlive: false }
    },

  ],
  model:'hash'
})
// router.beforeEach( (to, from, next) => {
//     try{
//       // Indicator.open({
//       //   text: '加载中',
//       //   spinnerType: 'fading-circle'
//       // });
//     } catch (e) {
//       console.log(e.message)
//     }
//     let token = window.sessionStorage.getItem('token')
//     if( to.path == '/' ) {
//       next()
//       return false;
//     }
//     if ( token ) {
//       next();
//       Indicator.close();
//     }else {
//       MessageBox({
//         title: '错误',
//         message: '请登陆',
//       });
//       router.push({path:'/'});
//
//     }
//   next();
// })
// router.afterEach((to, from) => {
//   // Indicator.close();
// })
export default router;
