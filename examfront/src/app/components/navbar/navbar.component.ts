import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user:any=null;
  isLoggedIn=false;
  role:any;

  constructor(public login:LoginService,private router:Router) { }

  ngOnInit(): void {
    this.user=this.login.getUserDetails();
    this.isLoggedIn=this.login.isLoggedIn();
    
    this.login.loginStatusSubject.asObservable().subscribe(
     (data:any)=>{
        this.user=this.login.getUserDetails();
        this.isLoggedIn=this.login.isLoggedIn();
      })

  }

  getRole(){
  
    if(this.login.getUserRole()=='ADMIN'){
      this.role='admin';
      
    }
    else{
      this.role='user'; 
    }
    
    this.router.navigate(['/'+this.role+'/profile']);
    
  }

  clickLogout(){

    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, Logout'
    }).then((result) => {

      if (result.isConfirmed) {
        this.login.logOut();
        this.login.loginStatusSubject.next(false);
        this.router.navigate(['/']);
       }

    })
  }

}
