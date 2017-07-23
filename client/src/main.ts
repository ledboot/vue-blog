import Vue from 'vue';
import VueRouter from 'vue-router';

import { HomeComponent } from './components/home';
import { AboutComponent } from './components/about';
import { NavbarComponent } from './components/navbar';
// register the plugin
Vue.use(VueRouter);

let router = new VueRouter({
  routes: [
    { path: '/', component: HomeComponent },
    { path: '/about', component: AboutComponent },
  ]
});
new Vue({
    el: '#app',
    router: router,
    components: {
      'navbar': NavbarComponent
    }
});