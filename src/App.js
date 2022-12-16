import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Form from './components/Form';
import ImageToShare from './components/ImageToShare';
// import Sharer from './Share';
import Login from './components/Login';
import MainPage from './components/MainPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: 'form',
    element: <Form />,
  },
  { path: 'results', element: <ImageToShare /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
