import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { Platform } from "@ionic/angular";

export const deviceGuard: CanActivateFn = (route, state) => {
  const platform = inject(Platform);
  const router = inject(Router);

  const isMobileDevice: boolean = platform.is("mobile");
  const path: string = state.url;

  // It blocks users using mobile devices to see the landing page
  // Uncomment it when building for IOS and Android
  // if (path.includes("welcome") && isMobileDevice) {
  //   router.navigate(["/s/a/steps"]);
  //   return false;
  // }

  if (!path.includes("welcome") && !isMobileDevice) {
    router.navigate(["/welcome"]);
    return false;
  }

  return true;
};
