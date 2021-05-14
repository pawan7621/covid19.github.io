import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './slider/slider.component';
import { ListComponent } from './list/list.component';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { DesignUtilityService } from './service/design-utility.service';
import {HttpClientModule} from '@angular/common/http';
import { MaskComponent } from './mask/mask.component';
import { WashComponent } from './wash/wash.component';
import { SocdistComponent } from './socdist/socdist.component';
import { VaccineComponent } from './vaccine/vaccine.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SliderComponent,
    ListComponent,
    MaskComponent,
    WashComponent,
    SocdistComponent,
    VaccineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [DesignUtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
