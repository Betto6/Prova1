import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent {

  title = 'corso-angular'
  onInput(event : Event){
    this.title = (<HTMLInputElement>event.target).value ;
  }
  onClick(event : Event) 
  {
    this.title = "ho cliccato sul bottone"
  }

}
