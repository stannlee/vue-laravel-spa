/**
 * Do not edit this file manually all the routes are registerd in the routes 
 * file in this directory
 */
import Vue from "vue";
import Router from "vue-router";
import Meta from 'vue-meta'
import routes from './routes'

Vue.use(Meta)

Vue.use(Router);

export default new Router({
    mode: "history",
    routes
});