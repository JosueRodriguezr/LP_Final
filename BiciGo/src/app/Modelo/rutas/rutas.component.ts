import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { MapasService } from '../../Servicios/mapas.service';
import { mapa } from '../../Interfaces/mapa';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent implements OnInit {
  private map: any;
  public puntoInicial: L.LatLng = L.latLng(-2.2058400, -79.9079500);
  public puntoFinal: L.LatLng = L.latLng(-2.191826, -79.94042);
  public data1: mapa[] = [];

  constructor(private mapaService: MapasService) {}

  ngOnInit() {
    this.mapaService.getResponse().subscribe((response) => {
      this.data1 = response as mapa[]; // Asigna directamente la respuesta a data1
      this.crearMapa(); // Llama a la función que crea el mapa
    });
  }

  // Mueve la creación del mapa a una función aparte
  private crearMapa() {
    this.map = L.map('map').setView([-2.2058400, -79.9079500], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

  
    
    const restaurantes = this.data1.map((objeto) => ({
      lat: objeto.PuntoPartida1,
      lon: objeto.PuntoFinal1,
      nombre: objeto.NombrePuntoPartida
    }));
    
    const restaurantes1 = this.data1.map((objeto) => ({
      lat: objeto.PuntoPartida2,
      lon: objeto.PuntoFinal2,
      nombre: objeto.NombrePuntoFinal // Corregir NombrePuntoPartida a NombrePuntoFinal
    }));
    
    this.data1.forEach(restaurante => {
      const coordenadasLinea = [
        L.latLng(restaurante.PuntoPartida1, restaurante.PuntoFinal1),
        L.latLng(restaurante.PuntoPartida2, restaurante.PuntoFinal2)
      ];
    
      const line = L.polyline(coordenadasLinea, { color: 'red' }).addTo(this.map);
    });
    
    restaurantes.forEach(restaurante => {
      const icon = L.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/256/5265/5265109.png',
        iconSize: [32, 32],
        iconAnchor: [16, 32]
      });

      const marker = L.marker([restaurante.lat, restaurante.lon], { icon }).addTo(this.map);
      marker.bindPopup(`<b>${restaurante.nombre}</b>`);
    });

    restaurantes1.forEach(restaurante => {
      const icon = L.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/256/5265/5265109.png',
        iconSize: [32, 32],
        iconAnchor: [16, 32]
      });

      const marker = L.marker([restaurante.lat, restaurante.lon], { icon }).addTo(this.map);
      marker.bindPopup(`<b>${restaurante.nombre}</b>`);
    });
  }

  onFilterChange(event: any) {
    const selectedValue = event.value;
    console.log(`Seleccionaste la opción ${selectedValue}`);
  }
}
