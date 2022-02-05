import React from "react";
import "./leftcontent.css";
const LeftCont = () => {
  return (
    <div className="left-content-container">
      <div className="small-info">
        <img
          src="https://www.mrdesigner.pt/stuleeng/2018/08/o-que-e-o-front-end-e-qual-a-sua-funcao.jpg"
          alt=""
        />
        <div className="info">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0-r6Qm0cyrj-mhKVp7-nJ0oFvW9zzu-6PFM3H5vUZa4gbvMZsjinmi9TiJrhpMpe9Nu0&usqp=CAU"
            alt=""
          />
          <h5>Youssef Mahmoud</h5>
          <p>MyEamil@gamil.com</p>
        </div>
        <p>
          Who viewed your account <span>33</span>
        </p>
        <p>
          Views of your post <span>43</span>
        </p>
      </div>
    </div>
  );
};

export default LeftCont;
