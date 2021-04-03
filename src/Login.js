import React, { useState } from 'react'
import './Login.css'
import { auth } from './firebase'
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();


    const handleRegister = () => {
        if (!name) {
            return alert('Please enter a full name!')
        }
        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoUrl: profilePic
                })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoUrl: profilePic
                        }))
                    })
            }).catch(
                error => alert(error)
            )
    }

    const handleLogin = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(userAuth =>
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoUrl,
            })))
    }

    return (
        <div className='login'>
            <img src="https://logosmarken.com/wp-content/uploads/2020/04/Linkedin-Logo.png" alt="" />

            <form>
                <input
                    placeholder='Full name (required if registering)'
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                <input
                    placeholder='Profile Pic (optional)'
                    type='text'
                    value={profilePic}
                    onChange={(e) => setProfilePic(e.target.value)} />
                <input
                    placeholder='Email'
                    type='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)} />
                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder='Password'
                    type='password' />
                <button type='submit' onClick={handleLogin} >Sign In</button>
            </form>
            <p>Not a member? {" "}
                <span className='login_register' onClick={handleRegister} >Register Now</span>
            </p>
        </div>
    )
}

export default Login
