import { createSlice } from '@reduxjs/toolkit'

export const currentUser = createSlice({
  name: 'currentUser',
  initialState: {
    data: null,
  },
  reducers: {
    addUserData: (state, data) => {
      console.log(data)
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.data = data
    },
    afterLogout: (state) => {
      state.data = null
    },
    test: (state, action) => {
      state.data += action.payload
    },
  },
})


export const { addUserData, afterLogout, test } = currentUser.actions

export default currentUser.reducer