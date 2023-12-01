import { useState } from "react";
import Navbar from "../components/Navbar";

function MainPage() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Navbar toggle={toggle} setToggle={setToggle} />
    </>
  );
}

export default MainPage;
