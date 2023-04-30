import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { addUserData } from "./currentUser"
export const userApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '',
    tagTypes: ['CurrentUser', ['SharedContents']],
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
    updateUserProfile: build.mutation({
      query: ({id, body}) => {
        return {
          url: `/api/user_profiles/${id}`,
          method: 'PUT',
          body: {user_profile: body}
        }
      },
      invalidatesTags: ['CurrentUser']
    }),

    getSharedContents: build.query({
      query: () => `/api/current_user/shared_contents`,
      providesTags: ['SharedContents']
    }),

    createSharedContent: build.mutation({
      query: (body) => {
        return {
          url: `/api/current_user/shared_contents`,
          method: 'POST',
          body: {shared_content: body}
        }
      },
      invalidatesTags: ['SharedContents']
    }),
    deleteSharedContent: build.mutation({
      query: (id) => {
        return {
          url: `/api/shared_contents/${id}`,
          method: 'DELETE'
        }
      },
      invalidatesTags: ['SharedContents']
    }),
    previewSharedContent: build.mutation({
      query: (body) => {
        return {
          url: `/api/current_user/shared_contents/preview`,
          method: 'POST',
          body: {shared_content: body}
        }
      }
    }),
  }),
})

export const { 
  useCurrentUserQuery,
  useSignupMutation,
  useLoginMutation,
  useLogoutMutation, 
  useUpdatePasswordMutation,
  useUpdateUserInfoMutation,
  useUpdateUserProfileMutation,
  useGetSharedContentsQuery,
  useCreateSharedContentMutation,
  usePreviewSharedContentMutation,
  useDeleteSharedContentMutation
  
} = userApi