import { Routes } from "@angular/router";
import { AuthPage } from "./auth.page";

export const routes: Routes = [
  {
    path: "auth",
    component: AuthPage,
    children: [
      {
        path: "login",
        loadComponent: () =>
          import("./login/login.page").then((m) => m.LoginPage),
      },
      // {
      //   path: "register",
      //   loadComponent: () =>
      //     import("").then((m) => m.),
      // },
      // {
      //   path: "first-access",
      //   loadComponent: () =>
      //     import("").then((m) => m.),
      // },
      {
        path: "",
        redirectTo: "/auth/login",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/auth/login",
    pathMatch: "full",
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
];
