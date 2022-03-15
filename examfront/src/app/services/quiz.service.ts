import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }

  public getQuizzes(){

   return this.http.get(`${baseUrl}/quiz/`);
  }

  public addQuiz(quiz:any){
    return this.http.post(`${baseUrl}/quiz/`,quiz);
   }

   public deleteQuiz(qid:any){
    return this.http.delete(`${baseUrl}/quiz/${qid}`);
   }

   public getQuiz(qid:any){
    return this.http.get(`${baseUrl}/quiz/${qid}`);
   }

   public updateQuiz(quiz:any){
    return this.http.put(`${baseUrl}/quiz/`,quiz);
   }

   public getQuizByCategory(cid:any){
    return this.http.get(`${baseUrl}/quiz/category/${cid}`);
   }


   //service for active quizzes exclusive for User
   public getQuizByActive(b:any){
     return this.http.get(`${baseUrl}/quiz/active/${b}`);
   }

    //service for active quizzes exclusive for User
    public getQuizByCategoryAndActive(cid:any,b:any){
      return this.http.get(`${baseUrl}/quiz/category/${cid}/${b}`);
    }

}
