import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Params} from '@angular/router';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-play-quiz',
  templateUrl: './play-quiz.component.html',
  styleUrls: ['./play-quiz.component.scss']
})
export class PlayQuizComponent implements OnInit {
  id:any;
  quiz:any;
  cnt:number=0;
  constructor(private route:ActivatedRoute, private quizservice:QuizService){
    this.route.params.subscribe((params:Params)=>{
      this.id=params['id'];
      console.log(this.id);
    }
    );
    this.quiz=this.quizservice.finarr[this.id-1][1]
    console.log(this.quiz)
    console.log(this.quiz[0])
    console.log(this.quiz[0][0])
    console.log(this.quiz[0][1][0])
    console.log(this.quiz[0][1][1])
    console.log(this.quiz[0][1][4].correctopt)
    console.log(this.quiz[1][1][4].correctopt)
    
  }
  
    ngOnInit(): void {
      
    }
  checkAns(id:number,opt:number){
    console.log(this.quiz[id][1][4].correctopt);
    console.log(this.quiz[id][1][opt])
    if ((this.quiz[id][1][4].correctopt)==(this.quiz[id][1][opt])){
      console.log("yasss")
      this.cnt+=1
    }
    else{
      this.cnt-=1;
    }
    console.log(this.cnt);
  }

}


