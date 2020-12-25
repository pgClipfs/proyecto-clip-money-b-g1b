import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; //agregao

@Component({
  selector: 'app-secretanswer',
  templateUrl: './secretanswer.component.html',
  styleUrls: ['../../app.component.css']
})
export class SecretanswerComponent implements OnInit {

  //constructor() { }
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  submit(answer: HTMLInputElement){
    console.log(answer.value);
    this.router.navigate(['secretanswer']);
  }

}
