import { Component, inject, Input } from '@angular/core';
import { MaterialModule } from '../../../../shared/material/material.module';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Post } from '../../interfaces/post';
import { PostService } from '../../services/post.service';
import { CategoryService } from '../../../categories/services/category.service';
import { Category } from '../../../categories/interfaces/category';

@Component({
  selector: 'app-create-edit-post',
  standalone: true,
  imports: [MaterialModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './create-edit-post.component.html',
  styleUrl: './create-edit-post.component.css',
})
export class CreateEditPostComponent {
  formPost: FormGroup;
  titulo = 'Agregar Post';
  post: Post | undefined;
  @Input('id') postId!: number;
  postSvc = inject(PostService);
  categorySvc = inject(CategoryService);
  categories: Category[] = [];

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.formPost = this.formBuilder.group({
      name: ['', [Validators.required]],
      slug: ['', [Validators.required]],
      extract: ['', [Validators.required]],
      body: ['', [Validators.required]],
      status: ['', [Validators.required]],
      category: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.isEdit();
    this.categorySvc.getCategoriesSvc().subscribe((data: Category[]) => {
      this.categories = data;
    });
  }

  isEdit() {
    if (this.postId != undefined) {
      this.titulo = 'Editar Post';
      this.postSvc.findPostSvc(this.postId).subscribe((resp: Post) => {
        this.post = resp;

        this.formPost.patchValue({
          name: this.post.name,
          slug: this.post.slug,
          extract: this.post.extract,
          body: this.post.body,
          status: this.post.status,
          category: this.post.category,
        });
      });
    }
  }

  createEditPost() {
    if (this.postId == undefined) {
      this.createPost();
    } else {
      this.editPost();
    }
  }

  createPost() {
    const post: Post = {
      name: this.formPost.get('name')?.value,
      slug: this.formPost.get('slug')?.value,
      extract: this.formPost.get('extract')?.value,
      body: this.formPost.get('body')?.value,
      status: this.formPost.get('status')?.value,
      category: this.formPost.get('category')?.value,
    };

    this.postSvc.createPostSvc(post).subscribe((data) => {
      this.router.navigate(['/listar-posts']);
    });
  }

  editPost() {
    const post: Post = {
      name: this.formPost.get('name')?.value,
      slug: this.formPost.get('slug')?.value,
      extract: this.formPost.get('extract')?.value,
      body: this.formPost.get('body')?.value,
      status: this.formPost.get('status')?.value,
      category: this.formPost.get('category')?.value,
    };
    post.id = this.post?.id;

    this.postSvc.updatePostSvc(this.postId, post).subscribe((data) => {
      this.router.navigate(['/listar-posts']);
    });
  }
}
