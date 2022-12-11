import styles from "../style";
import Typewriter from 'typewriter-effect';
import { discount, fotorahmat, robot, quotes } from "../assets";
// import GetStarted from "./GetStarted";
import React from 'react'

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[30px] text-[52px] text-white ">
            Halo Semua, Saya <br className="sm:block hidden" />{" "}
          </h1>
          
        </div>
        <h1 className="text-gradient font-poppins font-semibold ss:text-[58px] text-[52px] text-white ] w-full">
          Rahmat Prakoso
        </h1>
        <h1 className="font-poppins font-semibold ss:text-[48px] text-[52px] text-white  w-full">
          <Typewriter className="font-poppins font-semibold ss:text-[48px] text-[52px] text-white  w-full"
          options={{
            autoStart: true,
            loop: true,
            delay: 90,
            strings:[
              'Data Engineer',
              'Data Analyst',
              'Data Scientist'
            ],
          }}
        /> 

        </h1>
        <img src={quotes} alt="fotorahmat" className="w-10 h-100  z-[70] pt-10" />
        <p className={`${styles.paragraph}font-poppins max-w-[480px] mt-5 mb-12 pl-5`}>
        Without big data analytics, companies are blind and deaf, wandering out onto the web like deer on a freeway
        </p>
        <a href="Contact" className="text base font-poppins text-white rounded-full btn-grad btn-grad:hover p-[10px]">Hubungi Saya </a>
        
      </div>
      <div className={`flex-1 flex ${styles.flexStart} md: mx-5  my-10 relative`}>
        <img src={fotorahmat} alt="fotorahmat" className="w-50 h-50 relative z-[70] scale-[0.5] pl-11 pr-0" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
      

    </section>
  );
};

export default Hero;
