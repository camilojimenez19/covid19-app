import { useEffect, useState } from "react";
import covidAPI from "../api/covidApi";

export const useCountries = () => {
    const currentQuery = localStorage.getItem('query') || "";

    const [error, setError] = useState(false);
    const [countries, setCountries] = useState([]);
    const [query, setQuery] = useState(currentQuery)
    const [results, setResults] = useState([])

    /* Function get all data from API */
    const getDataFromApi = async () => {
        setError(false);
        try {
            const { status, data } = await covidAPI.get('/countries');

            if (status !== 200)
                throw new Error();

            setCountries(data);
        } catch (error) {
            setError('There is a problem connecting to the API')
        }

    }

    const filterCountries = (value) => {
        const result = countries.filter(country => country.Country.toLowerCase().includes(value.toLowerCase()));

        setResults(result);
    }

    /* Handle for search bar */
    const handleSearchChange = ({ target: { value } }) => {
        setQuery(value);
        filterCountries(value)
    }

    useEffect(() => {
        getDataFromApi();
    }, [])

    useEffect(() => {
        localStorage.setItem('query', query);
    }, [query])

    return {
        error,
        query,
        results,
        handleSearchChange
    }
}
