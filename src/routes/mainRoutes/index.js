import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomePage, NotFoundPage } from '../../pages';

const router = createBrowserRouter([
  {
    path: '/*',
    element: <HomePage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
