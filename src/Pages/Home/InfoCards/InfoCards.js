import React from "react";

import icon1 from '../../../assets/icons/clock.svg'
import icon2 from '../../../assets/icons/marker.svg'
import icon3 from '../../../assets/icons/phone.svg'
import InfoCard from "./InfoCard";

const InfoCards = () => {

    const cardData = [
        {
            icon:icon1,
            title:'Opening Hours',
            details:'10.00 AM - 12.00PM',
            bgColor:'bg-gradient-to-r from-secondary to-primary',

        },
        {
            icon:icon2,
            title:'Visit our location',
            details:'Brooklyn, NY 10036, United States',
            bgColor:'bg-gradient-to-r from-black to-accent',

        },
        {
            icon:icon3,
            title:'Contact us now',
            details:'+880-01819051432',
            bgColor:'bg-gradient-to-r from-secondary to-primary',

        }

    ]


  return (
    <div className="grid gap-5 md:grid-cols-3">
        {
            cardData.map((data,i)=><InfoCard key={i} data={data} />)
        }
    </div>
  );
};

export default InfoCards;
