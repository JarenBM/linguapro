import { Component, inject } from '@angular/core';
import { Idioma } from '../../Interface/idioma';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-idiomas',
  styleUrl: './idiomas.css',
  templateUrl: './idiomas.html',
})
export class Idiomas {
  private cursoService = inject(CursoService) //inyección de dependencias

  listaIdiomas:Idioma[]=[]

  constructor(){
    this.mostrarIdiomas()
  }

  mostrarIdiomas(){
    this.listaIdiomas=this.cursoService.mostrarIdiomas()
  }

}