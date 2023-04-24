import { createSlice } from '@reduxjs/toolkit'
var { nanoid } = require("nanoid");



const processAlert = (msg, type) => {
  const id = nanoid()
  return {payload: { type, id, msg } }
}

export const alertsSlice = createSlice({
  name: 'alerts',
  initialState: {
    value: [],
  },
  reducers: {
    addError: {
      reducer: (state, action) => {
        state.value.push(action.payload)
      },
      prepare: (payload) => {
        return processAlert(payload, "error")
      },
    },
    addInfo: {
      reducer: (state, action) => {
        state.value.push(action.payload)
      },
      prepare: (payload) => {
        return processAlert(payload, "info")
      },
    },
    addSuccess: {
      reducer: (state, action) => {
        state.value.push(action.payload)
      },
      prepare: (payload) => {
        return processAlert(payload, "success")
      },
    },
    addWarning: {
      reducer: (state, action) => {
        state.value.push(action.payload)
      },
      prepare: (payload) => {
        return processAlert(payload, "warning")
      },
    },
    removeAlert: (state, action) => {
      const id  = action.payload; 
      state.value = state.value.filter(item => item.id !== id)
    }
  },
})

// Action creators are generated for each case reducer function
export const {
  removeAlert, 
  addError,
  addInfo,
  addSuccess,
  addWarning
} = alertsSlice.actions

export default alertsSlice.reducer