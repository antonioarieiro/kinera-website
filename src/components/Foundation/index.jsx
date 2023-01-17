import fundo04 from '../../assets/images/fundo04.png'
import asset05 from '../../assets/images/asset05.png'

const Foundation = () => {
    return (
        <div
            className="w-full min-h-screen flex flex-col py-20 bg-center bg-cover bg-no-repeat bg-fixed text-white"
            style={{
                backgroundImage: `url(${fundo04})`
            }}
            id='foundation'
        >
            <h1 className="sm:text-[64px] text-[38px] font-bold text-center text-white">KINE FOUNDATION</h1>
            
            <div className="w-full flex md:flex-row flex-col mt-40 md:px-20 px-10">
                <div className="md:w-1/2 w-full md:px-20 px-2">
                    <img src={asset05} alt="asset05" className="animate-bounce" />
                </div>
                <div className="md:w-1/2 w-full" data-aos="fade-left">
                    <p className="text-[24px] md:text-left text-center my-10">The<strong> Kine Foundation</strong> is a <strong>non-governmental institution</strong> the team is in the process of creating. It aims to <strong>shift film curation</strong>, <strong>exhibition</strong>, <strong>production</strong>, and the<strong> spectator role</strong> towards a <strong>new paradigm</strong>.</p>
                    <p className="text-[24px] md:text-left text-center my-10"><strong>Kinergy</strong> is backed and maintained by the <strong>Kine Foundation</strong>. Kinergy heads to be <strong>governed</strong> by the community through <strong>futarchy processes</strong>.</p>
                </div>
            </div>
        </div>
    )
}

export default Foundation
