import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { ContactComponent } from './contact/contact.component';

// PRUEBA PARA ESTRUCTURA DE ARBOL
import { TreeRootComponent } from './tree-root/tree-root.component';
import { LeavesComponent } from './tree-root/branch1/leaves/leaves.component';
import { Branch1Component } from './tree-root/branch1/branch1.component';
import { Branch2Component } from './tree-root/branch2/branch2.component'; 


const routes: Routes = [
  { path: '', component: HomeComponent }, // index
  { path: 'fruta', component: FrutaComponent },
  { path: 'empleado', component: EmpleadoComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contact/:page', component: ContactComponent },
  { path: 'tree-root', component: TreeRootComponent },
  { path: 'tree-root/branch1', component: Branch1Component },
  { path: 'tree-root/branch1/leaves', component: LeavesComponent },
  { path: 'tree-root/branch2', component: Branch2Component }, 
  { path: '**', component: NotFoundComponent }, // error, dejar de último
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      //{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
