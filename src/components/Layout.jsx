import React, { useState } from 'react'
import Modal from './Modal'
import Authentication from "./Authentication"
import { useAuth } from '../context/AuthContext'

function Layout(props) {
    const { children } = props

    const [showModal, setShowModal] = useState(false)
    const { globalUser, logout } = useAuth()

    const header = (
        <header>
            <div>
                <h1 className="text-gradient">CAFFEINATED</h1>
                <p>For Coffee Insatiates</p>
            </div>
            {globalUser ? 
            (<button onClick={logout}>
                    <p>Logout</p>
                </button>
                ) : (
                <button onClick={() => {setShowModal(true)}}>
                    <p>Sign Up free</p>
                    <i className="fa-solid fa-mug-hot"></i>
                </button>
        )}
        </header>
    )

    const footer = (
        <footer>
            <p><span className="text-gradient">Caffeinated</span> was made by 
            <a href="https://github.com/IvanKuria" target="_blank"> Ivan Kuria</a> using the 
            <a href="https://www.fantacss.smoljames.com" target="_blank"> FantaCSS</a> design library.</p>
        </footer>
    )

    function handleCloseModal() {
        setShowModal(false)
    }

    return (
        <>
            {showModal && (
                <Modal handleCloseModal={handleCloseModal}>
                    <Authentication handleCloseModal={handleCloseModal}/>
                </Modal>
            )}
            {header}
            <main>
                {children}
            </main>
            {footer}            
        </>
    )
}

export default Layout