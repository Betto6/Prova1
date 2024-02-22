import { Component } from '@angular/core'; //il fulcro di angular

//Decorator ovvero specificando che cos'e' una classe
//selector --- collegamento tra componenti
//si trova nel body grazie ad app-root richiamato come tag

// il template e' invece il corpo di cio' che passiamo col selector
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

//Una classe che esportiamo
export class AppComponent {
  title = 'corso-angular';
  
  persone = [
    { nome : "luca", cognome : "rossi", isOnline: true, color: 'blue'},
    { nome : "Anna", cognome : "verdi", isOnline: true, color: 'green'},
    { nome : "Marco", cognome : "Franco", isOnline: false, color: 'grey'},
    { nome : "Leonardo", cognome : "Pannocchia", isOnline: true, color: 'red'},
    { nome : "qwertyu", cognome : "Franco", isOnline: false, color: 'yellow'},
  ]

  onClick() {
    this.persone = [
      { nome : "ergvrdf", cognome : "rossi", isOnline: true, color: 'blue'},
      { nome : "ebv ", cognome : "verdi", isOnline: true, color: 'green'},
      { nome : "nnnnn", cognome : "Franco", isOnline: false, color: 'grey'},
      { nome : "Leonwgrewg", cognome : "Pannocchia", isOnline: true, color: 'red'},
      { nome : "etgverdg", cognome : "Franco", isOnline: false, color: 'yellow'},
    ]
  }

  riceviDatiEvento(value: string) {
    console.log(value)
  }

}
// e' il cervello