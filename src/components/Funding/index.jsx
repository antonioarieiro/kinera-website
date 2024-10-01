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
                    <div className="card-funding" data-aos="fade-up" data-aos-delay="100">
                        <p className="text-center text-[18px] text-[#3c1e11] font-light leading-relaxed">
                            Kinera has been financially supported by the dedicated individuals working on the project. Currently, we are actively seeking opportunities to showcase our project to potential investors by applying to relevant events and reaching out to them directly.
                        </p>
                    </div>
                    <div className="card-funding" data-aos="fade-up" data-aos-delay="200">
                        <p className="text-center text-[18px] text-[#3c1e11] font-light leading-relaxed">
                            Our team is focused on developing and releasing a product that showcases our most innovative features, while simultaneously building a community of interested users. We are also planning to launch an Initial Coin Offering (ICO) for the Kinex token by the end of the year or first quarter of 2025.
                        </p>
                    </div>
                    <div className="card-funding" data-aos="fade-up" data-aos-delay="300">
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