import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoriComponent } from './lori/lori.component';
import { LindseyComponent } from './lindsey/lindsey.component';
import { DerekComponent } from './derek/derek.component';
import { HomeComponent } from './home/home.component';
import { WorldComponent } from './world/world.component';
import { SwapiComponent } from './swapi/swapi.component';
import { MarvelComponent } from './marvel/marvel.component';
import { ShipsComponent } from './ships/ships.component';
import { AutoComponent } from './auto/auto.component';
import { DunkinComponent } from './dunkin/dunkin.component';
import { NpsComponent } from './nps/nps.component';
import { RecreationComponent } from './recreation/recreation.component';
import { SnapComponent } from './snap/snap.component';
import { LibraryComponent } from './library/library.component';
import { PerformanceComponent } from './performance/performance.component';
@NgModule({
  declarations: [
    AppComponent,
    LoriComponent,
    LindseyComponent,
    DerekComponent,
    HomeComponent,
    WorldComponent,
    SwapiComponent,
    MarvelComponent,
    ShipsComponent,
    AutoComponent,
    DunkinComponent,
    NpsComponent,
    RecreationComponent,
    SnapComponent,
    LibraryComponent,
    PerformanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
