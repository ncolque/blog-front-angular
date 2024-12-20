import { Routes } from '@angular/router';
import { LayoutsComponent } from './modules/layouts/layouts.component';
import { ListCategoriesComponent } from './modules/categories/components/list-categories/list-categories.component';
import { CreateEditCategoryComponent } from './modules/categories/components/create-edit-category/create-edit-category.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      {
        path: 'listar-categorias',
        component: ListCategoriesComponent
      },
      {
        path: 'agregar-categoria',
        component: CreateEditCategoryComponent
      },
      {
        path: 'editar-categoria/:id',
        component: CreateEditCategoryComponent
      },
      {
        path: '**',
        redirectTo: '',
      },
    ]
  }
  /* {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  }, */
];
