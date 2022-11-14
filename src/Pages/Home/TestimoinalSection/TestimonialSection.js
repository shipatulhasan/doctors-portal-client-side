import React from "react";
import quote from "../../../assets/icons/quote.svg";
import Headline from "../../../components/Headline";
import TestimonialCard from "./TestimonialCard";
import person1 from '../../../assets/images/people1.png'
import person2 from '../../../assets/images/people2.png'
import person3 from '../../../assets/images/people3.png'



const TestimonialSection = () => {
  const headerInfo = {
    miniText: "Testimonial",
    headline: "What Our Patients Says",
  };

  const cardData = [
      {
          img:person1,
          title:'Winson Herry',
          city:'California',
          review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'

      },
      {
          img:person2,
          title:'Jesmin Bala',
          city:'California',
          review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'

      },
      {
          img:person3,
          title:'xoxo themson',
          city:'California',
          review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'

      },
  ]
  return (
    <div>
      <div className="w-full flex flex-row justify-between items-start md:items-center gap-5 px-8 lg:px-10">
        <Headline headerInfo={headerInfo} />
        <img className="w-12 md:w-28 md:ml-auto" src={quote} alt="" />
      </div>
      
    {/*  */}

    <div className="grid gap-8 md:grid-cols-3 mx-3 lg:mx-8 py-5 md:py-10">
        {
            cardData.map((data,i)=><TestimonialCard key={i} data={data} />)
        }
    </div>


    </div>
  );
};

export default TestimonialSection;
