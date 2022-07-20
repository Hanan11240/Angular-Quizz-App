import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.scss']
})
export class AddQuizComponent implements OnInit {
info:boolean=false
questionType:any={}
quizInfo:any={}
option:any={}
quizBank:any=[]
questions:any={}
options:any={}
totalQuestions:any={}
quizDataReceived:any=[]
count:any=0
preview:boolean=false;
update:boolean=false

  constructor( private adminService:AdminService,private router:Router) { }

  ngOnInit(): void {
  }

  typesOfQuestions=[
    {
      type:'clue Based'
    },
    {
      type:'mcq'
    },
    {
      type:'faceRecognition'
    },
    {
      type:'Rapid Fire'
    }
  ]
  setQuizInfo(){
    if(!(this.quizInfo.organizationName &&  this.quizInfo?.eventName && this.quizInfo.totalQuestions && this.quizInfo.totalTime) ){
      alert('fields cannot be empty')
    }else{

      const trimmedOrganizationName = this.quizInfo.organizationName.trim()
      const trimmedEventName = this.quizInfo?.eventName.trim()
  
      if(trimmedOrganizationName == "" && trimmedEventName == ""){
        alert('Fields Cannnot be empty');
      }else{ 
        this.info=true
        console.log('toalquestions----->',this.totalQuestions)
        console.log('quizinfo',this.quizInfo)
      }

    }

    

    
  }

  validateQuestion(){

    if(!this.questions.question){
      throw new Error("Question Field Cannot be Empty")
    }
    const trimmedQuestion=this.questions.question.trim()
    if(trimmedQuestion==""){
      throw new Error("Emty space is not considerd as question")

    }
    const question = this.questions.question
    this.quizBank.forEach((val:any)=>{
      if(val.question ==question){
        throw new Error("Question already submitted")
      }
    })
    
  

  }

  validateOptions(){
      if(!(this.option.option1 && this.option.option2 && this.option.option3 && this.option.option4)){
        throw new Error("Options cannot be empty")
      }


      let sameOptions:string[]=[]
      const options=Object.values(this.option)
      options.forEach((option:any)=>{
          sameOptions.push(option.replaceAll(" ",""))
      })

    if(sameOptions[0]=="" || sameOptions[1]=="" || sameOptions[2]=="" || sameOptions[3]=="") {
      throw new Error('Empty spaces are not valid options')
    }

     let uniqueOptions=new Set()
     sameOptions.forEach((option:any)=>{
      console.log('options',option)
      if(uniqueOptions.has(option)) throw new Error("Options cant be same")
      else{
        uniqueOptions.add(option)
      }
    })

  }

  submitQuestion(){

// form validation
      try{
            this.validateQuestion()
            this.validateOptions()
      }catch(err:any){
          Swal.fire(`${err}`)
          return 
        }


        if(this.count<this.quizInfo.totalQuestions){
          this.options = Object.values(this.option)
         this.questions.options=this.options
         this.questions.type= this.questionType.type
        
         this.quizBank.push(this.questions)
         this.quizInfo.quizBank = this.quizBank;
         console.log('quiz-->info',this.quizInfo)
          
         this.option={}
         this.options={}
         this.questions={}
         this.questionType={}
     
         
         this.count++
        
        }else{
        console.log('exhausted')
     
        }
  
    



   
  
   
  }

  submitQuiz(){
// form validation


    this.adminService.submitQuiz(this.quizInfo).subscribe((res)=>{
      console.log('res----->',res)
      this.quizInfo={}
      this.count=0;
      this.router.navigate(['/admin-dashboard'])
    })
  }

  getBase64 = (file:any)=> new Promise(function(resolve:any,reject:any){
    let reader= new FileReader();
    reader.readAsDataURL(file);
    reader.onload=()=> resolve(reader.result)
    reader.onerror =(error:any)=>reject('Error',error)
  })

  uploadImg(e:any){
    const file:any= e.target.files[0]
    let encoded;
    this.getBase64(file)
    .then((result)=>{
      encoded=result;
      console.log('result---------->',result)
      console.log('ecoded---->',encoded)
      this.questions.image=result
    })
  }


  previewQuiz(){
    this.preview=!this.preview
    this.info= !this.info
  }


  UpdateQuizBank(){
this.update=!this.update
  }


}
