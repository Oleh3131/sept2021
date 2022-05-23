import {Component, Input, OnInit} from '@angular/core';
import {IComment} from "../../../interfaces";

@Component({
  selector: 'app-comment-component',
  templateUrl: './comment-component.component.html',
  styleUrls: ['./comment-component.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  comment: IComment;

  constructor() {
  }

  ngOnInit(): void {
  }

}
