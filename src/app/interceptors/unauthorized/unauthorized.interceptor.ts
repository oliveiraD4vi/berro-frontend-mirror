import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { catchError, throwError } from "rxjs";
import { AuthService } from "../../services/auth/auth.service";

export const unauthorizedInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);

  return next(req).pipe(
    catchError((err) => {
      if ([401, 403].includes(err.status)) {
        auth.logout();
      }

      return throwError(() => err);
    })
  );
};
