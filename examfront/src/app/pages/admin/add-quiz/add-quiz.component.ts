import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {



  categories:any=[];

  quiz={
    title:"",
    description:"",
    maxMarks:"",
    numOfQuestions:"",
    active:true,
    category:{
      cid:""
    }
  }


  
  constructor(private catServe:CategoryService, private quizServe:QuizService,private matSnack:MatSnackBar) { }

  ngOnInit(): void {
    this.catServe.getCategories().subscribe(
      (data)=>{
          this.categories=data;
      },
      (error)=>{
        console.log(error);
      }

    )
  }

  formSubmit(){

    // console.log(this.quiz);

    if(this.quiz.title.trim()==""||this.quiz.title==null){
      this.matSnack.open('Title is required','',{duration:3000})
      return;
    }

    if(this.quiz.description.trim()==""||this.quiz.description==null){
      this.matSnack.open('Description is required','',{duration:3000})
      return;
    }

    if(this.quiz.maxMarks.trim()==""||this.quiz.maxMarks==null){
      this.matSnack.open('Max Marks is required','',{duration:3000})
      return;
    }

    if(this.quiz.numOfQuestions.trim()==""||this.quiz.numOfQuestions==null){
      this.matSnack.open('Number Of Questions is required','',{duration:3000})
      return;
    }

    if(this.quiz.category.cid==""||this.quiz.category.cid==null){
      this.matSnack.open('Select the category from the options','',{duration:3000})
      return;
    }


    this.quizServe.addQuiz(this.quiz).subscribe(
     (data)=>{
       console.log(data);
       Swal.fire("Success","Successfully added the Quiz","success");
    },
    (error)=>{
      console.log("damn the quiz was not added")
      Swal.fire("Error","Unsuccessfully in adding the Quiz","error");
    }
    )

    
  }


}
