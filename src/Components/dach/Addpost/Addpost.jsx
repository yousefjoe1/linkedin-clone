import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { ADDPOST } from "../../../redux/actions/type";
import "./addpost.css";

const Addpost = (props) => {
  const dispatch = useDispatch();
  const txtarea = useRef();

  useEffect(() => {
    if (props.postopen) {
      txtarea.current.focus();
    }
  });

  const addthepost = () => {
    dispatch({ type: ADDPOST, post: txtarea.current.value });
  };

  return (
    <div className="addpost-container">
      <div className="addpost-div">
        <div className="title-btn">
          <p>Create a Post</p>
          <button onClick={props.closetxtarea} className="close-btn">
            X
          </button>
        </div>
        <div className="author">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0-r6Qm0cyrj-mhKVp7-nJ0oFvW9zzu-6PFM3H5vUZa4gbvMZsjinmi9TiJrhpMpe9Nu0&usqp=CAU"
            alt=""
          />
          <p className="name">Youssef Mahmoud</p>
        </div>
        <div className="post-text">
          <textarea ref={txtarea} name="" id="" cols="30" rows="10"></textarea>
        </div>
        <button onClick={addthepost} className="post-btn">
          Post
        </button>
      </div>
    </div>
  );
};

export default Addpost;
