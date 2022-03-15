import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDetails={
    "username":"",
    "password":"",
  };

  constructor(private snack: MatSnackBar,private login:LoginService,private router: Router) { }

  ngOnInit(): void {
  }

  formSubmit(){

    if(this.loginDetails.username.trim()==""||this.loginDetails.username==null){
      this.snack.open( "Username is required!","",{
        duration: 3000
      });
      return;
    }

    if(this.loginDetails.password.trim()==""||this.loginDetails.password==null){
      this.snack.open( "Password is required!","",{
        duration: 3000
      });
      return;
    }


    //request to server to generate token
    this.login.generateToken(this.loginDetails).subscribe(
      (data:any)=>{
        console.log("Success")
        console.log(data);



        //login
        this.login.loginUser(data.token);



        //get user
        this.login.getCurrentUser().subscribe(
          (user:any)=>{
            this.login.setUserDetails(user);
            console.log(user)

            if (this.login.getUserRole()=="ADMIN")
            {
              //redirect to admin dashboard
              this.router.navigate([`/admin`]);       
              this.login.loginStatusSubject.next(true);
            }
            else if (this.login.getUserRole()=="User"){
                //redirect to user dashboard
                this.router.navigate([`/user`]); 
                this.login.loginStatusSubject.next(true);
            }
          },
          (error)=>{
            console.log("Error")
          });


          
      },
      (error)=>{
        console.log("Invalid Credentials")
        this.snack.open('Invalid Credentials. Please check and try again!','',{duration:3000});
      }

    )


  }

}
