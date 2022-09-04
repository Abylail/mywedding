import Vue from "vue";
import config from "@/config/appConfig";

Vue.prototype.$conf = config;
Vue.prototype.$content = config.content;
