import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componenti/home/home.component';
import { AboutComponent } from './componenti/about/about.component';
import { ContactComponent } from './componenti/contact/contact.component';
import { ContattiComponent } from './componenti/contatti/contatti.component';

const routes: Routes = [
  //generiamo una cartella esterna componenti e inseriamo le "pagine" al suo interno, con il comando ng g c componenti/about 
  // ( creare il componente about dentro la certella componenti)
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'contatti', component: ContattiComponent},
  {path: 'contatti/:id', component: ContattiComponent}
];


@NgModule({
  //RouterModule, ciò che abbiamo preso da angular che la gestisce, routes sono tutte le verie pagine che andremo ad inserire
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
