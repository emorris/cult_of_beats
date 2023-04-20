import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../reducers/counterSlice'
import currentUserReducer from '../reducers/currentUser'
import { userApi } from '../reducers/currentUserApi'
export default configureStore({
  reducer: {
    counter: counterReducer,
    currentUser: currentUserReducer,
    [userApi.reducerPath]: userApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
})