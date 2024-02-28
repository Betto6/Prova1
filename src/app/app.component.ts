import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core'; //il fulcro di angular

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
export class AppComponent implements OnInit, AfterViewInit{

  title = 'corso-angular';


  // è un decoratore che dice che c'è un figlio nella view, il nostro componente ha una view (tutto ciò che c'è a schermo)
  //  è un elemento visibile all'utente dento il componente, il componente è tutto, le view sono i singoli componenti


  // con il punto esclamativo si assicura che non sia mai null
  // ElementRef è uan sorta di id 
  // ElementRef<HTMLInputElement> così gli specifichiamo che tipo di element dell'html vogliamo utlizizare
  @ViewChild ('inputSaluti') inputSaluti!: ElementRef<HTMLInputElement>

  valore = 'ciao'
  numeroOrdine = 'ciccio'
  
  persone = [
    { nome : "luca", cognome : "rossi", isOnline: true, color: 'blue'},
    { nome : "Anna", cognome : "verdi", isOnline: true, color: 'green'},
    { nome : "Marco", cognome : "Franco", isOnline: false, color: 'grey'},
    { nome : "Leonardo", cognome : "Pannocchia", isOnline: true, color: 'red'},
    { nome : "qwertyu", cognome : "Franco", isOnline: false, color: 'yellow'},
  ]


  // Per spiegazione ---
  // onClick() {
  //   this.persone = [
  //     { nome : "ergvrdf", cognome : "rossi", isOnline: true, color: 'blue'},
  //     { nome : "ebv ", cognome : "verdi", isOnline: true, color: 'green'},
  //     { nome : "nnnnn", cognome : "Franco", isOnline: false, color: 'grey'},
  //     { nome : "Leonwgrewg", cognome : "Pannocchia", isOnline: true, color: 'red'},
  //     { nome : "etgverdg", cognome : "Franco", isOnline: false, color: 'yellow'},
  //   ]
  // }

  riceviDatiEvento(value: string) {
    console.log(value)
  }

  ngOnInit(): void {
    console.log('ngOnInit')
    console.log(this.inputSaluti)
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
    console.log(this.inputSaluti)
  }

  onClick() {
    //.nativeElement prende in tempo reale il valore dell'elemento nativo, così possiamo andare a prendere tutto ciò che vogliamo.
    // Per esempio prendere tutti gli imput di un form
    // Il type any non ha un native element, quindi non funziona. Non ci da il value perchè nativeElement può essere input, div ecc.. 
    // quindi non sa che tipo nello specifico. 
    
    console.log(this.inputSaluti.nativeElement.value)
  }


}
// e' il cervello