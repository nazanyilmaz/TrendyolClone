interface CategoriesPropsTypes {
  title: string;
}
interface CategoriesTypes {
  categories: object[];
  pending: boolean;
  error: object;
  selectedCategory: string;
}

export type {CategoriesPropsTypes, CategoriesTypes};
