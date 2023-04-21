import { createSlice } from '@reduxjs/toolkit'

export const currentUser = createSlice({
  name: 'currentUser',
  initialState: {
    data: null,
  },
  reducers: {
    addUserData: (state, data) => {
      state.data = data
    }
  },
})


export const { addUserData, afterLogout, test } = currentUser.actions

export default currentUser.reducer