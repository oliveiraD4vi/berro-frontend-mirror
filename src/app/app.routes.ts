import { Routes } from "@angular/router";
import { isLoggedGuard } from "./guards/is-logged/is-logged.guard";
import { isNotLoggedGuard } from "./guards/is-not-logged/is-not-logged.guard";

export const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./pages/auth/auth.routes").then((m) => m.routes),
    canActivate: [isLoggedGuard],
  },
  {
    path: "users",
    loadChildren: () =>
      import("./pages/tabs/tabs.routes").then((m) => m.routes),
    canActivate: [isNotLoggedGuard],
  },
  {
    path: "appearance",
    loadComponent: () =>
      import("./pages/appearance/appearance.page").then(
        (m) => m.AppearancePage
      ),
    canActivate: [isNotLoggedGuard],
  },
  {
    path: "**",
    redirectTo: "/",
  },
];
