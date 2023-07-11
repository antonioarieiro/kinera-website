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

                <div className="w-full flex justify-center mt-10">
                    <div className="w-[80%]">
                        <p className="text-[19px] text-center" data-aos="fade-left"><strong>Kinera</strong> is the home for online <strong>public-driven competitions</strong> and <strong>rankings</strong> that value the information generated in the process through a system of <strong>tokenized incentives</strong>.</p>

                        <p className="text-[19px] text-center mt-10" data-aos="fade-right"><strong>Our App</strong> is designed with different <strong>levels of participation</strong> in order to include all voices.</p>

                        <p className="text-[19px] text-center mt-10" data-aos="fade-right">The <strong>moderation</strong> system is <strong>controlled by the its users</strong>, and design to assure that people have a DApp environment according to their <strong>values</strong> and the <strong>engagement</strong> they choose to have.</p>

                        <p className="text-[19px] text-center mt-10" data-aos="fade-right">We want to be the <strong>first global content distribution network</strong> where the same <strong>content is available everywhere.</strong></p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
