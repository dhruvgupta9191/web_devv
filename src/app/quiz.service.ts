import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  set_arr:any=[];
  finarr:any=[];


  constructor() { }
  setquiz(quizquest:string,question:string[]){
    this.set_arr.push([quizquest,question]);
    console.log(this.set_arr);
  }

  setfinal(quizname:string){
    this.finarr.push([quizname,this.set_arr])
    console.log(this.finarr)
  }

}
