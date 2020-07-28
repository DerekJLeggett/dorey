import { Component, OnInit } from '@angular/core';
import { IAutoManufacturer, IAutoManufacturerDetails, IMake, IAutoType, IMakeByType, IModel } from './auto';
import { AutoService } from './auto.service';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent implements OnInit {
  autoManufacturers: IAutoManufacturer[];
  manufacturerDetails: IAutoManufacturerDetails[];
  makes: IMake[];
  types: IAutoType[];
  makesByType: IMakeByType[];
  models: IModel[];
  constructor(private autoService: AutoService) { }

  ngOnInit() {
    this.getVehicleTypes();
  }
  getVehicleTypes() {
    this.autoService.getVehicleTypes()
    .subscribe(response => this.types = response);
  }

  getMakesByType(type: string) {
    this.autoService.getMakesByType(type)
    .subscribe(response => this.makesByType = response);
  }

  getModelsByMakeId(makeId: string) {
    this.autoService.getModelsByMakeId(makeId)
    .subscribe(response => this.models = response);
  }
  getAutoManufacturers(): void {
    this.autoService.getAllManufacturers()
      .subscribe(autoManufacturer => this.autoManufacturers = autoManufacturer);
  }
  getManufacturerDetails(name: string) {
    this.autoService.getManufacturerDetails(name)
    .subscribe(details => this.manufacturerDetails = details);
  }
  getMakesByManufacturer(name: string) {
    this.autoService.getMakesByManufacturer(name)
    .subscribe(details => this.makes = details);
  }
}
