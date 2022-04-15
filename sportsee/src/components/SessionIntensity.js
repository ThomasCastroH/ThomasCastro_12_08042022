import { useEffect, useState } from "react";

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
    }, [userID])

    console.log("Data perfs : ");
    console.log(data);

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {
        return (
            <div className="w-100">
                Activity Intensity check logs
                {data.data.map( (rating, index) => (
                    <div key={index}>
                        <span>{rating.value} {data.kind[rating.kind]}</span>
                    </div>
                ))}
            </div>
        )
    }
}
export default SessionIntensity;