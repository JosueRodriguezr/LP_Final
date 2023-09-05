import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BiciGo';
  mostrarNavegacion = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Verifica la ruta actual y decide si mostrar o no la navegación
        this.mostrarNavegacion = !['/login', '/register'].includes(event.url);
      }
    });
  }
}
