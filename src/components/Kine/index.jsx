import img08 from '../../assets/images/img08.png';

const Kine = () => {
    return (
        <div className="w-full min-h-[90vh] py-20 bg-[linear-gradient(180deg,#FFBAE7_0%,#FF6EC7_100%)]" id='kine'>
            <h1 className="sm:text-[64px] text-[38px] font-bold mb-20 text-center text-[#FF0A78]">KINE</h1>
            
            <div className="w-full flex md:flex-row flex-col md:px-40 px-10 items-center">
                <div className="w-1/2">
                    <img src={img08} alt="claquete" className="w-3/4 animate-bounce" />
                </div>

                <p className="text-[19px] leading-relaxed md:w-1/2 w-full md:text-left text-center text-[#35012B]" data-aos="zoom-in"><strong>Kine</strong>, our <strong>token</strong>, is developed using a substrate-based blockchain infrastructure, making it interoperable with the <strong>Kusama</strong> and <strong>Polkadot networks</strong>.</p>
            </div>
        </div>
    )
}

export default Kine;
