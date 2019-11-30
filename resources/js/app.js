/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';

window.Vue = require('vue');
import router from './router/router'
import App from './App.vue';
import auth from './auth';
import store from './vuex/store'

/**
 * Configuration for authentication
 * @param {Object}
 */
var authConfig = {
    bearer: 'token',
    cookie: true,
    session_lifetime: 120,
    register: true,
}

Vue.use(auth, authConfig)

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', () => import(/* webpackChunkName: "js/example-component" */'./components/ExampleComponent.vue'));
Vue.component('navigation-bar', () => import(/* webpackChunkName: "js/navigation-bar" */'./components/NavigationBar.vue'));
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */



/**
 * Register any components that are not part of the views
 * 
 * @return {Vue}
 */
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
