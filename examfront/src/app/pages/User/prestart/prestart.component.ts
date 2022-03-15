import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-prestart',
  templateUrl: './prestart.component.html',
  styleUrls: ['./prestart.component.css']
})
export class PrestartComponent implements OnInit {
  
  quizId:any;
  quiz:any;
  
  constructor(private ActRouter:ActivatedRoute,private quizServe:QuizService,private router:Router) { }

  ngOnInit(): void {

   this.quizId = this.ActRouter.snapshot.params['qidUrl'];

   this.quizServe.getQuiz(this.quizId).subscribe(
     (data)=>{
      this.quiz=data;
     },
     (error)=>{
       console.log("error in the PrestartComponent")
     }
   )

  }


  startQuiz(){

    Swal.fire({
      title: 'Are you sure?, you want to start the quiz',
      text: "You won't be able to go back after this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Start it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/quizstarted/'+this.quizId]);
      }
    })
    
  }

}
