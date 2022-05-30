import {Component, OnInit} from '@angular/core';
import {IPost} from "../../../interfaces";
import {PostService} from "../../../services";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-posts-component',
  templateUrl: './posts-component.component.html',
  styleUrls: ['./posts-component.component.css']
})
export class PostsComponent implements OnInit {

  posts: IPost[];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.activatedRoute.data.subscribe(({postsData}) => this.posts = postsData)

  }

}
