import React from 'react';
import banner from '../../assets/images/appointment.png'
import img from '../../assets/images/doctor-small.png'
import Button from '../../components/Button';
import Headline from '../../components/Headline';

const AboutDoctor = () => {
    const headerInfo ={
        miniText:"Appointment",
        headline:"Make an appointment Today"
    }
    return (
        <div
      className=" bg-no-repeat bg-center flex flex-col justify-between "
      style={{
        backgroundImage: `url(${banner})`,
        backgroundAttachment: "cover",
      }}
    >
        <div className="flex flex-col md:flex-row justify-center items-center max-w-screen-sm px-5 md:px-0 lg:max-w-screen-lg mx-auto gap-10">
            <div className="-mt-20 hidden lg:block w-full lg:w-1/2 ">
        <img
          src={img}
          className=" w-full mx-auto"
          alt=""
        />
      </div>
      <div className="w-full py-10 lg:py-0 lg:w-1/2 text-white">
        <Headline headerInfo = {headerInfo} />
        <p className="py-5 text-sm">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
        </p>
        <Button text={'Get started'}  />
        
      </div>
      
      </div>
    </div>
    );
};

export default AboutDoctor;