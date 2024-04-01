import asset10 from '../../assets/images/asset10.webp'
import asset11 from '../../assets/images/asset11.webp'
import asset12 from '../../assets/images/asset12.webp'

const Partners = () => {
    return (
        <div className="w-full min-h-[50vh] flex flex-col py-20 bg-black" id='partners'>
            <h1 className="sm:text-7xl text-5xl font-bold text-center text-[#FF0A78]">PARTNERS</h1>

            <div className="flex justify-center items-center mt-20">
                <div className="grid sm:grid-cols-[repeat(3,18.75rem)] sm:grid-rows-[repeat(1,100px)] grid-cols-[repeat(1,18.75rem)] grid-rows-[repeat(3,100px)]">
                    <a href='https://substrate.io/' className="w-full h-full"><img src={asset10} alt="asset10" /></a>
                    <a href='https://polkadot.network/' className="w-full h-full"><img src={asset11} alt="asset11" /></a>
                    <a href='https://kusama.network/' className="w-full h-full"><img src={asset12} alt="asset12" /></a>
                </div>
            </div>
        </div>
    )
}

export default Partners