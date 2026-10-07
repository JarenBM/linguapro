import { Component, inject, signal } from '@angular/core';
import { Resena } from '../../Interface/resena';
import { Curso } from '../../Interface/curso';
import { form, min, max, minLength, required, FormField } from '@angular/forms/signals';
import { ResenaService } from '../../services/resena.service';
import { CursoService } from '../../services/curso.service';
import Swal from 'sweetalert2';

@Component({
  imports: [FormField],
  selector: 'app-resenas',
  styleUrl: './resenas.css',
  templateUrl: './resenas.html',
})
export class Resenas {
  private resenaService = inject(ResenaService) //inyección de dependencias
  private cursoService = inject(CursoService)

  listaResenas:Resena[]=[]
  listaCursos:Curso[]=[]

  resenaModelo = signal<Resena>({nombre:'', curso:'', valoracion: 0, comentario:''})

  resenaFormulario = form(this.resenaModelo, (esquema)=>{
    required(esquema.nombre, {message:'El nombre es obligatorio'})
    required(esquema.curso, {message:'Indica el curso que llevaste'})
    min(esquema.valoracion, 1, {message: 'La valoración mínima es 1 estrella'})
    max(esquema.valoracion, 5, {message: 'La valoración máxima es 5 estrellas'})
    required(esquema.comentario, {message:'El comentario es obligatorio'})
    minLength(esquema.comentario, 10, {message:'El comentario debe tener como mínimo 10 caracteres'})
  })

  constructor(){
    this.listaCursos=this.cursoService.mostrarCursos()
    this.mostrarResenas()
  }

  guardarResena(evento:Event){
    evento.preventDefault()
    let resena = {
      'nombre': this.resenaModelo().nombre,
      'curso': this.resenaModelo().curso,
      'valoracion': this.resenaModelo().valoracion,
      'comentario': this.resenaModelo().comentario
    }
    this.resenaService.guardar(resena)
    Swal.fire({
  title: "¡Gracias por tu reseña!",
  text: "Tu valoración se guardó de forma exitosa",
  icon: "success",
  confirmButtonText: "Aceptar",
  confirmButtonColor: "#0F4C45",
  iconColor: "#E4572E",
  background: "#FFFBF4",
  color: "#1E1B18",
  customClass: { popup: "swal-lp" }
});
    this.limpiar()
  }

  mostrarResenas(){
    this.listaResenas=this.resenaService.mostrar()

  }

  estrellas(cantidad:number){
    return '★'.repeat(cantidad) + '☆'.repeat(5 - cantidad)
  }

  limpiar(){
    this.resenaModelo.set({nombre: '', curso: '', valoracion: 0, comentario: ''})
  }

}