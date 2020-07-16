import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { NewServiceService } from './new-service.service'; 
import { WeatherComponent } from './components/weather/weather.component';
import { LoginComponent } from './components/login/login.component';

const appRoutes: Routes = [
  {path: '', component:CarComponent },
  {path: 'about', component:ContactsComponent },
  {path: 'weather', component:WeatherComponent},
  {path: 'login', component:LoginComponent},
  
]

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    ContactsComponent,
    WeatherComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [NewServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
