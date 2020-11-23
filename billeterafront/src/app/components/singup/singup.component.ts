import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  submit(usuario: HTMLInputElement, password: HTMLInputElement,passwordrepetead:HTMLInputElement, email:HTMLInputElement){
    alert("funcion crear usuario in progress");
  }

}
