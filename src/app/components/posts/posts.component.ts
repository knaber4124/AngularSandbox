import { Component } from '@angular/core';
import { Post } from '../../models/Post'
import { PostsService } from 'src/app/services/posts.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: Post[];

  constructor(private _postsService: PostsService) { }

  ngOnInit() {
    this._postsService.getPosts().subscribe(posts => {
      this.posts=posts;
    });
  }

}
