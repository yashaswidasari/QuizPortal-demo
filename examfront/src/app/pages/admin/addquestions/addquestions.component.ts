import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-addquestions',
  templateUrl: './addquestions.component.html',
  styleUrls: ['./addquestions.component.css']
})
export class AddquestionsComponent implements OnInit {

  public Editor = ClassicEditor;

  question = {
    quiz: {
      qid: '',
    },
    content: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: '',
  };
  qId: any;
  qtitle: any;


  constructor(private actRouter: ActivatedRoute, private quesServe: QuestionService,private matSnack:MatSnackBar) { }

  ngOnInit(): void {
    this.qId = this.actRouter.snapshot.params['qidUrl'];
    this.qtitle = this.actRouter.snapshot.params['titleUrl'];
    this.question.quiz.qid = this.qId;
  }

  formSubmit() {


    if(this.question.content.trim()==""||this.question.content==null){
      this.matSnack.open('Question content is required','',{duration:3000})
      return;
    }

    if(this.question.option1.trim()==""||this.question.option1==null){
      this.matSnack.open('Option1 is required','',{duration:3000})
      return;
    }


    if(this.question.option2.trim()==""||this.question.option2==null){
      this.matSnack.open('Option2 is required','',{duration:3000})
      return;
    }

    if(this.question.option3.trim()==""||this.question.option3==null){
      this.matSnack.open('Option3 is required','',{duration:3000})
      return;
    }

    if(this.question.option4.trim()==""||this.question.option4==null){
      this.matSnack.open('Option4 is required','',{duration:3000})
      return;
    }

    if(this.question.answer==""||this.question.answer==null){
      this.matSnack.open('Answer is required','',{duration:3000})
      return;
    }

    

    this.quesServe.addQuestion(this.question).subscribe(
      (data) => {
        console.log(data);
        Swal.fire("Success","Successfully added the Question","success");
        this.question = {
          quiz: {
            qid: '',
          },
          content: '',
          option1: '',
          option2: '',
          option3: '',
          option4: '',
          answer: '',
        };
        
      },
      (error) => {
        console.log('error adding question');
        Swal.fire("Error","Unsuccessfully in adding the Question","error");
      }

    );
  }
}
