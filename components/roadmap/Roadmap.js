import React from 'react'
import Image from "next/image";
import bik1 from "../../public/images/BikeImage1.png";
import bike2 from "../../public/images/Bike2.png";
import bike3 from "../../public/images/Bike3.png";
import bike4 from "../../public/images/Bike4.png";
function Roadmap() {
  return (
    <section>
        <h1>ROAD MAP</h1>
    <div className="carousel">
      <div className="bike1">
        <Image src={bik1} width={1200} height={600} />
        <div className="testimonial">
          <p className="testimonial-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            nesciunt aliquid ex atque quibusdam. Rerum officia unde suscipit
            quo sunt hic illo fugit.
          </p>
        </div>
      </div>
    </div>
    <div className="carousel">
      <div className="bike1">
        <Image src={bike2} width={1200} height={600} />
        <div className="testimonial">
          <p className="testimonial-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            nesciunt aliquid ex atque quibusdam. Rerum officia unde suscipit
            quo sunt hic illo fugit.
          </p>
        </div>
      </div>
    </div>
    <div className="carousel">
      <div className="bike1">
        <Image src={bike3} width={1200} height={600} />
        <div className="testimonial">
          <p className="testimonial-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            nesciunt aliquid ex atque quibusdam. Rerum officia unde suscipit
            quo sunt hic illo fugit.
          </p>
        </div>
      </div>
    </div>
    <div className="carousel">
      <div className="bike1">
        <Image src={bike4} width={1200} height={600} />
        <div className="testimonial">
          <p className="testimonial-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            nesciunt aliquid ex atque quibusdam. Rerum officia unde suscipit
            quo sunt hic illo fugit.
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Roadmap