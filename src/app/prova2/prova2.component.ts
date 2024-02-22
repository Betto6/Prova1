import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prova2',
  templateUrl: './prova2.component.html',
  styleUrls: ['./prova2.component.css']
})
export class Prova2Component implements OnInit 
{
  constructor () {}

  onInput(e: Event)
  {
    console.log( (<HTMLInputElement>e.target).value )
  }

  ngOnInit(): void {
    
  }

}
