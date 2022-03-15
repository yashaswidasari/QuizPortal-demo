import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private loginServe: LoginService,private router:Router) { }

  ngOnInit(): void {
  }


  //logout operation in side bar

  logout() {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, Logout'
    }).then((result) => {

      if (result.isConfirmed) {

       if(this.loginServe.logOut()){
         //as soon as we logot we need to inform navbar that we are logged out by using 'public loginStatusSubject = new Subject<boolean>();'
         //Here 'loginStatusSubject' is just a variable and Subject is the concept . Google it 
        
          this.loginServe.loginStatusSubject.next(false);
          this.router.navigate(['/']);

        
       }
       else{
        Swal.fire("Error", "Unsuccessfully to logOut", "error");
       }


        //   Swal.fire("Deleted!", "Successfully deleted the Quiz", "success");
        // },
        // (error) => {
        //   Swal.fire("Error", "Unsuccessfully in deleting the Quiz", "error");
        // }  
      }

    })
  }
}
