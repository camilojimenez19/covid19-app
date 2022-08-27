import React from 'react'
import { useParams } from 'react-router-dom'

export const DetailsCountry = () => {

    const { countrySlug } = useParams();

    console.log(countrySlug)
    return (
        <>

            <h1>DetailsCountry</h1>
        </>
    )
}
