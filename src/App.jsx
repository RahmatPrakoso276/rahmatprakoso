import styles from "./style";

import {Navbar, Hero, About, Projects, Contact, Footer } from "./components";

const App = () => 
  (
    <div className='bg-primary w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
              <Navbar/>
          </div>
        </div>
    
    <div className={`bg-primary ${styles.flexStart_nih}`}>
      <div>
          <Hero/>
      </div>
    </div>

    <div className={`bg-primary ${styles.flexCenter}`}>
      <div>
          <About/>
      </div>
    </div>

    <div className={`bg-primary ${styles.flexCenter}${styles.paddingX}`}>
      <div>
          <Projects/>
      </div>
    </div>

    <div className={`bg-primary ${styles.flexCenter}${styles.paddingX}`}>
      <div>
          <Contact/>
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX}${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
          
        
          <Footer/>

      </div>
    </div>
  </div>
  );


export default App