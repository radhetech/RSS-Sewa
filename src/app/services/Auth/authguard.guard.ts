import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { map } from 'rxjs';

export const authguardGuard: CanActivateFn = () => {
  const loggingservice: AuthenticationService = inject(AuthenticationService);
  const route: Router = inject(Router);
  if (loggingservice.isUserLogin) {
      return true;
  } else {
      route.navigate(['login'])
      return false;
  }
};
