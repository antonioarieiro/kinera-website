import './funding.css';

const Funding = () => {
    return (
        <div
            className="background-overlayFunding w-full flex flex-col pt-20 pb-40 text-white"
            id="funding"
        >
            <h1 className="sm:text-[75px] text-[38px] font-bold text-center text-[#3c1e11] pb-10 mt-6">FUNDING</h1>
            
            <div className="w-full flex justify-center mt-10">
                <div className="card-funding-container w-[100vk]">
                    <div className="card-funding">
                        <p className="text-center text-[16px] text-[#3c1e11]">
                            Kinera has been financially supported by the dedicated individuals working on the project. Currently, we are actively seeking opportunities to showcase our project to potential investors by applying to relevant events and reaching out to them directly.
                        </p>
                    </div>
                    <div className="card-funding">
                        <p className="text-center text-[16px] text-[#3c1e11]">
                            Our team is focused on developing and releasing a product that showcases our most innovative features, while simultaneously building a community of interested users. We are also planning to launch an Initial Coin Offering (ICO) for the Kinex token by the end of the year or first quarter of 2025.
                        </p>
                    </div>
                    <div className="card-funding">
                        <p className="text-center text-[16px] text-[#3c1e11]">
                        <a href="/#newsletter" className="text-base hover:text-[#6a466a]">Subscribe to our Newsletter</a> for information about the project and future funding rounds.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Funding;