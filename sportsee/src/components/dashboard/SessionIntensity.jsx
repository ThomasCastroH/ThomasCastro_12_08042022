import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
  } from "recharts";
import PropTypes from 'prop-types';

/**
 * @description Display the intensity of each training of the user
 * @param {array} props 
 * @returns React component
 */

function SessionIntensity(props) {
    const performance = props.performance;
    const radarData = performance.data;

    console.log(radarData);

    return (
        <div className="radar-chart">
            <RadarChart outerRadius={70} width={250} height={250} data={radarData} cx={120}>
                <PolarGrid />
                <PolarAngleAxis dataKey="kind" stroke="white" tickFormatter={
                    (tick) => {
                        switch(tick) {
                            case 1:
                                return "Cardio";
                            case 2:
                                return "Energie";
                            case 3:
                                return "Endurance";
                            case 4:
                                return "Force";
                            case 5:
                                return "Vitesse";
                            case 6: 
                                return "Intensité";
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


SessionIntensity.propTypes = {
    id: PropTypes.array
}

export default SessionIntensity;