import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  public questionStatusSubject = new Subject<boolean>();

  constructor(private http:HttpClient) { }


  public getQuestionsByQuiz(qid:any){
    return this.http.get(`${baseUrl}/question/quiz/${qid}`);
  }

  public getQuestion(quesid:any){
    return this.http.get(`${baseUrl}/question/${quesid}`);
  }
  
  public getAllQuestionsByQuiz(qid:any){
    return this.http.get(`${baseUrl}/question/quiz/all/${qid}`);
  }

  public addQuestion(question:any){
    return this.http.post(`${baseUrl}/question/`,question);
  }

  public updateQuestion(question:any){
    return this.http.put(`${baseUrl}/question/`,question);
  }

  public deleteQuestion(quesid:any){
    return this.http.delete(`${baseUrl}/question/${quesid}`);
  }

  public getQuestionsByQuizForTest(qid:any){
    return this.http.get(`${baseUrl}/question/quiz/test/${qid}`);
  }

  public getResults(questions:any,qid:any,userId:any,date:any){
    return this.http.post(`${baseUrl}/question/quiz/result/${qid}/${userId}/${date}`,questions);
  }
  
}
