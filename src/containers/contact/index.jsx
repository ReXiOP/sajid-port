import ContactForm from "../../components/contact-form";

const ContactContainer = () => {
    return (
        <div className="section contact-section bg-dark">
            <div
                className="contact-bg"
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/20943984.jpg)`,
                }}
            ></div>

            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-lg-7">
                        <div className="contact-section-wrapper">
                            <div className="contact-info" data-aos="fade-up">
                                <span className="mail">
                                    <a href="mailto:dev.sajid09@gmail.com">
                                        dev.sajid09@gmail.com
                                    </a>
                                </span>
                                <span className="number">
                                    <a href="tel:+8801605688548">
                                        (+880) 160 5688 548
                                    </a>
                                </span>
                            </div>

                            <div
                                className="contact-form"
                                data-aos="fade-up"
                                data-aos-duration="600"
                            >
                                <ContactForm />
                            </div>

                            <div
                                className="contact-social"
                                data-aos="fade-up"
                                data-aos-duration="900"
                            >
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactContainer;
