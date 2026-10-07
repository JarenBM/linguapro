import { Component, inject, signal } from '@angular/core';
import { Curso } from '../../Interface/curso';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-cursos',
  styleUrl: './cursos.css',
  templateUrl: './cursos.html',
})
export class Cursos {
  private cursoService = inject(CursoService) //inyección de dependencias

  filtros:string[]=[]

  idiomaActivo = signal('Todos')
  listaCursos = signal<Curso[]>([])

  constructor(){
    this.filtros = ['Todos', ...this.cursoService.mostrarIdiomas().map(i => i.nombre)]
    this.filtrar('Todos')
  }

  filtrar(idioma:string){
    this.idiomaActivo.set(idioma)
    if(idioma === 'Todos'){
      this.listaCursos.set(this.cursoService.mostrarCursos())
    } else {
      this.listaCursos.set(this.cursoService.mostrarPorIdioma(idioma))
    }
  }

}