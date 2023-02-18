import React from 'react';
import ReactDOM from 'react-dom/client';
 import App from './App';
 import Beats from './pages/Beats';
import{
   createBrowserRouter, 
  RouterProvider,
 } from 'react-router-dom';

const router = createBrowserRouter([
{
    path: "/",
    element:  <App />,
  },
  {
    path: "/beats",
    element: <Beats />,
  },
]);





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

