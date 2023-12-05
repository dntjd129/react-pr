import { useState } from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";

function MainPage() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Navbar toggle={toggle} setToggle={setToggle} />

      <section>
        <Carousel />
      </section>
    </>
  );
}

export default MainPage;
