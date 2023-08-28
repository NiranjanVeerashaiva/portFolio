import './portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { themeContext } from "../../Context";
import { useContext } from "react";

import stopwatch from '../../img/stopwatch.png'
const Portfolio = () => {
   const theme = useContext(themeContext)
   const darkMode = theme.state.darkMode
   return (
      <div className="portfolio" id='Portfolio'>

         {/* heading */}
         <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
         <span>Portfolio</span>

         {/* slider */}
         <Swiper
            spaceBetween={30}
            slidesPerView={2}
            grabCursor={true}
            className='portfolio-slider'
         >

            <SwiperSlide>
               <a href="https://primeclone.onrender.com/" target='_blank'><img src="https://www.91-cdn.com/hub/wp-content/uploads/2021/06/Amazon-Prime-video-plans.jpg" alt="" /></a>
            </SwiperSlide>

            <SwiperSlide>
               <a href="https://niranjanveerashaiva.github.io/stopwatch/" target='_blank'> <img src={stopwatch} alt="" /> </a>
            </SwiperSlide>
         </Swiper>
      </div>
   );
}

export default Portfolio;