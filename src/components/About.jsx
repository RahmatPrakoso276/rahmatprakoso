import React from 'react'
import styles from "../style";
import { stats } from "../constants";

const About = () => 
    <section id="About" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6 relative`}>
        
        <h1 className="flex-1 font-poppins font-semibold ss:text-[30px] text-[52px] text-white ">
          About Me
            {/* gradient start */}
            <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
            <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
            {/* gradient end */}
        </h1>
          
        <p className={`${styles.paragraph} max-w-[800px] mt-5`}>
          Nama saya Rahmat Prakoso. lahir di Banjarbaru, Kalimantan Selatan. Saya berpengalaman dalam pemrosesan data, analisis data 
          , Query. Sekarang saya masih semester 5 di Universitas Muhammadiyah Malang dan mengambil Program Studi Teknik Informatika 
          . Saya mulai pemrogramman semenjak semester 1, dan saya sangat tertarik dengan dunia teknologi. saya juga tertarik sekali dengan
          data. Saya suka mengexplore semua yang berhubungan dengan teknologi,<br /><br />Ketika saya sedang tidak didepan layar laptop, saya
          Mendengar Music, Fitness, Trading, dan Turu
        </p>

      </div>
    </section>

export default About