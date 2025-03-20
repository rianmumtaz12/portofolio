export default function Contact() {
    return (
        <div id="contact" className="pt-36 pb-32">
            <div className="container">
                <div className="w-full px-4">
                    <div className="max-w-xl mx-auto text-center mb-16">
                        <h4 className="font-semibold text-lg text-sky-600 mb-2">Contact</h4>
                        <h2 className="fobt-bold text-slate-900 text-3xl mb-4 sm:text-4xl lg:text-5xl">Hubungi Kami</h2>
                        <p className="font-medium text-md text-slate-500 md:text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, tempora iure eius porro ex ea accusamus quae.</p>
                    </div>
                </div>

                <form>
                    <div className="w-full lg:2/3 lg:mx-auto">
                        <div className="w-full px-4 mb-8">
                            <label htmlFor="name" className="text-base font-bold text-slate-900">Nama</label>
                            <input type="text" id="name" className="w-full bg-slate-200 text-slate-900 p-3 rounded-md focus:outline-none focus:ring-sky-600
                            focus:ring-1 focus:border-sky-600"/>
                        </div>
                        <div className="w-full px-4 mb-8">
                            <label htmlFor="email" className="text-base font-bold text-slate-900">Email</label>
                            <input type="email" id="email" className="w-full bg-slate-200 text-slate-900 p-3 rounded-md focus:outline-none focus:ring-sky-600
                            focus:ring-1 focus:border-sky-600"/>
                        </div>
                        <div className="w-full px-4 mb-8">
                            <label htmlFor="message" className="text-base font-bold text-slate-900">Pesan</label>
                            <textarea name="message" id="message" className="w-full bg-slate-200 text-slate-900 p-3 rounded-md focus:outline-none focus:ring-sky-600
                            focus:ring-1 focus:border-sky-600 h-40">
                            </textarea>
                        </div>
                            <div className="w-full px-4">
                            <button className="text-base font-semibold text-white bg-sky-600 py-3 px-8 rounded-full w-2xs hover:opacity-80 hover:shadow-lg transition duration-300">Kirim</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}