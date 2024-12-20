import { Component, inject, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Category } from '../../interfaces/category';
import { CategoryService } from '../../services/category.service';
import { Router, RouterLink } from '@angular/router';
import { MaterialModule } from '../../../../shared/material/material.module';

@Component({
  selector: 'app-create-edit-category',
  standalone: true,
  imports: [MaterialModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './create-edit-category.component.html',
  styleUrl: './create-edit-category.component.css',
})
export class CreateEditCategoryComponent {
  formCategory: FormGroup;
  titulo = 'Agregar Categoria';
  category: Category | undefined;
  @Input('id') categoryId!: number;
  categorySvc = inject(CategoryService);

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.formCategory = this.formBuilder.group({
      name: ['', [Validators.required]],
      slug: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.isEdit();
  }

  isEdit() {
    if (this.categoryId != undefined) {
      this.titulo = 'Editar Categoria';
      this.categorySvc
        .findCategorySvc(this.categoryId)
        .subscribe((resp: Category) => {
          this.category = resp;

          this.formCategory.patchValue({
            name: this.category.name,
            slug: this.category.slug,
          });
        });
    }
  }

  createEditCategory() {
    if (this.categoryId == undefined) {
      this.createCategory();
    } else {
      this.editCategory();
    }
  }

  createCategory() {
    const category: Category = {
      name: this.formCategory.get('name')?.value,
      slug: this.formCategory.get('slug')?.value,
    };

    this.categorySvc.createCategorySvc(category).subscribe((data) => {
      this.router.navigate(['/listar-categorias']);
    });
  }

  editCategory() {
    const category: Category = {
      name: this.formCategory.get('name')?.value,
      slug: this.formCategory.get('slug')?.value,
    };
    category.id = this.category?.id;

    this.categorySvc
      .updateCategorySvc(this.categoryId, category)
      .subscribe((data) => {
        this.router.navigate(['/listar-categorias']);
      });
  }
}
