import LipidsEaten from './dashboard/LipidsEaten';
import BurntCalories from './dashboard/BurntCalories';
import ProteinEaten from './dashboard/ProteinEaten';
import CarbsEaten from './dashboard/CarbsEaten';
import DailyActivity from './dashboard/DailyActivity';
import GoalCompletion from './dashboard/GoalCompletion';
import SessionIntensity from './dashboard/SessionIntensity';
import AverageSessionDuration from './dashboard/AverageSessionDuration';
import { useParams } from 'react-router-dom';
import { 
    GetUserName,
    GetKeyData,
    GetActivityData,
    GetSessionData,
    GetUserScore,
    GetUserPerformance,
} from '../service/getData';

/**
 * Get information about the user from the service to display the elements on the dashboard
 * @returns React component
 */
function Dashboard() {
    const { id } = useParams();
    const userID = id;

    const name = GetUserName(userID);
    const keyData = GetKeyData(userID);
    const activityData = GetActivityData(userID);
    const sessionData = GetSessionData(userID);
    const score = GetUserScore(userID)*100;
    const performance = GetUserPerformance(userID);

    return (
        <div className="dashboard-container w-100">
            <div className='dashboard-container-welcome d-flex flex-column ml-5 mt-4 mb-4'>
                <span className="dashboard-container-greetings">Bonjour <span className='dashboard-container-name'>{name}</span></span>
                <span className="dashboard-container-msg">Félicitation ! Vous avez explosé vos objectifs hier <span role="img" aria-label="clapping-hands">👏</span></span>
            </div>
            <section className="dashboard-container-content w-100 row">
                <div className="dashboard-container-content-left col-9">
                    <DailyActivity activity={activityData}/>
                    <div className="dashboard-container-content-left-substats">
                        <AverageSessionDuration session={sessionData}  />
                        {/* <SessionIntensity performance={performance} /> */}
                        <GoalCompletion score={score}/>
                    </div>
                </div>
                <div className="dashboard-container-content-right ml-5">
                    <BurntCalories  keyData={keyData.calorieCount} />
                    <ProteinEaten  keyData={keyData.proteinCount} />
                    <CarbsEaten  keyData={keyData.carbohydrateCount} />
                    <LipidsEaten  keyData={keyData.lipidCount} />
                </div>
                {/* 
                
                 */}
                
            </section>
        </div>
    )
}

export default Dashboard