//File di censimento, dove tutto cio che utilizziamo in angular deve passare di qua

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';

//Routing cambio pagine fittizzio, cambia solo l'url
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Prova1Component } from './prova1/prova1.component';
import { Prova2Component } from './prova2/prova2.component';
import {MatInputModule} from '@angular/material/input';
import { TwoWayComponent } from './two-way/two-way.component';
import { NGIFComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { ChildParentComponent } from './child-parent/child-parent.component';


@NgModule({
  declarations: [AppComponent, Prova1Component, Prova2Component, TwoWayComponent, NGIFComponent, NgforComponent, NgswitchComponent, NgstyleComponent, NgclassComponent, ParentChildComponent, ChildParentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatProgressBarModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}