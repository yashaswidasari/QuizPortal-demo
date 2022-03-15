import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { QuestionService } from 'src/app/services/question.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-quizstarted',
  templateUrl: './quizstarted.component.html',
  styleUrls: ['./quizstarted.component.css']
})
export class QuizstartedComponent implements OnInit {



  questions: any = [];
  qid: any;
  isSubmit = false;
  quizMarks = 0;
  quesAttempted = 0;
  quesCorrect = 0;
  noAns = 0;
  totalMarks = 0;
  correctQuestions: any;
  timer = 0;
  answers:any;
  userId:any;
  quiz:any;
  date:String="";
  

  constructor(private Actrouter: ActivatedRoute, private questionServe: QuestionService, private locationStrategy: LocationStrategy,private loginServe:LoginService,private quizServe:QuizService) { }

  ngOnInit(): void {
    this.preventBackButton();

  
    this.qid = this.Actrouter.snapshot.params['qidUrl'];

    // this.date = this.dateTime.getUTCDate()+' '+this.dateTime.getUTCHours()+' '+this.dateTime.getUTCMinutes()+' '+this.dateTime.getUTCSeconds();
        
        this.date = this.getDateTime();

        console.log(this.date);

    
    
    //Load Questions for quiz
    this.questionServe.getQuestionsByQuizForTest(this.qid).subscribe(
      (data) => {
        this.questions = data;
        
        this.timer = ((this.questions[0].quiz.numOfQuestions) * 2 * 60 );
      

        // this.questions.forEach((element: any) => {
        //   element['givenAnswer'] = '';
        // });

        console.log(data);
      },
      (error) => {
        console.log("error in QuizstartedComponent ")
      }
    )


    this.timerFunction();
    // -------------------------------------------------------------------------------------------------


  }

  preventBackButton() {
    history.pushState(null, location.href);
    this.locationStrategy.onPopState(() => {
      history.pushState(null, location.href);
    });
  }

  onSubmit() {
    //After submiting the quiz eval the quiz marks
    Swal.fire({
      title: 'Are you sure?, you want to submit the quiz',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Submit it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.submitQuiz();
      }
    })


    // ----------------------------------------------------------------------------------------------

  }

  timerFunction() {
    let t: any = window.setInterval(() => {
      if (this.timer <= 0) {
        this.submitQuiz();
        clearInterval(t);
      }
      else {
        this.timer--;
      }
    }, 1000);
  }

  getFormattedTimer() {

    let mins = Math.floor(this.timer / 60);
    let secs = this.timer - mins * 60;
    return `${mins} min : ${secs} sec`;
  }


  //eval after submiting the quiz
  submitQuiz() {
    
    console.log(this.questions);
    
    this.isSubmit=true;

    this.userId=this.loginServe.getUserDetails().id;





    this.questionServe.getResults(this.questions,this.qid,this.userId,this.date).subscribe(
      (data:any)=>{
        console.log(data);

        this.quesCorrect = data.Result.correctAns;
        this.quesAttempted = data.Result.attemptQues;
        this.totalMarks = data.Result.totalMarks;
         this.answers=data.quesAnswers;
        

       
      },
      (error)=>{
        console.log('error in QuizstartedComponent submitQuiz');
      }
    );
    

  //Implement evaluvation in forntend -------------------------------------------------------

    // this.questions.forEach((element: any) => {

    //   console.log(element.givenAnswer);
    //   if (element.givenAnswer.trim() == "") {
    //     this.quizMarks++;
    //     this.noAns++;
    //     return;
    //   }
    //   else {
    //     this.quesAttempted++;
    //   }

    //   if (element.givenAnswer == element.answer) {


    //     this.correctQuestions = {
    //       question: element.content,
    //       answer: element.qivenAnswer
    //     }

    //     this.quizMarks++;
    //     this.quesCorrect++;
    //   }
    // })

    // this.totalMarks = ((this.questions[0].quiz.maxMarks) / (this.questions[0].quiz.numOfQuestions)) * (this.quizMarks);
    // console.log(this.correctQuestions);
  }


  //Time
   getDateTime() {
     let now   = new Date(); 
     let year:any   = now.getFullYear();
     let month:any   = now.getMonth()+1; 
     let day:any    = now.getDate();
     let hour:any   = now.getHours();
     let minute:any  = now.getMinutes();
     let second:any  = now.getSeconds(); 
    if(month.toString().length == 1) {
         month = '0'+month;
    }
    if(day.toString().length == 1) {
         day = '0'+day;
    }   
    if(hour.toString().length == 1) {
         hour = '0'+hour;
    }
    if(minute.toString().length == 1) {
         minute = '0'+minute;
    }
    if(second.toString().length == 1) {
         second = '0'+second;
    }   
    var dateTime = month+'-'+day+'-'+year+' '+hour+':'+minute+':'+second;   
     return dateTime;
}

}



