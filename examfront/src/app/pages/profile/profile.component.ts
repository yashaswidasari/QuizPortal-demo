import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  //magic learn this below code
  user:any=null;


  status='DEACTIVE';
  constructor(public login:LoginService) { }

  ngOnInit(): void {
    this.user=this.login.getUserDetails();
    if(this.user.enable){
      this.status='ACTIVE'
    }
  }

}
