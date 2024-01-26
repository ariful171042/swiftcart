import { CartItem, Order, Product, ShippingInfo, User } from "./types";

export type CustomError = {
  status: number;
  data: {
    message: string;
    success: boolean;
  };
};

export type MessageResponse = {
  success: boolean;
  message: string;
};

export type UserResponce = {
  success: boolean;
  user: User;
};

export type AllProductsResponse = {
  success: boolean;
  products: Product[];
};

export type CategoriesResponse = {
  success: boolean;
  categories: string[];
};

export type SearchCategoriesResponse = {
  success: boolean;
  products: Product[];
  totalPage: number;
};

export type SearchProductsRequest = {
  price: number;
  page: number;
  category: string;
  search: string;
  sort: string;
};

export type ProductResponse = {
  success: boolean;
  product: Product;
};

export type CreateProductReq = {
  id: string;
  formData: FormData;
};
export type UpdateProductReq = {
  userId: string;
  productId: string;
  formData: FormData;
};
export type DeleteProductReq = {
  userId: string;
  productId: string;
};

export type NewOrderRequest = {
  shippingInfo: ShippingInfo;
  orderItems: CartItem[];
  subtotal: number;
  tax: number;
  shippingCharges: number;
  discount: number;
  total: number;
  user: string;
};
export type UpdateOrderRequest = {
  userId: string;
  orderId: string;
};

export type AllOrdersResponse = {
  success: boolean;
  orders: Order[];
};
export type OrderDetailsResponse = {
  success: boolean;
  order: Order;
};
