import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent 
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
