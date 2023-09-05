import { Component } from '@angular/core';
import {DatafeedService} from '../../Servicios/datafeed.service';
import { Post} from '../../Interfaces/post';
import { Router } from '@angular/router';
import { SessionService } from '../../Servicios/session.service';
import { usuarios } from '../../Interfaces/usuarios';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  public usuario: usuarios | null = null;
  title: string = '';
  photoUrl: string = '';
  body: string = '';
  public data1: Post[] = [];
  mensajeExito: string = '';
  username: string = '';
  mostrarNavegacion = true;


  constructor( private dataService: DatafeedService,  private router: Router , private sessionService: SessionService) { }

  ngOnInit(): void {
    this.usuario = this.sessionService.getGlobalElement();
    if (this.usuario && this.usuario.tipo_usuario === 'normal') {
      this.mostrarNavegacion = false;
    }
  }

    createPost() {
    
  
      this.dataService.agregarUsuario(this.title, this.body, this.photoUrl ,this.username).subscribe(
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
