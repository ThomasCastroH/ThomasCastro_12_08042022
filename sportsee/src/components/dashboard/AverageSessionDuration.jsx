import PropTypes from 'prop-types';
import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";

/**
 * @description Display the average session duration of the user
 * @param {array} props - Session length per day of the user
 * @returns React component
 */  

function AverageSessionDuration(props) {
    const session = props.session;

    return (
        <div className="line-chart">
            <LineChart
                width={250}
                height={250}
                data={session}
                margin={{
                    top: 20,
                    right: 10,
                    left: 10,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="0" />
                <XAxis dataKey={session.day} tickFormatter={
                    (tick) => {
                        switch(tick) {
                            case 0:
                                return "L";
                            case 1:
                                return "M";
                            case 2:
                                return "M";
                            case 3:
                                return "J";
                            case 4:
                                return "V";
                            case 5:
                                return "S";
                            case 6:
                                return "D";
                            default:
                                return "";
                    }
                }} />
                <Tooltip />
                <Legend align="left" verticalAlign="top" 
                    content={() =>
                        <div>
                            <p className="line-chart-legend">Durée moyenne de la session</p>
                        </div>
                    }   
                />
                <Line 
                    type="basis" 
                    dataKey="sessionLength" 
                    stroke="white" 
                    dot={false} />
            </LineChart>
        </div>
    )
}

AverageSessionDuration.propTypes = {
    session: PropTypes.array
}

export default AverageSessionDuration;