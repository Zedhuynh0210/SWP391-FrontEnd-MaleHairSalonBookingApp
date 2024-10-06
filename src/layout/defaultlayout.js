import Header from '../based/Header';
import styled from 'styled-components';
import Common from '../based/Common';
import { useEffect } from 'react';
import { Toaster } from '../components/ui/toaster';
import Footer from '../based/Footer';
export default function DefaultLayout({ children }) {
   useEffect(() => {
      if (!Common.CheckToken()) {
         // window.location.href = "/login";
      }
   }, []);

   return (
      <div className="w-full overflow-x-hidden">
         <Header />
         <Child className="child">
            {children}
            <Toaster />
         </Child>
         <Footer />
      </div>
   );
}

const Child = styled.div`
   padding-top: 88px;
`;
