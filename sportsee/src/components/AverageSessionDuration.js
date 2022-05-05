import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";


function AverageSessionDuration(props) {
    let userID = props.id;
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/user/"+userID+"/average-sessions")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setData(data.data);
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
            <div className="line-chart">
                <LineChart
                    width={250}
                    height={250}
                    data={data.sessions}
                    margin={{
                        top: 20,
                        right: 10,
                        left: 10,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="0" />
                    <XAxis dataKey={data.day} tickFormatter={
                        (tick) => {
                            switch(tick) {
                                case 0:
                                    return "L";
                                case 1:
                                    return "M";
                                case 2:
                                    return "M";
                                case 3:
                                    return "J";
                                case 4:
                                    return "V";
                                case 5:
                                    return "S";
                                case 6:
                                    return "D";
                                default:
                                    return "";
                        }
                    }} />
                    <Tooltip />
                    <Legend align="left" verticalAlign="top" 
                        content={
                            <div>
                                <p className="line-chart-legend">Durée moyenne de la session</p>
                            </div>
                        }   
                    />
                    <Line 
                        type="basis" 
                        dataKey="sessionLength" 
                        stroke="white" 
                        activeDot={{ r: 7 }} />
                </LineChart>
            </div>
        )
    }
}

AverageSessionDuration.propTypes = {
    id: PropTypes.number
}

export default AverageSessionDuration;