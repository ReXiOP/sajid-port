import React from "react";
import AboutBannerContent from "../../../components/about-banner-content";
import SocialIcon from "../../../components/social-icon";
import AboutData from "../../../data/about.json";

const AboutBannerContainer = () => {
    return (
        <div className="section about-banner-section overflow-hidden">
            <div className="about-banner d-flex align-items-center">
                <div className="container">
                    <AboutBannerContent data={AboutData[1]} />
                </div>

                <div className="about-banner-image">
                    <img
                        src="/images/about.jpg"
                        alt="sajid"
                        style={{ width: "70%", height: "60%" }}
                    />
                </div>
            </div>

            <ul className="social">
                <li>
                    <SocialIcon
                        path="https://x.com/sajid59602831"
                        icon="fab fa-twitter"
                    />
                </li>
                <li>
                    <SocialIcon
                        path="https://www.facebook.com/saijdkapasia/"
                        icon="fab fa-facebook-f"
                    />
                </li>
                <li>
                    <SocialIcon
                        path="https://github.com/ReXiOP"
                        icon="fab fa-github"
                    />
                </li>
                <li>
                    <SocialIcon
                        path="https://www.linkedin.com/in/sa-jid-3baa58240/"
                        icon="fab fa-linkedin-f"
                    />
                </li>
            </ul>
        </div>
    );
};

export default AboutBannerContainer;
