import React, { useState } from "react";
import { database } from './FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from "react-router-dom";


function RegisterAndLogin() {
    const [login, setLogin] = useState(false)

    const history = useNavigate()

    const handleSubmit = (e, type) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        if (type == 'signup') {
            createUserWithEmailAndPassword(database, email, password).then(data => {
                console.log(data, "authData")
                history('/home')
            }).catch(err => {
                alert(err.code)
                setLogin(true)
            })
        } else {
            signInWithEmailAndPassword(database, email, password).then(data => {
                console.log(data, "authData")
                history('/home')
            }).catch(err => {
                alert(err.code)
            })
        }
    }
    return (
        <div className="bg-gradient-to-r from-sky-300 to-purple-300 w-screen h-screen flex items-center justify-center ">
            {/* Registration and login Screen */}
            <div className=" w-auto h-4/5 bg-white rounded-lg shadow-md">
                <h1 className=" text-3xl font-bold text-center pt-5">Login Form</h1>
                <div className="flex justify-evenly space-x-8 m-6 border border-inherit p-1.5 font-semibold rounded-lg ...">
                    <div className={login == false ? ' text-white rounded-lg  bg-gradient-to-r from-blue-800 to-blue-600 cursor-pointer' : 'cursor-progress'} onClick={() => setLogin(false)} >SignUp</div>
                    <div className={login == true ? ' text-white rounded-lg  bg-gradient-to-r from-blue-800 to-blue-600 cursor-pointer' : ' cursor-progress'} onClick={() => setLogin(true)}>SignIn</div>
                </div>

                <div className="new">

                    <form onSubmit={(e) => handleSubmit(e, login ? 'signin' : 'signup')}>
                        <input name="email" placeholder="Email Address" className=" w-72 mx-5 mt-6 border border-b-2 border-inherit p-1.5 rounded-lg ..." /><br /><br />
                        <input name="password" type="password" placeholder="Password" className="w-72 mx-5 border border-b-2 border-inherit p-1.5 rounded-lg ..." /><br /><br />
                        <button className="text-white mt-6 w-72 mx-5 border border-inherit p-1.5 font-semibold rounded-lg ... bg-gradient-to-r from-blue-600 to-blue-800 cursor-pointer">{login ? 'SignIn' : 'SignUp'}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default RegisterAndLogin;