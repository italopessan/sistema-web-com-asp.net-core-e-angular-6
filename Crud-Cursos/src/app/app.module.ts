import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CursosComponent } from './cursos/cursos.component';
import { HttpClientModule } from '@angular/common/http';
import { CursoNovoComponent } from './curso-novo/curso-novo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';



@NgModule({
   declarations: [
      AppComponent,
      CursosComponent,
      CursoNovoComponent,
      
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      HttpClientModule,
     
      ReactiveFormsModule,
      ModalModule.forRoot(),
      BsDropdownModule.forRoot()
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
