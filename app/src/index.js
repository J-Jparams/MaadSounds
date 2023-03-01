import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from './theme';
import {  Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
 import cartReducer from './redux/index';
 // import { setupListeners } from '@reduxjs/toolkit/dist/query';
 // import { supabaseApi } from './redux/stateApi';


const store = configureStore({
  reducer: {  cart: cartReducer },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <App />
    </ThemeProvider>
    </Provider>
  </React.StrictMode>
);


/* 
  reducer: { 
    cart: cartReducer,
  [supabaseApi.reducerPath]: supabaseApi.reducer,
  },
  middleware: (getDefault) => 
  getDefault().concat(supabaseApi.middleware),
});
setupListeners(store.dispatch);
*/