import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./MainPage.css";

function LoginPage() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Navbar toggle={toggle} setToggle={setToggle} />

      <section>
        <LoginForm />
      </section>

      <Footer />
    </>
  );
}

export default LoginPage;
