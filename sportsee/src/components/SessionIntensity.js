import { useEffect, useState } from "react";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis
  } from "recharts";

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

    console.log("Data perfs : ");
    console.log(data);

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {
        return (
            <div className="radar-chart col-4">
                <RadarChart outerRadius={90} width={250} height={250} data={data.data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey={data.kind[data.data.kind]} />
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

export default SessionIntensity;