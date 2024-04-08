// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import '../swipet/styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';

const Swipers = () => {
  return (
    <div>
       <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>How to use?</SwiperSlide>
        <SwiperSlide>Register or Login. </SwiperSlide>
        <SwiperSlide>Redirect Dashboard</SwiperSlide>
        <SwiperSlide>Add Task</SwiperSlide>
        <SwiperSlide>Drag and Drop</SwiperSlide>
        <SwiperSlide>Edit Task</SwiperSlide>
        <SwiperSlide>Delete Task</SwiperSlide>
        <SwiperSlide>Any Questions</SwiperSlide>
        <SwiperSlide>Contact us<br/> Thank you</SwiperSlide>
      </Swiper>
  
    </div>
  )
}

export default Swipers
