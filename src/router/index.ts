import {createWebHashHistory, createRouter} from 'vue-router';
import Home from '../views/Home.vue';
import Doc from '../views/Doc.vue';
import SwitchDemo from '../components/warehouse/SwitchDemo.vue';
import ButtonDemo from '../components/warehouse/ButtonDemo.vue';
import DialogDemo from '../components/warehouse/DialogDemo.vue';
import TabsDemo from '../components/warehouse/TabsDemo.vue';
import DocDemo from '../components/warehouse/DocDemo.vue';


const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc', component: Doc, children: [
        {path: '', component: DocDemo},
        {path: 'switch', component: SwitchDemo},
        {path: 'button', component: ButtonDemo},
        {path: 'dialog', component: DialogDemo},
        {path: 'tabs', component: TabsDemo},
      ]
    }
  ]
});

export default router;