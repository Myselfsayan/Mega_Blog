import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import authService from '../../appwrite/auth'

function LogoutBtn() {
    const dispatch = useDispatch()

    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }

    return (
        <button
            onClick={logoutHandler}
            className="inline-flex items-center justify-center
         p-8
         hover:text-red-700
         hover:shadow-md
         active:scale-95"

        >
            Logout
        </button>
    )
}

export default LogoutBtn
