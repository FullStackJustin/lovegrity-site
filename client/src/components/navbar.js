// import { getAuth } from "firebase/auth";
import { useEffect, useRef, useState } from "react"
import lovegrityLogo from "../assets/lovegrityLogo.png"
import "../styles/nav.css"
import { logout } from "../firebase";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
// import { UserAuth } from "../authContext";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState(auth.currentUser);

    //get currently logged in user globally and update state accordingly
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                console.log(user)
            } else {
                setUser(null);
            }
        })

        console.log(user)

    }, [user])

    // toggle hidden dropdown content on more button
    const dropDownRef = useRef(null);
    const toggleMoreDropdown = () => {
        if (dropDownRef.current) {
            dropDownRef.current.classList.toggle('hidden');
        }
        const moreArrow = document.querySelector('#moreArrow');
        moreArrow.classList.toggle("rotate-180")
    }
    useEffect(() => { }, [dropDownRef])

    // toggle ref for user icon dropdown menu
    const userDropdownRef = useRef(null);
    const toggleUserDropdown = (e) => {
        if (userDropdownRef.current) {
            userDropdownRef.current.classList.toggle('hidden');
        }
    }
    useEffect(() => {
    }, [userDropdownRef]);

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

    //State variables for cart popout menu
    const [cartOpen, setCartOpen] = useState(false)

    //Function for chat popup
    const chatPopupRef = useRef(null);
    const chatBubbleRef = useRef(null);
    const toggleChatPopup = () => {
        if (chatPopupRef.current) {
            chatPopupRef.current.classList.toggle('hidden');
        }
        if (!chatPopupRef.current.classList.contains('hidden')) {
            chatBubbleRef.current.classList.replace('fa-message', 'fa-xmark')
        } else {
            chatBubbleRef.current.classList.replace('fa-xmark', 'fa-message')
        }
    }

    //function for toggling checked mark on Chat popup
    const [isChecked, setIsChecked] = useState(false)
    const toggleChecked = () => {
        setIsChecked(!isChecked)
    }

    //Function for selecting current page
    const currentPage = window.location.pathname;
    const packagesPgRef = useRef({})
    useEffect(() => {

        console.log(currentPage)
        const navLinks = document.querySelectorAll('#transferToMenu a');
        navLinks.forEach(link => {
            if(link.getAttribute('href') === currentPage){
                link.classList.add('underline');
            } else if(packagesPgRef.current.getAttribute('href') === currentPage){
                packagesPgRef.current.classList.add('underline');
            }
        })
    },[currentPage])
    
    // const offclickUserMenu = (e) => {
    //     if (e.target !== userDropdownRef){
    //         userDropdownRef.current.classList.add('hidden')
    //     }
    // }
    // window.addEventListener('click', offclickUserMenu)
    window.addEventListener('scroll', () => { navToggle() })


    return (
        <div>
            <div className="fixed top-0 z-50">
                <nav id="navbar" className="h-15 w-[100vw] text-white text-[1.3em] font-[baskerville] tracking-wide bg-[#8047BA] bg-opacity-75 backdrop-blur-[2px] flex flex-row justify-around ">
                    <div id="showBtn" className=" text-center flex items-center ">
                        <button className="h-[100%] fa-solid fa-bars" onClick={() => setIsOpen(true)}></button>
                        <div className={"navBurger font-[arial] text-[1.5em] pt-[10vh] text-start absolute left-0 top-0 h-[100vh] bg-[#161616] z-100 " + (isOpen ? " w-[100vw]" : "left-[-10vw] w-0 overflow-x-hidden")}>
                            <button className="absolute right-[2.5vw] top-[2.5vh] fa-solid fa-xmark" onClick={() => setIsOpen(false)}></button>
                            {user ?
                                <>
                                    <div className="text-gray-500 text-[.65em] flex flex-col h-[15vh] items-stretch">
                                        {/* <p>{user.displayName}</p> */}
                                        <h3>{user.email}</h3>
                                        <h3>{user.email}</h3>
                                    </div>
                                    <div className="overflow-y-scroll">
                                        <hr />
                                        <a href="/"><h3>Home</h3></a>
                                        <hr />
                                        <a href="/about"><h3>About Us</h3></a>
                                        <hr />
                                        <a href="/services"><h3>Services</h3></a>
                                        <hr />
                                        <a href="/packages"><h3>Care Packages</h3></a>
                                        <hr />
                                        <a href="/faq"><h3>FAQ</h3></a>
                                        <hr />
                                        <a href="/contact"><h3>Contact</h3></a> <br />
                                        <h3 className="text-[.75em] tracking-wider text-gray-500 ">Account</h3>
                                        <hr />
                                        <hr />
                                        <a href="#bookings"><h3>Bookings</h3></a>
                                        <hr />
                                        <a href="#account"><h3>My Account</h3></a>
                                        <hr />
                                        <button onClick={logout}><h3>Logout</h3></button>
                                    </div>
                                </>
                                :
                                <div className="overflow-y-scroll">
                                    <hr />
                                    <a href="/"><h3>Home</h3></a>
                                    <hr />
                                    <a href="/about"><h3>About Us</h3></a>
                                    <hr />
                                    <a href="/services"><h3>Services</h3></a>
                                    <hr />
                                    <a href="/packages"><h3>Care Packages</h3></a>
                                    <hr />
                                    <a href="/faq"><h3>FAQ</h3></a>
                                    <hr />
                                    <a href="/contact"><h3>Contact</h3></a> <br />
                                    <h3 className="text-[.75em] tracking-wider text-gray-500 ">Account</h3>
                                    <hr />
                                    <a href="/login"><h3>Sign In</h3></a>
                                    <hr />
                                    <a href="#bookings"><h3>Bookings</h3></a>
                                    <hr />
                                    <a href="#account"><h3>My Account</h3></a>
                                    <hr />
                                </div>
                            }

                        </div>
                    </div>
                    <div id="transferToMenu" className="my-auto dropdownMenu w-[25%] flex flex-row justify-around ">
                        <a className="underline-offset-8" href="/">Home</a> &nbsp;
                        <a className="underline-offset-8" href="/about">About Us</a> &nbsp;
                        <a className="underline-offset-8" href="/services">Services</a>
                    </div>
                    <a href="/" className=" my-auto pl-[15px] w-[50%] md:w-[25%] lg:w-[15%]" id='navLogo'><img src={lovegrityLogo} alt="Lovegrity" /></a>
                    <div className="my-auto lg:w-auto flex flex-row justify-between ">
                        <a id="transferToMenu" ref={packagesPgRef} href="/packages" className={"underline-offset-8 flex flex-row my-auto no-breaks mr-[15px]"}>Care&nbsp;Packages</a> &ensp;
                        <div id="transferToMenu" className=" inline-block dropdown my-auto">
                            <button onClick={toggleMoreDropdown} className='dropBtn flex flex-row my-auto items-center border-solid border-white border-r-2 pr-[15px]'>  {/* onClick={toggleMoreDropdown} */}
                                More &nbsp;
                                <i id="moreArrow" className="transition-transform duration-400 fa-solid fa-2xs fa-chevron-down my-auto"></i>
                            </button>
                            <div ref={dropDownRef} className="dropdownContent mt-[15px] mx-auto hidden bg-[#8047BA] p-[15px] rounded-md shadow-custom-shadow absolute z-70" id="dropdown">
                                <a className="block py-[5px]" href="/faq">FAQ</a>
                                <a className="block py-[5px]" href="/contact">Contact</a>
                            </div>
                        </div>
                        <div className="flex flex-row items-center ml-[15px] ">
                            <button onClick={() => { setCartOpen(true) }} className="fa-solid fa-cart-shopping"></button>
                            &nbsp; &nbsp;
                            <div id="transferToMenu" className=" inlineBlock ">
                                <button onClick={toggleUserDropdown} className=" flex flex-row my-auto items-center"><i className="transferToMenu fa-regular fa-user"></i></button>
                                <div ref={userDropdownRef} className="usersDropContent absolute right-[4vw] mt-[15px] mx-auto hidden bg-[#8047BA] p-[15px] rounded-md shadow-custom-shadow z-70">
                                    {user ?
                                        <>
                                            <p className="block pb-[10px]">Signed in as:</p>
                                            <p className="block">{auth.currentUser ? auth.currentUser.email : ""}</p>
                                            <hr />
                                            <p className="block py-[5px]">Bookings</p>
                                            <p className="block py-[5px]">My Account</p>
                                            <a href="/" onClick={logout}>Log Out</a>
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
                <div className={"cartPopout chatPopout absolute top-0 right-0 z-51 h-[100vh] " + (cartOpen ? "w-[425px]" : "w-0")}>
                    <div className=" bg-[#8047BA] text-white text-[1.25em] flex flex-row justify-between items-center pr-[10px] pl-[10px] ">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <button onClick={() => { setCartOpen(false) }} className="fa-solid fa-xmark"></button>
                    </div>
                    <div className=" h-[95%] bg-white">
                        <div className="h-fit mx-[10px] w-full bg-white flex flex-col text-center font-[arial] ">
                            <header className="text-[2em] h-[2.1em] text-clip overflow-hidden font-semibold mt-[10vh] py-[2.5vh] ">Cart is empty</header>
                            <p className="h-[1.5em] text-clip overflow-hidden">Looks like you just haven't found the right thing yet.</p>
                            <a href="/services" className="h-[1.2em] text-clip overflow-hidden underline">Browse Services</a>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={chatPopupRef} className="hidden z-50 fixed bottom-0 right-0 md:bottom-[15vh] lg:bottom-[15vh] md:right-[2vw] lg:right-[2vw] w-screen md:w-[383px] lg:w-[383px] bg-white h-screen md:h-[85vh] lg:h-[85vh] overflow-y-scroll shadow-custom-shadow rounded-lg border border-white ">
                <div className="w-full h-[20%] text-white bg-[#8047BA] ">
                    <div className="w-[95%] mx-auto text-start text-[2em] font-[baskerville] ">Lovegrity - "you can't have integrity without LOVE"</div>
                    <div className="text-bubble">
                        <p>Hi! Let us know how we can help and we'll respond shortly.</p>
                        <div className="bubble-arrow"></div>
                    </div>
                    <form className="text-black mt-[15px] w-[85%] mx-auto ">
                        <input type="text" required className="firstInputs border border-solid border-gray my-[2vh] w-full h-[3em] " placeholder="Name"></input>
                        <input type="text" required className="firstInputs border border-solid border-gray my-[2vh] w-full h-[3em] " placeholder="Email*"></input>
                        <input type="text" required className="border border-solid border-gray mt-[2vh] mb-[5vh] w-full h-[10em] text-start " id="formMessage" placeholder="How can we help?*"></input>
                        <input type="radio" id="subRadio" value="subscribed" checked={isChecked} onClick={toggleChecked}></input>&emsp;<label for="subRadio" className="">Sign up to receive email updates, announcements, and more.</label>
                        <button className="w-full md:w-[35%] lg:w-[35%] md:ml-[115px] lg:ml-[115px] rounded-full bg-purple-700 text-white my-[2.5vh] py-[2.5vh] ">Send</button>
                        <p className="text-center text-[.85em] text-[#5E5E5E] w-[95%] mx-auto pb-[25px] ">This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.</p>
                    </form>
                </div>
            </div>
            <div onClick={toggleChatPopup} className="z-50 fixed bottom-[2.5vh] right-[2vw] w-[4rem] h-[4rem] rounded-full bg-[#8047BA] shadow-custom-shadow text-white text-center flex justify-center items-center ">
                <button ref={chatBubbleRef} className="fa-solid fa-2xl fa-message max-h-[95%] "></button>
            </div>
        </div>
    )


}

export default Navbar