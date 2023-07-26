import logo from '../../assets/images/logo.png';

const Footer = () => {
    return (
        <footer className="w-screen min-h-[30vh] flex flex-col justify-between bg-[#222] p-10 text-[#F3F6FB]" id='footer'>
            <div className="w-full flex sm:justify-start justify-center">
                <img src={logo} alt="Invisible Hand Lab" className="h-16" />
            </div>
            <div className="w-full h-[20%] mt-10 flex sm:flex-row flex-col sm:justify-between justify-center items-center">
                <p className="text-center">Kinera © 2023. Todos os direitos reservados.</p>
                <p className='font-bold'>Desenvolvido por: Invisible Hand Lab</p>
            </div>
        </footer>
    );
}

export default Footer;
