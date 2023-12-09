import { configureStore } from '@reduxjs/toolkit'
import pageState from './reducer/pageState'

export default configureStore({
  reducer: {
    page: pageState
  }
})
