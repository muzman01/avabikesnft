import React from "react";
import Image from "next/image";
import dc from "../../public/images/discord.png";
import tw from "../../public/images/tw.png";
import tl from "../../public/images/tl.png";
import yt from "../../public/images/yt.png";
import log from "../../public/images/ftlogo.png";
import AOS from "aos";
import { useEffect } from "react";
function Footer() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <section>
      <div className="d-flex justify-content-around mt-5">
        <div className="faqlink" data-aos="fade-right">
          <h1 className="faq">FAQ</h1>
          <Image src={tw} height={40} width={40} />
          <Image src={dc} height={40} width={40} />
          <Image src={tl} height={40} width={40} />
          <Image src={yt} height={40} width={40} />
        </div>

        <div className="Go_To_APP" data-aos="fade-left">
          <a href="#home"><Image src={log} /></a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
