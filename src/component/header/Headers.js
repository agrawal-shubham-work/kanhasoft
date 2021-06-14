import React from "react";
import "./Headers.css";
import KanhaSoftImage from "../../assets/images/kanhasoft.png";

const Headers = () => {
  return (
    <div className="mainHeaderContainer">
      <div className="companyContainer">
        <img src={KanhaSoftImage} alt="kanhasoftImage" id="kanhasoftImage" />
        <span id="companyTitle">Kanhasoft</span>
      </div>
    </div>
  );
};

export default React.memo(Headers);
