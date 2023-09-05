import { Component } from '@angular/core';
import {DataService} from '../Servicios/data.service';
import { usuarios } from '../Interfaces/usuarios';
import {AuthenticationService} from '../Servicios/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  usuario: string = '';
  contrasena: string = '';
  rol: string = '';
  public data1: usuarios[] = [];
  mensajeExito: string = '';

  constructor(private userService: AuthenticationService, private dataService: DataService,  private router: Router) { }
  ngOnInit() {
    this.userService.getResponse().subscribe((response) => {
      this.data1 = (response as usuarios[]);
    });
  }

  onSubmit() {
    
    const usuario = this.data1.find(user => user.nombre === this.usuario);
    if(usuario){
      this.mensajeExito = 'El usuario ya se encuentra creado.';
    }else{
      this.dataService.agregarUsuario(this.usuario, this.contrasena, this.rol).subscribe(
        (response) => {
          this.router.navigate(['/feed']);
          console.log('Respuesta del servidor:', response);
          this.mensajeExito = 'Usuario creado exitosamente.';
        },
        (error) => {
          // Manejar el error
          console.error('Error:', error);
        }
      );
    }
  }
}