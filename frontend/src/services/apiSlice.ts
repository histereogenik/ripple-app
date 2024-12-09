import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface LoginResponse {
    token: string;
    username: string;
}
export interface TestResponse {
    message: string;
}

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/' }),
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
        test: builder.query<TestResponse, void>({
            query: () => 'auth/test/',
        }),
    }),
});

export const { useLoginMutation, useTestQuery, useRegisterMutation } = apiSlice;
