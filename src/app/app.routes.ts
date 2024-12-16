import { Routes } from '@angular/router';
import { LayoutsComponent } from './modules/layouts/layouts.component';
import { ListCategoriesComponent } from './modules/categories/components/list-categories/list-categories.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      {
        path: 'listar-categories',
        component: ListCategoriesComponent
      }
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
