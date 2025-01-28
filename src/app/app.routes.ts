import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./pages/tabs/tabs.routes").then((m) => m.routes),
  },
  {
    path: "appearance",
    loadComponent: () =>
      import("./pages/common/appearance/appearance.page").then(
        (m) => m.AppearancePage
      ),
  },
  {
    path: "**",
    redirectTo: "/",
  },
];
