import { Injectable } from '@angular/core';
import {usuarios} from '../../app/Interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private globalElement: usuarios | undefined; // Elemento global

  setGlobalElement(element: usuarios) {
    this.globalElement = element;
  }

  getGlobalElement() {
    return this.globalElement;
  }
}

