import { Component } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent 
{
  persone = [
    { nome : "luca", cognome : "rossi", isOnline: true, color: 'blue'},
    { nome : "Anna", cognome : "verdi", isOnline: true, color: 'green'},
    { nome : "Marco", cognome : "Franco", isOnline: false, color: 'grey'},
    { nome : "Leonardo", cognome : "Pannocchia", isOnline: true, color: 'red'},
    { nome : "qwertyu", cognome : "Franco", isOnline: false, color: 'yellow'},
  ]
  title = 'corso-angular'
  onInput(event : Event){
    this.title = (<HTMLInputElement>event.target).value ;
  }
  onClick(event : Event) 
  {
    this.title = "ho cliccato sul bottone"
  }


  color = 'green'

  getColor() {
    return 'green'
  }
}
