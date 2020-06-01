import React from 'react';
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route } from "react-router-dom";
import PageBody from '../PageBody/PageBody';
import './HeaderType1.scss';

const HeaderType1 = (props) =>{
    const headerData = props.data.HeaderType1;
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
          {headerData.navRoutes.length && (
              <div className="ts-headNav">
              <ul>
              <Router>
                {
                  headerData.navRoutes.map(route => {
                  return (
                    <li>
                      <Link to={`/${route.routeURL}`}>{route.routeName}</Link>
                    </li>
                    );
                  })
                }
                {headerData && headerData.loginButton && (
                  <li>
                    <button className="btn btnPrimary__sm" to='#'>Login</button>
                  </li>
                )}
                
                  {
                  headerData.navRoutes.map(route => {
                    return <Route path={`/${route.routeURL}`} render={() => <PageBody />} />;
                  })}
              </Router>
              </ul>
            </div>
          )}

        </div>

      </div>
    </div>
  </div>
);
}

export default HeaderType1;