import { Component, OnInit } from '@angular/core';
import {users} from './class/users';
import {UserService} from '../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userServe: UserService, private snack: MatSnackBar) {}

  user=new users();


  ngOnInit(): void {}

  formSubmit(){
    
      if((this.user.firstName=='')||(this.user.lastName=='')||(this.user.email=='')||(this.user.phone=='')||(this.user.username=='')||(this.user.password==''))
      {
       this.snack.open('Unsuccesful please fill all the details','Retry',{duration: 3000});
        return;
      };

      this.userServe.addUser(this.user).subscribe( 
        (data:any)=>{
          //success
          console.log(data);
         // this.snack.open('Success, welcome.','',{duration: 3000});
         Swal.fire('Successfully registered','User Id is '+data.id,'success');
        },
        (error)=>{
          //fail
          console.log(error);
          this.snack.open('Sorry something went wrong try again','Retry',{duration: 3000});
        }
  
      );

      

      

  }

}


