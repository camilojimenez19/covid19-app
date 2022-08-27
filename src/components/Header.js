import React from 'react'

export const Header = () => {
    return (
        <header className='text-center mb-3'>
            <h1 className='text-capitalize fw-bold fs-1'>Covid-19 App</h1>
            <small>By Camilo Jimenez</small>
            <p className='mt-3'>This app uses the public API of <a href='https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest#intro'>(Coronavirus COVID19 API)</a>, to have a search of the states reported by covid and you can see detailed information on each state.</p>
        </header>
    )
}
