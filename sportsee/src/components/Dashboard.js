import PropTypes from 'prop-types';
import LipidsEaten from './LipidsEaten';
import BurntCalories from './BurntCalories';
import ProteinEaten from './ProteinEaten';
import CarbsEaten from './CarbsEaten';
import DailyActivity from './DailyActivity';
import GoalCompletion from './GoalCompletion';
import SessionIntensity from './SessionIntensity';
import AverageSessionDuration from './AverageSessionDuration';

function Dashboard(props) {

    const userID = props.userID;
    const userFirstname = props.firstName;
    const userScore = props.userScore;
    const calorieCount = props.calorieCount;
    const carbohydrateCount = props.carbohydrateCount;
    const lipidCount = props.lipidCount;
    const proteinCount = props.proteinCount;

    return (
        <div className="dashboard-container w-100">
            <div className='dashboard-container-welcome d-flex flex-column ml-5 mt-4 mb-4'>
                <span className="dashboard-container-greetings">Bonjour <span className='dashboard-container-name'>{userFirstname}</span></span>
                <span className="dashboard-container-msg">Félicitation ! Vous avez explosé vos objectifs hier <span role="img" aria-label="clapping-hands">👏</span></span>
            </div>
            <section className="dashboard-container-content w-100 row">
                <div className="dashboard-container-content-left col-9">
                    <DailyActivity id={userID}/>
                    <div className="dashboard-container-content-left-substats">
                        <AverageSessionDuration id={userID} />
                        <SessionIntensity id={userID}/>
                        <GoalCompletion score={userScore}/>
                    </div>
                </div>
                <div className="dashboard-container-content-right ml-5">
                    <BurntCalories calories={calorieCount} />
                    <ProteinEaten proteins={proteinCount} />
                    <CarbsEaten carbs={carbohydrateCount} />
                    <LipidsEaten lipids={lipidCount} />
                </div>
                {/* 
                
                 */}
                
            </section>
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