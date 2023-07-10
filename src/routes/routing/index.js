import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../../layouts';
import { NotFoundPage } from '../../pages';

const router = createBrowserRouter([
  {
    path: '/*',
    element: <MainLayout />,
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
