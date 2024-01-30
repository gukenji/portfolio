import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import App from './App'
import _ from 'lodash'
import { Provider } from 'react-redux'
import store from './store'
import { StyledEngineProvider } from '@mui/material/styles'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </Provider>
  </React.StrictMode>
)
