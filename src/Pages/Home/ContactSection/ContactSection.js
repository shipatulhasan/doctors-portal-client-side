import React from 'react';
import Headline from '../../../components/Headline';
import banner from '../../../assets/images/appointment.png'
import ContactForm from './ContactForm';

const ContactSection = () => {
  
  const headerInfo = {
    miniText:'Contact Us',
    headline:'Stay connected with us'
}
    return (
        <div className=" bg-no-repeat bg-center  "
        style={{
          backgroundImage: `url(${banner})`,
          backgroundAttachment: "cover",
        }}>
          
  <div className="w-2/3 mx-auto py-20 space-y-6">
    <div className="text-center text-white py-5">
      <Headline headerInfo={headerInfo} />
    </div>
    <div className="card md:mx-20 shadow-2xl">
      <ContactForm />
    </div>
  </div>
</div>
            
        
    );
};

export default ContactSection;