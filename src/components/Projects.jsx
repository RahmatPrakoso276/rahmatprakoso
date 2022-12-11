import React from 'react'
import styles from "../style";
import { discount, fotorahmat, robot, projek1, quotes} from "../assets";

const Projects = () => 

<section id="Projects" className={`flex md:flex-row flex-col ${styles.paddingY} relative`}>
<div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>
  <h1 className="flex-1 font-poppins font-semibold ss:text-[30px] text-[52px] text-white ">
    Projects
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

  </h1>
    

  <div className="Container">
    
    <div className="w-full px-4 flex flex-wrap justify-center">
      <div className="mb-12 p-4 ">
        <div className="rounded-md shadow md overflow-hidden">
          <img src={projek1} alt="fotorahmat" className="w-full h-100 relative z-[70]" />
          
        </div>
        <h3 className='flex-1 font-poppins font-semibold ss:text-[20px] text-[30px] text-white mt-5 mb-3'>Project 1</h3>
        <p className={`${styles.paragraph}font-poppins ss:text-[18px] max-w-[480px] mt-5 mb-12`}>
        Without big data analytics, companies are blind and deaf, wandering out onto the web like deer on a freeway
        </p>
      </div>

      <div className="mb-12 p-4 ">
        <div className="rounded-md shadow md overflow-hidden">
          <img src={projek1} alt="fotorahmat" className="w-full h-100 relative z-[70] scale-[1]" />
        </div>
        <h3 className='flex-1 font-poppins font-semibold ss:text-[20px] text-[30px] text-white mt-5 mb-3'>Project 2</h3>
        <p className={`${styles.paragraph}font-poppins ss:text-[18px] max-w-[480px] mt-5 mb-12`}>
        Without big data analytics, companies are blind and deaf, wandering out onto the web like deer on a freeway
        </p>
      </div>

      <div className="mb-12 p-4 ">
        <div className="rounded-md shadow md overflow-hidden">
          <img src={projek1} alt="fotorahmat" className="w-full h-100 relative z-[70] scale-[1]" />
        </div>
        <h3 className='flex-1 font-poppins font-semibold ss:text-[20px] text-[30px] text-white mt-5 mb-3'>Project 3</h3>
        <p className={`${styles.paragraph}font-poppins ss:text-[18px] max-w-[480px] mt-5 mb-12`}>
        Without big data analytics, companies are blind and deaf, wandering out onto the web like deer on a freeway
        </p>
      </div>
      <div className="mb-12 p-4 ">
        <div className="rounded-md shadow md overflow-hidden">
          <img src={projek1} alt="fotorahmat" className="w-full h-100 relative z-[70] scale-[1]" />
        </div>
        <h3 className='flex-1 font-poppins font-semibold ss:text-[20px] text-[30px] text-white mt-5 mb-3'>Project 4</h3>
        <p className={`${styles.paragraph}font-poppins ss:text-[18px] max-w-[480px] mt-5 mb-12`}>
        Without big data analytics, companies are blind and deaf, wandering out onto the web like deer on a freeway
        </p>
      </div>
    </div>



    </div>


</div>
</section>
export default Projects