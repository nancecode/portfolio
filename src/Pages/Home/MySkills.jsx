import data from "../../data/index.json";
import { FaReact, FaCss3Alt, FaHtml5, FaJsSquare, FaNodeJs, FaFigma } from "react-icons/fa";
import { SiMongodb, SiExpress, SiAdobexd, SiAdobecreativecloud } from "react-icons/si";

const MySkills = () => {
  return (
    <section className="skills-section" id="mySkills">
      <div className="portfolio-container">
        <h2 className="skills-section-heading">My Expertise</h2>
      </div>
      <div className="skills-section-container">
        {data.skills.map((item, index) => (
          <div key={index} className="skills-section-card">
            <div className="skills-section-img">
              <img src={item.src} alt="Skills Chain" />
            </div>
            <div className="skills-section-card-content">
              <h3 className="skills-section-title">{item.title}</h3>
              <p className="skills-section-description">{item.description}</p>
              <p className="skill-subtitle">{item.subtitle}</p>
              <div className="portfolio-icons">
                {item.icons.map((iconName, iconIndex) => {
                  switch (iconName) {
                    case "FaHtml5":
                      return <FaHtml5 key={iconIndex} />;
                       case "FaCss3Alt":
                      return <FaCss3Alt key={iconIndex} />;
                      case "FaJsSquare":
                      return <FaJsSquare key={iconIndex} />;
                       case "FaReact":
                      return <FaReact key={iconIndex} />;
                      case "FaNodeJs":
                        return <FaNodeJs key={iconIndex} />;
                        case "SiExpress":
                          return <SiExpress key={iconIndex} />;
                        case "SiMongodb":
                          return <SiMongodb key={iconIndex} />;
                          case "FaFigma":
                          return <FaFigma key={iconIndex} />;
                          case "SiAdobexd":
                            return <SiAdobexd key={iconIndex} />;
                            case "SiAdobecreativecloud":
                              return <SiAdobecreativecloud key={iconIndex} />;

                      return null;
                  }
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MySkills;
