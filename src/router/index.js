import ByArea from "@/pages/ByArea";
import Detail from "@/pages/Detail";
import Top from "@/pages/Top";
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Top",
      component: Top,
    },
    {
      path: "/by_area",
      name: "ByArea",
      component: ByArea,
    },
    {
      path: "/detail",
      name: "Detail",
      component: Detail,
    },
  ],
});
