import { Component, inject } from '@angular/core';
import { Promocion } from '../../Interface/promocion';
import { PromocionService } from '../../services/promocion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-promociones',
  styleUrl: './promociones.css',
  templateUrl: './promociones.html',
})
export class Promociones {
  private promocionService = inject(PromocionService) //inyección de dependencias

  listaPromociones:Promocion[]=[]

  constructor(){
    this.mostrarPromociones()
  }

  mostrarPromociones(){
    this.listaPromociones=this.promocionService.mostrar()
  }

  usarPromocion(promocion:Promocion){
    Swal.fire({
  title: "¡Promoción lista!",
  html: "Presenta el código <b>" + promocion.codigo + "</b> al matricularte y obtén " + promocion.descuento + "% de descuento.",
  icon: "info",
  confirmButtonText: "Entendido",
  confirmButtonColor: "#0F4C45",
  iconColor: "#E4572E",
  background: "#FFFBF4",
  color: "#1E1B18",
  customClass: { popup: "swal-lp" }
});
  }

}