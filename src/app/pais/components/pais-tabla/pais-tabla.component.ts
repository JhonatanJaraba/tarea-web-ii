import { Component, Input, OnInit } from '@angular/core';
import { element } from 'protractor';

import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [
  ]
})
export class PaisTablaComponent implements OnInit {

  @Input() paises: Country[] =[];
  PaisImagen: string = 'https://flagcdn.com/';
  PaisImagenExtension: string = '.svg';

  constructor() { }

  ngOnInit(): void {
  }

}
