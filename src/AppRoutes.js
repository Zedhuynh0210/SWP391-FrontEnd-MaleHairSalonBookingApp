import React, { Suspense } from 'react';
import Loading from './based/Loading';

const HomePage = React.lazy(() => import('./homepage/homepage'));

const AppRoutes = [
   {
      path: '/',
      element: (
         <Suspense fallback={<Loading isOpen={true} />}>
            <HomePage />
         </Suspense>
      ),
   },
];

export default AppRoutes;
