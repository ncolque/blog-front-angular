import { Component, inject } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../interfaces/post';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../shared/material/material.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-posts',
  standalone: true,
  imports: [CommonModule, MaterialModule, RouterLink],
  templateUrl: './list-posts.component.html',
  styleUrl: './list-posts.component.css',
})
export class ListPostsComponent {
  posts: Post[] = [];
  columnsPosts: string[] = ['id', 'name', 'slug', 'category', 'acciones'];
  private postSvc = inject(PostService);

  ngOnInit(): void {
    this.listPosts();
  }

  listPosts() {
    return this.postSvc.getPostsSvc().subscribe((data: Post[]) => {
      this.posts = data;
    });
  }

  deletePost(id: number) {
    return this.postSvc.deletePostSvc(id).subscribe((data) => {
      this.listPosts();
    });
  }
}
