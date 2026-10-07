import { Service } from '@angular/core';
import { Resena } from '../Interface/resena';

@Service()
export class ResenaService {
    private listaResenas: Resena[]=[
        {nombre:'Valeria Rojas', curso:'Inglés Intermedio (B1-B2)', valoracion:5, comentario:'Las clases son dinámicas y los profesores explican con mucha paciencia.'},
        {nombre:'Jorge Mendoza', curso:'Alemán Básico (A1)', valoracion:4, comentario:'Muy buena metodología, aprendí lo básico en pocas semanas.'},
        {nombre:'Camila Paredes', curso:'Francés Básico (A1)', valoracion:5, comentario:'Me encantó el ambiente, aprendí pronunciación desde el primer día.'}
    ]

    guardar(resena: Resena){
        this.listaResenas.push(resena)

    }
    mostrar(){
        return this.listaResenas
    }
}