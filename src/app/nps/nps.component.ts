import { Component, OnInit } from '@angular/core';
import { NpsService } from './nps.service';
import { StateService } from '../shared/state.service';
import { IPark } from './nps';
import { IState } from '../shared/state';
@Component({
  selector: 'app-nps',
  templateUrl: './nps.component.html',
  styleUrls: ['./nps.component.css']
})
export class NpsComponent implements OnInit {
  parks: IPark[] = [];
  states: IState[] = [];

  constructor(private npsService: NpsService, private stateService: StateService) { }

  ngOnInit() {
    this.getStates();
  }

  getParks(stateCode: string) {
    this.npsService.getParks(stateCode)
      .subscribe(response => this.parks = response);
  }

  getStates() {
    this.stateService.getStates()
      .subscribe(response => this.states = response);
  }

}
