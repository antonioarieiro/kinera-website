import { BsLinkedin } from "react-icons/bs";

import fundo07 from '../../assets/images/fundo08.webp'

const TeamCard = ({ imageUrl, name, jobTitle, url }) => {
    return (
        <div className='min-w-[264px] max-w-[264px] h-80 p-5 flex flex-col justify-center items-center bg-[#FFF] text-black rounded-xl shadow-[#111] shadow-lg'>
            <img className='w-28 h-28 rounded-full m-3' src={imageUrl} alt='Profile image' />
            <p className='text-xl font-semibold m-5 text-center'>{name}</p>
            <p className='font-thin text-sm text-[#999] text-center'>{jobTitle}</p>
            <a href={url}>
                <BsLinkedin className="mt-5 text-[#0072B1] text-xl" />
            </a>
        </div>
    );
}

const Team = () => {
    return (
        <div
            id="team"
            className="w-full min-h-screen flex flex-col justify-center items-center py-20 text-[#F3F6FB] bg-center bg-cover bg-no-repeat bg-fixed"
            style={{
                backgroundImage: `url(${fundo07})`
            }}
        >
            <h1 className="sm:text-7xl text-5xl font-bold text-center">TEAM</h1>
            
            <div className="py-20 px-2 flex flex-col justify-center items-center">
                <a href="mailto:info@codice.in" className="text-[#FF0A78] hover:underline bg-[rgba(255,255,255,.8)] p-5 rounded-lg">
                    Join the team
                </a>
            </div>

            <div className="w-full h-24 bg-[rgba(0,0,0,.8)] flex justify-center items-center mb-10">
                <h2 className="sm:text-[50px] text-4xl">CORE MEMBERS</h2>
            </div>
            
            <div className="sm:w-[90vh] w-full p-5 flex md:flex-nowrap flex-wrap items-center md:justify-start justify-center overflow-x-scroll duration-500 ease-in gap-10 origin-bottom">
                <TeamCard
                    imageUrl="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
                    name="JOHN VIECELI"
                    jobTitle="Chief Executive Officer"
                    url="https://linkedin.com/"
                />
                <TeamCard
                    imageUrl="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
                    name="MIGUEL MARQUES"
                    jobTitle="Chief Information Officer"
                    url="https://linkedin.com/"
                />
                <TeamCard
                    imageUrl="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
                    name="CARLOS CARVALHO"
                    jobTitle="Chief Human Resources Officer"
                    url="https://linkedin.com/"
                />
                <TeamCard
                    imageUrl="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
                    name="ANDRÉ AVELINO"
                    jobTitle="Chief Technology Officer"
                    url="https://linkedin.com/"
                />
            </div>

            <div className="w-full h-24 bg-[rgba(0,0,0,.8)] flex justify-center items-center my-10">
                <h2 className="sm:text-[50px] text-4xl">CORE DEVELOPERS</h2>
            </div>

            <div className="sm:w-[90vh] w-full p-5 flex md:flex-nowrap flex-wrap items-center md:justify-start justify-center overflow-x-scroll duration-500 ease-in gap-10 origin-bottom">
                <TeamCard
                    imageUrl="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
                    name="ANTÓNIO ARIEIRO"
                    jobTitle="Fullstack developer"
                    url="https://linkedin.com/"
                />
                <TeamCard
                    imageUrl="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
                    name="LEANDRO JAREÑO DAMIÃO"
                    jobTitle="Front-end developer"
                    url="https://linkedin.com/"
                />
                <TeamCard
                    imageUrl="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
                    name="ELIUDE VEMBA"
                    jobTitle="Front-end developer"
                    url="https://linkedin.com/"
                />
                <TeamCard
                    imageUrl="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
                    name="ANDRÉ SANTOS"
                    jobTitle="Back-end developer"
                    url="https://linkedin.com/"
                />
            </div>

            <div className="w-full h-24 bg-[rgba(0,0,0,.8)] flex justify-center items-center my-10">
                <h2 className="sm:text-[50px] text-4xl">CONTRIBUTORS</h2>
            </div>

            <div className="sm:w-[90vh] w-full p-5 flex md:flex-nowrap flex-wrap items-center md:justify-start justify-center overflow-x-scroll duration-500 ease-in gap-10 origin-bottom">
                <TeamCard
                    imageUrl="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
                    name="RITA CAPUCHO"
                    jobTitle="****"
                    url="https://linkedin.com/"
                />
                <TeamCard
                    imageUrl="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
                    name="ALEXANDRE SILVA"
                    jobTitle="Back-end developer"
                    url="https://linkedin.com/"
                />
            </div>
        </div>
    )
}

export default Team;
