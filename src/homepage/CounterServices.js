import CountUp from 'react-countup';
import { HeartHandshake, Star, Smile, ThumbsUp } from 'lucide-react';

const serviceData = [
   { title: 'Service Points', count: 100, icon: HeartHandshake },
   { title: 'Customer Satisfaction', count: 200, icon: Star },
   { title: 'Happy Clients', count: 300, icon: Smile },
   { title: 'Positive Reviews', count: 400, icon: ThumbsUp },
];

export default function CounterServices() {
   return (
      <div className="bg-secondary shadow-sm h-[200px] flex items-center">
         <div className="w-[80%] items-center mx-auto grid grid-cols-4">
            {serviceData.map((item, index) => (
               <div key={index} className="flex flex-col gap-4 items-center ">
                  <p className="text-2xl font-semibold">{item.title}</p>
                  <div className="flex items-center gap-2">
                     <item.icon className="stroke-red size-8" />
                     <CountUp className="font-bold text-2xl" end={item.count} /> <span className="font-bold">+</span>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}
