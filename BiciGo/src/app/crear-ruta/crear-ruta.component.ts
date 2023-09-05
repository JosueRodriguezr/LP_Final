import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MapasService } from '../Servicios/mapas.service';

export interface mapa {
  PuntoPartida: string;
  PuntoFinal: string;
  NombrePuntoPartida: string;
  NombrePuntoFinal: string;
  lider: string;
}

@Component({
  selector: 'app-crear-ruta',
  templateUrl: './crear-ruta.component.html',
  styleUrls: ['./crear-ruta.component.css'],
})
export class CrearRutaComponent {
  direccionInicio: string = '';
  direccionFin: string = '';
  coordenadasInicio: any = null;
  coordenadasFin: any = null;
  errorInicio: string = '';
  errorFin: string = '';
  organizador: string = '';

  constructor(private http: HttpClient, private mapasService: MapasService) {}

  obtenerCoordenadasInicio() {
    const apiUrl = 'http://localhost:3000/direccion?direccion=' + encodeURIComponent(this.direccionInicio);

    this.http.get(apiUrl).subscribe(
      (data: any) => {
        if (data.coordenadas) {
          this.coordenadasInicio = data.coordenadas;
          this.errorInicio = '';
        } else {
          this.coordenadasInicio = null;
          this.errorInicio = 'Coordenadas no encontradas para la dirección proporcionada';
        }
      },
      (error) => {
        console.error(error);
        this.coordenadasInicio = null;
        this.errorInicio = 'Ocurrió un error al obtener las coordenadas';
      }
    );
  }

  obtenerCoordenadasFin() {
    const apiUrl = 'http://localhost:3000/direccion?direccion=' + encodeURIComponent(this.direccionFin);

    this.http.get(apiUrl).subscribe(
      (data: any) => {
        if (data.coordenadas) {
          this.coordenadasFin = data.coordenadas;
          this.errorFin = '';
        } else {
          this.coordenadasFin = null;
          this.errorFin = 'Coordenadas no encontradas para la dirección proporcionada';
        }
      },
      (error) => {
        console.error(error);
        this.coordenadasFin = null;
        this.errorFin = 'Ocurrió un error al obtener las coordenadas';
      }
    );
  }

  obtenerCoordenadas(){
    this.obtenerCoordenadasFin();
    this.obtenerCoordenadasInicio();
  }

  onSubmit(){
    this.mapasService.agregarRuta(this.coordenadasInicio, this.coordenadasFin, this.direccionInicio, this.direccionFin, this.organizador)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
