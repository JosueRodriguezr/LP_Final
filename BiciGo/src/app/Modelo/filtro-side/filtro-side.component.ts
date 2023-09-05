import { Component, OnInit} from '@angular/core';
import { MapasService } from '../../Servicios/mapas.service';

@Component({
  selector: 'app-filtro-side',
  templateUrl: './filtro-side.component.html',
  styleUrls: ['./filtro-side.component.css']
})
export class FiltroSideComponent implements OnInit{
  opciones: any[] = []; 

  constructor(private mapasService: MapasService) { }

  ngOnInit() {
    this.mapasService.getResponse().subscribe((data: any) => {
      // Asigna los datos del servicio a la variable opciones
      this.opciones = data;
    });
  }
}
