import React from 'react';
import { RouteObject } from 'react-router-dom';
import loadable from '@loadable/component';

import usersRouter from './users-router';
import pagesRouter from './pages-router';
import dashboardRouter from './dashboard-router';

const AdminTemplate = loadable(() => import('~/templates/AdminTemplate/index'));
const FallbackTemplate = loadable(() => import('~/templates/FallbackTemplate/index'));
const NotFound = loadable(() => import('~/containers/NotFound/index'));

export const routes: RouteObject[] = [
  {
    path: '/',
    caseSensitive: true,
    element: <AdminTemplate />,
    children: [usersRouter, pagesRouter, dashboardRouter],
  },

  {
    path: '*',
    element: <FallbackTemplate />,
    children: [{ path: '*', element: <NotFound /> }],
  },
];

export default routes;
