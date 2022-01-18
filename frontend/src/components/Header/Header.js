import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/actions/adminAction'
import './Header.css'

const Header = () => {

    const dispatch = useDispatch()

    const adminLogin = useSelector((state) => state.adminLogin)

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <div class="header">
            <a style={{ marginLeft: "37%" }}></a>
            <a><b>University of Peeru Lashari</b>
            {" "}
            <i class="fas fa-university"></i>
            </a>
            <div class="header-right">
                <button className="logout" onClick={logoutHandler}>LOG OUT
                {"    "}
                <i class="fas fa-sign-out-alt"></i>
                </button>
                {/* <a href="#contact">Contact</a>
                <a href="#about">About</a> */}
            </div>
        </div>
    )
}

export default Header
