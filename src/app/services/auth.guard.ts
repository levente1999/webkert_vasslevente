import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { inject } from '@angular/core';
import { map, take } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isUserLoggedIn().pipe(
    take(1),
    map(isLoggedIn => {
      if (isLoggedIn) {
        console.log("bevagy jelentkezve");
        return true;
      } else {
        // Itt esetleg átirányíthatjuk a bejelentkezési oldalra
        // Például: return inject(Router).createUrlTree(['/login']);
        console.log("Nem vagy bejelentkezve");
        return router.createUrlTree(['/login']);
      }
    })
  );
};
