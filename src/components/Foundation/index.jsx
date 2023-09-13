import kineraFund03 from '../../assets/images/kineraFund03.png'
import fundation01 from '../../assets/images/fundation01.png'

const Foundation = () => {
    return (
        <div
            className="w-full min-h-screen flex flex-col py-20 bg-center bg-cover bg-no-repeat text-white"
            style={{
                backgroundImage: `url(${kineraFund03})`
            }}
            id='foundation'
        >
            <h1 className="-mt-8 sm:text-[75px] text-[38px] font-bold text-center text-white mb-10">THE KINE FOUNDATION</h1>
            
            <div className="container mx-auto flex flex-col md:flex-row -mt-10 md:px-20 px-4 justify-center" style={{ gap: '5rem' }}>
                <div className="md:w-1/2 w-full flex justify-center items-center">
                    <img src={fundation01} alt="foundation" className="w-full md:w-[100%] mx-auto my-auto animate-bounce" />
                </div>
                <div className="md:w-1/2 w-full" data-aos="fade-left">
                    <p className="text-[19px] md:text-left text-center my-10"><span class="glitch"> The Kine Foundation</span> is a non-profit organisation in the process of being established. </p>
                    <p className="text-[19px] md:text-left text-center my-10"><strong> The foundation </strong>  is  responsible  for the implementation of the specifications in the Kinera White Paper.</p>
                    <p className="text-[19px] md:text-left text-center my-10">The foundations’ mission is to transform and transcend traditional approaches to audiovisual production, curation and exhibition, fostering an ecosystem  where content creators themselves get  more than 99% of the revenue from their content. </p>
                    <p className="text-[19px] md:text-left text-center my-10">With Kinera, the Kine Foundation is committed to promoting  active audience engagement by embracing a new paradigm. </p>
                    <p className="text-[19px] md:text-left text-center my-10">The Kinera platform is  a community-governed ecosystem. In its final development stage, governance and decision-making will be facilitated through futarchy and other processes that can integrate reputation, token value, and curation markets. This ensures the platform stays aligned with its mission, and its users have a voice in its continuous development.</p>
                </div>
            </div>
        </div>
    )
}

export default Foundation