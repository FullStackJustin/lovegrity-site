import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const navigate = useNavigate();
    const user = getAuth();

    const handleLogin = async(e) => {
        e.preventDefault();
        if (user.currentUser == null ){
            try {
                await signInWithEmailAndPassword(user, loginEmail, loginPassword)
                .then(() => {navigate('/')})
                
            } catch (err) {
                console.log(err)
            }
        } else {
            alert('Login failed, Please try again or create a new account')
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