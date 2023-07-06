import { ContentObserver } from '@angular/cdk/observers';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { QuizService } from 'src/app/quiz.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit{
  num:any;
  question:string | undefined;
  ques:string='';
  option:string[]=[];
  nam:any=''
  correctopt:any;
  
 
  @ViewChild('f') questionForm:NgForm | undefined;
  @ViewChild('quizname') quizname!: ElementRef;

  constructor( private quizService:QuizService){
  }

  ngOnInit(){
    this.num=0;
  }
  onNext(){
    
    this.ques=this.questionForm?.value.quest;
    this.correctopt=this.questionForm?.value.correctopt
    this.option=[this.questionForm?.value.opt1,this.questionForm?.value.opt2,this.questionForm?.value.opt3,this.questionForm?.value.opt4,{'correctopt':this.correctopt}]
    ;
    console.log(this.correctopt)
    this.quizService.setquiz(this.ques,this.option);
    
    if (this.nam==''){
      this.nam=this.quizname.nativeElement.value
    }
    
    this.ques=''
    this.option=[]
    this.num+=1;
    this.questionForm?.reset(); 
  }

  onFinish(){
    this.quizService.setfinal(this.nam)
    this.num=0;
    this.nam='';
    this.quizService.set_arr=[];
  }
}
