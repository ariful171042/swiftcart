import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  AllProductsResponse,
  CategoriesResponse,
  CreateProductReq,
  DeleteProductReq,
  MessageResponse,
  ProductResponse,
  SearchCategoriesResponse,
  SearchProductsRequest,
  UpdateProductReq,
} from "../../types/api-types";

export const productAPI = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER}/api/product/`,
  }),
  tagTypes: ["products"],
  endpoints: (builder) => ({
    latestProduct: builder.query<AllProductsResponse, string>({
      query: () => "latest",
      providesTags: ["products"],
    }),
    allProduct: builder.query<AllProductsResponse, string>({
      query: (id) => `admin/products?id=${id}`,
    }),
    category: builder.query<CategoriesResponse, string>({
      query: () => `category`,
    }),
    searchProducts: builder.query<
      SearchCategoriesResponse,
      SearchProductsRequest
    >({
      query: ({ price, search, sort, category, page }) => {
        let base = `all?search=${search}&page${page}`;

        if (price) base += `&price=${price}`;
        if (sort) base += `&sort=${sort}`;
        if (category) base += `&category=${category}`;

        return base;
      },
      providesTags: ["products"],
    }),
    createProduct: builder.mutation<MessageResponse, CreateProductReq>({
      query: ({ formData, id }) => ({
        url: `new?id=${id}`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["products"],
    }),
    productDetails: builder.query<ProductResponse, string>({
      query: (id) => id,
      providesTags: ["products"],
    }),
    productUpdate: builder.mutation<MessageResponse, UpdateProductReq>({
      query: ({ formData, userId, productId }) => ({
        url: `${productId}?id=${userId}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["products"],
    }),

    deleteProduct: builder.mutation<MessageResponse, DeleteProductReq>({
      query: ({ userId, productId }) => ({
        url: `${productId}?id=${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useLatestProductQuery,
  useAllProductQuery,
  useCategoryQuery,
  useSearchProductsQuery,
  useCreateProductMutation,
  useProductDetailsQuery,
  useProductUpdateMutation,
  useDeleteProductMutation,
} = productAPI;
