import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent 
{

  persone = [
    { nome : "luca", cognome : "rossi", isOnline: true},
    { nome : "Anna", cognome : "verdi", isOnline: true},
    { nome : "Marco", cognome : "Franco", isOnline: false},
    { nome : "Leonardo", cognome : "Pannocchia", isOnline: true},
    { nome : "qwertyu", cognome : "Franco", isOnline: false},
  ]


  title = 'corso-angular'
  onInput(event : Event){
    this.title = (<HTMLInputElement>event.target).value ;
  }
  onClick(event : Event) 
  {
    this.title = "ho cliccato sul bottone"
  }
  isVisible = true;
}
