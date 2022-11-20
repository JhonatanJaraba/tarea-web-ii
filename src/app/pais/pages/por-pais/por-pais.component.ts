import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class PorPaisComponent {

  termino : string = '';
  hayError: boolean = false;
  paises  : Country[] = [];
  
  paisesSugeridos   : Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor( private paisService: PaisService ) { }

  buscar( termino: string ) {
    console.log(termino, "termino");
    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino  = termino;

    this.paisService.buscarPais( termino )
      .subscribe( (paises) => {
        console.log(paises, "datos");
        this.paises = paises;
        
      }, (err) => {
        this.hayError = true;
        this.paises   = [];
      });

  }

  sugerencias( termino: string ) {
    console.log("entro aca",termino);
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    
    this.paisService.buscarPais( termino )
      .subscribe( 
        
        paises => this.paisesSugeridos = paises.splice(0,5),
        (err) => this.paisesSugeridos = []
        
      );
        console.log(this.paisesSugeridos, "paisesSugeridos");
  }

  buscarSugerido( termino: string ) {
    this.buscar( termino );
  }

}
