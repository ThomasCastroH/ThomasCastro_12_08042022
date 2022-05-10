import { PieChart, Pie, Cell } from "recharts";
import PropTypes from 'prop-types';


/**
 * Get the %age of the user's goal completion and display it in a pie chart
 * @param {number} props 
 * @returns 
 */

function GoalCompletion(props) {
    let score = props.score;

    let dataCompletion = [
        { name: "Score", value: score },
        { name: "Objectif", value: 100 - score }
    ]

    let data02 = [
        { name: "Total", value: 100 },
    ]
    const COLORS = ["red", "transparent"];

    return (
        <div className="pie-chart">
            <PieChart width={250} height={250}>
                <Pie
                    data={dataCompletion}
                    cx={120}
                    cy={125}
                    startAngle={90}
                    endAngle={450}
                    innerRadius={70}
                    outerRadius={80}
                    stroke="transparent"
                    fill="#8884d8"
                    dataKey="value"
                >
                    {dataCompletion.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Pie
                    data={data02}
                    dataKey="value"
                    cx={120}
                    cy={125}
                    outerRadius={70}
                    fill="white"
                />
            </PieChart>
            <span className="pie-chart-legend">Score</span>
            <div className="pie-chart-text">
                <span className="pie-chart-score">{score}%</span>
                <span className="pie-chart-desc">de votre objectif atteint</span>
            </div>

        </div>
    )
}

GoalCompletion.propTypes = {
    score: PropTypes.number
}

export default GoalCompletion;