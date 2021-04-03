require('./bootstrap');

window.Vue = require('vue');
import * as uiv from 'uiv';

Vue.use(uiv);

Vue.component('users', require('./views/Users.vue').default);

const page = new Vue({
  el: '#page'
});
