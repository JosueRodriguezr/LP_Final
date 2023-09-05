import { Component } from '@angular/core';
import {DataService} from '../Servicios/data.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  usuario: string = '';
  contrasena: string = '';
  rol: string = '';

  constructor(private dataService: DataService) { }

  onSubmit() {
    // Llamar al servicio para agregar un registro
    this.dataService.agregarUsuario(this.usuario, this.contrasena, this.rol).subscribe(
      (response) => {
        // Manejar la respuesta del servidor
        console.log('Respuesta del servidor:', response);
      },
      (error) => {
        // Manejar el error
        console.error('Error:', error);
      }
    );
  }
}