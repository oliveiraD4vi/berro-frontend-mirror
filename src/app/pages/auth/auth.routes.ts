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
      {
        path: "register",
        loadComponent: () =>
          import("./register/register.page").then((m) => m.RegisterPage),
      },
      {
        path: "steps",
        loadComponent: () =>
          import("./steps/steps.page").then((m) => m.StepsPage),
      },
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
  }
];
