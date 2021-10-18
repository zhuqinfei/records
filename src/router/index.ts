import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Money from '@/views/Money.vue';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';
import NotFound from '@/views/NotFound.vue';
import EditLabel from '@/views/EditLabel.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path:'/',
    redirect:'/money'
  },
  {
    path:'/money',
    component:Money
  },
  {
    path:'/labels',
    component:Labels
  },
  {
    path:'/statistics',
    component:Statistics
  },
  {
    path:'/labels/edit',
    component:EditLabel
  },
  {
    path:'*',  //'*'放在路由最后，表示前面都检查完没有符合的，剩余的其他情况
    component:NotFound
  }

];

const router = new VueRouter({
  routes
});

export default router;
