const listServices = [
   {
      icon: 'https://cdn4.iconfinder.com/data/icons/baber-shop-1/64/hair-people-person-male-boy-man-head-hair_salon-shapescissors-haircut-256.png',
      title: 'Basic Haircut',
      description: 'A simple and clean haircut to keep you looking sharp.',
   },
   {
      icon: 'https://cdn3.iconfinder.com/data/icons/spa-element-9/64/Spa-treatments-mask-skin-beauty-256.png',
      title: 'Peel off Acne',
      description: 'Effective acne treatment to clear your skin and boost your confidence.',
   },
   {
      icon: 'https://cdn2.iconfinder.com/data/icons/barber-salon-2/64/Barber_hair_styling_cosmetic_package_pomade-256.png',
      title: 'Hair styling',
      description: 'Professional hair styling to give you a fresh and trendy look.',
   },
   {
      icon: 'https://cdn3.iconfinder.com/data/icons/barbershop-jumpicon-line/32/-__beard_trimming_grooming_facial_hair_barbering_personal_care-256.png',
      title: 'Beard trimming',
      description: 'Expert beard trimming to keep your facial hair neat and stylish.',
   },
   {
      icon: 'https://cdn2.iconfinder.com/data/icons/hair-care-3/496/hair-root-treatment-dying-salon-256.png',
      title: 'Hair Dying',
      description: 'High-quality hair dyeing services to give you a vibrant new color.',
   },
   {
      icon: 'https://cdn1.iconfinder.com/data/icons/modelling-agency-3/68/HAIR_STYLIST_MALE_hair_salon_cutting_curling_fashion_news_modeling_agency-256.png',
      title: 'Hair Curling',
      description: 'Beautiful hair curling to add volume and style to your hair.',
   },
   {
      icon: 'https://cdn0.iconfinder.com/data/icons/hair-salon-1/312/barber-hairdressing-hairstylist-006-256.png',
      title: 'Hair Washing',
      description: 'Refreshing hair washing to cleanse and rejuvenate your scalp.',
   },
   {
      icon: 'https://cdn2.iconfinder.com/data/icons/skincare-solid/64/massage_skincare_facial_skin_woman_spa_self_care-256.png',
      title: 'Massage',
      description: 'Relaxing massage services to relieve stress and tension.',
   },
];

export default function Services() {
   return (
      <>
         <h1 className="w-full mx-auto text-center font-bold text-2xl my-4">HAIR HAMONY SERVICES</h1>
         <div className="mt-4 w-[80%] mx-auto  grid grid-cols-4 gap-4">
            {listServices.map((item, index) => (
               <div key={index} className="flex bg-[#cfe8ff] p-4 rounded-lg gap-4 items-center  ">
                  <img src={item.icon} alt="icon" className="w-12 h-12" />
                  <div>
                     <h2 className="text-center font-bold text-lg">{item.title}</h2>
                     <p className="text-center">{item.description}</p>
                  </div>
               </div>
            ))}
         </div>
      </>
   );
}
