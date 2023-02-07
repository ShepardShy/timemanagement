import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/settings",
    name: "Подключение модулей",
    component: () => import("@/views/settings/settings.vue"),
  },
  {
    path: "/compilator",
    name: "Компилятор JS",
    component: () => import("@/views/compilator/compilator.vue"),
  },
  {
    path: "/organaiser",
    name: "Органайзер",
    component: () => import("@/views/organaiser/organaiser.vue"),
  },
  {
    path: "/organaiser/tasks",
    name: "Дела",
    component: () => import("@/views/organaiserTasks/organaiserTasks.vue"),
  },
  {
    path: "/organaiser/daily-planner",
    name: "Распорядок дня",
    component: () => import("@/views/organaiserDailyPlanner/organaiserDailyPlanner.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;