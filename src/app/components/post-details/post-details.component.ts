import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {PostService} from "../../services";
import {PostDetailsInterface} from "../../interfaces/post-details-interface";


@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postDetails: PostDetailsInterface;

  constructor(private activatedRoute:ActivatedRoute,
              private postService:PostService
              ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(({id})=>{

      this.postService.getPost(id).subscribe(value => this.postDetails = value);

    })

  }

}
