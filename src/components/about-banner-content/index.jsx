import { Link } from "react-router-dom";
import PropsTypes from "prop-types";
import SectionTitle from "../section-title";

const AboutBannerContent = ({ data }) => {
    return (
        <div className="about-banner-content">
            <h1
                className="banner-title"
                data-aos="fade-up"
                dangerouslySetInnerHTML={{
                    __html: data.title,
                }}
            ></h1>

            <div
                className="banner-social"
                data-aos="fade-up"
                data-aos-duration="600"
            >
                <p>{data.excerpt}</p>
                <ul>
                    <li>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            className="twitter"
                            href="https://x.com/sajid59602831"
                        >
                            Twitter
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            className="behance"
                            href="https://t.me/sajidrds"
                        >
                            Telegram
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            className="dribbble"
                            href="https://api.whatsapp.com/send/?phone=%2B8801926251425&text=Hello+Sajid/"
                        >
                            Whatsapp
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            className="github"
                            href="https://github.com/ReXiOP"
                        >
                            Github
                        </a>
                    </li>
                </ul>
            </div>

            <div
                className="banner-service"
                data-aos="fade-up"
                data-aos-duration="900"
            >
                <SectionTitle classOption="section-title-2" title="Service" />
                <h4 className="service-text">
                    <span>
                        Frontend Developer, Cyber Security Specialist &amp;{" "}
                        <br /> Programmer
                    </span>
                </h4>
            </div>
        </div>
    );
};

AboutBannerContent.propTypes = {
    data: PropsTypes.object,
};

export default AboutBannerContent;
