import { Category } from '../../categories/interfaces/category';

export interface Post {
  id?: number;
  name: string;
  slug: string;
  extract: string;
  body: string;
  status: string;
  category: Category;
}
