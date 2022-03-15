import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-view-quizbycat',
  templateUrl: './view-quizbycat.component.html',
  styleUrls: ['./view-quizbycat.component.css']
})
export class ViewQuizbycatComponent implements OnInit {

  cid:any;
  quizzes:any;
  ctitle:any;

  constructor(private ActRouter:ActivatedRoute,private quizServe:QuizService) { }

  ngOnInit(): void {
  this.cid = this.ActRouter.snapshot.params['cidUrl'];
  this.ctitle= this.ActRouter.snapshot.params['ctitleUrl'];

  //request to get all quizzes by category

  // this.quizServe.getQuizByCategory(this.cid).subscribe(
  //   (data)=>{
  //     this.quizzes = data;
  //     console.log(this.cid);
  //   },
  //   (error)=>{
  // console.log("error in ViewQuizbycatComponent at getQuizByCategory")
  //   }
  // )
  
  // }

  //request to get only active quizzes by category
  this.quizServe.getQuizByCategoryAndActive(this.cid,true).subscribe(
    (data)=>{
      this.quizzes = data;
      console.log(this.quizzes);
    },
    (error)=>{
      console.log("error in ViewQuizbycatComponent at getQuizByCategory")
    }
  );
  
  }

}
