import { Component, OnInit } from '@angular/core';
import { IFilm, ICharacter, IPlanet, IStarship, IVehicle, ISpecies } from './swapi';
import { SwapiService } from './swapi.service';
@Component({
  selector: 'app-swapi',
  templateUrl: './swapi.component.html',
  styleUrls: ['./swapi.component.css']
})
export class SwapiComponent implements OnInit {
  films: IFilm[];
  selectedFilm: IFilm;
  characters: ICharacter[] = [];
  selectedCharacter: ICharacter;
  planets: IPlanet[];
  selectedPlanet: IPlanet;
  starShips: IStarship[];
  selectedStarShip: IStarship;
  vehicles: IVehicle[];
  selectedVehicle: IVehicle;
  species: ISpecies[];
  selectedSpecie: ISpecies;
  constructor(private swapiService: SwapiService) { }

  ngOnInit() {
    this.getFilms();
  }

  getFilms() {
    this.swapiService.getFilms()
      .subscribe(response => this.films = response.sort());
  }
  getDetails(film: IFilm) {
    this.selectedFilm = film;
    this.getCharacters(film);
    this.getPlanets(film);
    this.getStarships(film);
    this.getSpecies(film);
    this.getVehicles(film);
  }
  getCharacters(film: IFilm) {
    this.characters = [];
    for (let entry of film.characters) {
      this.swapiService.getCharacter(entry)
        .subscribe(response => this.characters.push(response));
    }
  }
  characterSelected(character: ICharacter) {
    this.selectedCharacter = character;
  }
  getPlanets(film: IFilm) {
    this.planets = [];
    for (let entry of film.planets) {
      this.swapiService.getPlanet(entry)
        .subscribe(response => this.planets.push(response));
    }
  }
  planetSelected(planet: IPlanet) {
    this.selectedPlanet = planet;
  }
  getStarships(film: IFilm) {
    this.starShips = [];
    for (let entry of film.starships) {
      this.swapiService.getStarship(entry)
        .subscribe(response => this.starShips.push(response));
    }
  }
  starShipSelected(starShip: IStarship) {
    this.selectedStarShip = starShip;
  }
  getVehicles(film: IFilm) {
    this.vehicles = [];
    for (let entry of film.vehicles) {
      this.swapiService.getVehicle(entry)
        .subscribe(response => this.vehicles.push(response));
    }
  }
  vehicleSelected(vehicle: IVehicle) {
    this.selectedVehicle = vehicle;
  }
  getSpecies(film: IFilm) {
    this.species = [];
    for (let entry of film.species) {
      this.swapiService.getSpecies(entry)
        .subscribe(response => this.species.push(response));
    }
  }
  specieSelected(specie: ISpecies) {
    this.selectedSpecie = specie;
  }
}
