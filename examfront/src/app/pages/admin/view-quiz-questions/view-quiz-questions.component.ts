import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit {

  qId:any;
  qtitle:any;
  questions:any=[];
  constructor(private actRouter:ActivatedRoute,private questionServe:QuestionService) { }

  ngOnInit(): void {
   this.qId= this.actRouter.snapshot.params['qidUrl'];
   this.qtitle= this.actRouter.snapshot.params['titleUrl'];

  this.questionServe.getAllQuestionsByQuiz(this.qId).subscribe(
    (data)=>{
      this.questions=data;
      console.log('to');
    },
    (error)=>{
      console.log('Error in ViewQuizQuestionsComponent didnt recieve getQuestionsByQuiz ')
    }

  );
  }

//delete question

deleteQuestion(quesId:any){


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
      this.questionServe.deleteQuestion(quesId).subscribe(
        (data) => {
          this.questions=this.questions.filter((data: any) => data.quesid != quesId);
          Swal.fire("Deleted!", "Successfully deleted the Question", "success");
        },
        (error) => {
          Swal.fire("Error", "Unsuccessfully in deleting the Question", "error");
        }
      )
    }
  })

}

}
