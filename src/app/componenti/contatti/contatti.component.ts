import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServizioProvaService } from 'src/app/servizi/servizio-prova.service';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent implements OnInit {
  persone : any
  isProfile: boolean
  persona :any
  constructor(private servizioProva: ServizioProvaService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.persone = this.servizioProva.getPersone()
    // .snapshot : fa una specie di screen della situazione attuale del route 
    // .paraMap : l'insieme dei parametri 
    // nel get() va inserito il nome dato all'ndirizzo nel path app-routing module

    // se non ci da un numero è false, se lo da è true
    // this.isProfile = !this.route.snapshot.paramMap.get('id') ? false : true

    if(this.route.snapshot.paramMap.get('id')){
      this.isProfile = true
      this.persona = this.servizioProva.getPersona(parseInt(this.route.snapshot.paramMap.get('id')!))
      console.log(this.persone)
      console.log(this.route.snapshot.paramMap.get('id'))
    }else{
      this.isProfile = false
      this.persone = this.servizioProva.getPersone() 
    }

    console.log(this.route.snapshot.paramMap.get('id'))
    console.log(this.isProfile)
  }
}
