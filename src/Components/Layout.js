import React from 'react'
import Navbar from './Navbar'

export default function Layout(props) {
    return (
        <div>
            <Navbar />
            <div className="content">
                {props.children}
            </div>
            <footer>
                <p>Copyright &copy; Riya Gupta 2021</p>
            </footer>
        </div>
    )
}
