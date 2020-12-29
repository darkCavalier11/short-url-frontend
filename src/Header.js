import React from "react";
import logo from "./logo.svg";
import "./Header.css";
import axios from "axios";

function Header() {
  const getUrl = async function (e) {
    document.querySelector(".header__container").lastChild.className = "none";
    const dbURL = "https://shortc.herokuapp.com/";
    e.preventDefault();
    const button = document.querySelector(".header__button");
    const title = document.querySelector("title");
    title.textContent = "Loading...";
    button.disabled = true;
    button.textContent = "Loading...";
    try {
      const data = await axios({
        url: `${dbURL}generateUrl`,
        method: "post",
        data: {
          URL: document.querySelector(".header__input").value,
        },
      });
      console.log(data);
      console.log(data);
      title.textContent = "short-url";
      button.disabled = false;
      button.textContent = "GET URL";
      const ele = document.querySelector(".none");
      ele.className = "header__redr";
      ele.href = `${dbURL}${data.data}`;
      ele.textContent = `${dbURL}${data.data}`;
    }
    catch (err) {
      const ele = document.querySelector(".none");
      ele.className = "header__redr";
      ele.textContent = `INVALID URL :(`;
      title.textContent = "short-url";
      button.disabled = false;
      button.textContent = "GET URL";
    }
  };
  return (
    <div className="header">
      <img src={logo} className="header__logo"></img>
      <h1 className="header__legend">Smart. Simple. Elegant</h1>
      <span className="header__desc">
        A smart and simple url shortener. Just paste and go...
      </span>
      <div className="header__container">
        <input type="url" className="header__input"></input>
        <button className="header__button" onClick={getUrl}>
          GET URL
        </button>
        <a href="#" className="none">
        </a>
      </div>
    </div>
  );
}

export default Header;
