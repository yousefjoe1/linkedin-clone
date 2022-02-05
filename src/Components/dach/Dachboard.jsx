import React from "react";
import CenterCont from "./CenterCont.jsx/CenterCont";
import DachNav from "./DachNav/DachNav";
import LeftCont from "./LeftContent/LeftCont";
import "./dach.css";
import RightContent from "./RightContent/RightContent";

const Dachboard = () => {
  return (
    <div className="dach container-fluid">
      <DachNav />
      <div className="row">
        <div className="col-lg-2 col-md-4 col-sm-12">
          <LeftCont />
        </div>
        <div className="col-lg-7 col-md-4 col-sm-12">
          <CenterCont />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-12">
          <RightContent />
        </div>
      </div>
    </div>
  );
};

export default Dachboard;
