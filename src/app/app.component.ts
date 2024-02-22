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
}
// e' il cervello