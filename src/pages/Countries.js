import React from 'react'
import { Link } from "react-router-dom";

import { Alert } from '../api/Alert'
import { Header } from '../components/Header'
import { useCountries } from '../hooks/useCountries';


export const Countries = () => {

  /* Custom Hook */
  const { error, results, query, handleSearchChange } = useCountries();

  return (
    <div className='container mt-4 col-md-12'>

      {/* Header */}
      <Header />

      {error && <Alert message={error} />}
      {/* Search bar */}
      <div className="input-group">
        <input value={query} onChange={handleSearchChange} type="search" className="form-control rounded" placeholder="Search countries..." aria-label="search" aria-describedby="search-addon" />
        <button type="button" className="btn btn-outline-primary">Search</button>
      </div>

      <div className='mt-4'>
        <ul className="list-group">
          {results.map(result => (
            <Link style={{ textDecoration: "none" }} key={result.Slug} to={`/details/${result.Slug}`} >
              <li className="list-group-item">{result.Country}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  )
}
