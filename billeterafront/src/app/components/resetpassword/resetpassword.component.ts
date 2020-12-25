import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['../../app.component.css']
})
export class ResetpasswordComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  submit(email: HTMLInputElement){
    //console.log(email.value);

    this.router.navigate(['secretanswer']);

  }
}
