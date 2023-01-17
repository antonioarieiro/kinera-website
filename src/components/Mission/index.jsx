import astronaut from '../../assets/images/astronaut.png';

const Mission = () => {
    return (
        <div
            className="w-full min-h-screen flex flex-col py-20 sm:bg-[length:100vh_100vh] bg-[length:50vh_50vh] bg-no-repeat bg-right-bottom text-[#F3F6FB]"
            style={{
                backgroundImage: `url(${astronaut})`
            }}
            id="mission"
        >
            <h1 className="sm:text-[64px] text-[38px] font-bold text-center text-[#FF0A78]">MISSION</h1>

            <div className="w-full mt-20 px-2" data-aos="fade-right">
                <div className="sm:w-[55%] w-full md:pl-28 pl-0 mt-20">
                    <p className="text-[19px] sm:text-left text-center font-medium">Our mission is to build a fast, scalable and decentralized audiovisual network built on top of curation layers that encompass cinema/television production and exhibition.</p>
                    <p className="text-[19px] sm:text-left text-center mt-20 font-medium">We want to assemble a co-created curation ecosystem, composed of nonconformist people, professionals, algorithms and users, to make Kinergy the first customizable subscription platform for television channels.</p>
                </div>
            </div>
        </div>
    )
}

export default Mission;
