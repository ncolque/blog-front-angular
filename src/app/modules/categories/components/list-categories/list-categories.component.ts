import { CommonModule} from '@angular/common';
import { Category } from '../../interfaces/category';
import { CategoryService } from '../../services/category.service';
import { Component, inject } from '@angular/core';
import { MaterialModule } from '../../../../shared/material/material.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-categories',
  standalone: true,
  imports: [CommonModule, MaterialModule, RouterLink],
  templateUrl: './list-categories.component.html',
  styleUrl: './list-categories.component.css',
})
export class ListCategoriesComponent {
  categories: Category[] = [];
  columnsCategories: string[] = ['id', 'name', 'slug', 'acciones'];
  private categorySvc = inject(CategoryService);

  constructor() {}

  ngOnInit(): void {
    this.listCategories();
  }

  listCategories() {
    return this.categorySvc.getCategoriesSvc().subscribe((data: Category[]) => {
      this.categories = data;
    });
  }

  deleteCategory(id: number) {
    return this.categorySvc.deleteCategorySvc(id).subscribe((data) => {
      this.listCategories();
    });
  }
}
