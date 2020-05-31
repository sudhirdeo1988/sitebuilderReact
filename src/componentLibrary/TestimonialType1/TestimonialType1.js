import React from "react";
import Slider from "react-slick";
import './TestimonialType1.scss';

const TestimonialType1 = props =>{
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
        <div className="ts-testimonials type-01">
        <div className="container">
          <div className="row">
            <div className="col-12">

              <div className="ts-testimonialsBlock type-01">

                <Slider {...settings}>

                    <div className="testimonial_item">
                  <div className="item_img">
                    <img src="../images/student.jpg" alt="" />
                  </div>
                  <div className="item_info">
                    <div className="item_infoData">
                      I have studied at Swami Vivekanand Educational Institue for
                      4 years starting at my 9th standard from Foundation course.
                      All those hours spent in className studying and enjoying cannot
                      be forgotten. I had never seen such passionate teachers
                      before joining SVEI. As rightly said – SVEI means Brilliant
                      Teachers.
                    </div>
                    <div className="item_infoTitle">
                      <h4>Rohan Thakur</h4>
                      <span>JEE Advance AIR 24 , JEE Main AIR 64</span>
                    </div>
                  </div>
                </div>

                    <div className="testimonial_item">
                  <div className="item_img">
                    <img src="../images/student.jpg" alt="" />
                  </div>
                  <div className="item_info">
                    <div className="item_infoData">
                      I have studied at Swami Vivekanand Educational Institue for
                      4 years starting at my 9th standard from Foundation course.
                      All those hours spent in className studying and enjoying cannot
                      be forgotten. I had never seen such passionate teachers
                      before joining SVEI. As rightly said – SVEI means Brilliant
                      Teachers.
                    </div>
                    <div className="item_infoTitle">
                      <h4>Rohan Thakur</h4>
                      <span>JEE Advance AIR 24 , JEE Main AIR 64</span>
                    </div>
                  </div>
                </div>
                </Slider>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
}

export default TestimonialType1;