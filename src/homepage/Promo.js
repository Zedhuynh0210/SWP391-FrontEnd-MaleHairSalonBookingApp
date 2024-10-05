import styled from 'styled-components';

const listPromo = [
   {
      title: 'Đặt lịch nhanh chóng',
      icon: 'truck',
   },
   {
      title: 'Hỗ trợ tận tình cho từng khách hàng',
      icon: 'handHelping',
   },
   {
      title: 'Hoàn tiền 200% nếu không đúng mẫu yêu cầu',
      icon: 'shieldCheck',
   },
];

const Promo = () => {
   return (
      <PromoWrapper className=" shadow-lg promo-wrapper flex bg-[#fff1f4]">
         <div className="promo-content">
            <ul className="promo-list flex space-x-10">
               {listPromo.map((item, index) => {
                  //   const Icon = Icons[item.icon];
                  return (
                     <li key={index} className="promo-item hidden items-center text-[14px] max-2xl:text-[12px] md:flex">
                        {/* <Icon className="mr-2 stroke-[#ffbf00] " strokeWidth={2} /> */}
                        <span className="font-semibold">{item.title}</span>
                     </li>
                  );
               })}
               <li className="promo-item flex items-center text-[16px] max-2xl:text-[12px] md:hidden">
                  <span className="mr-2"></span>
                  <span className="font-bold">Hoàn tiền 100% nếu không đúng mẫu thiết kế</span>
               </li>
            </ul>
         </div>
      </PromoWrapper>
   );
};

export default Promo;

const PromoWrapper = styled.div`
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 100%;
   margin: 0 auto;
   height: 48px;
   min-height: 48px;
   max-height: 48px;
`;
