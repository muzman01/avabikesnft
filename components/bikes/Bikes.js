import React from "react";
import Image from "next/image";
import AOS from "aos";
import { useEffect } from "react";
import bik1 from "../../public/images/BikeImage1.png";
import bike2 from "../../public/images/Bike2.png";
import bike3 from "../../public/images/Bike3.png";
import bike4 from "../../public/images/Bike4.png";
function Bikes() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section id="bikes" className="container">
      <div className="carousel">
        <div className="bike1">
          <Image src={bik1} width={1200} height={600} data-aos="zoom-in-down" />
          <div
            className="testimonial"
            data-aos="zoom-in-left"
            data-aos-duration="1000"
          >
            <h1 className="biketitle">play2earn</h1>
            <p className="testimonial-text1">
              Motor sahipleri, motorları ile siparişleri teslim ederek token
              kazanır. Bu tokenlar ile borsalarda alım-satım yapabilir.
            </p>
          </div>
        </div>
      </div>
      <div className="carousel">
        <div className="bike1 mbbike1">
          <Image
            src={bike2}
            width={1200}
            height={600}
            data-aos="zoom-in-down"
          />
          <div
            className="testimonial"
            data-aos="zoom-in-left"
            data-aos-duration="1000"
          >
            <h1 className="biketitle1">Topluluk Odaklı</h1>
            <p className="testimonial-text2">
              Yönetim token'ın gelmesi ile birliktei holderların yönetim de söz
              sahibi olacak projenin geleceği ile ilgili kararları holderların
              verdiği oylar belirleyecek
            </p>
          </div>
        </div>
      </div>
      <div className="carousel">
        <div className="bike1 mbbike2">
          <Image
            src={bike3}
            width={1200}
            height={600}
            data-aos="zoom-in-down"
          />
          <div
            className="testimonial"
            data-aos="zoom-in-left"
            data-aos-duration="1000"
          >
            <h1 className="biketitle2">Ekstra NFT'ler</h1>
            <p className="testimonial-text3">
              Motorlarınıza Ekstra NFT'ler alarak daha kısa süredei daha fazla
              token kazanabilirsiniz. Ve bu NFT'leri 2.el pazarında alıp
              satabilirsiniz.
            </p>
          </div>
        </div>
      </div>
      <div className="carousel">
        <div className="bike1 mbbike3">
          <Image
            src={bike4}
            width={1200}
            height={600}
            data-aos="zoom-in-down"
          />
          <div
            className="testimonial"
            data-aos="zoom-in-left"
            data-aos-duration="1000"
          >
            <h1 className="biketitle3">Motor Yarışları</h1>
            <p className="testimonial-text4">
              Oyuncuların birbirleri ile yarışabileceği ve kazananların esktra
              ödüller alacağı bir rekabet sistemi. Bu heyecan verici yarışları
              kaçırmayın.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bikes;
