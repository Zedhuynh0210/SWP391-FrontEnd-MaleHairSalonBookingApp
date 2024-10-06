import { MapPin } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

const listLocation = [
   {
      name: 'Ho Chi Minh City, Vietnam',
      address: 'FPT University, HCM, Vietnam',
      phone: '+1 234 567 890',
   },
   {
      name: 'Ha Noi City, Vietnam',
      address: 'FPT University, HN, Vietnam',
      phone: '+1 234 567 890',
   },
   {
      name: 'Da Nang City, Vietnam',
      address: 'FPT University, DN, Vietnam',
      phone: '+1 234 567 890',
   },
   {
      name: 'Can Tho City, Vietnam',
      address: 'FPT University, CT, Vietnam',
      phone: '+1 234 567 890',
   },
];

export default function Location() {
   return (
      <div className="grid grid-cols-[70%,30%] my-[3%]">
         <div className="flex flex-col justify-center items-center">
            <h1 className="text-[30px] font-bold mb-[2%]">Hair Hamony & Service Points</h1>
            <div className="grid grid-cols-2 gap-[50px] gap-x-[300px] ">
               {listLocation.map((item, index) => (
                  <div key={index} className="flex gap-4 items-center  ">
                     <MapPin className="size-6 stroke-red" />
                     <div>
                        <h2 className="text-center font-bold text-lg">{item.name}</h2>
                        <p>{item.address}</p>
                        <p>Phone: {item.phone}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         <div>
            <div className="p-4 border-2 rounded-xl pb-8 shadow-md space-y-6 mx-4">
               <h1 className="font-bold text-xl text-center ">REQUEST FOR SALON </h1>
               <div className="space-y-4">
                  <Input placeholder="Name" />
                  <Input placeholder="Phone" />
                  <Input placeholder="Description" />
                  <Button className="w-full bg-red hover:bg-red">Submit</Button>
               </div>
            </div>
         </div>
      </div>
   );
}
