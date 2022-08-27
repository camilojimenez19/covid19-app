import React from 'react'

import Chart from "react-apexcharts";

import { Header } from '../components/Header';
import { Alert } from '../components/Alert'
import { useDetailsCountry } from '../hooks/useDetailsCountry';
import {Loader} from '../components/Loader'


export const DetailsCountry = () => {

    /* Custom hook */
    const { error, countrySlug, optionsChart, isLoading } = useDetailsCountry();


    const renderContent = () => {

        return (optionsChart.length) === 0 
        ?  <Alert message="This country has no data"/>    
        : (
            <Chart
                options={optionsChart.options}
                series={optionsChart.series}
                type="line"
                width="100%"
            />
        )
    }

    return (
        <>
            <Header title="Details by country" text={(
                <p>This page shows a summary of the different statuses (confirmed, deaths, recovered) in the last week of March 2020. This month was one of the most critical worldwide.</p>
            )} />

            {error && <Alert message={error} />}

            <section>
                <div className='card'>
                    <div className='card-header'>
                        <h2>Report for {countrySlug.replace('-', ' ')}</h2>
                    </div>
                    <div className='card-body'>
                        <div id="chart">
                            {isLoading ? <Loader /> : renderContent() }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
