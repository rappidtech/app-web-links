const routes = [
    {
        path: "/fondo",
        component: () => import("../Pages/Fondo"),
    },
    {
        path: "/header",
        component: () => import("../Pages/Header"),
    },
    {
        path: "/links",
        component: () => import("../Pages/Links"),
    },
    {
        path: "/redes",
        component: () => import("../Pages/Redes"),
    },
];

export default routes;
