import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject = new Subject<boolean>();

  logotTime:any;

  constructor(private http:HttpClient,private router:Router) { }


  //
  public getCurrentUser(){
    return this.http.get(`${baseUrl}/current-user`);
  } 


  //Generate-token

  public generateToken(loginDetails: any)
  {
    return this.http.post(`${baseUrl}`+'/generate-token',loginDetails)

  }

  //login user: set token in local storage
  public loginUser(token: any){
      localStorage.setItem('token',token);
      // this.autoLogout(3600000);
      return true;
  }

  //user is logged in or not
  public isLoggedIn(){
    let token=localStorage.getItem('token');
    if(token==undefined||token==""||token==null){
      return false;
    }
    
    return true;
  }

  //remove token and user from local storage
  public logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    // if (this.logotTime) {
    //   clearTimeout(this.logotTime);
    // }
    return true;
  }

  //autologout
  // autoLogout(expirationDate: number) {
  //   console.log(expirationDate);
  //   this.logotTime = setTimeout(() => {
  //     this.logOut();
  //     this.loginStatusSubject.next(false);
  //     this.router.navigate(['/']);
  //   }, expirationDate);
  // }

  //get token
  public getToken(){
    return localStorage.getItem('token');
  }

  //set user details
  public setUserDetails(user: any){
    localStorage.setItem('user',JSON.stringify(user));
  }

  //get user details
  public getUserDetails(){
    let userstr = localStorage.getItem('user');
    if(userstr!=null ){
      return JSON.parse(userstr);
    }
    else{
      this.logOut();
      return null;
    }
  }

    //get user role
    public getUserRole(){
      let user = this.getUserDetails();
      return user.authorities[0].authority;
    }
    
  }

