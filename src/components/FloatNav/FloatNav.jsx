import "./floatnavb.css";

import $ from "jquery";
import React, { useEffect } from "react";
import styled from "styled-components";
import s from "../../styled";
import { Link } from "react-router-dom";

const Main = styled.div`
  overflow: hidden;
  width: 100vw;
  align-items: center;
  background: #111;
  background: radial-gradient(#1a1a1a, black);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FloatNav = () => {
  useEffect(() => {
    // Colors provided by Slack

    $(document).ready(function () {
      // better body background color changing function
      $(".menu-thing").click(function () {
        $("body").removeClass("whoa");
        $("body").css("background-color", $(this).css("background-color"));

        return false;
      });

      $(".whoa-button").click(function () {
        $("body").toggleClass("whoa");

        return false;
      });
    });
  });

  /* change background */
  const handleClicked = () => {
    document.body.classList.remove("whoa");
  };

  return (
    <Main>
      <input type="checkbox" id="menuCheckbox" />
      <div className="menu-container">
        <label className="menu-label" htmlFor="menuCheckbox">
          <div className="white-line" />
        </label>
        <div className="menu-thing side one" onClick={handleClicked}>
          <s.NavLink to="/">01</s.NavLink>
          <Link to="/home" />
        </div>
        <div className="menu-thing side two" onClick={handleClicked}>
          <s.NavLink to="/carousel">02</s.NavLink>
        </div>
        <div className="menu-thing side three" onClick={handleClicked}>
          <Link to="/home">n_n</Link>
        </div>
        <div className="menu-thing side four" onClick={handleClicked}>
          : )
        </div>
      </div>
      <div className="whoa-button">:O</div>
    </Main>
  );
};

export default FloatNav;
