import { Component, OnInit } from '@angular/core';
import {IPost} from "../../models/IPost";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: IPost[];

  constructor(private PostService:PostService) { }

  ngOnInit(): void {

    this.PostService.getPosts().subscribe(value => this.posts = value);

  }

}
