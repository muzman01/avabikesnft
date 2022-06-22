import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import Image from "next/image";
import NavBar from "./navbar/NavBar";
import AOS from "aos";
import { useEffect } from "react";
import LOGO from "../../public/images/LOGO.png";
import mettTheBikes from "../../public/images/Meet the bikes.png";

export default function Header() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <header>
        <nav className="container">
          <div>
            <Image src={LOGO} />
          </div>
          <div className="MINT">
            {" "}
            <button className="mint_button">MINT</button>
          </div>
          <div className="Go_To_APP">
            <button className="go_to_app_button"> Go To App</button>
          </div>
        </nav>

        <div className="header-container">
          <div className="header-container-inner">
            <h1>
              <Image src={mettTheBikes} />
            </h1>
            <p className="header_text">
              Paketlerini hızlıca teslim et,<br></br>
              <span>ödülleri toplamaya hemen başla!</span>
            </p>
            <div className="scroll">
              <p>SCROLL</p>
              <a href="#bikes" className="arrow"></a>
            </div>
          </div>
        </div>
      </header>
      {/* <section>
      <div class="container">
        <h2>Some random heading</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque quas,
          minus beatae sapiente debitis voluptatum, laudantium veritatis impedit
          corrupti officia recusandae fugit, voluptates iure velit! Ad suscipit
          vitae nobis optio. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Reiciendis sequi quam earum voluptas eum laboriosam at
          cupiditate debitis in odio adipisci repudiandae enim ea, sint quos
          similique! Debitis, facilis dolore?
        </p>
      </div>
    </section> */}
    </>
  );
}
