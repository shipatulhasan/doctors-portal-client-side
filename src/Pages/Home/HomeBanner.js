import React from "react";
import banner from "../../assets/images/bg.png";
import img from "../../assets/images/chair.png";
import Button from "../../components/Button";
import InfoCards from "./InfoCards/InfoCards";
const HomeBanner = () => {
  return (
    <div
      className=" bg-no-repeat bg-center bg-cover flex flex-col justify-between min-h-[500px] lg:min-h-screen"
      style={{
        backgroundImage: `url(${banner})`,
       
      }}
    >
      <div className="py-20 flex flex-col-reverse md:flex-row justify-between items-center mx-5 gap-10">
      <div className="w-full lg:w-1/2 px-5">
        <h1 className="text-4xl lg:text-5xl font-bold">
          Your New Smile Starts Here
        </h1>
        <p className="py-5">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
        <Button text={'Get started'} />
      </div>
      <div className="w-full lg:w-1/2 ">
        <img
          src={img}
          className="w-11/12 mx-auto rounded-lg "
          alt=""
        />
      </div>
      </div>

      <div className="py-10 mx-5">
        <InfoCards />
      </div>
     
    </div>
  );
};

export default HomeBanner;
