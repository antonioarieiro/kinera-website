import logo from '../../assets/images/logo.png';

const Footer = () => {
    return (
        <footer className="w-screen  flex flex-col justify-center bg-[#222] p-8 text-[#F3F6FB]" id='footer'>
            
            <div className="w-full mt-0 flex sm:flex-row flex-col sm:justify-between justify-center items-center ">
                <p className="text-center">Kinera© 2023.</p>
                <p className="text-center">Developed by: Invisible Hand Lab.</p>
            </div>
        </footer>
    );
}

export default Footer;
