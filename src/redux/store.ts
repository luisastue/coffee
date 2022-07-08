import { configureStore } from '@reduxjs/toolkit'
import coffeeReducer from './reducer'

const store = configureStore({
  reducer: {
    tracker: coffeeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
