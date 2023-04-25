import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { addUserData } from "./currentUser"
export const userApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '',
    tagTypes: ['CurrentUser'],
    prepareHeaders(headers) {
      let csrfToken = document.querySelector('[name=csrf-token]').content;
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
    updatePassword: build.mutation({
      query: (body) => ({
        url: `/api/current_user/password`,
        method: 'PUT',
        body: {user: body}
      }),
      invalidatesTags: ['CurrentUser']
    }),
    updateUserInfo: build.mutation({
      query: (body) => ({
        url: `/api/current_user`,
        method: 'PUT',
        body: body
      }),
      invalidatesTags: ['CurrentUser']
    }),
    login: build.mutation({
      query: (body) => ({
        url: `/users/sign_in`,
        method: 'POST',
        body: {user: body}
      }),
      invalidatesTags: ['CurrentUser']
    }),
    signup: build.mutation({
      query: (body) => ({
        url: `/users`,
        method: 'POST',
        body: {user: body}
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

export const { 
  useCurrentUserQuery,
  useSignupMutation,
  useLoginMutation,
  useLogoutMutation, 
  useUpdatePasswordMutation,
  useUpdateUserInfoMutation
} = userApi