import {createWebHashHistory, createRouter} from 'vue-router';
import Home from '../views/Home.vue';
import Doc from '../views/Doc.vue';
import SwitchDemo from '../components/warehouse/SwitchDemo.vue';


const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc', component: Doc, children: [
        {path: 'switch', component: SwitchDemo}
      ]
    }
  ]
});
router.afterEach(() => {
  console.log('111');
});

export default router;