import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent implements OnInit {
  category:any=
    {
    title:"",
    description:""
    }
  

  constructor(private catServe:CategoryService,private matSnack:MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit(){

    if(this.category.title==""||this.category.title==null){
      this.matSnack.open('Title is required','',{duration:3000})
      return;
    }

    if(this.category.description==""||this.category.description==null){
      this.matSnack.open('Description is required','',{duration:3000})
      return;
    }


    this.catServe.addCategories(this.category).subscribe(
      (data)=>{
        this.category.title='';
        this.category.description='';
        console.log(data);
        Swal.fire("Success!","Succesfully added category","success");

      },
      (error)=>{
        Swal.fire("Error!","Failed add category","error");
      }
    )

  }

}
