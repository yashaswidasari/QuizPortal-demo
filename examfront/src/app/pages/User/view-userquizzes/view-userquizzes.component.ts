import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-view-userquizzes',
  templateUrl: './view-userquizzes.component.html',
  styleUrls: ['./view-userquizzes.component.css']
})
export class ViewUserquizzesComponent implements OnInit {

  quizzes:any;

  constructor(private quizServe:QuizService) { }

  ngOnInit(): void {
    
    //request to show all quizzes

    // this.quizServe.getQuizzes().subscribe(
    //   (data)=>{
    //     this.quizzes=data;
    //     console.log(data);
    //   },
    //   (error)=>{
    //     console.log("error in the ViewUserquizzesComponent in getQuizzes")
    //   }
    // )
    
     //request to show only active quizzes
     
    this.quizServe.getQuizByActive(true).subscribe(
      (data)=>{
        this.quizzes=data;
        console.log(this.quizzes);
    },
    (error)=>{
          console.log("error in the ViewUserquizzesComponent in getQuizByActive")
        }

    )

  }

}
