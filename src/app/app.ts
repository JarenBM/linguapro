import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Idiomas } from './components/idiomas/idiomas';
import { Cursos } from './components/cursos/cursos';
import { Docentes } from './components/docentes/docentes';
import { Promociones } from './components/promociones/promociones';
import { Resenas } from './components/resenas/resenas';
import { Nosotros } from './components/nosotros/nosotros';

@Component({
  imports: [Navbar, Idiomas, Cursos, Docentes, Promociones, Resenas, Nosotros],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('linguapro');
}