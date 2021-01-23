import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private readonly router: Router
  ) {
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    console.log(route, state);
    const url = state.url;
    return of(true) // observable isLogged
      .pipe(
        switchMap( (isLogged) => {
          if ( !isLogged && (url === '/login' || url === '/signup') ) {
            return of(true);
          }
          if ( isLogged && (url === '/login' || url === '/signup') ) {
            this.router.navigate(['/backoffice']);
            return of(false);
          }
          if ( !isLogged ) {
            this.router.navigate(['/login']);
          }
          return of(isLogged);
        })
      );
  }

}
