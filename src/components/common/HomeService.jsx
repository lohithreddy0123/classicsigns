import "./HomeService.css";
import { images } from "../../assets/imageUrls";

const services = [
  {
    img: images.roundsigns,
    title: "Custom Round Porcelain Signs",
    desc: "Handcrafted round porcelain signs made for durability, strong visibility, and timeless character."
  },
  {
    img: images.hor1,
    title: "Die-Cut & Specialty Signs",
    desc: "Custom die-cut porcelain signage produced in unique shapes, styles, and formats for collectors and businesses."
  },
  {
    img: images.hor11,
    title: "Premium Neon Signs",
    desc: "Large-format neon and specialty display signs created to deliver strong visual presence and lasting impact."
  }
];

const HomeService = () => {
  return (
    <section className="home-services">
      <h2 className="services-title">
        Classic Porcelain Signs Custom Sign Services
      </h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img
              src={service.img}
              alt={`${service.title} by Classic Porcelain Signs`}
              className="service-image"
              width="800"
              height="500"
              loading="lazy"
              decoding="async"
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