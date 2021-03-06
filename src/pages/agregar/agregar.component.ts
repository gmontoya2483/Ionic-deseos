import { Component, OnInit } from '@angular/core';
import {ListaItem, Lista} from '../../app/clases/index'

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html',
})
export class AgregarComponent implements OnInit {

  nombreLista : string;
  nombreItem : string = "";

  items: ListaItem[] = [];

  constructor() {  }

  ngOnInit() {}

  agregar(){
    if( this.nombreItem.length == 0){
      return;
    }

    let item = new ListaItem();
    item.nombre = this.nombreItem;
    this.items.push (item)
    this.nombreItem = "";

  }

  borrarItem(indice: number){
    this.items.splice(indice, 1);
  }


}
