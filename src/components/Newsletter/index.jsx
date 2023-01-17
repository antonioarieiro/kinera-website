const Newsletter = () => {
    return (
        <div className="w-screen min-h-[50vh] bg-[#FF0A78] flex justify-center items-center" id="sign">
            <div className="w-full p-10 flex flex-col items-center justify-center gap-20">
                <h1 className="md:text-[48px] text-[24px] text-[#F3F6FB] text-center font-bold">Subscribe to our newsletter</h1>
                <a
                    className="
                    bg-white hover:bg-black
                    duration-500 text-[#FF0A78] hover:text-white
                    text-lg font-bold px-3 py-2 rounded-3xl min-w-1/2
                    text-center
                    "
                    href="mailto:miguel@codice.in"
                >
                    by sending an email to miguel@codice.in
                </a>
            </div>
        </div>
    );
}

export default Newsletter;
