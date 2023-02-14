import fundo03 from '../../assets/images/fundo03.png'
import img01 from '../../assets/images/img01.png'
import img02 from '../../assets/images/img02.png'
import img03 from '../../assets/images/img03.png'
import img04 from '../../assets/images/img04.png'
import DropItem from '../DropItem'

const Participation = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${fundo03})`
            }}
            className="w-full min-h-screen flex flex-col py-20 bg-center bg-fixed bg-cover bg-no-repeat text-white"
            id='participation'
        >
            <h1 className="sm:text-[64px] text-[38px] font-bold text-center mb-5">
                TYPES OF PARTICIPATION
            </h1>

            <p className="text-[19px] text-center font-bold mt-20" data-aos="zoom-in">
                The network's main roles are curators and creators, and everyone can become either.
            </p>

            <div className="my-20 mx-10 flex flex-col gap-10">
                <div className="w-full flex md:flex-row flex-col-reverse items-center">
                    <DropItem
                        question="Curators"
                        answer={<p><strong>CURATORS</strong> are organized within a social network. They act on many levels, from gathering films and videos found on the internet or decentralized environments, to creating competitions with them. They may also vote for the best channels.</p>}
                    />
                    <img src={img02} alt="img02" className="w-[360px]" />
                </div>
                <div className="w-full flex md:flex-row-reverse flex-col-reverse items-center">
                    <DropItem
                        question="Creators"
                        answer={<p><strong>CREATORS</strong> select films and videos from curated lists and use them to create television channels. Such channels may be complemented with interviews and other sorts of live feed events.</p>}
                    />
                    <img src={img01} alt="img01" className="w-[360px]" />
                </div>

                <div className="w-full flex md:flex-row flex-col-reverse items-center">
                    <DropItem
                        question="Moderators"
                        answer={<p><strong>MODERATORS</strong> play a more subtle role. They are responsible for solving content disputes and mediating guideline infractions, should they occur on the platform. To apply for this role, a collateral is required.</p>}
                    />
                    <img src={img03} alt="img03" className="w-[360px]" />
                </div>
                <div className="w-full flex md:flex-row-reverse flex-col-reverse items-center">
                    <DropItem
                        question="Ambassadors"
                        answer={<p><strong>AMBASSADORS</strong> are the final, but equally important members of the community. They are in charge of the divulgation of the project and assist in the creation of a meaningful platform. To become ambassadors, users are required to apply and complete the Tokens Ambassadors Programme.</p>}
                    />
                    <img src={img04} alt="img04" className="w-[360px]" />
                </div>
            </div>
        </div>
    )
}

export default Participation;
