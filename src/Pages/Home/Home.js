import React from 'react';
import HomeBanner from './HomeBanner';
import ServicesSection from './ServiceSection/ServicesSection';
import TextBlock from './TextBlock';
import AppointmentSection from './AppointmentSection'
import TestimonialSection from './TestimoinalSection/TestimonialSection';
import ContactSection from './ContactSection/ContactSection'

const Home = () => {
    return (
        <div>

            <HomeBanner />
            <div className='py-8 md:py-14'>
            <ServicesSection />
            </div>
            <div className='py-10 md:py-24'>
            <TextBlock />
            </div>
            <div className='py-8 md:py-24'>
            <AppointmentSection />
            </div>
            <div className='py-10 md:py-3'>
            <TestimonialSection />
            </div>
            <div className='pt-10 md:pt-24'>
            <ContactSection />
            </div>
           
        </div>
    );
};

export default Home;