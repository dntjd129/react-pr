// import { NavLink } from "react-router-dom";
import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <header>
        {/* searchbar */}
        <div className="logoBar">
          <div>
            <a>O</a>
          </div>
          <div>TheWave</div>
          <div>
            <a>Login</a>
            //
            <a>Join</a>
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

// import { NavLink } from "react-router-dom";
// import logo from "../assets/img/theWave.png";

// function Navbar({ toggle, setToggle }) {
//   const NavLink = NavLink();

//   const onClickToggleHandler = () => {
//     setToggle(!toggle);
//   };
//   return (
//     <StHeader>
//       <StNavLogo>
//         <img src={logo} alt="logo" onClick={() => NavLink("/")} />
//       </StNavLogo>

//       <StNavMenu>
//         <li onClick={() => NavLink("/")}>커뮤니티</li>
//         <li onClick={() => NavLink("/")}>회원가입 / 로그인</li>
//       </StNavMenu>

//       {toggle ? (
//         <StNavMenuNone>
//           <li onClick={() => NavLink("/")}>커뮤니티</li>
//           <li onClick={() => NavLink("/")}>회원가입 / 로그인</li>
//         </StNavMenuNone>
//       ) : null}

//       <StNavToggleBtn onClick={onClickToggleHandler}>
//         <i className="fa-solid fa-bars"></i>
//       </StNavToggleBtn>
//     </StHeader>
//   );
// }

// export default Navbar;

export default Navbar;
