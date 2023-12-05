import { useState } from "react";
import Navbar from "../components/Navbar";

function LoginPage() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Navbar toggle={toggle} setToggle={setToggle} />

      <section></section>
    </>
  );
}

export default LoginPage;
