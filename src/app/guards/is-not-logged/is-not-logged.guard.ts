import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../../services/auth/auth.service";

export const isNotLoggedGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const isLogged: boolean = authService.isLogged;

  if (!isLogged) {
    router.navigate(["/"]);
    return false;
  }

  return true;
};
