import PropTypes from 'prop-types';

function Dashboard(props) {

    const userID = props.userID;
    const userFirstname = props.firstName;
    const userLastname = props.lastName;
    const userAge = props.age;
    const userScore = props.score;
    const calorieCount = props.calorieCount;
    const carbohydrateCount = props.carbohydrateCount;
    const lipidCount = props.lipidCount;
    const proteinCount = props.proteinCount;

    return (
        <div className="dashboard-container">
            <span className="dashboard-container-greetings">Bonjour {userFirstname}</span>
            <span className="dashboard-container-msg">Félicitation ! Vous avez explosé vos objectifs hier</span>
            {/* <DailyActivity />
            <SessionAverageDuration />
            <SessionIntensity />
            <GoalCompletion />
            <BurntCalories />
            <ProteinEaten />
            <CarbsEaten />
            <LipidsEaten /> */}
        </div>
    )
}

Dashboard.propTypes = {
    userID: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    age: PropTypes.number,
    score: PropTypes.number,
    calorieCount: PropTypes.number,
    carbohydrateCount: PropTypes.number,
    lipidCount: PropTypes.number,
    proteinCount: PropTypes.number
}

export default Dashboard