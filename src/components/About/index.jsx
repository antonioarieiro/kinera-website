import backAbout01 from '../../assets/images/backAbout01.png';


const About = () => {
    return (
        <div
            className="w-full min-h-[85vh] bg-center bg-cover bg-no-repeat text-black py-20"
            id="about"
            style={{
                backgroundImage: `url(${backAbout01})`
            }}
        >
            <div className="w-full h-full flex flex-col">
                <h1 className="-mt-8 sm:text-[75px] text-[38px] font-bold text-center text-white">ABOUT</h1>

                <div className="w-full flex justify-center mt-10">
                    <div className="w-[80%]">
                        <p className="text-[19px] text-center -mt-5" data-aos="fade-left"><span class="glitch">Kinera</span> is the home for the creation of audiovisual media content in a web3 environment.</p>

                        <p className="text-[19px] text-center mt-10" data-aos="fade-right">The initial interaction within the ecosystem involves the classifying of information. To achieve this, we offer a set of tools constructed upon a system of tokenized incentives. With these tools, users will create film and video competitions and rankings.</p>

                        <p className="text-[19px] text-center mt-10" data-aos="fade-right">The result of the process of ranks and competitions are lists of content that will be available for our creators to build television channels according to their values and taste. These  channels can use subscription models to finance themselves or be open to everyone.</p>

                        <p className="text-[19px] text-center mt-10" data-aos="fade-right">Content moderation is controlled by the community and is designed to ensure that every participant has a platform environment aligned with their values and where they can choose their  level of engagement.</p>

                        <p className="text-[19px] text-center mt-10" data-aos="fade-right">The Kinera media platform is created to nurture, empower and give voice to people from different cultural and political backgrounds through different levels of participation.</p>

                        <p className="text-[19px] text-center mt-10" data-aos="fade-right">We aim to become the first global content creation and distribution network where the same content is available everywhere.</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
