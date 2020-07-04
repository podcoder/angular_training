import { Component, OnInit } from '@angular/core';
import { Post } from 'src/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  showAddNewPostForm: boolean = false
  posts: Post[];


  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(posts => {
      this.posts = posts
    })
  }

  addNewParrentPost(post: Post) {

    this.postService.addPost(post).subscribe(addedPost => {
      this.posts.unshift(addedPost)
      this.showAddNewPostForm = !this.showAddNewPostForm
    })

  }


  deletePost(post: Post) {
    if (confirm("Are you sure you want to delete this post")) {
      this.postService.deletePost(post).subscribe(() => {
        this.posts = this.posts.filter(_post => _post.id != post.id)
      })
    }
  }

}
