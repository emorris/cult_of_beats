import { createSlice } from '@reduxjs/toolkit'
var { nanoid } = require("nanoid");

const addId = (payload) =>{
  const id = nanoid()
  return { id, ...payload }
}

const addType = (payload, type) =>{
  return { type, ...payload }
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
        payload = addId(payload)
        payload = addType(payload, "error")
        return {payload}
      },
    },
    removeAlert: (state, action) => {
      console.log(action)
      const id  = action.payload; 
      state.value = state.value.filter(item => item.id !== id)
    }
  },
})

// Action creators are generated for each case reducer function
export const {removeAlert, addError } = alertsSlice.actions

export default alertsSlice.reducer