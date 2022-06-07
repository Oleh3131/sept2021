import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GenresService} from "../../../services/genres.service";
import {IGenreDetails} from "../../../interfaces/genre-details";

@Component({
  selector: 'app-genge-details',
  templateUrl: './genge-details.component.html',
  styleUrls: ['./genge-details.component.css']
})
export class GengeDetailsComponent implements OnInit {

  genreDetails: IGenreDetails;

  constructor(private activatedRoute:ActivatedRoute,
              private router:Router,
              private genresService:GenresService) { }

  ngOnInit(): void {

this.activatedRoute.params.subscribe(({id})=>{

  const state = this.router.getCurrentNavigation()?.extras.state?.['genre'] as IGenreDetails;

  if(state) {

    this.genreDetails = state;

  } else {

    this.genresService.getById(id).subscribe(value => this.genreDetails = value);

  }



})

  }

}
