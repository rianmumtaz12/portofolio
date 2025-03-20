export default function Navbar() {
    return (
        <div className="bg-transparent fixed top-0 left-0 w-full flex items-center z-10">
            <div className="container bg-sky-200 max-w-full">
                <div className="flex items-center justify-between relative">
                    <div className="px-4">
                        <a href="#home" className="font-bold text-lg text-sky-600 block py-6">Biwurian Mumtaz</a>
                    </div>
                    <div className="flex items-center px-4">
                        <button id="hamburger" name="hamburger" type="button" 
                        className="block absolute right-4 lg:hidden">
                            <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                            <span className="hamburger-line transition duration-300 ease-in-out"></span>
                            <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
                        </button>
                        <nav id="nav-menu" className="hidden absolute py-5 bg-white shadow-lg rounded-r-lg max-w-[250px] w-full right-4 top-full 
                        lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
                            <ul className="block lg:flex">
                                <li className="group">
                                    <a href="#home" className="text-base text-slate-900 py-2 mx-8 flex group-hover:text-sky-600">Home</a>
                                </li>
                                <li className="group">
                                    <a href="#about" className="text-base text-slate-900 py-2 mx-8 flex group-hover:text-sky-600">About</a>
                                </li>
                                <li className="group">
                                    <a href="#skills" className="text-base text-slate-900 py-2 mx-8 flex group-hover:text-sky-600">Skills</a>
                                </li>
                                <li className="group">
                                    <a href="#portofolio" className="text-base text-slate-900 py-2 mx-8 flex group-hover:text-sky-600">Portofolio</a>
                                </li>
                                <li className="group">
                                    <a href="#clients" className="text-base text-slate-900 py-2 mx-8 flex group-hover:text-sky-600">Clients</a>
                                </li>
                                <li className="group">
                                    <a href="#contact" className="text-base text-slate-900 py-2 mx-8 flex group-hover:text-sky-600">Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}