import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { NavegacionComponent } from './Modelo/navegacion/navegacion.component';
import { FeedComponent } from './Modelo/feed/feed.component';
import { RutasComponent } from './Modelo/rutas/rutas.component';
import {MatCardModule} from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select'; // Importa MatSelectModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FiltroSideComponent } from './Modelo/filtro-side/filtro-side.component';
import { CrearRutaComponent } from './crear-ruta/crear-ruta.component';
import { FormsModule } from '@angular/forms';
import { map } from 'rxjs/operators';
import { PostComponent } from './Modelo/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    NavegacionComponent,
    FeedComponent,
    RutasComponent,
    FiltroSideComponent,
    CrearRutaComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    LeafletModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
