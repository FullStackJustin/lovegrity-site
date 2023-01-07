import lovegrityLogo from "../assets/lovegrityLogo.png"
import "../styles/nav.css"

const Navbar = () => {
    // const toggleDropdown = () => {
    //     const dropdownMenu = document.querySelector('.dropdown-menu');
    //     dropdownMenu.classList.toggle('hidden', 'dropdownMenu');
    // }

    return (
        <div className="fixed top-0 z-50">
            <nav class="h-[20vh] w-[100vw] text-white  bg-purple-500 bg-opacity-50 flex flex-row justify-around ">
                <div className="my-auto dropdownMenu w-[20%] flex flex-row justify-between ">
                    <a href="#home">Home</a> &nbsp;
                    <a href="#about">About Us</a> &nbsp;
                    <a href="#services">Services</a>
                </div>
                <img src={lovegrityLogo} alt="Lovegrity" className="h-[15vh] my-auto w-[25%]  " />
                <div className="my-auto w-[20%] flex flex-row justify-between ">
                    <a href="#packages">Care Packages</a> &nbsp;
                    <a href="#" className='dropdown'>  {/* onClick={toggleDropdown} */} 
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
                    &nbsp;
                    <a href="#services"><i class="fa-regular fa-user"></i></a>
                    </div>
                </div>
            </nav>
        </div>
    )


}

export default Navbar