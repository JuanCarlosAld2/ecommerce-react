import {BrowserRouter} from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context/index.jsx'
import { AppUI } from './AppUi.jsx';
import React from 'react';

const App =() => {
  return (
    <BrowserRouter>
      <ShoppingCartProvider>
        <AppUI/>
      </ShoppingCartProvider>
    </BrowserRouter>
  )
}

export default App
