// vuol dire che possiamo iniettare il nostro service in giro, il servizio viene inserito all'interno dei vari componenti
import { Injectable } from '@angular/core';

// un service è banalmente una classe, quello che c'interessa è il tag injectable
@Injectable({
  // letteralmente 'messo a disposizione nella root', qualunque componente può chiamarlo
  providedIn: 'root'
})
export class ServizioProvaService {

  persone = [
    { nome : "luca", cognome : "rossi", isOnline: true, color: 'blue'},
    { nome : "Anna", cognome : "verdi", isOnline: true, color: 'green'},
    { nome : "Marco", cognome : "Franco", isOnline: false, color: 'grey'},
    { nome : "Leonardo", cognome : "Pannocchia", isOnline: true, color: 'red'},
    { nome : "qwertyu", cognome : "Franco", isOnline: false, color: 'yellow'},
  ]

  constructor() { }

  getPersone() {
    return this.persone
  }

  getPersona(index: number) {
    return this.persone[index]
  }

}
