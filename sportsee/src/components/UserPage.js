import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar"
import Dashboard from "./Dashboard"

function UserPage() {
    const {id} = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/user/"+id)
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
    }, [id])

    console.log(data);

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {
        return (
            <div className="container">
                <NavBar />
                <Dashboard userID={data.id} {...data.userInfos} userScore={data.todayScore} {...data.keyData}/>
            </div>
        )
    }
}

export default UserPage