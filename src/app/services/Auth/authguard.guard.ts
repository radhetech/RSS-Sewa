import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { map } from 'rxjs';

export const authguardGuard: CanActivateFn = () => {
  const loggingservice: LoginService = inject(LoginService);
  const route: Router = inject(Router);
  if (loggingservice.isuserLoginorNot()) {
      console.log(loggingservice.isuserLoginorNot())
      return true;
  } else {
      route.navigate(['login'])
      return false;
  }
};
