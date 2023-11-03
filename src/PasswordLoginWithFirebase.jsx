import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegisterAndLogin from './App'
import HomeScreen from './Home'

const PasswordLoginWithFirebase = () => {
    return (
        <BrowserRouter>
            <div>

                <Routes>
                    <Route path="/" element={<RegisterAndLogin />} />
                    <Route path="/home" element={<HomeScreen />} />
                </Routes>

            </div>
        </BrowserRouter>
    )
}

export default PasswordLoginWithFirebase