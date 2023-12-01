import { NavLink } from "react-router-dom";
import logo from "../assets/img/theWave.png";

function Navbar({ toggle, setToggle }) {
  const NavLink = NavLink();

  const onClickToggleHandler = () => {
    setToggle(!toggle);
  };
  return (
    <StHeader>
      <StNavLogo>
        <img src={logo} alt="logo" onClick={() => NavLink("/")} />
      </StNavLogo>

      <StNavMenu>
        <li onClick={() => NavLink("/")}>커뮤니티</li>
        <li onClick={() => NavLink("/")}>회원가입 / 로그인</li>
      </StNavMenu>

      {toggle ? (
        <StNavMenuNone>
          <li onClick={() => NavLink("/")}>커뮤니티</li>
          <li onClick={() => NavLink("/")}>회원가입 / 로그인</li>
        </StNavMenuNone>
      ) : null}

      <StNavToggleBtn onClick={onClickToggleHandler}>
        <i className="fa-solid fa-bars"></i>
      </StNavToggleBtn>
    </StHeader>
  );
}

export default Navbar;
