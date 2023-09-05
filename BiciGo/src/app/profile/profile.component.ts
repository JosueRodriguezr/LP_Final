import { Component } from '@angular/core';
import { usuarios } from '../Interfaces/usuarios';
import { ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { SessionService } from '../Servicios/session.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  public data1: usuarios[] = [];

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
    const usuario = this.sessionService.getGlobalElement(); // Llama a la función para obtener el objeto usuarios
    if (usuario) {
      this.data1.push(usuario); // Agrega el objeto usuario al arreglo data1
    }
    
}
}