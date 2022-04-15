import { useEffect, useState } from "react";

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
                Daily Activity Placeholder check logs
                {data.map( (session, index) => (
                    <div key={index}>
                        <span>{session.calories} {session.kilogram} {session.day}</span>
                    </div>
                ))}
            </div>
        )
    }
}
export default DailyActivity;