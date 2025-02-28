import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../../services/auth/auth.service";
import { Roles } from "src/app/utils/constants";

const allowedRoutes = {
  [Roles.ALUMN]: ["/u/t/cart", "/u/t/requests"],
  [Roles.ADMIN]: [
    "/u/t/products",
    "/u/t/logs",
    "/u/t/requests",
  ],
  [Roles.GUSER]: [
    "/u/t/products",
    "/u/t/logs",
    "/u/t/requests",
    "/u/t/users",
  ],
};

export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const userRole: string = authService.role;
  const path: string = state.url;

  if (!allowedRoutes[userRole].includes(path)) {
    router.navigate(["/"]);
    return false;
  }

  return true;
};
