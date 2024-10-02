import './funding.css';

const Funding = () => {
    return (
        <div
            className="background-overlayFunding w-full flex flex-col pt-20 pb-40"
            id="funding"
        >
            <h1 className="sm:text-[70px] text-[38px] font-extrabold text-center text-[#3c1e11] pb-10 mt-6 tracking-wide">FUNDING</h1>
            
            <div className="w-full flex justify-center mt-10">
                <div className="card-funding-container">
                    <div className="card-funding" >
                        <p className="text-center text-[18px] text-[#3c1e11] font-light leading-relaxed">
                        <b style={{ fontWeight: '600' }}>Kinera’s </b> framework for digital communities thriving on positive interactions derives from the concept of kinship, where user engagement is rooted in human respect and accountability. In our co-designed environments, we want to nurture meaningful interactions among humans, animals, plants, their stories, and artificial intelligence.
                        </p>
                    </div>
                    <div className="card-funding" >
                        <p className="text-center text-[18px] text-[#3c1e11] font-light leading-relaxed">
                        To achieve this, we are committed to continuously enhancing problem-solving capabilities and promoting organic processes that connect users with tools and features tailored to their engagement and needs.
                        </p>
                    </div>
                    <div className="card-funding" >
                        <p className="text-center text-[18px] text-[#3c1e11] font-light leading-relaxed">
                        As a team, we prioritised developing a product that radiates innovation over securing financing. To date, Kinera has been financially supported by the passionate individuals working on the project.
                        </p>
                    </div>
                    <div className="card-funding">
                        <p className="text-center text-[18px] text-[#3c1e11] font-light leading-relaxed">
                        The bridges between AI, blockchain and the media are settled. A group of engaged users is taking its first steps to push the limits of what we can do together when leaving the outdated legacy systems behind.
                        </p>
                    </div>
                    <div className="card-funding" >
                        <p className="text-center text-[18px] text-[#3c1e11] font-light leading-relaxed">
                        With AI, blockchain, and media interconnected, a group of engaged users begins to push the boundaries beyond legacy systems. By participating in relevant events, It's time to present the project to potential investors or contact them directly. 
                        </p>
                    </div>
                    <div className="card-funding" >
                        <p className="text-center text-[18px] text-[#3c1e11] font-light leading-relaxed">
                        Our plans include an initial coin offering (ICO) for the Kinex token. It can happen in the first quarter of 2025, before or after the mainnet release. 
                        </p>
                    </div>
                    <div className="card-funding" >
                        <p className="text-center text-[18px] text-[#3c1e11] font-light leading-relaxed">
                        <a href="/#newsletter" className="text-base hover:text-[#6a466a] font-semibold underline">Subscribe to our Newsletter</a> for information about the project and future funding rounds.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Funding;