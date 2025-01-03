import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCategoriesComponent } from './components/list-categories/list-categories.component';
import { CreateEditCategoryComponent } from './components/create-edit-category/create-edit-category.component';

const routes: Routes = [
  {
    path: '',
    component: ListCategoriesComponent,
  },
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
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesRoutingModule {}
