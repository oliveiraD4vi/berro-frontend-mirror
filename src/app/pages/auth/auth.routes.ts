import { Routes } from "@angular/router";
import { AuthPage } from "./auth.page";

export const routes: Routes = [
  {
    path: "a",
    component: AuthPage,
    children: [
      {
        path: "login",
        loadComponent: () =>
          import("./login/login.page").then((m) => m.LoginPage),
      },
      {
        path: "steps",
        loadComponent: () =>
          import("./steps/steps.page").then((m) => m.StepsPage),
      },
      {
        path: "recover",
        loadComponent: () =>
          import("./recover/recover.page").then((m) => m.RecoverPage),
      },
      {
        path: "",
        redirectTo: "/s/a/steps",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/s/a/steps",
    pathMatch: "full",
  },
];
