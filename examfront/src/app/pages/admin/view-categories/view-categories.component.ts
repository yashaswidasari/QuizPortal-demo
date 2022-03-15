import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {
 categories:any=[];
 
  
  constructor(private catServe: CategoryService) { }

  ngOnInit(): void {
    this.catServe.getCategories().subscribe(
      (data:any)=>{
          console.log("sucess");
          this.categories=data;
    },
    (error)=>{
      console.log("error getCategories() failedS");
      Swal.fire('Error!','Error in loading data', 'error');
    })
  }



}
