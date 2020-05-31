import React from 'react';
import ComponentHeading from '../ComponentHeading/ComponentHeading';
import './CoursesType1.scss';

const CoursesType1 = props =>{
    return(
        <div className="ts-courses type-01">
          <div className="container">
    
            <ComponentHeading />
    
            <div className="row">
              <div className="col-md-4 col-sm-6 col-12">
                <div className="ts-courseBlock">
                  <div className="blockHeading">
                    Comprehensive Course - JEE (Main + Advanced) - FYJC (XI std.)
                  </div>
                  <div className="blockInfo">
                    This two-year course helps students to develop a solid
                    foundation for competitive examinations like JEE, SAT, BITSAT,
                    VITEEE etc.This two-year course helps students to develop a
                    solid foundation for competitive examinations like JEE, SAT,
                    BITSAT, VITEEE etc.
                  </div>
                </div>
              </div>
    
              <div className="col-md-4 col-sm-6 col-12">
                <div className="ts-courseBlock">
                  <div className="blockHeading">
                    Comprehensive Course - JEE (Main + Advanced) - FYJC (XI std.)
                  </div>
                  <div className="blockInfo">
                    This two-year course helps students to develop a solid
                    foundation for competitive examinations like JEE, SAT, BITSAT,
                    VITEEE etc.
                  </div>
                </div>
              </div>
    
              <div className="col-md-4 col-sm-6 col-12">
                <div className="ts-courseBlock">
                  <div className="blockHeading">
                    Comprehensive Course - JEE (Main + Advanced) - FYJC (XI std.)
                  </div>
                  <div className="blockInfo">
                    This two-year course helps students to develop a solid
                    foundation for competitive examinations like JEE, SAT, BITSAT,
                    VITEEE etc.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix text-center">
            <button className="btnPrimary__lg">See all courses</button>
          </div>
        </div>
    );
}

export default CoursesType1;