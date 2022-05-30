import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {ICommentDetails} from "../../../interfaces/comment-details-interface";

@Component({
  selector: 'app-comment-details-component',
  templateUrl: './comment-details-component.component.html',
  styleUrls: ['./comment-details-component.component.css']
})
export class CommentDetailsComponent implements OnInit {

  commentDetails: ICommentDetails;

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.data.subscribe(({commentData}) => this.commentDetails = commentData);

  }

}
