import data from "../../data/index.json";
import { MdOutlineArrowOutward } from "react-icons/md";

const MyPortfolio = () => {
  return (
    <section className="portfolio-section" id="MyPortfolio">
      <div className="portfolio-container-box">
        <div className="portfolio-container">
          <h1 className="skills-section-heading">My Work</h1>
        </div>
        <div>
          <button>
            <a
              href="https://github.com/nancecode"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-github"
            >
              <img src="/img/github.png" alt="GitHub" width="32" height="32" />
              Visit My GitHub
            </a>
          </button>
        </div>
      </div>
      <div className="portfolio-section-container">
        {data.portfolio.map((item, index) => (
          <div key={index} className="portfolio-section-card">
            <div className="portfolio-section-img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio-section-card-content">
              <h3 className="portfolio-section-title">{item.title}</h3>
              <div>
                <p className="portfolio-card-description">{item.description}</p>
              </div>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-link"
              >
                {item.project}
                <MdOutlineArrowOutward />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyPortfolio;
