import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { CanLoad, UrlSegment, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  
  canLoad(
    route: Route,
    segment: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authService.isAuthenticate) {
      this.router.navigateByUrl('/auth');
    }
    return this.authService.isAuthenticate;
  } 
}
