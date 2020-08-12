import { Component, OnInit } from '@angular/core';
import { IVideo } from './natgeo';
import { NatgeoService } from './natgeo.service';
@Component({
  selector: 'app-natgeo',
  templateUrl: './natgeo.component.html',
  styleUrls: ['./natgeo.component.css']
})
export class NatgeoComponent implements OnInit {
  videos: IVideo[] = [];
  constructor(private natgeoService: NatgeoService) { }

  ngOnInit() {
    this.getVideos();
  }

  getVideos() {
    this.natgeoService.getVideos()
      .subscribe(response => this.videos = response);
  }

}
