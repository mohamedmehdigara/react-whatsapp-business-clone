import React, {useRef} from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Splide, SplideSlide } from "@splidejs/react-splide";


const ChatWindow = () => {
    const mainOptions = {
        type: "loop",
        perPage: 1,
        perMove: 1,
        gap: "1rem",
        pagination: false,
        height: "27.8125rem",
      };
      const mainRef = useRef(null);

  return (
    <div>
      <Carousel>
        
        <Splide options={mainOptions} ref={mainRef} style={{}}>
            <SplideSlide>
          <img src="image1.jpg" alt="Image 1" />
          </SplideSlide>
          
        
          <SplideSlide>

          <img src="image2.jpg" alt="Image 2" />
          
        </SplideSlide>
        <SplideSlide>
          <img src="image3.jpg" alt="Image 3" />
          </SplideSlide>
        </Splide>
      </Carousel>
    </div>
  );
};

export default ChatWindow;
