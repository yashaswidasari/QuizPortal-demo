import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { filter } from 'rxjs';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-show-quizzes',
  templateUrl: './show-quizzes.component.html',
  styleUrls: ['./show-quizzes.component.css']
})
export class ShowQuizzesComponent implements OnInit {

  quizzes: any = [];

  constructor(private quizServe: QuizService, private matSnack: MatSnackBar) { }

  ngOnInit(): void {

    this.quizServe.getQuizzes().subscribe(
      (data) => {
        console.log(data);
        this.quizzes = data;
      },
      (error) => {
        this.matSnack.open('Error could not retrive the details', '', { duration: 3000 })
      }
    )
    console.log(this.quizzes)
  }

  //delete quiz

  deleteQuiz(qid: any) {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {

      if (result.isConfirmed) {
        this.quizServe.deleteQuiz(qid).subscribe(
          (data) => {
            this.quizzes = this.quizzes.filter((data: any) => data.qid != qid);
            Swal.fire("Deleted!", "Successfully deleted the Quiz", "success");
          },
          (error) => {
            Swal.fire("Error", "Unsuccessfully in deleting the Quiz", "error");
          }
        )
      }
    })

  }




}
