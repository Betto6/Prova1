import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-prova1',
  templateUrl: './prova1.component.html',
  styleUrls: ['./prova1.component.css']
})
export class Prova1Component implements OnInit 
{

  isDisabled = false
  immagine =''
  immagine1 = 'https://marketplace.canva.com/EAFFA57Y2xc/1/0/900w/canva-black-white-3d-love-butterfly-phone-wallpaper-A8ren-f692c.jpg'
  immagine2 = 'https://material.angular.io/assets/img/examples/shiba2.jpg'
  cani = [
    {
      nome :'roger',
      razza : 'golden',
      descrizione : `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
      from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
      originally bred for hunting.`
    }
  ]
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  constructor() {
    console.log("costruttore")
  }


  //Evento di inizializzazione
  ngOnInit(): void {
    console.log("ngOnInit")
    let counter = 0;
    setInterval(()=>{
      if(counter%2 == 0)
      {
        this.immagine = this.immagine1
      }else{
        this.immagine = this.immagine2
      }
      counter++
    },1000)

  }
}
