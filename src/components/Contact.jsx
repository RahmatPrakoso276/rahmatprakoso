import styles from "../style";
import React from 'react'

import { discount, fotorahmat, robot, quotes, fb,git,ig,linkedins } from "../assets";

const Contact = () => 
  <section id="Contact" className={`${styles.flexCenter} my-4`}>
    <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6 relative`}>

    <h1 className="flex-1 font-poppins font-semibold ss:text-[30px] text-[52px] text-white ">
      Contact Me
        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
    </h1>

    <div className={`${styles.flexCenter}  w-full`}>
        <div  className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
          <a href='#'><img src={git} alt="client_logo" className="sm:w-[50px] w-[50px] object-contain" /></a>
          <a href='https://www.instagram.com/rahmatp384/'><img src={ig} alt="client_logo" className="sm:w-[50px] w-[50px] object-contain" /></a>
          <a href='#'><img src={linkedins} alt="client_logo" className="sm:w-[50px] w-[50px] object-contain" /></a>

        </div>
      
    </div>
    </div>
  </section>


export default Contact