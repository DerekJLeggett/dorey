import { Component, OnInit } from '@angular/core';
import { Dunkin } from './dunkin';
import { DunkinService } from './dunkin.service';
import { StateService } from '../shared/state.service';
import { IState } from '../shared/state';

@Component({
  selector: 'app-dunkin',
  templateUrl: './dunkin.component.html',
  styleUrls: ['./dunkin.component.css']
})
export class DunkinComponent implements OnInit {
  dunkins: Dunkin[];
  states: IState[] = [];

  constructor(private dunkinService: DunkinService, private stateService: StateService) { }

  ngOnInit() {
    this.getStates();
  }

  getStates() {
    this.stateService.getStates()
      .subscribe(response => this.states = response);
  }

  getDunkinByState(state: string): void {
    this.dunkinService.getDunkinByState(state)
      .subscribe(dunkin => this.dunkins = dunkin);
  }
}
