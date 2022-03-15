import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import baseUrl from '../helper';
import { LoginService } from '../login.service';

@Injectable({
  providedIn: 'root'
})
export class UserDashGuard implements CanActivate {

  constructor(private login:LoginService,private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if((this.login.isLoggedIn()) && this.login.getUserRole()=="User"){
        return true;
      }

      this.router.navigateByUrl(`/login`);

    return false;
  }
  
}
