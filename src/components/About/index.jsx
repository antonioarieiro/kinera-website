import backAbout01 from '../../assets/images/fundo03.webp';
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
                <h1 className="-mt-8 sm:text-[70px] text-[38px] font-bold text-center text-white" data-aos="fade-left">ABOUT</h1>


                <div className="w-full flex justify-center mt-10 pb-20">
                      <div className="card-about-container w-[100vk]">
                        <div className="card-about" data-aos="">
                        <p className="text-[16px] text-[#FFFFFF] text-justify -mt-0" data-aos=""><span className="glitch">Kinera</span> is a socio-economic decentralised autonomous organisation <span className="glitch">(📈DAO)</span>. The relationship between creators, curators, moderators, and viewers is central and they are connected by active participation in the ecosystem which includes a set of predictable token rewards. </p>
                        </div>
                        <div className="card-about" data-aos="">
                        <p className="text-[16px] text-[#FFFFFF] text-justify mt-0" data-aos="">We aim to combine video creation tools, collective wisdom, and user token incentives to create media narratives that reflect the complexity of human interaction.</p>
                        </div>
                        <div className="card-about" data-aos="">
                        <p className="text-[16px] text-[#FFFFFF] text-justify mt-0" data-aos="">Through ranking and curation processes Kinera builds public lists with relevant content. Groups and individuals can remix, organise and distribute content for free or through different subscription models. </p>
                        </div>
                        <div className="card-about" data-aos="">
                        <p className="text-[16px] text-[#FFFFFF] text-justify mt-0" data-aos=""> At <span className="glitch">Kinera's </span> moderation is made by the community and reinforced by the platform design. Here an organic process allows users to access different features and functionalities according to their level of engagement.</p>
                        </div>
                        <div className="card-about" data-aos="">
                        <p className="text-[16px] text-[#FFFFFF] text-justify mt-0" data-aos="">Our services have no fees, do not aim for profit and are free from advertising. Kinera doesn't employ algorithms to manipulate your experience. We are not in a battle for human attention.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;