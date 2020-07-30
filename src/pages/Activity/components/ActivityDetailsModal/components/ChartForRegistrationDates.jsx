import React,{useEffect,useState} from 'react'
import { Bar } from 'react-chartjs-2';
import { UsersActivityAPIHelper } from '../../../../../helpers/UsersActivitiesAPI';
import { convertDateString } from '../../../../../helpers/DateUtility';

function ChartForRegistrationDates(props) {
    let numbers=[];
    let dates=[];
    const[data,setData] = useState({});
    
    const getNumberOfRegistrationByDate=async()=>{
        try {
            const response = await UsersActivityAPIHelper.getNumberOfRegistrationByDates(props.activityCard.id)
            console.log(response?.data)
            for (const [key, value] of Object.entries(response?.data)) {
                dates.push(convertDateString(new Date(key)))
                numbers.push(parseInt(value))
              }
              setData({
                labels: dates,
                datasets: [
                  {
                    label: 'Number of Registration',
                    fill: true,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: numbers
                  }
                ]
              })
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        async function getAll() {
            const response = await getNumberOfRegistrationByDate()
        }

        getAll();
    }, []);


    

    return (
        <div>
            <Bar data={data} />
        </div>
    )
}

export default ChartForRegistrationDates
