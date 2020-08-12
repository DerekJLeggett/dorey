import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoriComponent } from './lori/lori.component';
import { LindseyComponent } from './lindsey/lindsey.component';
import { DerekComponent } from './derek/derek.component';
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
import { CovidComponent } from './covid/covid.component';
import { PlacesComponent } from './places/places.component';
import { NatgeoComponent } from './natgeo/natgeo.component';
import { PopulationComponent } from './population/population.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home', },
  { path: 'home', component: HomeComponent },
  { path: 'lori', component: LoriComponent },
  { path: 'lindsey', component: LindseyComponent },
  { path: 'derek', component: DerekComponent },
  { path: 'world', component: WorldComponent },
  { path: 'starwars', component: SwapiComponent },
  { path: 'marvel', component: MarvelComponent },
  { path: 'ships', component: ShipsComponent },
  { path: 'auto', component: AutoComponent },
  { path: 'dunkin', component: DunkinComponent },
  { path: 'nps', component: NpsComponent },
  { path: 'recreation', component: RecreationComponent },
  { path: 'snap', component: SnapComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'performance', component: PerformanceComponent },
  { path: 'covid', component: CovidComponent },
  { path: 'places', component: PlacesComponent },
  { path: 'natgeo', component: NatgeoComponent },
  { path: 'population', component: PopulationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
