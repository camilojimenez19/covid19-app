import React from 'react'
import { Link } from "react-router-dom";

import { Alert } from '../components/Alert'
import { Header } from '../components/Header'
import { useCountries } from '../hooks/useCountries';


export const Countries = () => {

  /* Custom Hook */
  const { error, results, query, handleSearchChange } = useCountries();

  return (
    <div>

      {/* Header */}
      <Header title="Covid-19 App" text={(
        <p>
          This app uses the public API of <a href='https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest#intro'>(Coronavirus COVID19 API)</a>, to have a search of the states reported by covid and you can see detailed information on each state.
        </p>
      )} />

      {error && <Alert message={error} />}
      {/* Search bar */}
      <div className="input-group">
        <input value={query} onChange={handleSearchChange} type="search" className="form-control rounded" placeholder="Search countries..." aria-label="search" aria-describedby="search-addon" />
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
