import { CategoriesModule } from './modules/categories/categories.module';
import { Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';
import { ListCategoriesComponent } from './modules/categories/components/list-categories/list-categories.component';
import { CreateEditCategoryComponent } from './modules/categories/components/create-edit-category/create-edit-category.component';
import { ListPostsComponent } from './modules/posts/components/list-posts/list-posts.component';
import { CreateEditPostComponent } from './modules/posts/components/create-edit-post/create-edit-post.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      {
        path: 'listar-categorias',
        component: ListCategoriesComponent,
      },
      {
        path: 'agregar-categoria',
        component: CreateEditCategoryComponent,
      },
      {
        path: 'editar-categoria/:id',
        component: CreateEditCategoryComponent,
      },

      {
        path: 'listar-posts',
        component: ListPostsComponent,
      },
      {
        path: 'agregar-post',
        component: CreateEditPostComponent,
      },
      /* {
        path: 'categorias',
        loadChildren: () => import('./modules/categories/categories.module').then((m) => m.CategoriesModule),
      }, */
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
];
