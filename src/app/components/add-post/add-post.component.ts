import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {


  @Output() passToParent: EventEmitter<any> = new EventEmitter()

  title: string;
  body: string;

  constructor() { }

  ngOnInit(): void {
  }

  addNewPost() {

    let post = {
      userId: 1,
      title: this.title,
      body: this.body
    }

    this.passToParent.emit(post)

  }

}
