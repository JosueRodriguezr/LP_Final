import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent implements OnInit {
  private map: any;

  constructor() {}

  ngOnInit() {
    // Crear un mapa Leaflet en el elemento con el ID 'map'
    this.map = L.map('map').setView([51.505, -0.09], 13); // Coordenadas iniciales y nivel de zoom

    // Agregar un mapa base (puedes usar otros mapas base como OpenStreetMap, Mapbox, etc.)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    // Crear un array de coordenadas para los restaurantes
    const restaurantes = [
      { lat: 51.5, lon: -0.09, nombre: 'Restaurante A' },
      { lat: 51.51, lon: -0.1, nombre: 'Restaurante B' },
      { lat: 51.52, lon: -0.11, nombre: 'Restaurante C' }
      // Agrega más coordenadas y nombres de restaurantes según sea necesario
    ];

    // Itera sobre los datos de los restaurantes y agrega marcadores al mapa con un ícono de comida
    restaurantes.forEach(restaurante => {
      const icon = L.icon({
        iconUrl: 'https://th.bing.com/th/id/R.051626c468c61ced9731f0dea8b46d17?rik=suHYXjWshKVnWw&riu=http%3a%2f%2fyouvalencia.com%2fwp-content%2fuploads%2f2016%2f09%2fHamburguesa-002.jpg&ehk=cUXcQV7ab87%2fJiWVR889Mc7SllKhHeXtG1y6K0xoSoo%3d&risl=&pid=ImgRaw&r=0', // Ruta a un ícono de comida personalizado
        iconSize: [32, 32],
        iconAnchor: [16, 32]
      });

      const marker = L.marker([restaurante.lat, restaurante.lon], { icon }).addTo(this.map);
      marker.bindPopup(`<b>${restaurante.nombre}</b>`); // Agregar un popup con el nombre del restaurante
    });
  }
}