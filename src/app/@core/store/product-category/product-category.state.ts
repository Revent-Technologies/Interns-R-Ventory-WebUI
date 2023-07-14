import { Category } from "src/app/@components/webapp/inventory/products-category/products-category.component";
import { ProductCategory } from "../../interfaces/product-category.interface";

export interface ProductCategoryState {
  productCategory: ProductCategory[];
}

export const initialState: ProductCategoryState = {
  productCategory: [],
};
