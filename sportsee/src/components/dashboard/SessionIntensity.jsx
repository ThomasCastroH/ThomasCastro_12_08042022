import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
  } from "recharts";
import PropTypes from 'prop-types';

/**
 * Get the user id from the prop to request informations about the intensity of each category of the user and display them in a radar chart
 * @param {array} props 
 */

function SessionIntensity(props) {
    const performance = props.performance;
    const radarData = performance.data;
    const radarCategories = performance.data.kind;

    console.log(radarData, radarCategories, performance);

    return (
        <div className="radar-chart">
            <RadarChart outerRadius={70} width={250} height={250} data={radarData} cx={120}>
                <PolarGrid />
                <PolarAngleAxis dataKey={radarCategories} stroke="white" tickFormatter={
                    (tick) => {
                        switch(tick) {
                            case 0:
                                return performance.kind['1'][0].toUpperCase()+performance.kind['1'].slice(1);
                            case 1:
                                return performance.kind['2'][0].toUpperCase()+performance.kind['2'].slice(1);
                            case 2:
                                return performance.kind['3'][0].toUpperCase()+performance.kind['3'].slice(1);
                            case 3:
                                return performance.kind['4'][0].toUpperCase()+performance.kind['4'].slice(1);
                            case 4:
                                return performance.kind['5'][0].toUpperCase()+performance.kind['5'].slice(1);
                            case 5: 
                                return performance.kind['6'][0].toUpperCase()+performance.kind['6'].slice(1);
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