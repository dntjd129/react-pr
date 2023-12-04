import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <header>
        {/* searchbar */}
        <div>
          <div>
            <a>Login</a>
            <a>Join</a>
          </div>
          <div>
            <ul>
              <li></li>
              <li></li>
              <li>
                <img></img>
                <input type="text"></input>
              </li>
              <li></li>
            </ul>
          </div>
        </div>

        {/* navbar */}
        <nav>
          <ul>
            <li>
              <a href="#">All Products</a>
            </li>
            <li>
              <a href="#">Best</a>
            </li>
            <li>
              <a href="#">커스텀 풍선</a>
            </li>
            <li>
              <a href="#">브라이덜 샤워</a>
            </li>
            <li>
              <a href="#">생화</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
