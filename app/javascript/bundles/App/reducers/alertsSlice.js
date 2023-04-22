import { createSlice } from '@reduxjs/toolkit'
var { nanoid } = require("nanoid");

const addId = (payload) =>{
  const id = nanoid()
  return { payload: { id, ...payload } }
}

const addType = (payload, type) =>{
  return { payload: { type, ...payload } }
}

export const alertsSlice = createSlice({
  name: 'alerts',
  initialState: {
    value: [],
  },
  reducers: {
    addError: {
      reducer: (state, action) => {
        console.log(action)
        state.value.push(action.payload)
      },
      prepare: (payload) => {
        payload = addId(payload)
        payload = addType(payload, "error")
        return addType
      },
    },
    removeAlert: (state) => {
      state.value -= 1
    }
  },
})

// Action creators are generated for each case reducer function
export const {removeAlert, addError } = alertsSlice.actions

export default alertsSlice.reducer