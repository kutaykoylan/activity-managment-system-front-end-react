import React from 'react'
import { Bar } from 'react-chartjs-2';

function ChartForRegistrationDates(props) {
    const data = [65, 59, 80, 81, 56, 55, 40];

    return (
        <div>
            <Bar data={data} />
        </div>
    )
}

export default ChartForRegistrationDates
