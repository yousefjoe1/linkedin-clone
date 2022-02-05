import React from "react";
import "./rightcontent.css";
const RightContent = () => {
  return (
    <div className="right-content-container">
      <div className="right-div">
        <div className="link">
          <img
            src="https://i0.wp.com/opportunitycell.com/wp-content/uploads/2020/11/2020.132_BAM_CA_10-free-short-courses-to-upskill_940x485.jpg?fit=940%2C485&ssl=1"
            alt=""
          />
          <div className="comp-info">
            <p className="comp-name">Free Courses Online</p>
            <p className="comp-type">Company • E-Learning</p>
            <button className="follow-btn">+ Follow</button>
          </div>
        </div>
        <div className="link">
          <img src="https://www.oberlo.com/media/1603897950-job.jpg" alt="" />
          <div className="comp-info">
            <p className="comp-name">Learn to Work</p>
            <p className="comp-type">Company • E-Learning</p>
            <button className="follow-btn">+ Follow</button>
          </div>
        </div>
        <div className="link">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQR3lXnanlfJ00EaqqoFxEpS6xP_y-Vy4yiNwQ0QMK2X9V-hISj7VeTANJqMUoIXII3m4&usqp=CAU"
            alt=""
          />
          <div className="comp-info">
            <p className="comp-name">Hiring co</p>
            <p className="comp-type">Company • Work</p>
            <button className="follow-btn">+ Follow</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightContent;
