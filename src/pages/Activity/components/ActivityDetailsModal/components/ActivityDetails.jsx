import React from 'react'
import { convertDateString } from "../../../../../helpers/DateUtility"

function ActivityDetails(props) {
    console.log(props.activityCard)
    return (
        <div>
            <h4>{props.activityCard.title}</h4>
            <hr />
            <p>
                {props.activityCard.details}
            </p>
            <hr />
            <p>
                Start Date :   {convertDateString(new Date(props.activityCard.startDate))}
                <br />
            End Date   :   {convertDateString(new Date(props.activityCard.endDate))}
            </p>
            <hr />
            <div>
                <p>
                    Maximum capacity : {props.activityCard.maxCapacity}
                </p>
            </div>
        </div>
    )
}

export default ActivityDetails
