import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-parent',
  templateUrl: './child-parent.component.html',
  styleUrls: ['./child-parent.component.css']
})
export class ChildParentComponent implements OnInit {
  ngOnInit(): void {}

  @Output() mandaDatiEvento = new EventEmitter<string>()

  mandaDati() {
    this,this.mandaDatiEvento.emit(this.nome)
    // Viene emesso l'evento passando i parametri nelle tonde
  }
  
  nome = 'luca'
}
