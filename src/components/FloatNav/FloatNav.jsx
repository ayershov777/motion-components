import "./floatnavb.css";

import $ from "jquery";
import React, { useEffect } from "react";
import styled from "styled-components";
import s from "../../styled";

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
        $(".face.two").removeClass("visible");
        $("body").css("background-color", $(this).css("background-color"));

        return false;
      });

      $(".whoa-button").click(function () {
        $("body").toggleClass("whoa");
        $(".face.two").toggleClass("visible");

        return false;
      });
    });
  });

  return (
    <Main>
      <input type="checkbox" id="menuCheckbox" />
      <div className="menu-container">
        <label className="menu-label" htmlFor="menuCheckbox">
          <div className="white-line" />
        </label>
        <div className="menu-thing side one">
          <s.NavLink to="/">:D</s.NavLink>
        </div>
        <div className="menu-thing side two">
          <s.NavLink to="/carousel">:D</s.NavLink>
        </div>
        <div className="menu-thing side three">n_n</div>
        <div className="menu-thing side four">:)</div>
      </div>
      <div className="whoa-button">:O</div>
    </Main>
  );
};

export default FloatNav;
