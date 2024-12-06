import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import store from './store/'

import { GlobalCss } from './styles.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
