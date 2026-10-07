import { Component, inject } from '@angular/core';
import { Docente } from '../../Interface/docente';
import { DocenteService } from '../../services/docente.service';

@Component({
  selector: 'app-docentes',
  styleUrl: './docentes.css',
  templateUrl: './docentes.html',
})
export class Docentes {
  private docenteService = inject(DocenteService) //inyección de dependencias

  listaDocentes:Docente[]=[]

  constructor(){
    this.mostrarDocentes()
  }

  mostrarDocentes(){
    this.listaDocentes=this.docenteService.mostrar()
  }

}