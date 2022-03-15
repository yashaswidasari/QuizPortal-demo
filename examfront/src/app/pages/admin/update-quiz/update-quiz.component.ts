import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  constructor(private route:ActivatedRoute,private quizServe: QuizService,private catServe:CategoryService,private router:Router) { }

  qid= undefined;
  quiz:any;
  categories:any;

  ngOnInit(): void {

    //Retrive All avilable categories for the option to choose categories 
    this.catServe.getCategories().subscribe(
      (data)=>{
        this.categories=data;

      },
      (error)=>{
        console.log("Unable to retrive categories in 'UpdateQuizComponent'")
      })

    //ActivatedRoute is used to retrive dynamic values (like variables) that have been passsed throught URL.
    this.qid = this.route.snapshot.params['qidUrl'];
    // alert(this.qid);
    this.quizServe.getQuiz(this.qid).subscribe(
      (data)=>{ 
        this.quiz=data;
        
        console.log(this.quiz);
    },
    (error)=>{
      console.log("could not retrive Quiz for update")
    })


  }

  formSubmit(){

    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Update it!'
    }).then((result) => {
      if(result.isConfirmed){
        this.quizServe.updateQuiz(this.quiz).subscribe(
          (data)=>{
            console.log(data);
            Swal.fire("Updated!", "Successfully updated the Quiz", "success").then((data)=>{
              console.log('what is data here'+data);
              this.router.navigate(['/admin/showquizzes']);
            });
          },
          (error) => {
            Swal.fire("Error", "Unsuccessfully in updating the Quiz", "error");
          }
        )

      }
    })
  }
}
