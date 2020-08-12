import { Component, OnInit } from '@angular/core';
import { ISeries, ICharacter, ICharacterById } from './marvel';
import { MarvelService } from './marvel.service';
@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.css']
})
export class MarvelComponent implements OnInit {
  series: ISeries[] = [];
  characters: ICharacter[] = [];
  characterById: ICharacterById[] = [];
  constructor(private marvelService: MarvelService) { }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.marvelService.getCharacters()
      .subscribe(response => this.characters = response);
  }
  getCharacterById(id: number) {
    this.marvelService.getCharacterById(id)
      .subscribe(response => this.characterById = response)
  }
  getSeries() {
    this.marvelService.getSeries()
      .subscribe(response => this.series = response);
  }
  getDetails(serie: ISeries) {

  }
}
