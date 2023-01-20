// import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react"
import lovegrityLogo from "../assets/lovegrityLogo.png"
import "../styles/nav.css"
import { logout } from "../firebase";
import { auth } from "../firebase";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false)
    const [user, setUser] = useState(auth.currentUser)
    console.log(loggedIn)
    useEffect(() => {
        if(user !== null){
            setLoggedIn(true)
        } else {
            setLoggedIn(false)
        }
    },[user])

    // toggle hidden dropdown content on more button
    const toggleMoreDropdown = () => {
        const dropdownMenu = document.getElementById('dropdown');
        dropdownMenu.classList.toggle('show');
        const moreArrow = document.getElementById('moreArrow');
        moreArrow.classList.toggle("rotate-180")
    }

    // toggle hidden dropdown content on user icon
    const toggleUserDropdown = () => {
        const dropdownUserMenu = document.getElementById('userDropContent');
        dropdownUserMenu.classList.toggle('show');
    }

    // Toggle the navbar height based on user's scroll position
    const navToggle = () => {
        const navbar = document.getElementById('navbar');
        // const navLogo = document.getElementById('navlogo');
        if (window.scrollY > 10) {
            navbar.classList.replace("h-15", "h-10")
        } else if (window.scrollY < 10 && navbar.classList.contains("h-10")) {
            navbar.classList.replace("h-10", "h-15")

        }
    }
    // const dropUserMenu = (e) => {
    //     if (!e.target.matches('.userDropbtn')) {
    //         var dropdowns = document.querySelector(".usersDropContent");
    //         var i;
    //         for (i = 0; i < dropdowns.length; i++) {
    //             console.log(dropdowns[i].classList);
    //             var openDropdown = dropdowns[i];
    //             if (openDropdown.classList.contains('show')) {
    //                 dropdowns[i].classList.remove('show');
    //             }
    //         }
    //     }
    // }

    
    


    window.addEventListener('scroll', () => { navToggle() })

    // Function for closing dropdown when clicking off the element
    // window.addEventListener('click', dropUserMenu)
    console.log(auth.currentUser)

    return (
        <div>
            <div className="fixed top-0 z-50">
                <nav id="navbar" className="h-15 w-[100vw] text-white text-[1.3em] font-[baskerville] tracking-wide bg-[#8047BA] bg-opacity-75 flex flex-row justify-around ">
                    <div className="showBtn text-center flex items-center ">
                        <button className="h-[100%] fa-solid fa-bars" onClick={() => setIsOpen(true)}></button>
                        <div className={"navBurger font-[arial] text-[1.5em] pt-[10vh] text-start absolute left-0 top-0 h-[100vh] bg-[#161616] z-100 " + (isOpen ? " w-[100vw]" : "left-[-10vw] w-0 overflow-x-hidden")}>
                            <button className="absolute right-[2.5vw] top-[2.5vh] fa-solid fa-xmark" onClick={() => setIsOpen(false)}></button>
                            <a href="/"><h3>Home</h3></a>
                            <hr />
                            <a href="/about"><h3>About Us</h3></a>
                            <hr />
                            <a href="/services"><h3>Services</h3></a>
                            <hr />
                            <a href="/packages"><h3>Care Packages</h3></a>
                            <hr />
                            <a href="#faq"><h3>FAQ</h3></a>
                            <hr />
                            <a href="/contact"><h3>Contact</h3></a>
                            <br />
                            <h3 className="text-[.75em] tracking-wider text-gray-500 ">Account</h3>
                            <hr />
                            <a href="#signin"><h3>Sign In</h3></a>
                            <hr />
                            <a href="#bookings"><h3>Bookings</h3></a>
                            <hr />
                            <a href="#account"><h3>My Account</h3></a>
                        </div>
                    </div>
                    <div className="my-auto dropdownMenu transferToMenu w-[25%] flex flex-row justify-around ">
                        <a href="/">Home</a> &nbsp;
                        <a href="/about">About Us</a> &nbsp;
                        <a href="/services">Services</a>
                    </div>
                    <a href="/" className=" my-auto w-[50%] md:w-[25%] lg:w-[15%]" id='navLogo'><img src={lovegrityLogo} alt="Lovegrity" /></a>
                    <div className="my-auto lg:w-auto flex flex-row justify-between ">
                        <a href="/packages" className="transferToMenu flex flex-row my-auto no-breaks mr-[15px]">Care&nbsp;Packages</a> &nbsp;
                        <div className="transferToMenu inline-block dropdown my-auto">
                            <button onClick={toggleMoreDropdown} className='dropBtn flex flex-row my-auto items-center'>  {/* onClick={toggleMoreDropdown} */}
                                More &nbsp;
                                <i id="moreArrow" className="transition-transform duration-400 fa-solid fa-2xs fa-chevron-down my-auto"></i>
                            </button>
                            <div className="dropdownContent mt-[15px] mx-auto hidden bg-[#8047BA] p-[15px] rounded-md shadow-custom-shadow absolute z-50" id="dropdown">
                                <a className="block py-[5px]" href="#faq">FAQ</a>
                                <a className="block py-[5px]" href="/contact">Contact</a>
                            </div>
                        </div>
                        <div className="flex flex-row items-center border-solid border-white ml-[15px] pl-[15px] border-l-2">
                            <a href="#services"><i className="fa-solid fa-cart-shopping"></i></a>
                            &nbsp; &nbsp;
                            <div className="transferToMenu inlineBlock ">
                                <button onClick={toggleUserDropdown} className="userDropBtn flex flex-row my-auto items-center"><i className="transferToMenu fa-regular fa-user"></i></button>
                                <div id="userDropContent" className="usersDropContent absolute right-[4vw] mt-[15px] mx-auto hidden bg-[#8047BA] p-[15px] rounded-md shadow-custom-shadow z-50">
                                    {loggedIn ? 
                                    <>
                                        <p className="block pb-[15px]">Signed in as:</p>
                                        <p className="block py-[5px]">{auth.currentUser ? user.email : ""}</p>
                                        <hr />
                                        <p className="block py-[5px]">Bookings</p>
                                        <p className="block py-[5px]">My Account</p>
                                       <a href="/"onClick={logout}>Log Out</a>
                                    </> : 
                                    <>
                                        <a href="/login"><p className="block py-[5px]">Log in</p></a>
                                        <a href="/registration"><p className="block py-[5px]">Create an Account</p></a>
                                        <a href="/" onClick={logout}>Log Out</a>
                                    </>
                                    }
                                </div>
                            </div>
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