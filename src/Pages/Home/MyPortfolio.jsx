import data from "../../data/index.json";

const MyPortfolio = () => {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h1 className="skills--section--heading">My Work</h1>
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
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="portfolio--card--description">
                  {item.description}
                </p>
              </div>
              <p className="portfolio--link">
                {item.link}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyPortfolio;
