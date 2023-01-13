import lovegrityLogo from "../assets/lovegrityLogo.png"
import "../styles/nav.css"

const Navbar = () => {
    // toggle hidden dropdown content 
    const toggleDropdown = () => {
        const dropdownMenu = document.getElementById('dropdown');
        dropdownMenu.classList.toggle('show');
    }
    const navToggle = () => {
        const navbar = document.getElementById('navbar');
        // const navLogo = document.getElementById('navlogo');
        if (window.scrollY > 10) {
            navbar.classList.replace("h-15", "h-10")
        } else if (window.scrollY < 10 && navbar.classList.contains("h-10")) {
            navbar.classList.replace("h-10", "h-15")

        }
    }
    window.addEventListener('scroll', () => { navToggle() })

    return (
        <div>
            <div className="fixed top-0 z-50">
                <nav id="navbar" className="h-15 w-[100vw] text-white text-[1.3em] font-[baskerville] tracking-wide bg-[#8047BA] bg-opacity-50 flex flex-row justify-around ">
                    <div className="my-auto dropdownMenu w-[25%] flex flex-row justify-around ">
                        <a href="/">Home</a> &nbsp;
                        <a href="/about">About Us</a> &nbsp;
                        <a href="/services">Services</a>
                    </div>
                    <a href="/" className=" my-auto w-[50%] md:w-[25%] lg:w-[15%]" id='navLogo'><img src={lovegrityLogo} alt="Lovegrity" /></a>
                    <div className="my-auto lg:w-auto flex flex-row justify-between ">
                        <a href="#packages" className="flex flex-row my-auto no-breaks mr-[15px]">Care&nbsp;Packages</a> &nbsp;
                        <div className="inline-block dropdown my-auto">
                            <button onClick={toggleDropdown} className='dropBtn flex flex-row my-auto items-center'>  {/* onClick={toggleDropdown} */}
                                More &nbsp;
                                <i className="fa-solid fa-2xs fa-chevron-down my-auto"></i>
                            </button>
                            <div className="dropdownContent hidden bg-[#8047BA] p-[15px] shadow-custom-shadow absolute z-50" id="dropdown">
                                <a className="block" href="#faq">FAQ</a>
                                <a className="block" href="/contact">Contact Us</a>
                            </div>
                        </div>
                        <div className="flex flex-row items-center border-solid border-white ml-[15px] pl-[15px] border-l-2">
                            <a href="#services"><i className="fa-solid fa-cart-shopping"></i></a>
                            &nbsp; &nbsp;
                            <a href="#services"><i className="fa-regular fa-user"></i></a>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="z-50 fixed bottom-[2.5vh] right-[2vw] w-[4rem] h-[4rem] rounded-full bg-[#8047BA] shadow-custom-shadow text-white text-center flex justify-center items-center ">
                <button><i className="fa-solid fa-2xl fa-message"></i></button>
            </div>
        </div>
    )


}

export default Navbar