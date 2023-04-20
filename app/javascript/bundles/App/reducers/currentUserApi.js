import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { addUserData } from "./currentUser"
export const userApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '',
    prepareHeaders(headers) {
      const csrfToken = document.querySelector('[name=csrf-token]').content;
      headers.set('X-CSRF-TOKEN', csrfToken);
      headers.set('Accept', 'application/json');

      return headers;
    },
  }),
  endpoints: (build) => ({
    currentUser: build.query({
      query: () => `/api/current_user`
    }),
    login: build.query({
      query: () => `/api/current_user`
    }),
    signup: build.query({
      query: () => `/api/current_user`
    }),
  }),
})

export const { useCurrentUserQuery, useSignupQuery, useLoginQuery } = userApi