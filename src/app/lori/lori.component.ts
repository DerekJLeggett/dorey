import { Component, OnInit } from '@angular/core';
import { ILorislinks } from './lori';
import { LoriService } from './lori.service';

@Component({
  selector: 'app-lori',
  templateUrl: './lori.component.html',
  styleUrls: ['./lori.component.css']
})
export class LoriComponent implements OnInit {
  lorisLinks: ILorislinks[] = [];
  constructor(private loriService: LoriService) { }

  ngOnInit() {
    this.getLinks();
  }

  getLinks() {
    this.loriService.getLinks()
      .subscribe(response => this.lorisLinks = response);
  }
}
