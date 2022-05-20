import {Component, Input, OnInit} from '@angular/core';

import {IPost} from "../../../interfaces";

@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: IPost;

  constructor() {
  }

  ngOnInit(): void {
  }

}
