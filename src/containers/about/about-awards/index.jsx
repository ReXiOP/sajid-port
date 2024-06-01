import React from "react";
import SectionTitle from "../../../components/section-title";
import AboutData from "../../../data/about.json";
import StudyItem from "./StudyItem"; // Ensure the import path is correct

const AboutStudy = () => {
    return (
        <div className="section section-padding mt-n1 mb-n2">
            <div className="container">
                <SectionTitle
                    classOption="section-title-2"
                    title="Educational Background"
                />

                <div className="achieved-year">
                    <div
                        className="row"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                    >
                        <div className="col-lg-3">
                            <div className="year-text">
                                <p>{AboutData[0].yearOne}</p>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            {AboutData[0].educationItem &&
                                AboutData[0].educationItem
                                    .slice(0, 3)
                                    .map((single, key) => (
                                        <StudyItem key={key} data={single} />
                                    ))}
                        </div>
                    </div>
                </div>

                <div className="achieved-year">
                    <div
                        className="row"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                    >
                        <div className="col-lg-3">
                            <div className="year-text">
                                <p>{AboutData[0].yearTwo}</p>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            {AboutData[0].educationItem &&
                                AboutData[0].educationItem
                                    .slice(3, 5)
                                    .map((single, key) => (
                                        <StudyItem key={key} data={single} />
                                    ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutStudy;
