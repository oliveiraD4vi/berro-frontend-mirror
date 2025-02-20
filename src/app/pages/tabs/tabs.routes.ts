import { Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";
import { roleGuard } from "src/app/guards/roles/roles.guard";

export const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "home",
        loadComponent: () =>
          import("./common/home/home.page").then((m) => m.HomePage),
      },
      {
        path: "profile",
        loadComponent: () =>
          import("./common/profile/profile.page").then((m) => m.ProfilePage),
      },
      // {
      //   path: "balance",
      //   loadComponent: () =>
      //     import("../student/balance/balance.page").then((m) => m.BalancePage),
      // },
      {
        path: "cart",
        loadComponent: () =>
          import("./student/cart/cart.page").then((m) => m.CartPage),
        canActivate: [roleGuard]
      },
      {
        path: "products",
        loadComponent: () =>
          import("./admin/products/products.page").then((m) => m.ProductsPage),
        canActivate: [roleGuard]
      },
      {
        path: "logs",
        loadComponent: () =>
          import("./admin/logs/logs.page").then((m) => m.LogsPage),
        canActivate: [roleGuard]
      },
      {
        path: "requests",
        loadComponent: () =>
          import("./admin/requests/requests.page").then((m) => m.RequestsPage),
        canActivate: [roleGuard]
      },
      {
        path: "users",
        loadComponent: () =>
          import("./guser/users/users.page").then((m) => m.UsersPage),
        canActivate: [roleGuard]
      },
      {
        path: "**",
        redirectTo: "/tabs/home",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "**",
    redirectTo: "/tabs/home",
    pathMatch: "full",
  },
];
