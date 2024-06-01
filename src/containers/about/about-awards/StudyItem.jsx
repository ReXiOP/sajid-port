import React from "react";
import PropTypes from "prop-types";

const StudyItem = ({ data }) => {
    return (
        <div className="study-item">
            <h4 className={data.className}>{data.degree}</h4>
            <p>
                <strong>Institution:</strong> {data.institution}
            </p>
            <p>
                <strong>Year of Passing:</strong> {data.year}
            </p>
        </div>
    );
};

StudyItem.propTypes = {
    data: PropTypes.shape({
        className: PropTypes.string,
        degree: PropTypes.string.isRequired,
        institution: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
    }).isRequired,
};

export default StudyItem;
