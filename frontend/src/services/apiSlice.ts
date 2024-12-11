import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootReducer } from '../store';
import {
    LoginResponse,
    PaginatedRippleetResponse,
    ProfileType,
    RippleetType,
    TestResponse
} from '../types/apiInterfaces';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8000/api/",
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootReducer).auth.token;
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ["Rippleet", "Profile"],
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, { username: string; password: string }>({
            query: (credentials) => ({
                url: 'auth/login/',
                method: 'POST',
                body: credentials,
            }),
            invalidatesTags: [{ type: "Profile" }],
        }),
        register: builder.mutation({
            query: (userData: { username: string; email: string; password: string; password_confirm: string }) => ({
                url: "/auth/register/",
                method: "POST",
                body: userData,
            }),
        }),
        getUserProfile: builder.query<ProfileType, void>({
            query: () => "/profiles/me/",
            providesTags: [{ type: "Profile" }]
        }),
        test: builder.query<TestResponse, void>({
            query: () => 'auth/test/',
        }),
        createRippleet: builder.mutation<RippleetType, { content: string }>({
                query: (newRippleet) => ({
                url: "/newsfeed/rippleets/",
                method: "POST",
                body: newRippleet,
            }),
            invalidatesTags: [{ type: "Rippleet", id: "LIST" }],
        }),
        getRippleets: builder.query<PaginatedRippleetResponse, void>({
            query: () => "/newsfeed/rippleets/",
            providesTags: (result) =>
                result?.results
                    ? [
                        ...result.results.map(({ id }) => ({ type: "Rippleet" as const, id })),
                        { type: "Rippleet", id: "LIST" },
                    ]
                    : [{ type: "Rippleet", id: "LIST" }],
        }),
    }),
});

export const { 
    useLoginMutation,
    useTestQuery,
    useRegisterMutation,
    useGetUserProfileQuery,
    useLazyGetUserProfileQuery,
    useCreateRippleetMutation,
    useGetRippleetsQuery
} = apiSlice;
