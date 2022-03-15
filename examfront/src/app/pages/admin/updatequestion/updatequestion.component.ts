import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-updatequestion',
  templateUrl: './updatequestion.component.html',
  styleUrls: ['./updatequestion.component.css']
})
export class UpdatequestionComponent implements OnInit {
  public Editor = ClassicEditor;
  quesid:any;
  
  question:any;
  constructor(private ActRouter: ActivatedRoute,private questionServe:QuestionService) { }

  ngOnInit(): void {
    this.quesid=this.ActRouter.snapshot.params['quesidUrl'];

   this.questionServe.getQuestion(this.quesid).subscribe(
     (data)=>{
      //  alert(this.quesid);
       this.question=data;
       console.log(this.question);
     },
     (error)=>{
       console.log('error in UpdatequestionComponent')
     }
   )

  }

  formSubmit(){
    this.questionServe.updateQuestion(this.question).subscribe(
      (data)=>{
       //  alert(this.quesid);
       console.log(this.question);
        this.question={};
        
      },
      (error)=>{
        console.log('error in UpdatequestionComponent')
      }
    )


  }

}
