import img08 from '../../assets/images/img08.png';

const Kine = () => {
    return (
        <div className="w-full min-h-[90vh] py-20 bg-[linear-gradient(180deg,#FFBAE7_0%,#FF6EC7_100%)]" id='kine'>
            <h1 className="sm:text-[64px] text-[38px] font-bold mb-20 text-center text-[#FF0A78]">KINE</h1>
            
            <div className="w-full flex md:flex-row flex-col md:px-40 px-10 items-center">
                <div className="w-1/2">
                    <img src={img08} alt="claquete" className="w-3/4 animate-bounce" />
                </div>
                
                <div className="md:w-1/2 w-full -mt-[200px] " data-aos="fade-left">
                    <p className="text-[24px] md:text-left text-center my-10 text-[#35012B]"><strong>Kine</strong> is developed using a <strong>substrate-based blockchain</strong> infrastructure that makes it interoperable with the <strong>Kusama</strong> and <strong>Polkadot</strong> networks.</p>
                    <p className="text-[24px] md:text-left text-center my-10 text-[#35012B]">Kine is a <strong>token</strong> created to <strong>rank film</strong> and <strong>video</strong>, <strong>curate Constellations’ categories</strong>, <strong>curate</strong> the <strong>See Channels</strong>, and <strong>films</strong> and <strong>videos</strong> that the user thinks to <strong>deserve</strong> to be <strong>produced</strong> in the <strong>Producers Network</strong> and to make <strong>governance decisions</strong>.</p>
                </div>
            </div>
        </div>
    )
}

export default Kine;
