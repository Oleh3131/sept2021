import {Component, Input, OnInit} from '@angular/core';
import {IGenres} from "../../../interfaces/genres";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  @Input()
  genre: IGenres;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  genre_selection(): void {
    this.router.navigate([this.genre.id], {
      relativeTo: this.activatedRoute,
      state: {todo: this.genre}
    })
  }
}
