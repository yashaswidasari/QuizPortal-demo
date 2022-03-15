import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-categories',
  templateUrl: './update-categories.component.html',
  styleUrls: ['./update-categories.component.css']
})
export class UpdateCategoriesComponent implements OnInit {

  category={
    cid:"",
    title:"",
    description:""
  }

  constructor(private catServe:CategoryService,private matSnack:MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit(){
    if(this.category.cid==""||this.category.cid==null){
      this.matSnack.open('Category Id is required','',{duration:3000});
      return;
    }
    this.catServe.updateCategories(this.category).subscribe(
     (data)=>{
        console.log(data);
        Swal.fire('Success','Category is successfully updated','success');
      },
    (error)=>{
      Swal.fire('Error','Category has failed to update','error');
    }
    )
  }

}
