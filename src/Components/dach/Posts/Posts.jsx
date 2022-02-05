import React from "react";
import "./post.css";
import { useSelector } from "react-redux";
import { FcCheckmark } from "react-icons/fc";
import { FcExternal } from "react-icons/fc";
import { FcFeedback } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
const Posts = (props) => {
  const allposts = useSelector((state) => state.posts);
  console.log(allposts);
  return (
    <div className="posts-container">
      {allposts &&
        allposts.map((post) => (
          <div key={post} className="single-post">
            <div className="img-name">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0-r6Qm0cyrj-mhKVp7-nJ0oFvW9zzu-6PFM3H5vUZa4gbvMZsjinmi9TiJrhpMpe9Nu0&usqp=CAU"
                alt=""
              />
              <p className="name"> Youssef Mahmoud</p>
            </div>
            <p>{post} </p>
            <div className="actions">
              <button>
                <FcCheckmark /> Like
              </button>
              <button>
                <FcAbout /> comment
              </button>
              <button>
                <FcExternal /> share
              </button>
              <button>
                <FcFeedback /> send
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Posts;
