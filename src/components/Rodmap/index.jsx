import { useState } from 'react'
import { BsFlag } from 'react-icons/bs'
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md'
import { RiContactsBookLine } from 'react-icons/ri'

/*
<div className="w-[100vw] duration-500 m-0">
					<div className="w-full h-1 rounded-lg bg-slate-200">
						<div className="h-full w-20 bg-pink-600 duration-500 rounded-lg" />
					</div>
				</div>
*/

const Roadmap = () => {
	const [scrollX, setScrollX] = useState(-400);

    const swipeLeft = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);

        setScrollX(x > 0 ? 0 : x);
    }
    const swipeRight = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;

        setScrollX((window.innerWidth - listW) > x ? window.innerWidth - listW - 60 : x);
    }
	
	return (
		<div
			id="roadmap"
			className="w-full min-h-[80vh] py-20 px-0 m-0 bg-white"
		>
			<h1 className="mb-20 sm:text-7xl text-5xl font-bold text-center text-[#FF0A78]">ROADMAP</h1>
			
			<div className="relative w-full">
				<MdOutlineNavigateBefore
					fontSize={50}
					className="absolute top-32 left-2 cursor-pointer text-white hover:text-[#FF0A78] hover:rounded-[50%] bg-black duration-500"
				/>
				<MdOutlineNavigateNext
					fontSize={50}
					className="absolute top-32 right-2 cursor-pointer text-white hover:text-[#FF0A78] hover:rounded-[50%] bg-black duration-500"
				/>

				<div className="w-full">
					<div className="flex flex-col justify-center items-center gap-20">
						<div className="flex flex-col items-center justify-center">
							<p className="text-[#FF0A78]">Jan 2021</p>
							<span className="text-[#555]">Company Established</span>
						</div>
						<div className="bg-white shadow-lg border border-gray-400 rounded-[50%] p-4">
							<BsFlag color="#000" className="" />
						</div>
						<div className="w-[80%] flex flex-col items-center justify-center gap-10 p-10 bg-white text-black shadow-2xl">
							<div>
								<RiContactsBookLine size={50} />
							</div>
							<p className="text-2xl">DevOps</p>
							<p className="text-[#FF0A78] text-sm font-normal">Films / Festivals / Ranking List / Social / Votes / Moderation / Secret Vote</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Roadmap