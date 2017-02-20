// imports
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { Angular2TokenService } from 'angular2-token';

// Declarations
import { AppComponent }  from './app.component';
import { UserDetailsComponent } from './user/user-details.component';
import { ProceduresListComponent } from './procedures/procedures-list.component';
import { routing } from './app.routes';

// declarate others later

// Decorator
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, JsonpModule, routing ],
  declarations: [ AppComponent, UserDetailsComponent, ProceduresListComponent ],
  providers:    [ Angular2TokenService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
