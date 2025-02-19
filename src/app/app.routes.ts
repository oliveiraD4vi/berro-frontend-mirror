import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./pages/auth/auth.routes").then((m) => m.routes),
  },
  {
    path: "users",
    loadChildren: () =>
      import("./pages/tabs/tabs.routes").then((m) => m.routes),
  },
  {
    path: "appearance",
    loadComponent: () =>
      import("./pages/tabs/common/appearance/appearance.page").then(
        (m) => m.AppearancePage
      ),
  },
  {
    path: "**",
    redirectTo: "/",
  },
];
