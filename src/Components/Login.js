import React from 'react'
import '../css/Login.css'
import { TextField } from '@mui/material'
const Login = () => {
    return (
        <div style={{margin:0}}>
            <div className="header-wrapper"><div className="header">Connect to an Existing Account</div></div>
            <div className="waveContainer">
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="viewBox">
                    <path d="M0.00,49.98 C254.51,72.06 306.43,22.41 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" className="path">
                    </path>
                </svg>
            </div>

            <div className="inputs">
                <TextField id="outlined-basic" label="Name" variant="outlined" />
                <TextField id="outlined-basic" label="Email" variant="outlined" />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </div>
        </div>
    )
}

export default Login
