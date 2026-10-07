import { Service } from '@angular/core';
import { Promocion } from '../Interface/promocion';

@Service()
export class PromocionService {
    private listaPromociones: Promocion[]=[
        {id:1, titulo:'Matrícula temprana', descripcion:'Descuento en cualquier curso de Inglés si te inscribes antes de fin de mes.', descuento:20, vigencia:'Hasta el 31 de octubre', codigo:'EARLY20'},
        {id:2, titulo:'Trae a un amigo', descripcion:'Estudien juntos y ambos obtienen descuento en su mensualidad.', descuento:15, vigencia:'Hasta el 30 de noviembre', codigo:'AMIGOS15'},
        {id:3, titulo:'Combo dos idiomas', descripcion:'Matricúlate en dos idiomas a la vez y ahorra en el segundo curso.', descuento:25, vigencia:'Hasta el 15 de diciembre', codigo:'COMBO25'},
        {id:4, titulo:'Estudiantes universitarios', descripcion:'Presenta tu carné universitario vigente y obtén un beneficio especial.', descuento:10, vigencia:'Todo el año', codigo:'UNIV10'}
    ]

    mostrar(){
        return this.listaPromociones
    }
}