import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '../components/HelloWorld'
import MainPage from '../components/pages/MainPage';

Vue.use(Router)

export default new Router({
  mode: 'history',	//모든 라우팅 모드 옵션은 단일 모드 옵션으로 압축되어 있으므로 이를 변경하는 코드
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/main',
      name: 'MainPage',
      component: MainPage
    }
  ]
})
