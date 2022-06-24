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
      <header id="home">
        <nav className="container">
          <div>
            <Image src={LOGO} />
          </div>
          <div className="MINT">
            {" "}
            <span className="mint_button">
              <button>MINT</button>
            </span>
          </div>
          <div className="Go_To_APP">
            <span className="go_to_app_button">
              <button> Go To APP</button>
            </span>
          </div>
        </nav>

        <div className="header-container">
          <div className="header-container-inner">
            <h1>
              <Image src={mettTheBikes} data-aos="fade-down" />
            </h1>
            <p className="header_text">
              Paketlerini hızlıca teslim et,<br></br>
              <span>ödülleri toplamaya hemen başla!</span>
            </p>
            <a href="#bike" style={{ textDecoration: "none",color:"white" }}>
              <div className="scroll">
                <p>SCROLL</p>
                <div className="down-arrow"></div>
              </div>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
