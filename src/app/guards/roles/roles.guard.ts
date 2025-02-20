import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { Roles } from 'src/app/utils/constants';

const allowedRoutes = {
  [Roles.ALUMN]: ['/users/tabs/cart', '/users/tabs/requests'],
  [Roles.ADMIN]: ['/users/tabs/products', '/users/tabs/logs', '/users/tabs/requests'],
  [Roles.GUSER]: ['/users/tabs/products', '/users/tabs/logs', '/users/tabs/requests', '/users/tabs/users'],
};

export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const userRole: string = authService.role;
  const path: string = state.url;

  if (!(allowedRoutes[userRole].includes(path))) {
    router.navigate(['/']);
    return false;
  }

  return true;
};
