import { Component, OnInit } from '@angular/core';
import {IPost} from "../../../interfaces";
import {PostService} from "../../../services";

@Component({
  selector: 'app-posts-component',
  templateUrl: './posts-component.component.html',
  styleUrls: ['./posts-component.component.css']
})
export class PostsComponent implements OnInit {

  posts: IPost[];

  constructor(private postService:PostService) { }

  ngOnInit(): void {

    this.postService.getAll().subscribe(value => this.posts = value);

  }

}
