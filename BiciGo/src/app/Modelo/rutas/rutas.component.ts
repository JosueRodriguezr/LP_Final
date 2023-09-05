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
  nombresRestaurantes: string[] = [];
  restauranteSeleccionado: number | null = null;
  markers: L.Marker[] = [];

  constructor(private mapaService: MapasService) {}

  ngOnInit() {
    this.mapaService.getResponse().subscribe((response) => {
      this.data1 = response as mapa[]; 
      this.crearMapa(); 
    });
  }

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
      nombre: objeto.NombrePuntoFinal
    }));
    
    this.data1.forEach(restaurante => {
      const coordenadasLinea = [
        L.latLng(restaurante.PuntoPartida1, restaurante.PuntoFinal1),
        L.latLng(restaurante.PuntoPartida2, restaurante.PuntoFinal2)
      ];
      this.nombresRestaurantes.push(restaurante.NombrePuntoPartida+" , "+ restaurante.NombrePuntoFinal);
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
      this.markers.push(marker);
    });

    restaurantes1.forEach(restaurante => {
      const icon = L.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/256/5265/5265109.png',
        iconSize: [32, 32],
        iconAnchor: [16, 32]
      });
      const marker = L.marker([restaurante.lat, restaurante.lon], { icon }).addTo(this.map);
      marker.bindPopup(`<b>${restaurante.nombre}</b>`);
      this.markers.push(marker);
    });
  }

 
  onFilterChange(event: any) {
      const selectedValue = event.value;
      console.log(`Seleccionaste la opción ${event}`);
      this.map.eachLayer((layer: L.Layer) => {
        if (layer instanceof L.Polyline) {
          this.map.removeLayer(layer);
          this.map.remove
        }
        this.markers.forEach(marker => {
          this.map.removeLayer(marker);
        });
        this.markers.length = 0;
      });
      const restauranteSeleccionado = this.data1.find(restaurante => {
        return restaurante.NombrePuntoPartida + " , " + restaurante.NombrePuntoFinal === event;
      });
      if (restauranteSeleccionado) {
        console.log(restauranteSeleccionado)
        const coordenadasLinea = [
          L.latLng(restauranteSeleccionado.PuntoPartida1, restauranteSeleccionado.PuntoFinal1),
          L.latLng(restauranteSeleccionado.PuntoPartida2, restauranteSeleccionado.PuntoFinal2)
        ];
        const line = L.polyline(coordenadasLinea, { color: 'red' }).addTo(this.map);
        const icon = L.icon({
          iconUrl: 'https://cdn-icons-png.flaticon.com/256/5265/5265109.png',
          iconSize: [32, 32],
          iconAnchor: [16, 32]
        });
        const marker = L.marker([restauranteSeleccionado.PuntoPartida1,restauranteSeleccionado.PuntoFinal1], { icon }).addTo(this.map);
        marker.bindPopup(`<b>${restauranteSeleccionado.NombrePuntoPartida}</b>`);
        this.markers.push(marker);
        const marker2 = L.marker([restauranteSeleccionado.PuntoPartida2,restauranteSeleccionado.PuntoFinal2], { icon }).addTo(this.map);
        marker.bindPopup(`<b>${restauranteSeleccionado.NombrePuntoFinal}</b>`);
        this.markers.push(marker2);
      }
    
  }
  
}
