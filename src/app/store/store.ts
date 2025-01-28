import { configureStore, } from '@reduxjs/toolkit'
import { callsSlice } from '../../entities/Call/model/slice/CallSlice'

export const store = configureStore({
  reducer: {
    calls: callsSlice.reducer
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch