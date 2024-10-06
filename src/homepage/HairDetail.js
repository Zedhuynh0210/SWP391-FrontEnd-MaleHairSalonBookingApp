import styled from 'styled-components';
import { Check } from 'lucide-react';

const services = [
   'Basic Haircut',
   'Peel off Acne',
   'Hair Styling',
   'Beard Trimming',
   'Hair Dying',
   'Hair Curling',
   'Hair Washing',
   'Massage',
   'Earwax',
   'Scalp Care Services',
];

export default function HairDetail() {
   return (
      <div className="grid grid-cols-[40%,60%] gap-4 w-full my-10 mx-auto">
         <div className="mr-10">
            <img
               src="https://img.freepik.com/free-photo/young-man-barbershop-trimming-hair_1303-26254.jpg?size=626&ext=jpg&ga=GA1.1.1819120589.1726704000&semt=ais_hybridhttps://img.freepik.com/free-photo/young-man-barbershop-trimming-hair_1303-26254.jpg?size=626&ext=jpg&ga=GA1.1.1819120589.1726704000&semt=ais_hybrid"
               alt="barber"
               className="w-full  object-cover"
            ></img>
         </div>
         <div className="flex flex-col justify-center">
            <h1 className="text-red font-bold text-[35px] text-center">About Us</h1>
            <h1 className="text-center font-bold text-[28px]">Male Hair Salon And Detailing</h1>
            <p className="text-muted-foreground mt-4">
               Hair Hamony is a place that provides grooming and hairstyling services specifically for men. Common
               services at a male hair salon include:{' '}
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2 items-center ">
               {services.map((service, index) => (
                  <li key={index} className="flex gap-2 ">
                     <Check className="size-6 stroke-red font-bold " />
                     <span className="font-semibold text-center">{service}</span>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
}
