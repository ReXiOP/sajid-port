const Footer = () => {
    return (
        <div className="section bg-dark">
            <div className="container">
                <div className="footer-info-box text-center">
                    <h4 className="title">Let’s work together</h4>
                    <h2 className="mail">
                        <a href="mailto:dev.sajid09@gmail.com">
                            dev.sajid09@gmail.com
                        </a>
                    </h2>
                </div>

                <div className="footer-copyright-social">
                    <div className="footer-copyright">
                        <p>
                            &copy; 2024 <span> Muhammad Sajid</span> Made with{" "}
                            <i className="icofont-heart" aria-hidden="true"></i>{" "}
                        </p>
                    </div>
                    <div className="footer-social">
                        <ul className="social">
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
                </div>
            </div>
        </div>
    );
};

export default Footer;
