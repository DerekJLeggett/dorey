import { Component, OnInit } from '@angular/core';
import { IDerekslinks } from './derek';
import { DerekService } from './derek.service';

@Component({
  selector: 'app-derek',
  templateUrl: './derek.component.html',
  styleUrls: ['./derek.component.css']
})
export class DerekComponent implements OnInit {
  dereksLinks: IDerekslinks[] = [];
  constructor(private derekService: DerekService) { }

  ngOnInit() {
    this.getLinks();
  }

  getLinks() {
    this.derekService.getLinks()
      .subscribe(response => this.dereksLinks = response);
  }
}
