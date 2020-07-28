import { Component, OnInit } from '@angular/core';
import { IOrganization, IRecreationalArea } from './recreation';
import { RecreationService } from './recreation.service';
import { StateService } from '../shared/state.service';
import { IState } from '../shared/state';

@Component({
  selector: 'app-recreation',
  templateUrl: './recreation.component.html',
  styleUrls: ['./recreation.component.css']
})
export class RecreationComponent implements OnInit {

  organizations: IOrganization[] = [];
  recreationalAreas: IRecreationalArea[] = [];
  states: IState[] = [];
  constructor(private recreationService: RecreationService, private stateService: StateService) { }

  ngOnInit() {
    this.getStates();
  }
  getOrganizations() {
    this.recreationService.getOrganizations()
      .subscribe(response => this.organizations = response);
  }
  getRecreationalAreas(stateCode: string) {
    this.recreationService.getRecreationalAreasByState(stateCode)
      .subscribe(response => this.recreationalAreas = response);
  }
  getStates() {
    this.stateService.getStates()
      .subscribe(response => this.states = response);
  }
}
