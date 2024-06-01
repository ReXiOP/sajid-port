const HomeAbout = () => {
    return (
        <div className="section bg-dark overflow-hidden">
            <div className="about-section section-padding mt-n3 mb-n1">
                <div
                    className="about-images"
                    style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL}/images/profile.png)`,
                        backgroundSize: "85%",
                    }}
                ></div>

                <div className="container">
                    <div
                        className="row justify-content-end"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                    >
                        <div className="col-lg-6">
                            <div className="about-content">
                                <h3 className="title">Muhammad Sajid</h3>
                                <p className="about-text">
                                    Hello! I&apos;m Muhammad Sajid, a passionate
                                    Frontend Developer based in Gazipur, Dhaka,
                                    Bangladesh. With a diverse skill set that
                                    spans programming, digital marketing, and
                                    cyber security, I bring a multifaceted
                                    approach to web development. My journey in
                                    the tech world has equipped me with not only
                                    the technical prowess to build seamless,
                                    user-friendly interfaces but also a
                                    strategic mindset to optimize digital
                                    presence.
                                </p>
                                <p>
                                    Beyond coding, I have a creative side honed
                                    through photo and video editing. In my free
                                    time, I love diving into detective stories,
                                    unraveling mysteries, and enjoying the
                                    thrill of a good narrative. This hobby fuels
                                    my curiosity and problem-solving skills,
                                    which I channel into my professional work.
                                </p>
                                <p>
                                    I&apos;m always excited to collaborate on
                                    innovative projects and bring ideas to life.
                                    Let&apos;s connect and create something
                                    amazing together!
                                </p>
                                <img
                                    className="signechar"
                                    src="./images/signechar.jpg"
                                    alt="Signature"
                                />
                                <h6 className="name">Muhammad Sajid</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;
