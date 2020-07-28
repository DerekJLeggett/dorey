import { Component, OnInit } from '@angular/core';
import { IShip, IShipType } from './ships';
import { ShipsService } from './ships.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit {
  ships: IShip[] = [];
  selectedShip: IShip;
  shipTypes: IShipType[] = [];
  constructor(private shipsService: ShipsService) { }

  ngOnInit() {
    this.getShipTypes();
  }

  getShipTypes() {
    this.shipsService.getShipTypes()
      .subscribe(response => this.shipTypes = response)
  }
  getShipsByType(shipType: string) {
    this.shipsService.getShipsByType(shipType)
      .subscribe(response => this.ships = response);
  }
  selectShip(ship: IShip) {
    this.selectedShip = ship;
  }
}
