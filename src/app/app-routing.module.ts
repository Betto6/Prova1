import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componenti/home/home.component';
import { AboutComponent } from './componenti/about/about.component';
import { ContactComponent } from './componenti/contact/contact.component';
import { ContattiComponent } from './componenti/contatti/contatti.component';
import { ContattoComponent } from './componenti/contatto/contatto.component';
import { NotfoundComponent } from './componenti/notfound/notfound.component';
import { authGuard, authGuardChild } from './auth/auth.guard';

const routes: Routes = [
  //generiamo una cartella esterna componenti e inseriamo le "pagine" al suo interno, con il comando ng g c componenti/about 
  // ( creare il componente about dentro la certella componenti)
  // children è un'altra proprietà, è un array di altri path
  {path: '', pathMatch: 'full', redirectTo:'/homepage'},
  {path: 'homepage', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'contatti', component: ContattiComponent, canActivate: [authGuard], canActivateChild: [authGuardChild],
  children:[{path: ':id', component: ContattoComponent}]},
  {path: '404', component: NotfoundComponent},
  {path: '**', redirectTo: '/404'}
];


@NgModule({
  //RouterModule, ciò che abbiamo preso da angular che la gestisce, routes sono tutte le verie pagine che andremo ad inserire
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
