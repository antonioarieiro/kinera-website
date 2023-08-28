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
                <h1 className="-mt-8 sm:text-[75px] text-[38px] font-bold text-center text-white stroked-text">ABOUT</h1>

                <div className="w-full flex justify-center mt-10">
                    <div className="w-[80%]">
                        <p className="text-[19px] text-center -mt-5" data-aos="fade-left"><span class="glitch">Kinera</span> is the home for the creation and dissemination of audiovisual media content in a web3 environment.</p>

                        <p className="text-[19px] text-center mt-10" data-aos="fade-right">The platform interface facilitates the submission of new content and the ranking and organisation of content that reflects the values and interests of the users. With a set of tools built upon a system of tokenized incentives, users can create film and video competitions and rankings.</p>

                        <p className="text-[19px] text-center mt-10" data-aos="fade-right">The result of the process of ranks and competitions are lists of content that will be available for our creators to build television channels to display content that reflects  their values and taste. These  channels can use subscription models to finance themselves or be open to everyone.</p>

                        <p className="text-[19px] text-center mt-10" data-aos="fade-right">Content moderation is undertaken by the community. The moderation process is designed to ensure that  participants  have a platform environment aligned with their values and where they can choose their  level of engagement.</p>

                        <p className="text-[19px] text-center mt-10" data-aos="fade-right">The Kinera media platform is created to nurture, empower and give voice to people from different cultural and political backgrounds. </p>

                        <p className="text-[19px] text-center mt-10" data-aos="fade-right">We aim to become the first global content creation and distribution network where the same content is available everywhere.</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
