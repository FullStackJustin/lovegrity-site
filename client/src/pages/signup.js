import { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const navigate = useNavigate();
    const [regEmail, setRegEmail] = useState("");
    const [regPassword, setRegPassword] = useState("");
    const auth = getAuth();
    const user = auth.currentUser;

    const register = async (e) => {
        e.preventDefault();
        if (user === null) {
            return
        } else {
            try {
                await createUserWithEmailAndPassword(auth, regEmail, regPassword)
                    .then(() => {
                        console.log("success")
                        navigate("/login")
                    })
            }
            catch (err) {
                console.log(err)
            }
        }

    }

    return (
        <div className="w-screen ">
            <div className="h-[15vh] w-full bg-[#8047BA] "></div>
            <div className="w-full bg-black ">
                <div className="mx-auto w-[90%] md:w-[85vw] lg:w-[55vw] min-h-fit flex flex-col ">
                    <div className="text-white w-full ">
                        <header>Create an Account</header>
                    </div>
                    <br />
                    <form onSubmit={register} className="mx-auto w-full flex flex-col ">
                        <input onChange={(e) => setRegEmail(e.target.value)} type="email" placeholder='Enter your email address'></input>
                        <br />
                        <input onChange={(e) => setRegPassword(e.target.value)} type="password" placeholder='Enter your password'></input>
                        <button type="submit" className="bg-[#8047BA] text-white rounded-full py-[5px] my-[15px] ">Create Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registration;