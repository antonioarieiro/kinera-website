import fundo02 from '../../assets/images/fundo02.png';


const About = () => {
    return (
        <div
            className="w-full min-h-[60vh] bg-center bg-cover bg-no-repeat text-black py-20"
            id="about"
            style={{
                backgroundImage: `url(${fundo02})`
            }}
        >
            <div className="w-full h-full flex flex-col">
                <h1 className="sm:text-[64px] text-[38px] font-bold text-center text-white">ABOUT</h1>

                <div className="w-full flex justify-center mt-20">
                    <div className="w-[80%]">
                        <p className="text-[19px] text-center" data-aos="fade-left"><strong>Kinergy</strong> is the home for online <strong>public-driven film festivals</strong> and <strong>rankings</strong> that reveal truthful information about <strong>curator’s tastes</strong>, <strong>values, and beliefs</strong>. Award distribution is encouraged through a system of <strong>tokenized incentives</strong>. In a second layer, curated content is presented to the <strong>communityas fuel</strong> for the creation of <strong>open</strong> or <strong>subscription-based</strong> television channels.</p>

                        <p className="text-[19px] text-center mt-10" data-aos="fade-right">We want to be the first <strong>global channel</strong> that has the same publicly available <strong>content</strong> regardless of where users are located. It is our intention to build technology that allows the emergence of a <strong>global society</strong>, not just a fragmented patchwork of opposing groups and individuals lacking the necessary foundations for a <strong>truly peaceful coexistence</strong>.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
