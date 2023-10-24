import AcroLogo from './image/Acro.png'

function Footer() {
    return (
        <>
            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900" href="#">
                        <img src={AcroLogo} alt="Acropolis" className="w-40 h-15 text-white p-2 " viewBox="0 0 24 24" />
                    </a>
                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 hover:text-purple-600 font-semibold">Developed By Students Of FCA Department
                    </p>
                </div>
            </footer>
        </>
    );
}

export default Footer;