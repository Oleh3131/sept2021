import {Component, Input, OnInit} from '@angular/core';
import {IMovies} from "../../../interfaces/movies";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input()
  movie: IMovies;

  constructor() {
  }

  ngOnInit(): void {
  }

}
