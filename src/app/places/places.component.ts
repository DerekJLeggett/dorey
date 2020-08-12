import { Component, OnInit } from '@angular/core';
import { IPlace } from './places';
import { PlacesService } from './places.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  lat: number;
  long: number;
  places: IPlace[] = [];

  constructor(private placesService: PlacesService) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.long = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
        this.getPlaces()
      });
    }
  }

  ngOnInit() { }

  getPlaces() {
    this.placesService.getPlaces(this.lat, this.long)
      .subscribe(response => this.places = response);
  }

}
