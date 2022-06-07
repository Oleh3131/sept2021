import { Component, OnInit } from '@angular/core';
import {GenresService} from "../../../services/genres.service";
import {IGenres} from "../../../interfaces/genres";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  genres: IGenres[];

  constructor(private genresService:GenresService) { }

  ngOnInit(): void {

    this.genresService.getAll().subscribe(value => console.log(value))

  }

}
