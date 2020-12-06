import "./floatnavb.css";

import $ from "jquery";
import React, { useEffect } from "react";
import styled from "styled-components";
import s from "../../styled";
import { ErrorBoundary } from "../ErrorBoundary";
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

      $(".menu-thing").click(function (e) {
        $("body").removeClass("whoa");
        $("body").css("background-color", $(this).css("background-color"));
        console.log(e);
        // return false;
      });

      $(".whoa-button").click(function () {
        $("body").toggleClass("whoa");

        // return false;
      });
    });
  });

  /* change background */
  const handleClicked = () => {
    document.body.classList.remove("whoa");
  };

  return (
    <Main>
      <ErrorBoundary>
        <input type="checkbox" id="menuCheckbox" />
        <div className="menu-container">
          <label className="menu-label" htmlFor="menuCheckbox">
            <div className="white-line" />
          </label>
          <div className="menu-thing side one">
            <s.NavLink to="/">01</s.NavLink>
          </div>
          <div className="menu-thing side two">
            <s.NavLink to="/default">02</s.NavLink>
          </div>
          <div className="menu-thing side three" />
          <div className="menu-thing side four">04</div>
        </div>
        <div className="whoa-button">:O</div>
      </ErrorBoundary>
    </Main>
  );
};

export default FloatNav;
