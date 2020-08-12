import { Component, OnInit } from '@angular/core';
import { ICovidCounts } from './covid';
import { CovidService } from './covid.service';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})

export class CovidComponent implements OnInit {

  covidCounts: ICovidCounts[] = [];
  constructor(private covidService: CovidService) { }

  ngOnInit() {
    this.getCovidCounts();
  }

  getCovidCounts() {
    this.covidService.getCovidCounts()
      .subscribe(response => this.covidCounts = response);
  }

}
