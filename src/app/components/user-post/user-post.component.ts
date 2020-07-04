import { Component, OnInit } from '@angular/core';
import { Post } from 'src/models/post';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {


  userId: string;
  userPosts: Post[];

  constructor(private postService: PostService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');

    this.postService.getUserPosts(+this.userId).subscribe(userPosts => {
      this.userPosts = userPosts
    })
  }
}
