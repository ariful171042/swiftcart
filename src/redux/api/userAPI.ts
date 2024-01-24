import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { MessageResponse, UserResponce } from "../../types/api-types";
import { User } from "../../types/types";
import axios from "axios";

export const userAPI = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER}/api/user/`,
  }),
  tagTypes: ["users"],
  endpoints: (builder) => ({
    login: builder.mutation<MessageResponse, User>({
      query: (user) => ({
        url: "new",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const getUser = async (id: string) => {
  try {
    const { data }: { data: UserResponce } = await axios.get(
      `${import.meta.env.VITE_SERVER}/api/user/${id}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const { useLoginMutation } = userAPI;
