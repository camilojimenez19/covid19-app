import React from 'react'
import { useParams } from 'react-router-dom'

export const DetailsCountry = () => {

    const { id } = useParams();

    console.log(id)
    return (
        <h1>DetailsCountry</h1>
    )
}
