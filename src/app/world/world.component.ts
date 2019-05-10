import { Component } from '@angular/core';
import { ICountry, IState } from './world';
import { WorldService } from './world.service';
@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent {
  title = 'World';
  countries: ICountry[] = [];
  states: IState[] = [];
  countryCode: string;
  constructor(private worldService: WorldService) { }

  ngOnInit() {
    this.getCountriesNestedLanguages();
  }

  getCountriesNestedLanguages() {
    this.worldService.getCountriesNestedLanguages()
      .subscribe(response => this.countries = response);
  }

  getStatesNestedCitiesByCountryCode(countryCode: string) {
    this.worldService.getStatesNestedCitiesByCountryCode(countryCode)
      .subscribe(response => this.states = response);
  }
}
