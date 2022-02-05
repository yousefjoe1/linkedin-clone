import React, { useRef } from "react";
import { useState } from "react";
import { FcCamera } from "react-icons/fc";
import { FcCamcorderPro } from "react-icons/fc";
import { FcKindle } from "react-icons/fc";
import { FcViewDetails } from "react-icons/fc";
import Addpost from "../Addpost/Addpost";
import Posts from "../Posts/Posts";
import "./centerstyle.css";
const CenterCont = (props) => {
  const postinput = useRef(null);
  const [posts, setPosts] = useState([]);
  const [crepost, setCrepost] = useState(false);

  // const addpost = () => {
  //   let newpost = {
  //     title: postinput.current.value,
  //     id: 1,
  //   };

  //   setPosts([...posts, newpost]);
  //   postinput.current.value = "";
  // };

  // const sendsearch = (e) => {
  //   if (e.key === "Enter") {
  //     addpost();
  //   }
  // };

  const openaddpost = () => {
    setCrepost(true);
  };

  const closemakepost = () => {
    setCrepost(false);
  };

  return (
    <div className="center-content">
      <div className="make-post">
        <div className="avatar-input">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0-r6Qm0cyrj-mhKVp7-nJ0oFvW9zzu-6PFM3H5vUZa4gbvMZsjinmi9TiJrhpMpe9Nu0&usqp=CAU"
            alt=""
          />
          <input
            placeholder="click to post"
            onClick={openaddpost}
            ref={postinput}
            type="text"
          />
        </div>
        <div className="media-adding">
          <button>
            <FcCamera /> photo
          </button>
          <button>
            <FcCamcorderPro /> video
          </button>
          <button>
            <FcKindle /> Events
          </button>
          <button>
            <FcViewDetails /> Write Article
          </button>
        </div>
      </div>
      <Posts allposts={posts} />
      {crepost && <Addpost closetxtarea={closemakepost} postopen={crepost} />}
    </div>
  );
};

export default CenterCont;
