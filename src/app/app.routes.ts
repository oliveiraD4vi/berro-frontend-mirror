import { Routes } from "@angular/router";
import { isLoggedGuard } from "./guards/is-logged/is-logged.guard";
import { isNotLoggedGuard } from "./guards/is-not-logged/is-not-logged.guard";
import { deviceGuard } from "./guards/device/device.guard";

export const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./pages/auth/auth.routes").then((m) => m.routes),
    canActivate: [isLoggedGuard, deviceGuard],
  },
  {
    path: "users",
    loadChildren: () =>
      import("./pages/tabs/tabs.routes").then((m) => m.routes),
    canActivate: [isNotLoggedGuard, deviceGuard],
  },
  {
    path: "appearance",
    loadComponent: () =>
      import("./pages/appearance/appearance.page").then(
        (m) => m.AppearancePage
      ),
    canActivate: [isNotLoggedGuard, deviceGuard],
  },
  {
    path: 'welcome',
    loadComponent: () => import('./pages/landing-page/landing-page.page').then( m => m.LandingPagePage),
    canActivate: [deviceGuard],
  },
  {
    path: "**",
    redirectTo: "/",
  },
];
