import { useEffect, useState } from 'react';
import Common from './Common';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { MenuHeader } from './menuConfig';
import LogoPNG from '../assets/logo.png';
import { Clock8 } from 'lucide-react';
import { Headset } from 'lucide-react';
import { Mail } from 'lucide-react';
export default function Header() {
   const fullScreenHeader = () => {
      return (
         <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            {MenuHeader.map((item) => (
               <Link
                  to={item.link}
                  className="group relative flex items-center gap-4 text-black transition-colors duration-300 ease-in-out hover:text-red"
               >
                  {item.name}
                  <span className="absolute bottom-[-5px] left-1/2 h-[2px] w-0 bg-red transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"></span>
               </Link>
            ))}
         </nav>
      );
   };

   return (
      <header
         style={{ zIndex: '999', height: '88px' }}
         className=" w-full z-9999 fixed flex  items-center justify-between bg-background px-4 py-3 shadow-sm  sm:px-6 md:py-4"
      >
         <Link href="#" className="flex items-center gap-2 font-bold">
            <img src={LogoPNG} alt="logo" className="object-contain w-20 h-20" />
         </Link>
         {fullScreenHeader()}
         <div className="flex gap-10">
            <div className="flex items-center gap-2">
               <Clock8 className="size-6 stroke-red" />
               <div className="flex justify-center flex-col items-center">
                  <p className="text-sm font-medium text-red">Opening Hour</p>
                  <p className="text-[13px]">Mon - Fri: 9:00 - 18:00</p>
               </div>
            </div>
            <div className="flex items-center gap-2">
               <Headset className="size-6 stroke-blue" />
               <div className="flex justify-center flex-col items-center">
                  <p className="text-sm font-medium text-blue">Call Us</p>
                  <p className="text-[13px]">+1 234 567 890</p>
               </div>
            </div>
            <div className="flex items-center gap-2">
               <Mail className="size-6 stroke-orange" />
               <div className="flex justify-center flex-col items-center">
                  <p className="text-sm font-medium text-orange">Mail Us</p>
                  <p className="text-[13px]">abc@gmail.com</p>
               </div>
            </div>
         </div>
         <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden sm:inline-flex">
               Đăng ký
            </Button>
            <Button className="hidden bg-red sm:inline-flex hover:bg-red">Đăng nhập</Button>
         </div>
      </header>
   );
}
