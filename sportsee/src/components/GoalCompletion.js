import { PieChart, Pie, Sector, Cell } from "recharts";


function GoalCompletion(props) {
    let score = props.score;

    let dataCompletion = [
        { name: "Atteint", value: score*100 },
        { name: "Objectif", value: 100 - score*100 }
    ]
    const COLORS = ["red", "transparent"];

    return (
        <div className="goal-completion-container col-4">
            <PieChart width={250} height={250}>
                <Pie
                    data={dataCompletion}
                    cx={125}
                    cy={125}
                    startAngle={90}
                    innerRadius={70}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {dataCompletion.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
            <div className="pie-chart-text">
                <span className="pie-chart-score">{score*100}%</span>
                <span className="pie-chart-desc">de votre objectif atteint</span>
            </div>

        </div>
    )
}

export default GoalCompletion;