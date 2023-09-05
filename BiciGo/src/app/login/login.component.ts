import { Component } from '@angular/core';
import { usuarios } from '../Interfaces/usuarios'
import {AuthenticationService} from '../Servicios/authentication.service'
import { Router } from '@angular/router';
import { SessionService } from '../Servicios/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  public data1: usuarios[] = [];

  constructor(private userService: AuthenticationService, private router: Router,private sessionService: SessionService) { }
  ngOnInit() {
    this.userService.getResponse().subscribe((response) => {
      this.data1 = (response as usuarios[]);
    });
  }

  onSubmit() {
    const usuario = this.data1.find(user => user.nombre === this.username);

    if (usuario && usuario.contrasena === this.password) {
      this.router.navigate(['/profile'], { state: { usuario } });
        this.sessionService.setGlobalElement(usuario);
    } else {
      window.alert('Usuario no válido. Verifica tu nombre de usuario y contraseña.');


    }
  }
}