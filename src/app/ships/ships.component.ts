import { Component, OnInit } from '@angular/core';
import { IShip } from './ships';
import { ShipsService } from './ships.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit {
  ships: IShip[] = [];
  selectedShip: IShip;
  shipTypes = [];
  constructor(private shipsService: ShipsService) { }

  ngOnInit() {
    this.getShips();
  }

  getShips() {
    this.shipsService.getShips()
      .subscribe(response => this.ships = response);
  }
  selectShip(ship: IShip) {
    this.selectedShip = ship;
  }
}
