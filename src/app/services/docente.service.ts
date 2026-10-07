import { Service } from '@angular/core';
import { Docente } from '../Interface/docente';

@Service()
export class DocenteService {
    private listaDocentes: Docente[]=[
        {id:1, nombre:'Prof. Andrea Morales', foto:'https://placehold.co/300x300/0F4C45/F6EFE3?text=AM', idiomas:['Inglés'], especialidad:'Inglés académico y preparación IELTS', experiencia:8},
        {id:2, nombre:'Prof. Daniel Cooper', foto:'https://placehold.co/300x300/E4572E/FFFBF4?text=DC', idiomas:['Inglés'], especialidad:'Conversación y Business English', experiencia:10},
        {id:3, nombre:'Prof. Claire Dubois', foto:'https://placehold.co/300x300/F2B134/1E1B18?text=CD', idiomas:['Francés'], especialidad:'Preparación para DELF y DALF', experiencia:9},
        {id:4, nombre:'Prof. Lukas Weber', foto:'https://placehold.co/300x300/0A3732/F6EFE3?text=LW', idiomas:['Alemán'], especialidad:'Alemán técnico para ingeniería', experiencia:7},
        {id:5, nombre:'Prof. Giulia Bianchi', foto:'https://placehold.co/300x300/E4572E/FFFBF4?text=GB', idiomas:['Italiano', 'Portugués'], especialidad:'Idiomas para viajes y cultura', experiencia:6},
        {id:6, nombre:'Prof. Haruka Tanaka', foto:'https://placehold.co/300x300/0F4C45/F2B134?text=HT', idiomas:['Japonés'], especialidad:'Preparación para el examen JLPT', experiencia:5}
    ]

    mostrar(){
        return this.listaDocentes
    }
}