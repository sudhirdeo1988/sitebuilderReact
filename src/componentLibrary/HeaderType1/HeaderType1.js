import React from 'react';
import { Link } from 'react-router-dom'
import './HeaderType1.scss';

const HeaderType1 = (props) =>{
    console.log(props.HeaderType1);
return(
    <div className="ts-header ts-header-01">
    <div className="container">
      <div className="row align-items-center">

        <div className="col-md-5 col-sm-12">
          <div className="ts-headLogo">
            <div className="ts-headerDiv__forMobile">
              <div className="ts-headLogo_img"></div>
              <div className="ts-headLogo_title">
                <span className="Logo_title main">Use gzip compression for transferring compressable</span>
                <span className="Logo_title sub">Be prepared to achieve</span>
              </div>
            </div>
            <div className="ts-navMobile">
              <button className="btn btnPrimary__menu">
                <i className="icon ts-bars"></i>
              </button>
            </div>
          </div>
        </div>



        <div className="col-md-7 col-sm-12 ts-mobileMenu">
          <div className="closePopover">
            <button></button>
          </div>
          <div className="ts-headNav">
            <ul>
              <li><Link to="#">Home</Link></li>
              <li><Link to="#">About Us</Link></li>
              <li><Link to="#">Courses</Link></li>
              <li><Link to="#">Centers</Link></li>
              <li><Link to="#">Contact Us</Link></li>
              <li>
                <button className="btn btnPrimary__sm">Login</button>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </div>
);
}

export default HeaderType1;