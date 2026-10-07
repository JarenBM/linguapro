import { Service } from '@angular/core';
import { Docente } from '../Interface/docente';

@Service()
export class DocenteService {
    private listaDocentes: Docente[]=[
        {id:1, nombre:'Prof. Andrea Morales', foto:'https://www.modelos-de-curriculum.com/wp-content/uploads/2023/05/primer-plano-foto-para-el-curriculum.jpg', idiomas:['Inglés'], especialidad:'Inglés académico y preparación IELTS', experiencia:8},
        {id:2, nombre:'Prof. Daniel Cooper', foto:'https://opem.b-cdn.net/wp-content/uploads/2022/10/foto-curriculum.jpg', idiomas:['Inglés'], especialidad:'Conversación y Business English', experiencia:10},
        {id:3, nombre:'Prof. Claire Dubois', foto:'https://i.pinimg.com/236x/d4/7c/2a/d47c2ad0d96d95cc92cb75bd5bc21865.jpg', idiomas:['Francés'], especialidad:'Preparación para DELF y DALF', experiencia:9},
        {id:4, nombre:'Prof. Lukas Weber', foto:'https://i.pinimg.com/736x/74/f7/7c/74f77c0410f3aa6be79bda7976e0ed8e.jpg', idiomas:['Alemán'], especialidad:'Alemán técnico para ingeniería', experiencia:7},
        {id:5, nombre:'Prof. Giulia Bianchi', foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVtRn72rmMemGdXS5WB5ytUtLFhY5PrdLNLpKLSWwIdHRRHCwNFalxj3_e&s=10', idiomas:['Italiano', 'Portugués'], especialidad:'Idiomas para viajes y cultura', experiencia:6},
        {id:6, nombre:'Prof. Haruka Tanaka', foto:'https://www.shutterstock.com/image-photo/skin-care-process-finish-image-260nw-2746273113.jpg', idiomas:['Japonés'], especialidad:'Preparación para el examen JLPT', experiencia:5}
    ]

    mostrar(){
        return this.listaDocentes
    }
}