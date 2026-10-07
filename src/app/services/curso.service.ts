import { Service } from '@angular/core';
import { Idioma } from '../Interface/idioma';
import { Curso } from '../Interface/curso';

@Service()
export class CursoService {
    private listaIdiomas: Idioma[]=[
        {id:1, nombre:'Inglés', saludo:'Hello', descripcion:'El idioma global de los negocios, la tecnología y los viajes'},
        {id:2, nombre:'Francés', saludo:'Bonjour', descripcion:'El idioma del arte, la cocina y la diplomacia'},
        {id:3, nombre:'Alemán', saludo:'Hallo', descripcion:'Clave para estudiar y trabajar en ingeniería y ciencia'},
        {id:4, nombre:'Italiano', saludo:'Ciao', descripcion:'Cultura, música y gastronomía en un solo idioma'},
        {id:5, nombre:'Portugués', saludo:'Olá', descripcion:'Conecta con Brasil y toda la comunidad lusófona'},
        {id:6, nombre:'Japonés', saludo:'こんにちは', descripcion:'Tecnología, cultura pop y una tradición fascinante'}
    ]

    private listaCursos: Curso[]=[
        {id:1, nombre:'Inglés Básico (A1-A2)', idioma:'Inglés', nivel:'Básico', duracion:'3 meses', modalidad:'Presencial', precio:280},
        {id:2, nombre:'Inglés Intermedio (B1-B2)', idioma:'Inglés', nivel:'Intermedio', duracion:'4 meses', modalidad:'Virtual', precio:340},
        {id:3, nombre:'Inglés Avanzado (C1)', idioma:'Inglés', nivel:'Avanzado', duracion:'4 meses', modalidad:'Presencial', precio:390},
        {id:4, nombre:'Francés Básico (A1)', idioma:'Francés', nivel:'Básico', duracion:'3 meses', modalidad:'Presencial', precio:300},
        {id:5, nombre:'Francés Intermedio (B1)', idioma:'Francés', nivel:'Intermedio', duracion:'4 meses', modalidad:'Virtual', precio:350},
        {id:6, nombre:'Alemán Básico (A1)', idioma:'Alemán', nivel:'Básico', duracion:'3 meses', modalidad:'Presencial', precio:320},
        {id:7, nombre:'Alemán Técnico', idioma:'Alemán', nivel:'Intermedio', duracion:'4 meses', modalidad:'Virtual', precio:370},
        {id:8, nombre:'Italiano Básico (A1)', idioma:'Italiano', nivel:'Básico', duracion:'3 meses', modalidad:'Presencial', precio:290},
        {id:9, nombre:'Portugués Conversacional', idioma:'Portugués', nivel:'Básico', duracion:'2 meses', modalidad:'Virtual', precio:260},
        {id:10, nombre:'Japonés Básico (N5)', idioma:'Japonés', nivel:'Básico', duracion:'4 meses', modalidad:'Presencial', precio:360}
    ]

    mostrarIdiomas(){
        return this.listaIdiomas
    }

    mostrarCursos(){
        return this.listaCursos
    }

    mostrarPorIdioma(idioma: string){
        return this.listaCursos.filter(c => c.idioma === idioma)
    }
}