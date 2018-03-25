import { Component, OnInit } from '@angular/core';
import {LiastaDeseosService} from '../../app/services/lista-deseos.service';

import {NavController} from 'ionic-angular';
import {AgregarComponent} from '../agregar/agregar.component'


@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html',
})
export class PendientesComponent implements OnInit {
  constructor(private _liastaDeseos : LiastaDeseosService,
              private navCtrl : NavController) {  }

  ngOnInit() {}

  irAgregar(){
    this.navCtrl.push( AgregarComponent )

  }
}
