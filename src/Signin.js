import React, { useRef } from 'react'
import { auth } from './firebase'


const SignIn = () => {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const signUp = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value, passwordRef.current.value
        ).then(user => {
            console.log(user)
        }).catch(err => {
            console.log(err)
        })
    }
    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value, passwordRef.current.value
        ).then(user => {
            console.log('user', user)
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div className="signin">
            <form action="">
                <h1>Sign in</h1>
                <input ref={emailRef} type="email" />
                <input ref={passwordRef} type="password" />
                <button onClick={signIn} >Sign in</button>
                <h6>Not yet register? <span className="signin__link" onClick={signUp}>sign up</span></h6>
            </form>
        </div>
    )
}
export default SignIn