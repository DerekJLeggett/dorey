import { Component, OnInit } from '@angular/core';
import { ISeries } from './marvel';
import { MarvelService } from './marvel.service';
@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.css']
})
export class MarvelComponent implements OnInit {
  series: ISeries[] = [];
  constructor(private marvelService: MarvelService) { }

  ngOnInit() {
    this.getSeries();
  }

  getSeries() {
    this.marvelService.getSeries()
      .subscribe(response => this.series = response);
  }
  getDetails(serie: ISeries) {

  }
}
