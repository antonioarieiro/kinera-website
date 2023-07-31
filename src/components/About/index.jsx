import backAbout01 from '../../assets/images/backAbout01.png';


const About = () => {
    return (
        <div
            className="w-full min-h-[60vh] bg-center bg-cover bg-no-repeat text-black py-20"
            id="about"
            style={{
                backgroundImage: `url(${backAbout01})`
            }}
        >
            <div className="w-full h-full flex flex-col">
                <h1 className="sm:text-[75px] text-[38px] font-bold text-center text-white">ABOUT</h1>

                <div className="w-full flex justify-center mt-10">
                    <div className="w-[80%]">
                        <p className="text-[19px] text-center" data-aos="fade-left"><strong>Kinera</strong> is a home for online user-driven competitions and rankings created to value the information generated through a system of tokenized incentives.</p>

                        <p className="text-[19px] text-center mt-10" data-aos="fade-right">Our platform is designed to include all voices through different levels of participation.</p>

                        <p className="text-[19px] text-center mt-10" data-aos="fade-right">The moderation is controlled by its users and is designed to ensure that people have a platform environment aligned with their values and chosen level of engagement.</p>

                        <p className="text-[19px] text-center mt-10" data-aos="fade-right">We aim to become the first global content distribution network where the same content is available everywhere.</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
