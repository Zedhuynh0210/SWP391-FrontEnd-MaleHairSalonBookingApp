import Promo from './Promo';
import CarouselBanner from './Carousel';
import Location from './Location';
import CounterServices from './CounterServices';
import Services from './Services';
import HairDetail from './HairDetail';
export default function HomePage() {
   return (
      <>
         <Promo />
         <CarouselBanner />
         <Location />
         <CounterServices />
         <Services />
         <HairDetail />
      </>
   );
}
