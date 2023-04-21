import { configureStore } from '@reduxjs/toolkit'
import alertsReducer from '../reducers/alertsSlice'
import currentUserReducer from '../reducers/currentUser'
import { userApi } from '../reducers/currentUserApi'
export default configureStore({
  reducer: {
    alerts: alertsReducer,
    currentUser: currentUserReducer,
    [userApi.reducerPath]: userApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
})