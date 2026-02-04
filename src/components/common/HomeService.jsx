import "./HomeService.css";

import hor1 from "../../assets/images/hor1.png";
import hor11 from "../../assets/images/hor11.jpg";
import roundsigns from "../../assets/images/roundsigns.jpg";

const services = [
  {
    img: roundsigns,
    title: "Custom Round Porcelain Signs",
    desc:
      "Handcrafted round porcelain signs designed for durability, clarity, and timeless appeal."
  },
  {
    img: hor1,
    title: "Die-Cut & Specialty Signs",
    desc:
      "Custom die-cut and specialty porcelain signage in a wide range of shapes and formats."
  },
  {
    img: hor11,
    title: "Neon & Spinner Signs",
    desc:
      "Large-format neon and rotating signs built to create strong visual impact."
  }
];

const HomeService = () => {
  return (
    <section className="home-services">
      <h2 className="services-title">Our Services</h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img
              src={service.img}
              alt={service.title}
              className="service-image"
            />

            <h3 className="service-heading">{service.title}</h3>
            <p className="service-desc">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeService;