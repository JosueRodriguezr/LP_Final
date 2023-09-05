import { Component } from '@angular/core';
import { SessionService } from '../../Servicios/session.service';
import { usuarios } from '../../Interfaces/usuarios';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent {
  public usuario: usuarios | null = null;
  mostrarNavegacion = true;
  
  constructor(private sessionService: SessionService) { 
    
  }

  ngOnInit(): void {
    this.usuario = this.sessionService.getGlobalElement();
    if (this.usuario && this.usuario.tipo_usuario === 'normal') {
      this.mostrarNavegacion = false;
    }
  }
}




