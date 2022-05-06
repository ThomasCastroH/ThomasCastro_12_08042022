import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


/**
 * Get the user id from the prop to request informations about the activity of the user and display them in a bar chart
 * @param {number} props - ID of the user
 * @returns 
 */

function DailyActivity(props) {
    let userID = props.id;
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/user/"+userID+"/activity")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setData(data.data.sessions);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {
        return (
            <div className="dashboard-container-content-left w-100 mb-4">
                <ResponsiveContainer height={350}>
                    <BarChart
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        barSize={10}
                        >
                        <CartesianGrid strokeDasharray="0 4"/>
                        <XAxis />
                        <YAxis orientation="right"/>
                        <Tooltip />
                        <Legend align="right" verticalAlign="top" iconType="circle"/>
                        <Bar dataKey="kilogram" unit="kg" fill="#020203" name="Poids (kg)" radius={10}/>
                        <Bar dataKey="calories" unit="kcal" fill="#FF0000" name="Calories brûlées (kCal)" radius={10}/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        )
    }
}

DailyActivity.propTypes = {
    id: PropTypes.number
}

export default DailyActivity;