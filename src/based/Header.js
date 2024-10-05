import { useEffect, useState } from 'react';
import Common from './Common';
import { useLoading } from './context/LoadingContext';
import { Button } from '../components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '../components/ui/sheet';
import { Link } from 'react-router-dom';
import { MenuHeader } from './menuConfig';
import { HeaderIcon } from './icon/configIcon';
import { Color } from './color';
// import LogoPNG from '../assets/logo.png';
import { Clock8 } from 'lucide-react';
import { Headset } from 'lucide-react';
import { Mail } from 'lucide-react';
export default function Header() {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [name, setName] = useState('');

   useEffect(() => {
      const accessToken = Common.CheckToken();
      const userName = sessionStorage.getItem('name');
      if (accessToken) {
         setIsLoggedIn(true);
         setName(userName);
      } else {
         setIsLoggedIn(false);
         setName('');
      }
   }, [isLoggedIn]);

   const fullScreenHeader = () => {
      return (
         <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            {MenuHeader.map((item) => (
               <Link to={item.link} className="flex items-center gap-4 text-muted-foreground hover:text-foreground">
                  {item.icon}
                  {item.name}
               </Link>
            ))}
         </nav>
      );
   };

   return (
      <header
         style={{ zIndex: '999', height: '88px' }}
         className=" w-full z-9999 fixed flex  items-center justify-between bg-background px-4 py-3 shadow-sm sm:px-6 md:py-4"
      >
         <Link href="#" className="flex items-center gap-2 font-bold">
            <HeaderIcon.Logo fill={Color.color3} />
            <span className="text-lg sm:text-xl">Hair-salon</span>
         </Link>
         {fullScreenHeader()}
         <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden sm:inline-flex">
               Đăng ký
            </Button>
            <Button style={{ backgroundColor: '#1363DF' }} className="hidden sm:inline-flex">
               Đăng nhập
            </Button>
         </div>
      </header>
   );
}
