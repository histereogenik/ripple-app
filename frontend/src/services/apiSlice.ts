import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { RootReducer } from "../store"
import {
  LoginResponse,
  PaginatedRippleetResponse,
  ProfileType,
  RippleetType,
} from "../types/apiInterfaces"

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootReducer).auth.token
      if (token) {
        headers.set("Authorization", `Bearer ${token}`)
      }
      return headers
    },
  }),
  tagTypes: ["Rippleet", "Profile"],
  endpoints: (builder) => ({
    login: builder.mutation<
      LoginResponse,
      { username: string; password: string }
    >({
      query: (credentials) => ({
        url: "auth/login/",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: [{ type: "Profile" }],
    }),
    register: builder.mutation({
      query: (userData: {
        username: string
        email: string
        password: string
        password_confirm: string
      }) => ({
        url: "/auth/register/",
        method: "POST",
        body: userData,
      }),
    }),
    getUserProfile: builder.query<ProfileType, void>({
      query: () => "/profiles/me/",
      providesTags: [{ type: "Profile" }],
    }),
    createRippleet: builder.mutation<RippleetType, { content: string }>({
      query: (newRippleet) => ({
        url: "/newsfeed/rippleets/",
        method: "POST",
        body: newRippleet,
      }),
      invalidatesTags: [{ type: "Rippleet", id: "LIST" }],
    }),
    getRippleets: builder.query<PaginatedRippleetResponse, { cursor?: string }>(
      {
        query: ({ cursor } = {}) => ({
          url: "/newsfeed/rippleets/",
          params: cursor ? { cursor } : {},
        }),
        providesTags: (result) =>
          result?.results
            ? [
                ...result.results.map(({ id }) => ({
                  type: "Rippleet" as const,
                  id,
                })),
                { type: "Rippleet", id: "LIST" },
              ]
            : [{ type: "Rippleet", id: "LIST" }],
      }
    ),
    likeRippleet: builder.mutation<void, { id: number; liked: boolean }>({
      query: ({ id, liked }) => ({
        url: `/newsfeed/rippleets/${id}/like/`,
        method: "POST",
        body: { liked },
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Rippleet", id }],
    }),
    deleteRippleet: builder.mutation<void, { id: number }>({
      query: ({ id }) => ({
        url: `/newsfeed/rippleets/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Rippleet", id }],
    }),
    updateRippleet: builder.mutation<
      RippleetType,
      { id: number; content: string }
    >({
      query: ({ id, content }) => ({
        url: `/newsfeed/rippleets/${id}/`,
        method: "PATCH",
        body: { content },
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Rippleet", id }],
    }),
  }),
})

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetUserProfileQuery,
  useLazyGetUserProfileQuery,
  useCreateRippleetMutation,
  useGetRippleetsQuery,
  useLazyGetRippleetsQuery,
  useLikeRippleetMutation,
  useDeleteRippleetMutation,
  useUpdateRippleetMutation,
} = apiSlice
