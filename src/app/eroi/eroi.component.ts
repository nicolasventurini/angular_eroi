import { Component } from '@angular/core';
import { Eroe } from '../eroe';
import { EROI } from './listaeroi.component';

@Component({
  selector: 'app-eroi',
  templateUrl: './eroi.component.html',
  styleUrls: ['./eroi.component.css'],
})
export class EroiComponent {
  eroi = EROI;
  eroeSelezionato?: Eroe;
  /*eroe1: Eroe = {
    id: 1,
    nome: 'Windstorm',
  };*/
  onSelect(e: Eroe) {
    this.eroeSelezionato = e;
  }
}
