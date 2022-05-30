import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {PostService} from "../../../services";
import {IPostDetails} from "../../../interfaces";

@Component({
  selector: 'app-post-details-component',
  templateUrl: './post-details-component.component.html',
  styleUrls: ['./post-details-component.component.css']
})
export class PostDetailsComponent implements OnInit {

  postDetails: IPostDetails;

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.data.subscribe(({postData}) => this.postDetails = postData);

  }

}
