const Newsletter = (props) => {
    const {setOpenModal,openModal}=props
    return (
        <div className="w-screen min-h-[50vh] bg-[#FF0A78] flex justify-center items-center" id="newsletter">
            <div className="w-full p-10 flex flex-col items-center justify-center gap-20">
                <h1 onClick={()=>{setOpenModal(!openModal)}} className="sm:text-[64px] text-[38px] font-bold text-center text-[#F3F6FB] mt-10">SUBSCRIBE TO OUR NEWSLETTER</h1>
                <a
                onClick={()=>{setOpenModal(!openModal)}}
                    className="
                    bg-white hover:bg-black
                    duration-500 text-[#FF0A78] hover:text-white
                    text-lg font-bold px-3 py-2 rounded-3xl min-w-1/2
                    text-center
                    "
                    style={{ width: '250px' }}
                >
                    Sign Up
                </a>
            </div>
        </div>
    );
}

export default Newsletter;