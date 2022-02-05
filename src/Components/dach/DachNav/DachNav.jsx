import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./dachNav.css";
import { FcHome } from "react-icons/fc";
import { FcConferenceCall } from "react-icons/fc";
import { FcAdvertising } from "react-icons/fc";
import { FcBusiness } from "react-icons/fc";
import { FcBriefcase } from "react-icons/fc";
import { FcMenu } from "react-icons/fc";
import { AiOutlineSearch } from "react-icons/ai";
import { FcSms } from "react-icons/fc";
import { FcSpeaker } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import Searchhistory from "../searchhistory/Searchhistory";
import { useDispatch } from "react-redux";
import { SEARCH } from "../../../redux/actions/type";
const DachNav = () => {
  const inputsearch = useRef(null);
  const rightnav = useRef(null);
  const headerm = useRef(null);
  const iconsearch = useRef(null);
  const searchdiv = useRef(null);
  const [searchdrop, setSearchdrop] = useState(false);
  const [ismenuopen, setIsmenuopen] = useState(false);

  // window.onscroll = () => {
  //   if (window.pageYOffset > 30) {
  //     headerm.current.classList.add("fixed-header");
  //   } else {
  //     headerm.current.classList.remove("fixed-header");
  //   }
  // };

  const showbackdrop = () => {
    setSearchdrop(true);
    rightnav.current.style.display = "none";
    inputsearch.current.classList.add("full-width-search");
    searchdiv.current.classList.add("search-div-full");
    if (searchdrop) {
      searchdiv.current.classList.remove("show-search-only");
    }
  };

  const hidebckdrop = () => {
    setSearchdrop(!searchdrop);
    inputsearch.current.classList.remove("full-width-search");
    rightnav.current.style.display = "flex";
    if (window.innerWidth < 519) {
    }
    searchdiv.current.classList.remove("show-search-only");
    if (window.innerWidth < 360) {
      inputsearch.current.style.display = "none";
    }
  };

  const showsearch = () => {
    rightnav.current.style.display = "none";
    setSearchdrop(true);
    inputsearch.current.classList.add("show-search");
    inputsearch.current.classList.add("full-width-search");
    inputsearch.current.style.display = "block";

    if (window.innerWidth < 519) {
      searchdiv.current.classList.add("show-search-only");
    }
    inputsearch.current.focus();
  };

  const showMenu = () => {
    if (ismenuopen) {
      rightnav.current.classList.remove("menu-active");
      setIsmenuopen(false);
    } else {
      rightnav.current.classList.add("menu-active");
      setIsmenuopen(true);
    }
  };

  window.onresize = () => {
    if (window.innerWidth < 880) {
      inputsearch.current.style.display = "none";
      rightnav.current.style.display = "flex";
    } else {
      inputsearch.current.style.display = "block";
      rightnav.current.style.display = "flex";
    }
  };

  const dispatch = useDispatch();

  const sendsearch = (e) => {
    if (e.key === "Enter") {
      dispatch({ type: SEARCH, searchtext: inputsearch.current.value });
      inputsearch.current.value = "";
    }
  };

  return (
    <header className="dach-header container-fluid">
      {searchdrop && <div onClick={hidebckdrop} className="cover-page"></div>}
      <nav className="dach-navbar">
        <div ref={searchdiv} className="leftside-nav">
          <Link to={"/"}>
            <img
              src="https://neilpatel.com/wp-content/uploads/2017/05/LinkedIn.jpg"
              alt=""
            />
          </Link>
          <button ref={iconsearch} className="search-btn" onClick={showsearch}>
            <AiOutlineSearch />
          </button>
          <input
            className="hide-input"
            onClick={showbackdrop}
            onKeyDown={(e) => sendsearch(e)}
            ref={inputsearch}
            type="search"
            placeholder="search for jab,skills,companies..."
          />
          {searchdrop && <Searchhistory searchdrop={searchdrop} />}
        </div>
        <button onClick={showMenu} className="show-menu">
          <FcMenu />
        </button>

        <ul ref={rightnav} className="rightside-nav">
          <li className="text-center">
            <Link to="/">
              <FcHome className="icons " />
              Home
            </Link>
          </li>
          <li>
            <Link to="/">
              <FcConferenceCall className="icons " />
              MyNetWork
            </Link>
          </li>
          <li>
            <Link to="/">
              <FcBriefcase className="icons  " />
              Jobs
            </Link>
          </li>
          <li>
            <Link to="/">
              <FcSms className=" icons  " />
              Messaging
            </Link>
          </li>
          <li>
            <Link to="/">
              <FcSpeaker className=" icons  " />
              Notifications
            </Link>
          </li>
          <li>
            <Link to="/">
              <FcBusinessman className="icons" />
              Me
            </Link>
          </li>
          <div className="work-job-div">
            <button>
              <FcBusiness className="icons" /> <span>work</span>
            </button>
            <Link to={"/sign"}>
              <span>
                <FcAdvertising className="icons" />
              </span>
              post a Job
            </Link>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default DachNav;
