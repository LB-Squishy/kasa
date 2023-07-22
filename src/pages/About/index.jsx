import aboutData from "../../data/about.json";
import "./style.scss";
import Banner from "../../components/Banner";
import AboutBanner from "../../assets/about-banner.png";
import Collapse from "../../components/Collapse";

function About() {
    return (
        <div>
            <Banner image={AboutBanner} texte="" />
            <div className="collapse-container">
                {aboutData.map((info) => (
                    <Collapse
                        key={info.id}
                        title={info.title}
                        description={info.description}
                    />
                ))}
            </div>
        </div>
    );
}

export default About;
