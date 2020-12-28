import React from "react";
import logo from "./logo.svg";
import "./Header.css";
import axios from "axios";

function Header() {
  const getUrl = async function (e) {
    e.preventDefault();
    const data = await axios({
      url: "http://localhost:3001/generateUrl",
      method: "post",
      data: {
        URL: document.querySelector(".header__input").value,
      },
    });
    const ele = document.querySelector('.none');
    ele.className = "header__redr";
    ele.href = `http://localhost:3001/${data.data}`
    ele.textContent = `http://localhost:3001/${data.data}`;
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
        <button className="header__button" onClick={getUrl}>GET URL</button>
        <a href="#" className="none">hello</a>
      </div>
    </div>
  );
}

export default Header;
