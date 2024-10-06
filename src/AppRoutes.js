import React, { Suspense } from 'react';
import Loading from './based/Loading';

const HomePage = React.lazy(() => import('./homepage/homepage'));
const ServicePage = React.lazy(() => import('./ServicePage/ServicePage'));
const ServiceDetail = React.lazy(() => import('./ServicePage/ServiceDetail'));
const AppRoutes = [
   {
      path: '/',
      element: (
         <Suspense fallback={<Loading isOpen={true} />}>
            <HomePage />
         </Suspense>
      ),
   },
   {
      path: '/service',
      element: (
         <Suspense fallback={<Loading isOpen={true} />}>
            <ServicePage />
         </Suspense>
      ),
   },
   {
      path: '/service/:id',
      element: (
         <Suspense fallback={<Loading isOpen={true} />}>
            <ServiceDetail />
         </Suspense>
      ),
   },
];

export default AppRoutes;
