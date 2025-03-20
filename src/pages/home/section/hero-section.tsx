export default function Hero() {
    return (
    <div id="home" className="pt-36">
        <div className="container">
            <div className="flex flex-wrap">
                <div className="w-full self-center px-4 lg:w-1/2">
                    <h1 className="text-base font-semibold text-sky-600 md:text-xl">halo 👋, 
                        saya <span className="block font-bold text-slate-900 text-4xl mt-1 lg:text-5xl">Biwurian Mumtaz</span></h1>
                    <h2 className="font-medium text-slate-500 text-lg mb-5 lg:text-2xl">Web Developer</h2>
                    <p className="font-medium text-slate-500 mb-10 leading-relaxed">Web Developer yang kreatif dan detail-oriented, membangun website cepat, responsif, dan fungsional dengan teknologi modern. 
                    <span className="text-slate-900 font-bold">Selalu siap menciptakan solusi digital inovatif!</span></p>
                    <a href="#" 
                        className="text-base font-semibold text-white bg-sky-600 py-3 px-8 rounded-full hover:shadow-lg
                        hover:opacity-80 transition duration-300 ease-in-out">Hubungi Saya</a>
                </div>
                <div className="w-full self-end px-4 lg:w-1/2">
                    <div className="relative mt-10 lg:mt-9 lg:right-0">
                        <img src="biwurian.png" alt="biwurian"
                        className="max-w-full mx-auto" />
                        <span className="absolute -bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-125">
                            <svg width="400" height="600" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#0284c7" d="M31.1,-22.5C39.3,-3.6,44.4,12.5,38.7,30.5C33,48.4,16.5,68.3,-5.6,71.5C-27.8,74.8,-55.6,61.4,-61.9,43.1C-68.2,24.8,-53,1.5,-39.1,-20.6C-25.2,-42.6,-12.6,-63.5,-0.6,-63.1C11.4,-62.8,22.8,-41.3,31.1,-22.5Z" 
                                transform="translate(100 100) scale(1.2)" 
                                />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
};