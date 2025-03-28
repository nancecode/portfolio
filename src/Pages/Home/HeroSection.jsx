const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("Contact");
    contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Nancy</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Designer</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            BRANDING • WEB DESIGN & DEVELOPMENT  
          </p>
        </div>
        <button className="btn btn-primary" onClick={scrollToContact}>
          GET IN TOUCH
        </button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
};

export default HeroSection;
