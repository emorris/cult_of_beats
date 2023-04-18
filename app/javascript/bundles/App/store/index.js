import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../reducers/counterSlice'
import currentUserReducer from '../reducers/currentUser'

export default configureStore({
  reducer: {
    counter: counterReducer,
    currentUser: currentUserReducer
  },
})