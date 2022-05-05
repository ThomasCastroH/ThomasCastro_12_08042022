import { useEffect, useState } from "react";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
  } from "recharts";
import PropTypes from 'prop-types';

function SessionIntensity(props) {
    let userID = props.id;
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/user/"+userID+"/performance")
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
    }, []);

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {
        return (
            <div className="radar-chart">
                <RadarChart outerRadius={70} width={250} height={250} data={data.data} cx={120}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey={data.data.kind} stroke="white" tickFormatter={
                        (tick) => {
                            switch(tick) {
                                case 0:
                                    return data.kind['1'][0].toUpperCase()+data.kind['1'].slice(1);
                                case 1:
                                    return data.kind['2'][0].toUpperCase()+data.kind['2'].slice(1);
                                case 2:
                                    return data.kind['3'][0].toUpperCase()+data.kind['3'].slice(1);
                                case 3:
                                    return data.kind['4'][0].toUpperCase()+data.kind['4'].slice(1);
                                case 4:
                                    return data.kind['5'][0].toUpperCase()+data.kind['5'].slice(1);
                                case 5: 
                                    return data.kind['6'][0].toUpperCase()+data.kind['6'].slice(1);
                                default:
                                    return "";
                            }
                        }
                    }/>
                    <Radar 
                        name="Intensité" 
                        dataKey="value"
                        stroke="#FF0101B2" 
                        fill="#FF0101B2"
                        fillOpacity={0.8} />
                </RadarChart>
            </div>
        )
    }
}


SessionIntensity.propTypes = {
    id: PropTypes.number
}

export default SessionIntensity;