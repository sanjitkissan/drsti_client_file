import { OurPartnersArrType } from '@/src/types';
import React from 'react';
type prop={
    item: OurPartnersArrType 
}
function CardPartner({item}:prop) {
    return (
        <div className='w-full h-full rounded-md   shadow-[0_1px_5px_#D30000] overflow-hidden'>
            <img src={item?.img?.src} alt="" className="w-full h-full  m-auto object-contain" />
        </div>
    );
}

export default CardPartner;