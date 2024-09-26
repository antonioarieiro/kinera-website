import backNews from '../../assets/images/backNews.png';
import './newsletter.css';

const Newsletter = () => {
    return (
        <div
            className="w-full bg-center py-16 background-overlayNews"
            id="newsletter"
            style={{
                backgroundImage: `url(${backNews})`
            }}
        >
            <div className="w-full p-10 flex flex-col items-center justify-center gap-20" data-aos="zoom out">
                <h1 className="sm:text-[75px] text-[38px] font-bold text-center text-[#3c1e11] -mt-4">
                    SUBSCRIBE TO OUR NEWSLETTER
                </h1>
                <div className="w-full flex justify-center flex-wrap gap-10">
                    <a
                        href="/newsletter"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#3c1e11] hover:bg-[#6a466a] duration-500 text-[#ffffff] hover:text-white text-lg font-bold px-3 py-2 rounded-3xl min-w-1/2 text-center"
                        style={{ width: '250px' }}
                    >
                        Sign Up
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;