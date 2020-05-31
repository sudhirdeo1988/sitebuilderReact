import React from 'react';
import './ComponentHeading.scss';

const ComponentHeading = props =>{
    return(
        <div className="ts-heading type-01">
        <div className="row">
          <div className="col-12">
            <div className="headingBlock c-1">
              <div className="mainHeading c-1">
                <span className="h_3">Courses</span>
              </div>
              <div className="subHeading">
                Swami Vivekanand Education Institute implements CleverGround
                Ecosystem in the classNameroom to ensure best learning experience
                for the students!
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ComponentHeading;