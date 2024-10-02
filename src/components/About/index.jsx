import backAbout01 from '../../assets/images/fundo033__.png';
import './about.css';

const About = () => {
    return (
        <div
            className="background-overlay2 w-full min-h-[85vh] bg-center bg-cover bg-no-repeat md:bg-fixed text-black py-20"
            id="about"
            style={{
                backgroundImage: `url(${backAbout01})`
            }}
        >
            <div className="w-full h-full flex flex-col">
                <h1 className="-mt-8 sm:text-[70px] text-[38px] font-bold text-center text-[#3c1e11]" data-aos="fade-left">ABOUT</h1>


                <div className="w-full flex justify-center mt-10 pb-20">
                      <div className="card-about-container w-[100vk]">
                        <div className="card-about" data-aos="">
                        <p className="text-center text-[18px] text-[#3c1e11] font-light leading-relaxed"><span className="glitch">Kinera</span> is a scalable network of media communities, an entry point to a portal for transformative ideas and social progress. We provide an open and resilient curation ecosystem that unites consumers with communities of innovative media creators. </p>
                        </div>
                        <div className="card-about" data-aos="">
                        <p className="text-center text-[18px] text-[#3c1e11] font-light leading-relaxed">We aim to stimulate dialogue among participants and offer a space for collaborative work between content creators capable of addressing complex challenges and communicating them to vast audiences. </p>
                        </div>
                        <div className="card-about" data-aos="">
                        <p className="text-center text-[18px] text-[#3c1e11] font-light leading-relaxed"><span className="glitch">Kinera </span> aims to give users tools to dispute the dominant narratives and challenge the existing institutions and their interpretation of the world. With these tools, we can determine what is true and false, what is beautiful and what is sublime, and what practices help them grow as social beings and empower their collectives. </p>
                        </div>
                        <div className="card-about" data-aos="">
                        <p className="text-center text-[18px] text-[#3c1e11] font-light leading-relaxed"> Our services have no fees, do not aim for profit and are free from advertising. <span className="glitch">Kinera</span> doesn't employ algorithms to manipulate your experience. We are not in a battle for human attention.</p>
                        </div>
                        <div className="card-about" data-aos="">
                        <p className="text-center text-[18px] text-[#3c1e11] font-light leading-relaxed">We want to contribute to ending the illusion that civil societies are powerless. In our community, we co-create shared futures and promote a safe environment where voices and visions for the future can arise.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;