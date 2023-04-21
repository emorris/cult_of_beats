import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { addUserData } from "./currentUser"
export const userApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '',
    tagTypes: ['CurrentUser'],
    prepareHeaders(headers) {
      const csrfToken = document.querySelector('[name=csrf-token]').content;
      headers.set('X-CSRF-TOKEN', csrfToken);
      headers.set('Accept', 'application/json');

      return headers;
    },
  }),
  endpoints: (build) => ({
    currentUser: build.query({
      query: () => `/api/current_user`,
      providesTags: ['CurrentUser']
    }),
    login: build.query({
      query: () => `/users/sign_in`,
      invalidatesTags: ['CurrentUser']
    }),
    signup: build.mutation({
      query: (body) => ({
        url: `/users/sign_out`,
        method: 'POST',
        body: body
      }),
      invalidatesTags: ['CurrentUser']
    }),
    logout: build.mutation({
      query: () => ({
        url: `/users/sign_out`,
        method: 'DELETE',
      }),
      invalidatesTags: ['CurrentUser']
    }),
  }),
})

export const { useCurrentUserQuery, useSignupMutation, useLoginQuery, useLogoutMutation } = userApi