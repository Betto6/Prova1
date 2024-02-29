import { Directive, ElementRef, HostListener, Input } from '@angular/core';

// Fa sì che la classe sia riconosciuta come direttiva,
// La direttiva viene associata ad un elemento
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  //Stiamo prendendo il selettore, che è esso stesso la proprietà
  @Input() appHighlight = ''
  @Input() defaultColor = ''

  constructor(private element: ElementRef) { 
   
  }


  @HostListener('mouseenter') onMouseEnter(){
    this.cambiaColore(this.appHighlight || this.defaultColor || 'purple')
  }



  @HostListener('mouseleave') onMouseLeave() {
    this.cambiaColore('transparent')
  }

  cambiaColore(colore: string){
    this.element.nativeElement.style.backgroundColor = colore
  }


}
