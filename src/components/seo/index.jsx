import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title }) => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta
                name="robots"
                content="index, follow,Sajid,Muhammad,Muhammad Sajid, Kapasia, Gazipur, CSE"
            />
            <meta
                name="description"
                content="Muhammad Sajid is a Programmer based in Kapasia, Gazipur. He specializes in Computer Science and Engineering (CSE) and is also an ethical hacker." // Updated description content
            />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
        </Helmet>
    );
};

SEO.propTypes = {
    title: PropTypes.string.isRequired,
};

export default SEO;
