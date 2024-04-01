import backAbout01 from '../../assets/images/backAbout01.webp';
import './about.css';

const About = () => {
    return (
        <div
            className="background-overlay2 w-full min-h-[85vh] bg-center bg-cover bg-fixed bg-no-repeat text-black py-20"
            id="about"
            style={{
                backgroundImage: `url(${backAbout01})`
            }}
        >
            <div className="w-full h-full flex flex-col">
                <h1 className="-mt-8 sm:text-[75px] text-[38px] font-bold text-center text-black" data-aos="fade-left">ABOUT</h1>


                <div className="w-full flex justify-center mt-10">
                      <div className="card-about-container w-[100vk]">
                        <div className="card-about" data-aos="fade-left">
                        <p className="text-[19px] text-center -mt-0" data-aos="fade-left"><span className="glitch">Kinera</span> is the home for the best audiovisual media content in the Web3 environment. </p>
                        </div>
                        <div className="card-about" data-aos="fade-left">
                        <p className="text-[19px] text-center mt-0" data-aos="fade-right">With a set of tools built upon a system of tokenised incentives, users can create film and video competitions and rankings where the values and interests of the community can emerge.</p>
                        </div>
                        <div className="card-about" data-aos="fade-left">
                        <p className="text-[19px] text-center mt-0" data-aos="fade-right">The result of the process is a set of lists with relevant content. On top of these lists, the community can build television channels that reflect their interests and culture. The channels can use different subscription models to finance themselves or be open to everyone.</p>
                        </div>
                        <div className="card-about" data-aos="fade-left">
                        <p className="text-[19px] text-center mt-0" data-aos="fade-right"><span className="glitch">Kinera's </span> media platform is the place to nurture, empower, and give voice to people from different cultural and political backgrounds.</p>
                        </div>
                        <div className="card-about" data-aos="fade-left">
                        <p className="text-[19px] text-center mt-0" data-aos="fade-right"><b>Content moderation </b> is made by the community and reinforced by a platform design that drives the users to forms of participation according to the community rules. In this way, members can choose their level of engagement in an environment aligned with their values.</p>
                        </div>
                        <div className="card-about" data-aos="fade-left">
                        <p className="text-[19px] text-center mt-0" data-aos="fade-right">We aim to become the first global content creation and distribution network where the same content is available everywhere.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
