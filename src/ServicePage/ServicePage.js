import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
const listServices = [
   {
      title: 'Basic Haircut',
      description: ['Best Seller', 'A simple and clean haircut to keep you looking sharp.'],
      img1: 'https://storage.30shine.com/web/v4/images/goi-massage-relax/goi-combo-2-1.jpg',
      img2: 'https://storage.30shine.com/web/v4/images/goi-massage-relax/goi-combo-2-2.jpg',
      img3: 'https://storage.30shine.com/web/v4/images/goi-massage-relax/goi-combo-2-3.jpg',
      time: '30 phút',
   },
   {
      title: 'Peel off Acne',
      description: ['Best Seller', 'A simple and clean haircut to keep you looking sharp.'],
      img1: 'https://storage.30shine.com/web/v4/images/goi-massage-relax/goi-combo-2-1.jpg',
      img2: 'https://storage.30shine.com/web/v4/images/goi-massage-relax/goi-combo-2-2.jpg',
      img3: 'https://storage.30shine.com/web/v4/images/goi-massage-relax/goi-combo-2-3.jpg',
      time: '45 phút',
   },
   {
      title: 'Hair styling',
      description: ['Best Seller', 'A simple and clean haircut to keep you looking sharp.'],
      img1: 'https://storage.30shine.com/web/v4/images/goi-massage-relax/goi-combo-2-1.jpg',
      img2: 'https://storage.30shine.com/web/v4/images/goi-massage-relax/goi-combo-2-2.jpg',
      img3: 'https://storage.30shine.com/web/v4/images/goi-massage-relax/goi-combo-2-3.jpg',
      time: '60 phút',
   },
   {
      title: 'Beard trimming',
      description: ['Best Seller', 'A simple and clean haircut to keep you looking sharp.'],
      img1: 'https://storage.30shine.com/web/v4/images/goi-massage-relax/goi-combo-2-1.jpg',
      img2: 'https://storage.30shine.com/web/v4/images/goi-massage-relax/goi-combo-2-2.jpg',
      img3: 'https://storage.30shine.com/web/v4/images/goi-massage-relax/goi-combo-2-3.jpg',
      time: '45 phút',
   },
   {
      title: 'Hair Dying',
      description: ['Best Seller', 'A simple and clean haircut to keep you looking sharp.'],
      img1: 'https://storage.30shine.com/web/v4/images/goi-massage-relax/goi-combo-2-1.jpg',
      img2: 'https://storage.30shine.com/web/v4/images/goi-massage-relax/goi-combo-2-2.jpg',
      img3: 'https://storage.30shine.com/web/v4/images/goi-massage-relax/goi-combo-2-3.jpg',
      time: '90 phút',
   },
   {
      title: 'Hair Curling',
      description: ['Best Seller', 'A simple and clean haircut to keep you looking sharp.'],
      img1: 'https://storage.30shine.com/web/v4/images/goi-massage-relax/goi-combo-2-1.jpg',
      img2: 'https://storage.30shine.com/web/v4/images/goi-massage-relax/goi-combo-2-2.jpg',
      img3: 'https://storage.30shine.com/web/v4/images/goi-massage-relax/goi-combo-2-3.jpg',
      time: '60 phút',
   },
];
export default function ServicePage() {
   return (
      <div className="bg-secondary">
         <div className="w-[60%]  mx-auto">
            <h1 className="font-bold text-[28px]">
               <span className="w-[2px] h-[8px] bg-blue"></span>
               Hair Harmony
            </h1>
            <p className="">Try to imagine a world where you can get your hair done in the comfort of your own home.</p>
            <div className="grid grid-cols-3 gap-4 mt-4">
               {listServices.map((item, index) => (
                  <div
                     key={index}
                     className="flex flex-col bg-background shadow-lg p-4 rounded-lg gap-4 items-center  "
                  >
                     <div>
                        <h2 className=" font-bold text-lg">{item.title}</h2>
                        <p className="text-muted-foreground">{item.description}</p>
                     </div>
                     <Link
                        to="/service/1"
                        className="grid grid-cols-[60%,35%] shadow-lg bg-[#cfe8ff] p-4 px-8  rounded-xl gap-2  "
                     >
                        <img src={item.img1} alt="icon" className=" h-full object-cover rounded-lg " />
                        <div className="grid grid-rows-2 gap-2">
                           <img src={item.img2} alt="icon" className="w-full h-full object-cover  rounded-lg " />
                           <img src={item.img3} alt="icon" className="w-full h-full object-cover  rounded-lg" />
                        </div>
                     </Link>
                     <div className="w-[90%] mx-auto flex justify-between items-center">
                        <Button
                           variant="outline"
                           className="w-[80px] h-[30px] rounded-xl border-2 border-red hover:bg-red2 bg-[#fff1f4]"
                        >
                           {item.time}
                        </Button>
                        <p>Tìm hiểu thêm</p>
                     </div>
                  </div>
               ))}
            </div>
            <div className="w-full flex justify-center pt-[25px] pb-[40px]">
               <Link to="/service/1">
                  <Button className="w-[400px] bg-red rounded-xl hover:bg-red">BOOK NOW</Button>
               </Link>
            </div>
         </div>
      </div>
   );
}
