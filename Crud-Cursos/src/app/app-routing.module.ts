import { CursoNovoComponent } from './curso-novo/curso-novo.component';
import { CursosComponent } from './cursos/cursos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  
  { path: '', component: CursosComponent},
  
  { path: 'novo',component: CursoNovoComponent},
  
  { path: 'editar/:id', component: CursoNovoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
