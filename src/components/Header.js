import React from 'react'

export const Header = ({ title, text }) => {
    return (
        <header className='text-center mb-3'>
            <h1 className='text-capitalize fw-bold fs-1'>{title}</h1>
            <small>By Camilo Jimenez</small>
            <div className='mt-3'>
                {text}
            </div>
        </header>
    )
}
