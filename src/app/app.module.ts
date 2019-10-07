import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { TreeRootComponent } from './tree-root/tree-root.component';
import { Branch1Component } from './tree-root/branch1/branch1.component';
import { Branch2Component } from './tree-root/branch2/branch2.component';
import { LeavesComponent } from './tree-root/branch1/leaves/leaves.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactPipePipe } from './contact/contact-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadoComponent,
    HomeComponent,
    ContactComponent,
    TreeRootComponent,
    Branch1Component,
    Branch2Component,
    LeavesComponent,
    NotFoundComponent,
    ContactPipePipe
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
