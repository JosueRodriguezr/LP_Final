import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { usuarios } from '../../app/Interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private globalElementKey = 'globalElement'; // Clave para almacenar el elemento en el almacenamiento local

  setGlobalElement(element: usuarios) {
    localStorage.setItem(this.globalElementKey, JSON.stringify(element));
  }

  getGlobalElement(): usuarios | null {
    const storedElement = localStorage.getItem(this.globalElementKey);
    return storedElement ? JSON.parse(storedElement) : null;
  }

  clearGlobalElement() {
    localStorage.removeItem(this.globalElementKey);
  }
}


