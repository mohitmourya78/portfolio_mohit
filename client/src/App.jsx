import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Content from './Components/Content';
import GiveFeedback from './Pages/GiveFeedbackk'; 

const router = createBrowserRouter([
  {
    path: '/', 
    element: (
      <div>
        <Header />
        <Content />
      </div>
    ),
  },
  {
    path: '/givefeedback',
    element: <GiveFeedback />,
  },
]); 

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
