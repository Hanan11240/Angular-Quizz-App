import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { DomSanitizer } from '@angular/platform-browser';

 
@Component({
  selector: 'app-play-quiz',
  templateUrl: './play-quiz.component.html',
  styleUrls: ['./play-quiz.component.scss']
})
export class PlayQuizComponent implements OnInit {
quizData:any={}
questionNo:any=1
options:any =['a','b','c','d']
quizInfo:any={}
image:any={}
response:any={}
responses:any=[]
questionId:any=[]
responseSaved:boolean=true
finalResponse:any={}
minutes:number=0
seconds:number=0
remainSeconds:number=0
clue:boolean=false
quizTime:any={}



  constructor(private route:ActivatedRoute,private sharedService:SharedService,private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  console.log(this.route.snapshot.paramMap.get('id'))
  localStorage.setItem('quizId',this.route.snapshot.paramMap.get('id') || '')
  localStorage.setItem('questionNo',this.questionNo)
  this.getQuizTime()
  this.getQuiz()
  

  }


  timer()
  {
    this.minutes=this.quizTime[0]?.totalTime
  
   this.seconds=this.minutes*60
  this.remainSeconds=0;
  const intervalId = setInterval(() => {
    this.seconds = this.seconds - 1;
    this.minutes=Math.floor(this.seconds/60);
    this.remainSeconds=this.seconds%60;
    console.log(this.seconds)
    if(this.seconds == 0)
   
    { this.submitResponse()
      clearInterval(intervalId) ; }
}, 1000)

}

  

getQuizTime(){
    this.quizData._id=localStorage.getItem('quizId')
    
   
  this.sharedService.getQuizTime(this.quizData).subscribe((res:any)=>{
        console.log('quiztime',res)
        this.quizTime=res
        this.timer()
  })
}

  getQuiz(){
    this.quizData._id=localStorage.getItem('quizId')
    this.quizData.questionNo= localStorage.getItem('questionNo')
    this.sharedService.getQuiz(this.quizData).subscribe((res:any)=>{

      console.log('resposne',res)
      this.quizInfo=res
      this.questionId.push(this.quizInfo[0].quizBank[0]._id) 
      console.log('questionId----->',this.questionId)
      // this.timer()
      this.responseSaved=true
    

     

      if(this.quizInfo[0].quizBank[0].image){
        this.image =this._sanitizer.bypassSecurityTrustResourceUrl(`${this.quizInfo[0].quizBank[0].image}`)
      }
      
      this.questionNo++;
  localStorage.setItem('questionNo',this.questionNo)


    })
  }

  save(){
    
    this.responses.push(this.response)
    console.log('response',this.responses)
    this.response={}
    this.responseSaved=false
    
  }


  submitResponse(){
      this.responses.forEach((element:any,i:any)=>element.questionId= this.questionId[i])

      console.log('final response ',this.responses)
      this.finalResponse.teamsId= this.route.snapshot.paramMap.get('teamsId')
      this.finalResponse.teamId= this.route.snapshot.paramMap.get('teamId')
      this.finalResponse.responses= this.responses
      this.finalResponse.quizId= this.route.snapshot.paramMap.get('id')


    this.sharedService.submitResponse(this.finalResponse).subscribe((res:any)=>{
      console.log('responsesaved',res)


     
    })
     
  }
  revealClue(){
    this.clue=!this.clue
  }

}
