import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { Platform } from "@ionic/angular";

export const deviceGuard: CanActivateFn = (route, state) => {
  const platform = inject(Platform);
  const router = inject(Router);

  const isMobileDevice: boolean = platform.is("mobile");
  const path: string = state.url;

  if (path.includes("welcome") && isMobileDevice) {
    router.navigate(["/"]);
    return false;
  }

  if (!path.includes("welcome") && !isMobileDevice) {
    router.navigate(["/welcome"]);
    return false;
  }

  return true;
};
