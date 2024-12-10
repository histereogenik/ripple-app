import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootReducer } from '../store';
import { LoginResponse, ProfileType, TestResponse } from '../types/apiInterfaces';

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
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, { username: string; password: string }>({
            query: (credentials) => ({
                url: 'auth/login/',
                method: 'POST',
                body: credentials,
            }),
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
        }),
        test: builder.query<TestResponse, void>({
            query: () => 'auth/test/',
        }),
    }),
});

export const { useLoginMutation, useTestQuery, useRegisterMutation, useGetUserProfileQuery } = apiSlice;
