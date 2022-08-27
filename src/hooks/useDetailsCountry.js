import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import covidAPI from '../api/covidApi'

/* Range dates for request */
const rangeDates = {
    from: "2020-03-24T00:00:00Z",
    to: "2020-03-31T00:00:00Z"
}

export const useDetailsCountry = () => {

    /* Initial state for options chart */
    const initialState = {
        series: [{
            name: "Confirmed",
            data: []
        }, {
            name: "Deaths",
            data: []
        }, {
            name: "Recovered",
            data: []
        }],
        options: {
            chart: {
                height: 350,
                type: 'line'
            },
            dataLabels: {
                enabled: true
            },
            stroke: {
                curve: 'straight'
            },
            title: {
                text: 'Report Covid 19 last week of March 2020',
                align: 'left'
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'],
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: [],
            }
        },


    };

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [dataCountry, setDataCountry] = useState([]);
    const [optionsChart, setOptionsChart] = useState([])
    const { countrySlug } = useParams();

    const getDataFromApi = async () => {
        setError(false);
        try {

            const { status, data } = await covidAPI.get(
                `/country/${countrySlug}`, { params: { ...rangeDates } }
            );

            if (status !== 200)
                throw new Error();

            setDataCountry(data);
            setIsLoading(false);
        } catch (error) {
            setError('There is a problem connecting to the API')
        }
    }

    const getOptionsToChart = () => {

        const result = { ...initialState }

        if (dataCountry.length > 0) {
            dataCountry.forEach((option) => {
                const { Confirmed, Deaths, Recovered, Date: dateOption } = option

                if (Confirmed && Deaths && Recovered) {
                    result.series[0].data.push(option.Confirmed);
                    result.series[1].data.push(option.Deaths);
                    result.series[2].data.push(option.Recovered);

                    const date = new Date(dateOption);
                    result.options.xaxis.categories.push(date.getUTCDate());
                }
            });

            console.log(result)
            setOptionsChart(result);
        }

    }

    useEffect(() => {
        getDataFromApi();
    }, []);

    useEffect(() => {
        getOptionsToChart();
    }, [dataCountry]);

    return {
        error,
        isLoading,
        countrySlug,
        optionsChart
    }
}
