import { createSlice } from '@reduxjs/toolkit'

export const alertsSlice = createSlice({
  name: 'alerts',
  initialState: {
    value: [],
  },
  reducers: {
    addAlert: (state, action) => {
      console.log(action)
      // action.id = uuid()
      state.value.append(action)
    },
    removeAlert: (state) => {
      state.value -= 1
    }
  },
})

// Action creators are generated for each case reducer function
export const {removeAlert, addAlert } = alertsSlice.actions

export default alertsSlice.reducer