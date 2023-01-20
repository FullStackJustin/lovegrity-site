import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';


const Login = () => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const navigate = useNavigate();
    const user = getAuth();
    console.log(loginEmail, loginPassword, user.currentUser)

    const handleLogin = async(e) => {
        e.preventDefault();
        if (user.currentUser){
            try {
                await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
                .then(() => {navigate('/')})
            } catch (err) {
                console.log(err)
            }
        } else {
            navigate('/registration')
        }
    }
    
    return (
        <div>
            <div className="h-[15vh] w-screen bg-[#8047BA] "></div>
            <div className="w-full min-h-fit">
                <form id='loginForm' onSubmit={handleLogin}>
                    <input onChange={(e) => setLoginEmail(e.target.value)} type="email" placeholder='Enter your email address'></input>
                    <input onChange={(e) => setLoginPassword(e.target.value)} type="password" placeholder='Enter your password'></input>
                    <button type="submit">Log In</button>
                </form>
            </div>
        </div>
    )
}

export default Login;