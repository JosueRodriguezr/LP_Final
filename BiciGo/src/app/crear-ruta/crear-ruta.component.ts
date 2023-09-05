import { Component } from '@angular/core';
import {MapasService} from '../Servicios/mapas.service'
export interface mapa{
  PuntoPartida: string
  PuntoFinal: string
  NombrePuntoPartida: string
  NombrePuntoFinal: string
  lider: string
}
@Component({
  selector: 'app-crear-ruta',
  templateUrl: './crear-ruta.component.html',
  styleUrls: ['./crear-ruta.component.css']
})
export class CrearRutaComponent {
  username: string = '';
  password: string = '';
  public data1: mapa[] = [];

  constructor(private mapaService: MapasService) { }
  ngOnInit() {
    this.mapaService.getResponse().subscribe((response) => {
      this.data1 = (response as mapa[]);
    });
  }
  
}