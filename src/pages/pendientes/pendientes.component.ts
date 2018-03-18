import { Component, OnInit } from '@angular/core';
import {LiastaDeseosService} from '../../app/services/lista-deseos.service';

@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html',
})
export class PendientesComponent implements OnInit {
  constructor(private _liastaDeseos : LiastaDeseosService) {  }

  ngOnInit() {}
}
