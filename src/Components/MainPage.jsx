import React, { useState } from "react";
import axios from "axios";
import "../css/page.css";

function MainPage() {
  const [data, setData] = useState([]);

  async function getData() {
    let response = await axios.get(` https://reqres.in/api/users?page=1`);
    setData([...response.data.data]);
  }

  return (
    <>
      <header className="header-container">
        <img
          src="https://www.merakilearn.org/static/media/meraki.dd9c8e09.svg"
          alt="Miraki Logo"
        />
        <nav>
          <ul>
            <li>
              <a href="">lorem</a>
            </li>
            <li>
              <a href="">Ipsum</a>
            </li>
            <li>
              <a href="">Doir</a>
            </li>
            <li>
              <a href="">Jenie</a>
            </li>
          </ul>
          <div className="btns-header">
            <button id="btn-get-data" onClick={getData}>
              Get Users
            </button>
          </div>
        </nav>
      </header>

      <div className="body-container">
        {data.length >= 1 ? (
          data.map((item) => {
            return (
              <>
                <div key={item.avatar} className="client-profile">
                  <img src={item.avatar} alt="" />
                  <h1>
                    Name:{" "}
                    <span className="blue">
                      {item.first_name} {item.last_name}
                    </span>
                  </h1>
                  <h1>
                    email: <span className="red">{item.email} </span>
                  </h1>
                </div>
              </>
            );
          })
        ) : (
          <img
            id="loader-img"
            src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
            alt="loader"
          />
        )}
      </div>
    </>
  );
}

export default MainPage;
