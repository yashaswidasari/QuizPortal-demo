import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-categories',
  templateUrl: './delete-categories.component.html',
  styleUrls: ['./delete-categories.component.css']
})
export class DeleteCategoriesComponent implements OnInit {

  catId={
    cid:""
  };

  constructor(private catServe: CategoryService) { }

  ngOnInit(): void {
  }

  formSubmit(){
    if(this.catId.cid==""||this.catId.cid==null){
      return;
    }

    this.catServe.deleteCategory(this.catId.cid).subscribe(
      (data)=>{
        console.log("success");
        Swal.fire('Success','Successfully Deleted the Category','success');
      },
      (error)=>{
        console.log("failed very badly damnn");
        Swal.fire('error','Error Deleting the Category','error');
      }
    )

  }

}
