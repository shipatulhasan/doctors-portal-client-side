import React from 'react';
import Button from '../../components/Button'
import img from '../../assets/images/treatment.png'

const TextBlock = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center max-w-screen-sm px-5 md:px-0 lg:max-w-screen-lg mx-auto gap-10">
            <div className="w-full lg:w-1/2 ">
        <img
          src={img}
          className="w-full md:w-11/12 mx-auto rounded-lg "
          alt=""
        />
      </div>
      <div className="w-full lg:w-1/2">
        <h1 className="text-3xl lg:text-5xl lg:leading-snug font-bold">
        Exceptional Dental Care, on Your Terms
        </h1>
        <p className="py-5">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
        </p>
        <Button text={'Get started'}  />
        
      </div>
      
      </div>
    );
};

export default TextBlock;