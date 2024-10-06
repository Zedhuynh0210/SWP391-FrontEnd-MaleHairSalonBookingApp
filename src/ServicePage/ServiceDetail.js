import { Button } from '../components/ui/button';
const listService = [
   {
      title: 'Massage lưng',
      image: 'https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo4/1.png',
   },
   {
      title: 'Massage nửa lưng',
      image: 'https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo4/2.png',
   },
   {
      title: 'Massage lưng đá',
      image: 'https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo4/3.png',
   },
   {
      title: 'Massage bụng',
      image: 'https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo4/4.png',
   },
   {
      title: 'Massage mặt',
      image: 'https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo4/5.png',
   },
   {
      title: 'Massage tóc',
      image: 'https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo4/6.png',
   },
   {
      title: 'Massage vai gáy',
      image: 'https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo4/7.png',
   },
   {
      title: 'Hút mụn',
      image: 'https://storage.30shine.com/web/v4/images/cat-goi-combo/WashCombo4/8.png',
   },
];
export default function ServiceDetail() {
   return (
      <div>
         <div className="w-[50%] my-10  mx-auto">
            <h1 className="font-bold text-[28px]">
               <span className="w-[2px] h-[8px] bg-blue"></span>
               Hair Harmony
            </h1>
            <p className="my-2">
               Try to imagine a world where you can get your hair done in the comfort of your own home.
            </p>
            <div className="grid grid-cols-4 gap-4">
               {listService.map((item, index) => (
                  <div key={index} className="flex flex-col gap-1 my-1 items-center ">
                     <img src={item.image} className="shadow-xl" alt={item.title} />
                     <p className="text-lg text-red font-semibold">{item.title}</p>
                  </div>
               ))}
            </div>
            <div className="w-full flex justify-center my-6">
               <Button className="w-[400px] bg-red hover:bg-red">BOOK NOW</Button>
            </div>
         </div>
      </div>
   );
}
