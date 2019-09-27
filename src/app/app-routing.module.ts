import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';


const routes: Routes = [
  // { path: '', component: EmpleadoComponent }, // index
  // { path: '**', component: EmpleadoComponent }, // error
  { path: 'empleado', component: EmpleadoComponent }, // index
  { path: 'fruta', component: FrutaComponent } // index
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
