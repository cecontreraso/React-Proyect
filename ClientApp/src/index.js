
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserProvider from "./context/UserProvider"


import App from "./App"
import Solcom from "./View/Solcom"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <BrowserRouter>
        <UserProvider>
            <Routes>
                <Route index path='/Solcom' element={<Solcom />} />
                <Route path='/' element={<App /> } />
            </Routes>
        </UserProvider>
    </BrowserRouter>
)