import { Component } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent 
{
  persone = [
    { nome : "luca", cognome : "rossi", isOnline: true},
    { nome : "Anna", cognome : "verdi", isOnline: true},
    { nome : "Marco", cognome : "Franco", isOnline: false},
    { nome : "Leonardo", cognome : "Pannocchia", isOnline: true},
    { nome : "qwertyu", cognome : "Franco", isOnline: false},
  ]

  numero = 3;

  stringa = "topolino"
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
