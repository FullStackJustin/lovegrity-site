import lovegrityLogo from "../assets/lovegrityLogo.png"
import "../styles/nav.css"

const Navbar = () => {
    // const toggleDropdown = () => {
    //     const dropdownMenu = document.querySelector('.dropdown-menu');
    //     dropdownMenu.classList.toggle('hidden', 'dropdownMenu');
    // }
    const navToggle = () => {
        const navbar = document.getElementById('navbar');
        // const navLogo = document.getElementById('navlogo');
        if (window.scrollY > 100){
            navbar.classList.replace("h-[20vh]","h-[10vh]")
        } else if(window.scrollY < 10 && navbar.classList.contains("h-[10vh]")){
            navbar.classList.replace("h-[10vh]","h-[20vh]")

        }
    } 
    window.addEventListener('scroll',()=> {navToggle()})
    
    return (
        <div className="fixed top-0 z-50">
            <nav id="navbar" class="h-[15vh] w-[100vw] text-white text-[1.3em] font-[baskerville] tracking-wide bg-purple-500 bg-opacity-50 flex flex-row justify-around ">
                <div className="my-auto dropdownMenu w-[25%] flex flex-row justify-around ">
                    <a href="#home">Home</a> &nbsp;
                    <a href="#about">About Us</a> &nbsp;
                    <a href="#services">Services</a>
                </div>
                <img id='navLogo' src={lovegrityLogo} alt="Lovegrity" className=" my-auto w-[50%] md:w-[25%] lg:w-[15%]  " />
                <div className="my-auto w-[25%] flex flex-row justify-between ">
                    <a href="#packages">Care Packages</a> &nbsp;
                    <a href="#More" className='dropdown'>  {/* onClick={toggleDropdown} */} 
                        More 
                        <i class="fa-solid fa-chevron-down"></i>
                        {/* <div className="hidden dropdown-menu ">
                            <a href="#faq">FAQ</a>
                            <a href="#contact">Contact</a>
                        </div> */}
                    </a>
                    &nbsp; | &nbsp;
                    <div>
                    <a href="#services"><i class="fa-solid fa-cart-shopping"></i></a>
                    &nbsp; &nbsp;
                    <a href="#services"><i class="fa-regular fa-user"></i></a>
                    </div>
                </div>
            </nav>
        </div>
    )


}

export default Navbar