import React from 'react';
import Headline from '../../../components/Headline';
import img1 from '../../../assets/images/fluoride.png'
import img2 from '../../../assets/images/cavity.png'
import img3 from '../../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
    const headerInfo = {
        miniText:'our services',
        headline:'Services We Provide'
    }

    const cardData = [
        {
            img: img1,
            title:'Fluoride Treatment',
            details:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            img: img2,
            title:'Cavity Filling',
            details:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            img: img3,
            title:'Teeth Whitening',
            details:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
    ]
    return (
        <div>
            <div className='text-center py-8 md:py-20'>
              <Headline headerInfo={headerInfo} />
            </div>

            <div className="grid gap-10 md:grid-cols-3 mx-10">
        {
            cardData.map((data,i)=><ServiceCard key={i} data={data} />)
        }
    </div>
            
        </div>
    );
};

export default ServicesSection;