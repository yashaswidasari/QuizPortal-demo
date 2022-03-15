import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-view-usercategories',
  templateUrl: './view-usercategories.component.html',
  styleUrls: ['./view-usercategories.component.css']
})
export class ViewUsercategoriesComponent implements OnInit {
  
  categories:any;
  quiz:any;

  constructor(private catServe:CategoryService) { }

  ngOnInit(): void {
    this.catServe.getCategories().subscribe(
      (data)=>{
        this.categories=data;
        console.log(data);
      },
      (error)=>{
        console.log("error in ViewUsercategoriesComponent ngOnInit() 1");
      }
    )


  }

}
