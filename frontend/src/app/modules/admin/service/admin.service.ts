import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  serverUrl = environment.serverURL
  user:any={}

  constructor(private http:HttpClient) { 

  }


  submitQuiz(question:any){
    const userId = localStorage.getItem('userId')
    question.userId=userId
    return this.http.post(`${this.serverUrl}quiz`,question)

  }

  addTeam(team:any){
    return this.http.post(`${this.serverUrl}team/add-team`,team)
  }
  getOrganizationQuizzes(){ 
    let  users =localStorage.getItem('userId') 
    this.user.userId= users 
    return this.http.post(`${this.serverUrl}quiz/get-organization-quizzes`,this.user)
  }

  getQuizBySubjects(){
    
    return this.http.post(`${this.serverUrl}quiz/quiz-by-subject`,this.user)
  }


  addOrganization(organizartionData:any){
    return this.http.post(`${this.serverUrl}organization/add-organization`,organizartionData)
  }
 
}
