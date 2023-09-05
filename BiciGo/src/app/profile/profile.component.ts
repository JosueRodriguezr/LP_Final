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
  public usuario: usuarios | null = null;

  constructor(private sessionService: SessionService) { 
    
  }

  ngOnInit(): void {
    this.usuario = this.sessionService.getGlobalElement();
  }
}
