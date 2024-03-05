import { Component, OnInit } from '@angular/core';
import { ServizioProvaService } from '../servizi/servizio-prova.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit
{
  constructor() {}

  ngOnInit(): void {
  }
}
