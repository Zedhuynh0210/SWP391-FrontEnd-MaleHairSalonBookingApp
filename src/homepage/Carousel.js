import { Carousel } from 'antd';

import Banner3 from '../assets/banner3.png';
export default function CarouselBanner() {
   return (
      <Carousel arrows infinite={true} autoplay autoplaySpeed={5000}>
         <div>
            <img
               src="https://cdn.prod.website-files.com/644a9d9ce529ef8812f82a28/647fb85c69e95444243ef9bd_Henley%27s%20Gentlemen%27s%20Grooming%20-%20Barbershop%20and%20Mens%20Grooming.webp"
               alt=""
               className="w-full h-[600px] object-cover"
            />
         </div>
         <div>
            <img src={Banner3} alt="" className="w-full h-[600px] object-cover" />
         </div>
         <div>
            <img
               src="https://hairsalonbarrie.ca/wp-content/uploads/2022/10/mens-salon.jpg"
               alt=""
               className="w-full h-[600px] object-cover"
            />
         </div>
      </Carousel>
   );
}
