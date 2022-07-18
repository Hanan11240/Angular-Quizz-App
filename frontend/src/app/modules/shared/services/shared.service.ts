import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

   serverUrl= environment.serverURL
  constructor(private http:HttpClient) { }

  getAllQuizzes(){
    return this.http.get(`${this.serverUrl}quiz/all-quizzes`)
  }

  confirmParicipation(playerInfo:any){
      return this.http.post(`${this.serverUrl}team/participate`,playerInfo)
  }


  getQuiz(quizData:any){
    return this.http.post(`${this.serverUrl}quiz/play`,quizData)
  }


  submitResponse(finalResponse:any){
    console.log('service response',finalResponse)
      return this.http.post(`${this.serverUrl}responses`,finalResponse)
  }
}
