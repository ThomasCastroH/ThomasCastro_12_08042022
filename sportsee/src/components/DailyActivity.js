import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


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
    }, [userID])

    console.log("Data activity : ");
    console.log(data); 

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {
        return (
            <div className="w-100">
                <ResponsiveContainer width="100%" height={400}>
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
                        <CartesianGrid strokeDasharray="0 4" />
                        <XAxis />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="kilogram" unit="kg" fill="#020203" />
                        <Bar dataKey="calories" unit="kcal" fill="#FF0000" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        )
    }
}
export default DailyActivity;